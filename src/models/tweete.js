const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
        max: [250, 'Tweet cannot more than 250 characters']
    },
},{timestamps: true});



const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;