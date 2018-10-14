const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');
      
require('dotenv').config();

const app = express();
const controller= require('./controller');

app.use(bodyParser.json())
app.use(cors());

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err =>  console.log(err) );

app.post('/api/register', controller.addNewUser);

app.post('/api/login', controller.loginUser);

app.get('/api/posts', controller.getPosts);

app.get('/api/post/:postid', controller.getSinglePost);



const port = process.env.PORT;

app.listen( port, () => {
    console.log( `Server listening on port ${port}`)
} );