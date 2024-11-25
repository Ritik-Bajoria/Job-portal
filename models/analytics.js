const mongoose = require('mogoose')

const analyticsSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    views: { type: Number, default: 0 },
    applicationsReceived: { type: Number, default: 0 },
    popularity: { type: Number, default: 0 }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);
module.exports = Analytics;
