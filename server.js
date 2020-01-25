const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'pug'); // view engine set
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public')); // static public folder
app.use(favicon(path.join(__dirname,'public','favicon.ico'))); // favicon routing

app.use(express.static('public'))

app.get('/',(req,res)=>{
})

app.listen(8080, ()=>{
    console.log('server is running');
})