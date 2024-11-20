const mongoose = require('mongoose');

const jobSeekers = new mongoose.Schema({
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
    Interests: [{
        type: String,
        required: true
    }],
    
});

const jobSeeker = mongoose.model("jobSeeker",jobSeekers); 
module.exports = jobSeeker;