const mongoose = require('mongoose');

const admins = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number : {
        type: String,
        required: true
    },
    Requirements: [{
        type: String,
        required: true
    }],
    
});
const admin = mongoose.model("admin",admins); 
module.exports = admin;