const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const tryCatch = function tryCatch(promise) {
    return promise.then((data) => {
        return [null, data];
    }).catch((err) => [err]);
};

const login = async (username, password) => {
    
    let ocLoginCommand = `oc login --insecure-skip-tls-verify=true -u ${username} -p ${password}`;

    if (server) {
        ocLoginCommand += ` --server=${server}`;
    }

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
    const [ocLoginError, ocLogin] = login(username, password);

    //erro no login, sai da aplicacao
    if (ocLoginError) {
        //finaliza a aplicacao
        stop(ocLoginError);
        return;
    }

    //login bem sucedido
    if (ocLogin) {

        console.log("Login ok!");

        //aguarda 5 segundos
        setTimeout(() => {

            const appName = process.env.APP_NAME;

            console.log("Encerrando o Pod...");

            //lista de itens para encerrar
            const items = ["deployment", "service", "deployments.apps", "buildconfigs.build.openshift.io", "route"];

            let statusOk = true;

            
            for (let item of items) {

                //encerrar item do Openshift
                kill(appName, item);

            }

            //se tudo certo finaliza a aplicacao            
            stop("Processamento conluido com sucesso!");
            

        }, 5000);
    }


}

console.log("Pod criado!");

start();
