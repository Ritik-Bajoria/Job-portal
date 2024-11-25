const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactInfo: String,
    resume: String, // URL or base64 encoded data
    profilePicture: String, // URL
    skills: [String],
    workExperience: [
        {
            company: String,
            role: String,
            startDate: Date,
            endDate: Date
        }
    ],
    education: [
        {
            institution: String,
            degree: String,
            fieldOfStudy: String,
            startDate: Date,
            endDate: Date
        }
    ],
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    applicationsHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
