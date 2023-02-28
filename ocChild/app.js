const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const tryCatch = function tryCatch(promise) {
    return promise.then((data) => {
        return [null, data];
    }).catch((err) => [err]);
};

const login = async (username, password) => {
    const ocLoginCommand = `oc login --insecure-skip-tls-verify=true -u ${username} -p ${password}`;
    console.log("Fazendo login via OC...");
    const ocLogin = await tryCatch(execPromise(ocLoginCommand));
    return ocLogin;
}

const kill = async (appName, item) => {
    const ocRemoveCommand = `oc delete ${item} ${appName}`;
    console.log(`executando comando => ${ocRemoveCommand}`);

    console.log(`Removendo ${item}`);
    const ocRemove = await tryCatch(execPromise(ocRemoveCommand));
    console.log(ocRemove);
}

const stop = (msg) => {
    console.log(msg);
    setTimeout(() => {
        console.log("Servico encerrado!");
        process.exit(0);
    }, 15000);
}

const start = async () => {

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    //login
    const ocLogin = await login(username, password);

    console.log(ocLogin)

}

console.log("Pod criado!");

start();
