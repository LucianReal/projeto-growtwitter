"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TweetController {
    registerTweet(user, tweet) {
        user.sendTweet(tweet);
    }
    ;
    listTweet(tweet) {
        const username = tweet.getInf().username;
        const content = tweet.getInf().content;
        const likes = tweet.getInf().likes.length;
        const like = tweet.getInf().likes[0];
        const totalReplies = tweet.getInf().replies.length;
        const replies = tweet.getInf().replies;
        if (likes === 0) {
            console.log("@" + username + ": " + content);
            console.log("[0 likes]");
            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            }
            replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            });
            console.log("---------------------------------------------");
        }
        else if (likes === 1) {
            console.log("@" + username + ": " + content);
            console.log("[@" + like + " liked this.]");
            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            }
            replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            });
            console.log("---------------------------------------------");
        }
        else if (likes >= 2) {
            console.log("@" + username + ": " + content);
            console.log("@" + like + " and other " + likes + " users liked this.");
            if (totalReplies === 0) {
                console.log("---------------------------------------------");
                return;
            }
            replies.forEach(reply => {
                console.log("  > @" + reply.getInf().username + ": " + reply.getInf().content);
            });
            console.log("---------------------------------------------");
        }
    }
}
;
exports.default = new TweetController();
