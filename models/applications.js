const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    dateApplied: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
    coverLetter: String,
    notes: String
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
