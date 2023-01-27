import { TweetRepository, HashtagRepository } from '../repository/index.js'


class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }   //create a tweet
    async create(data){
        const content = data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extract hastags 
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        
        let titleofPresenttags= alreadyPresentTags.map((tags) => tags.title);
        let newTags = tags.filter(tag => !titleofPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkcreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        
        //Create hashtag and and here
        return tweet;
    }
}
export default TweetService;