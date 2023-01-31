var express = require('express');
var router = express.Router();
const { execSync } = require("child_process");
const process = require("process");

router.delete('/', function(req, res, next) {

   const {app_name} = req.body;
       
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
