Deploy:

 - parent:

oc new-app https://github.com/leandrotarefas/ocTest --context-dir=node-parent --name=node-parent --strategy=docker

oc expose svc/node-parent

 - child:

oc new-app "https://github.com/leandrotarefas/ocTest" --context-dir=node-child --name=mark0 --strategy=source

oc expose svc/node-child


Undeploy:

oc delete deployment mark0 
oc delete service mark0 
oc delete deployments.apps mark0
oc delete buildconfigs.build.opnshift.io mark0
oc delete route mark0


Endpoints:

  - GET:
    - Check
        {url-parent}/check
    
  - POST:
    - Deploy
        {url-parent}/create
        
          curl --location --request POST '{parent_url}/create' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "token": "{oc_token}",
              "server":"{oc_server}",
              "app_name":"mark0",
              "parent_url" : "{parent_url}"
          }'

    - Undeploy
        {url-parent}/remove        
      
          curl --location --request POST '{parent_url}/remove' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "token": "{oc_token}",
              "app_name":"mark0"              
          }'

