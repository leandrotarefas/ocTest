var express = require('express');
var router = express.Router();
const { execSync } = require("child_process");
const process = require("process");

router.delete('/', function(req, res, next) {

   const {app_name} = req.body;
   
    const comandoDeLogin = `oc login --username=admin --password=admin --insecure-skip-tls-verify`
    console.log("Fazendo login via OC...");
    console.log("comando=>", comandoDeLogin);
    process.stdout.write(execSync(comandoDeLogin).toString());
    console.log("======================");
   
       
    const items = ["deployment","service","deployments.apps","buildconfigs.build.openshift.io","route"]
    
    for(let item of items){
      try{
        const comandoDeRemocao = `oc delete ${item} ${app_name}`;
        process.stdout.write(execSync(comandoDeRemocao).toString());
      }catch(e){
        console.log(e.message);
      }
    }
   
    console.log("${app_name} deleted!");
    
    res.json({message:"Done!"});
});

module.exports = router;
