const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    topic: {
        type: Schema.Types.ObjectId,
        ref: "Topic",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    // user: {
    //     type:  Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
})

module.exports = mongoose.model('Article', articleSchema)