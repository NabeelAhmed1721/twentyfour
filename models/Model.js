const mongoose = require('mongoose');
const _DATABASE = 'twentyfour'

//Models
const user = require('./user');


//Connect
mongoose.connect(`mongodb+srv://na-admin:QI0J4KNDpMylsLMY@everfoodbucket-qpofb.mongodb.net/${_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true}).
catch(error => console.log(error));

//Schema Export
const Models = {
    user
};

module.exports = Models;