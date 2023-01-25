var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

    const {app_name, parent_url} = req.body;

    const { exec } = require("child_process");
    const repositorio = `oc new-app https://github.com/leandrotarefas/ocTest`;
    const parametros = `--context-dir=node-child --name=${app_name} --strategy=source`;
    const envs = `-e PARENT_URL=${parent_url}`;

    const comando = `${repositorio} ${parametros} ${envs}`;

    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

  res.json({msg:"Procriando!"});
});

module.exports = router;