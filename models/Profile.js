const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: {type: String, required: true},
    address1: {type: String, required: true},
    address2: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipcode: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'UserModel'}
})

module.exports = mongoose.model('ProfileModel', ProfileSchema)