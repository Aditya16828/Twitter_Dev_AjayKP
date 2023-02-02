import express from 'express';

import bodyParser from 'body-parser';

import {connect} from './config/database.js';

import apiRoutes from './routes/index.js'

import TweetRepository from './repository/tweet-repository.js';

import UserRepository from './repository/user-repository.js';

import LikeService from './services/like-service.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

//import service from './services/tweet-service.js'
//import HashtagRepository from './repository/hashtag-repository.js';
//const {TweetRepository} = require('./repository/index');
//const TweetService = require('./services/tweet-service');
//const HashtagRepository = require('./repository/hashtag-repository');
//const Comment = require('./models/comments');

app.listen(3000, async () => {
    console.log('Server Started at Port 3000');
    await connect();
    console.log('MongoDB Connected');

    //  const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // const users = await tweetRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);



    // const user = await userRepo.create({
    //     email:'sankit@admin.com',
    //     password:'12345',
    //     name:'sankit'
    // });
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    
    // const users = await userRepo.getAll();
    
    
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
    //const tweetrepo = new TweetRepository();
    //const tweet = await tweetrepo.update('63cd4861c191a03791197795', {content: 'latest tweet new'});
    // const tweet = await tweetrepo.create( {content: 'My Tweet', userEmail: 'ajay@mail.com'});
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save();
    // const tweet = await tweetrepo.create({
    //         content: ' Tweet with Hooks',
    //         userEmail: 'aj@mail.com'
    //     });
    //console.log(tweet);
    // const comment = await Comment.create({ content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    //const tweet = await tweetrepo.getWithComments('63cd5a9b69f49d64ac4ae485');
    // const tweet = await tweetrepo.getAll(2, 4)
    // console.log(tweet[0].contentWithEmail);
    // const tweets = await Tweet.find({
    //   content: {
    //     $all: [ "First Tweet", "My Tweet","123456rtyu"]
    //   }
    // });
    // console.log(tweets);
    
    //create some dummy data for hash tag
    //let repo = new HashtagRepository();
    // await repo.bulkcreate([
    //   {
    //     title: 'Trend',
    //     tweets: []
    //   },
    //   {
    //     title: 'Excited',
    //     tweets: []
    //   },
    //   {
    //     title: 'Python',
    //     tweets: []
    //   },
    //   {
    //     title: 'Fun',
    //     tweets: []
    //   },
    //   {
    //     title: 'Career',
    //     tweets: []
    //   }

    // ])

    // let response = await repo.findByName(['Excited', 'Fun']);
    // console.log(response);
    // response = response.map(tags => tags.title);
    // console.log(response);

    //let service = new TweetService();
    // const tweet = service.create({content: 'Is tweeter #working'});
    // console.log(tweet);

    //let ser = new service();
   //await ser.create({content: '#nono'});
});