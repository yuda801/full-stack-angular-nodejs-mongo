const mongoose = require('mongoose');

// objectId: Number,
const OperationsSchema = mongoose.Schema({
    operationId: Number,
    accountNumber: Number,
    type: String,
    ammount: Number,
    interest: Number,
    payments: Number,
    operationDate: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Operations', OperationsSchema);