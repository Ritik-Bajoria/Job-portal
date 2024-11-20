const mongoose = require('mongoose');

const jobListingsSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
        // e.g., "Full-time", "Part-time", "Contract"
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String,
        required: true
    }],
    postedDate: {
        type: Date,
        default: Date.now
    }
    // employer: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Employer',
    //     required: true
    // }
});

const jobListing = mongoose.model("JobListing", jobListingsSchema);

module.exports = jobListing;
