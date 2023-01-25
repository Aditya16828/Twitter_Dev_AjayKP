const {TweetRepository} = require('../repository/index')
class TweetService {
    constructor(){
        this.tweetRepository
    }   //create a tweet
    async create(data){
        const content = data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hastags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);

        //Create hashtag and and here
        return tweet;
    }
}

module.exports =TweetService;