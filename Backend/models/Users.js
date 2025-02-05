const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


const user = mongoose.model('text_to_speech', UserSchema)

module.exports = user;