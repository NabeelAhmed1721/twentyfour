const mongoose = require('mongoose');

//Nabeel was here :)
const userS = new mongoose.Schema({
    project: {
        title: String,
        members: Number,
        commits: Array
    }
    // clientName: String,
    // clientColor: String,
    // clientLocation: {
    //     address: {
    //         streetNumber: Number,
    //         streetName: String,
    //         postalCode: String,
    //         city: String,
    //         state: String
    //     },
    //     geolocation: {
    //         lat: Number,
    //         long: Number
    //     }
    // }
});


const userInfo = mongoose.model('user', userS, 'user');

module.exports = userInfo;