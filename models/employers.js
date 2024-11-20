const mongoose = require('mongoose');

const employers = new mongoose.Schema({
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
const employer = mongoose.model("Employer",employers); 
module.exports = employer;