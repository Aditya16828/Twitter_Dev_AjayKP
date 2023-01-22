const express = require('express');
const connect = require('./config/database');
const app = express();

//const Tweet = require('./models/tweete');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async () => {
    console.log('Server Started at Port 3000');
    await connect();
    console.log('MongoDB Connected')
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    //     userEmail: 'abc@mail.com'
    // });

    //const tweets = await Tweet.find(); 

    //const tweets = await Tweet.find({userEmail: 'a@b.com'}); 

    // const tweets = await Tweet.findById('63cd4861c191a03791197795'); 

    // const tweet = await Tweet.findById('63cd46ad005a412f74a55f61'); 
    // tweet.userEmail='aaa@mail.com';
    // await tweet.save()


    const tweetrepo = new TweetRepository();
    //const tweet = await tweetrepo.update('63cd4861c191a03791197795', {content: 'latest tweet new'});
    // const tweet = await tweetrepo.create( {content: 'My Tweet', userEmail: 'ajay@mail.com'});
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save();

    // const tweet = await tweetrepo.create({
    //         content: ' Tweet with comments schema',
    //         userEmail: 'aj@mail.com'
    //     });
    // console.log(tweet);
    // const comment = await Comment.create({ content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    const tweet = await tweetrepo.getWithComments('63cd5a9b69f49d64ac4ae485');
    console.log(tweet);
});