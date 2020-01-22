require('dotenv').config(); 

const express = require('express'), 
      massive=require('massive'),
      app = express(), 
      {SERVER_PORT, CONNECTION_STRING} = process.env, 
      ctrl = require('./product_controller'); 

 
massive(CONNECTION_STRING).then(db=>{
    app.set('db', db); 
    console.log('db is connected')
    })
    .catch(err=>console.log(err));


app.use(express.json()); 

//Endpoints
app.get('/api/products', ctrl.getAll); 
app.get('/api/products/:id', ctrl.getOne); 
app.post('/api/products', ctrl.create); 
app.put('/api/products/:id', ctrl.update); 
app.delete('/api/products/:id', ctrl.delete); 


app.listen(SERVER_PORT, ()=>console.log(`Server is listening on ${SERVER_PORT}`)); 
