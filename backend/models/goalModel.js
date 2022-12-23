const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true, //Creates a createdAt, updatedAt fields auto
})

module.exports = mongoose.model('Goal', goalSchema)