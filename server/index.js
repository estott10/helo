require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      sessions = require('express-session');
      

const app = express();
const controller= require('./controller');

app.use(bodyParser.json())
app.use(cors());

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err =>  console.log(err) );

app.use(sessions(
    {
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
    }
));

app.post('/api/register', controller.addNewUser);

app.post('/api/login', controller.loginUser);

app.get('/api/posts', controller.getPosts);

app.get('/api/post/:postid', controller.getSinglePost);

app.post('/api/new/:userid', controller.createPost);

app.post('/api/auth/logout', controller.logout);

const port = process.env.PORT;

app.listen( port, () => {
    console.log( `Server listening on port ${port}`)
} );