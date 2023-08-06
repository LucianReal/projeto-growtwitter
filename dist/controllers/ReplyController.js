"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReplyController {
    registerReply(user, reply, tweet) {
        user.sendTweet(reply);
        tweet.reply(reply);
    }
    ;
}
exports.default = new ReplyController();
