const Models = require('./Model');

const user = Models.user;

user.find({}, function(err, user) {
    if (err) {console.log(err)};
    for(i in user){
        console.log(user[i]);
    }
})
