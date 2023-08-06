import tweets from "../database/tweets";
import users from "../database/users";
import { Tweet } from "../models/Tweet";
import { User } from "../models/User";
import TweetController from "./TweetController";

class FeedController {
    public loadFeed(user: User) {
        const userTweets: Tweet[] = tweets.filter(tweet => tweet.getInf().username === user.getInf().username
            && tweet.getInf().type != "reply");

        userTweets.forEach(tweet => {
            TweetController.listTweet(tweet);
        });

        user.getInf().following.forEach(username => {

            const user = users.find(item => item.getInf().username === username);

            if (user != undefined) {
                const userTweets: Tweet[] = tweets.filter(tweet => tweet.getInf().username === user.getInf().username
                    && tweet.getInf().type != "reply");

                userTweets.forEach(tweet => {
                    TweetController.listTweet(tweet);
                });
            }
        });
    };
};

export default new FeedController();
