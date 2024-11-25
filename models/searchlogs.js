const mongoose = require('mongoose')

const searchLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    searchKeywords: { type: String, required: true },
    filtersApplied: [String],
    timestamp: { type: Date, default: Date.now }
});

const SearchLog = mongoose.model('SearchLog', searchLogSchema);
module.exports = SearchLog;
