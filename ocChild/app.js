const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const tryCatch = function tryCatch(promise) {
    return promise.then((data) => {
        return [null, data];
    }).catch((err) => [err]);
};

const login = async () => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const ocLoginCommand = `oc login --insecure-skip-tls-verify=true -u ${username} -p ${password}`;

    console.log("Fazendo login via OC...");
    const ocLogin = await tryCatch(execPromise(ocLoginCommand));
    return ocLogin;
}

const kill = async (appName, item) => {
    const ocRemoveCommand = `oc delete ${item} ${appName}`;

    console.log(`Removendo ${item}`);
    const ocRemove = await tryCatch(execPromise(ocRemoveCommand));
    return ocRemove;
}

const stop = (msg) => {
    console.log(msg);
    setTimeout(() => {
        console.log("Servico encerrado!");
        process.exit(0);
    }, 15000);
}

const start = async () => {
    /*

    //login
    const [ocLoginError, ocLogin] = login();

    //erro no login, loga e sai da aplicacao
    if (ocLoginError) {
        //finaliza a aplicacao
        stop(ocLoginError);
        return;
    }

    //login bem sucedido
    if (ocLogin) {

        console.log("Faz alguma coisa...");

        //aguarda 5 segundos
        setTimeout(() => {

            const appName = process.env.APP_NAME;

            console.log("Encerrando o Pod...");

            //lista de itens para encerrar
            const items = ["deployment", "service", "deployments.apps", "buildconfigs.build.openshift.io", "route"];

            let statusOk = true;

            //encerrar um a um
            for (let item of items) {

                const [ocRemovedError, ocRemoved] = kill(appName, item);
                if (ocRemovedError) {
                    statusOk = false;
                    //finaliza a aplicacao
                    stop(ocRemovedError);
                    return;
                }

                console.log(`${item} removido!`)
                console.log(ocRemoved);
            }

            //tudo certo finaliza a aplicacao
            if (statusOk) {
                stop("Processamento conluido com sucesso!");
            }

        }, 5000);
    }

*/
}

console.log("Pod criado!");

const user = process.env.USERNAME;
const pass = process.env.PASSWORD;

console.log("user ", user);
console.log("pass ", pass);

 setInterval(() => {
     
console.log("ok!");
            

        }, 20000);
