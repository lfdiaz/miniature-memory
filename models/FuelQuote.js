const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const FuelQuoteSchema = new Schema({
    deliveryDate: {type: Date, required: true},
    gallons: {type: Number, required: true},
    address: {type: String, required: true},
    suggestedPrice: {type: Number, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'UserModel'}
})

module.exports = mongoose.model('FuelQuoteModel', FuelQuoteSchema)