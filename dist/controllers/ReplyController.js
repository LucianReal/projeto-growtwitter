"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReplyController {
    registerReply(user, reply, tweet) {
        user.sendTweet(reply);
        tweet.getInf().replies.push(reply.getInf().content);
    }
    ;
}
exports.default = new ReplyController();
