import { User } from "../models/User";
import { Tweet } from "../models/Tweet";

class TweetController {
    public registerTweet(user: User, tweet: Tweet) {
        user.sendTweet(tweet);
    };

    public listTweet(tweet: Tweet) {
        const username: string = tweet.getInf().username;
        const content: string = tweet.getInf().content;
        const likes: number = tweet.getInf().likes.length;
        const like: string = tweet.getInf().likes[0];

        const totalReplies: number = tweet.getInf().replies.length;
        const replies: Tweet[] = tweet.getInf().replies;

        if (likes === 0) {
            console.log("@" + username + ": " + content);
            console.log("[0 likes]");

            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            } replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            }); console.log("---------------------------------------------");

        } else if (likes === 1) {
            console.log("@" + username + ": " + content);
            console.log("[@" + like + " liked this.]");

            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            } replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            }); console.log("---------------------------------------------");

        } else if (likes >= 2) {
            console.log("@" + username + ": " + content);
            console.log("@" + like + " and other " + likes + " users liked this.");

            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            } replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            }); console.log("---------------------------------------------");
        }
    }
};

export default new TweetController();