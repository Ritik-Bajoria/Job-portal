const mongoose = require('mongoose')

const bookmarkSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    timestamp: { type: Date, default: Date.now }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;
