const mongoose = require('mongoose');
const _DATABASE = 'twentyfour'

//Models
const user = require('./user');


//Connect
mongoose.connect("INPUT_DATABASE_URL_HERE", { useNewUrlParser: true, useUnifiedTopology: true}).
catch(error => console.log(error));

//Schema Export
const Models = {
    user
};

module.exports = Models;
