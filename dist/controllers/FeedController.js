"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tweets_1 = __importDefault(require("../database/tweets"));
const users_1 = __importDefault(require("../database/users"));
const TweetController_1 = __importDefault(require("./TweetController"));
class FeedController {
    loadFeed(user) {
        const userTweets = tweets_1.default.filter(tweet => tweet.getInf().username === user.getInf().username
            && tweet.getInf().type != "reply");
        userTweets.forEach(tweet => {
            TweetController_1.default.listTweet(tweet);
        });
        user.getInf().following.forEach(username => {
            const user = users_1.default.find(item => item.getInf().username === username);
            if (user != undefined) {
                const userTweets = tweets_1.default.filter(tweet => tweet.getInf().username === user.getInf().username
                    && tweet.getInf().type != "reply");
                userTweets.forEach(tweet => {
                    TweetController_1.default.listTweet(tweet);
                });
            }
        });
    }
    ;
}
;
exports.default = new FeedController();
