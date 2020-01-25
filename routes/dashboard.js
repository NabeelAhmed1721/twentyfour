const express = require('express');
const router = express.Router();

//Models
const Models = require('../models/Model');
const user = Models.user;

router.get('/', (req, res)=>{
    const data = []
    user.find({}, function(err, user) {
        if (err) {console.log(err)};
        for(i in user){
            data.push(user[i])
        }
    })
    res.render('dashboard', {data: data});
});

module.exports = router;