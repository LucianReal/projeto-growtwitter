import { User } from "../models/User";
import { Tweet } from "../models/Tweet";
import tweets from "../database/tweets";

class TweetController {
    public registerTweet(user: User, tweet: Tweet) {
        user.sendTweet(tweet);
    };

    public listTweets() {
        console.log(tweets);
    };
};

export default new TweetController();