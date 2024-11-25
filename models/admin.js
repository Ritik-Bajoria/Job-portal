const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'SuperAdmin'], default: 'Admin' },
    activityLogs: [
        {
            action: String,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
