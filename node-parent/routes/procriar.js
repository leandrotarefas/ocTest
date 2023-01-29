var express = require('express');
var router = express.Router();
const { execSync } = require("child_process");
const process = require("process");

router.post('/', function(req, res, next) {

    const {app_name, parent_url, token, server} = req.body;
    
    const comandoDeLogin = `oc login --token=${token} --server=${server}`
    console.log("Fazendo login via OC...");
    console.log("comando=>", comandoDeLogin);
    process.stdout.write(execSync(comandoDeLogin).toString());
    console.log("======================");
    
    const repositorio = `oc new-app https://github.com/leandrotarefas/ocTest`;
    const parametros = `--context-dir=node-child --name=${app_name} --strategy=source`;
    const envs = `-e PARENT_URL=${parent_url}`;

    const comandoDeCriacao = `${repositorio} ${parametros} ${envs}`;

    console.log("Dando cria a um novo pod!");
    console.log("comando=>", comandoDeCriacao);
    process.stdout.write(execSync(comandoDeCriacao).toString());
    console.log("Pod criado!");

    const comandoDeLiberacaoDeRota = `oc expose svc/${app_name}`;
    console.log("Criando nova rota!");
    console.log("comando=>", comandoDeLiberacaoDeRota);
    process.stdout.write(execSync(comandoDeLiberacaoDeRota).toString());
    console.log("Rota liberada para o pod!");
    
    res.json({msg:"Feito!"});
});

module.exports = router;
