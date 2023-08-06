import { Tweet } from "../models/Tweet";
import { User } from "../models/User";

class ReplyController {
    public registerReply(user: User, reply: Tweet, tweet: Tweet) {
        user.sendTweet(reply);
        tweet.getInf().replies.push(reply.getInf().content);
    };
}

export default new ReplyController();