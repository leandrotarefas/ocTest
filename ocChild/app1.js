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

const kill = async (appName) => {
    const ocRemoveCommand = `oc delete all -l app=${appName}`;
    console.log(`executando comando => ${ocRemoveCommand}`);
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

        console.log("Login ok! aguarde 20 segundos...");

        //aguarda 5 segundos
        setTimeout(async () => {

            const appName = process.env.APP_NAME;

            console.log("Encerrando o Pod...");

            await kill(appName);
            
            //se tudo certo finaliza a aplicacao            
            stop("Processamento conluido com sucesso!");
            

        }, 20000);
    }


}

console.log("Pod criado!");

start();
