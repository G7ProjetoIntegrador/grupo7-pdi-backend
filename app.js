const express= require("express");
const res = require('express/lib/response');
const port = 8080;
const app = express();

app.get("/projeto", (req, res)=>{
    res.send('Incio do Projeto')
});

app.get('/sobre', (request, response) => {
    response.send('História')
  });

app.listen(port, function(){
    console.log("servidor function na porta " + port)
});

  
  
  
 