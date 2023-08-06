import { User } from "../models/User";
import { Tweet } from "../models/Tweet";
import tweets from "../database/tweets";

class TweetController {
    public registerTweet(user: User, tweet: Tweet) {
        user.toTweet(tweet);
    };

    public list() {
        console.log(tweets);
    };
};



export default new TweetController;