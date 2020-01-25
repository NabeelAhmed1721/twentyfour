//Libraries
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require("serve-favicon");
const app = express();
const path = require('path');
const fs = require('fs');


//Models
const Models = require('./models/Model');
const user = Models.user;

//Middleware
app.set('view engine', 'pug'); // view engine set
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public')); // static public folder
app.use(favicon(path.join(__dirname,'public','favicon.ico'))); // favicon routing

//routers

//Static
app.use(express.static('public'))

app.get('/dashboard',(req,res)=>{
    res.sendFile(__dirname+"/public/dashboard.html")
})

app.post('/api/add',(req,res)=>{
    var title = (req.body.title).toString();
    var team = parseInt(req.body.team)
    fs.readFile(__dirname+'/public/data.json','utf8',function (err, data){
        if (err) throw err
        var DATA =  data.replace('var data =', '')
        var json = JSON.parse(DATA)

        var temp = {}
        temp.title = title
        temp.team = team
        json.projects.push(temp)
        console.log(json)
        fs.writeFile(__dirname+'/public/data.json', "var data ="+JSON.stringify(json), function() {
            if(err) console.log('error', err);
        })
        res.redirect('/dashboard');
    })
    //fs.appendFile(__dirname+'/public/data.json',data)
})

app.get('/api/projects', (req,res)=>{
    const reqTitle = req.query.title;
    console.log(reqTitle)
    user.find({title: reqTitle}, function(err, user) {
    if (err) {console.log(err)};
    for(i in user){
        res.send(user[i]);
    }
})
})

app.listen(8080, ()=>{
    console.log('server is running');
})