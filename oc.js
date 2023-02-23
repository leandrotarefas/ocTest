const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function criarAplicacao(name) {
  const username = 'your_username';
  const password = 'your_password';

  try {
    // Login to OpenShift
    const { stdout: loginOutput, stderr: loginError } = await exec(`oc login --insecure-skip-tls-verify=true -u ${username} -p ${password}`);
    console.log(loginOutput);
    if (loginError) {
      throw new Error(`Login error: ${loginError}`);
    }

    // Create the application with the provided name and set an environment variable with the same value
    const { stdout: appOutput } = await exec(`oc new-app --name ${name} --env NAME=${name} nodejs:14~https://github.com/openshift/nodejs-ex.git`);
    console.log(appOutput);

  } catch (err) {
    console.error(err);
  }
}

module.exports = { criarAplicacao };
