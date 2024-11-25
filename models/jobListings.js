const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: [String],
    requirements: [String],
    employmentType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
    location: { type: String, required: true },
    salaryRange: String,
    applicationDeadline: Date,
    datePosted: { type: Date, default: Date.now },
    openings: { type: Number, default: 1 },
    tags: [String]
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
