const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    readStatus: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
