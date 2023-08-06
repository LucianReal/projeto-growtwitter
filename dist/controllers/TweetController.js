"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tweets_1 = __importDefault(require("../database/tweets"));
class TweetController {
    registerTweet(user, tweet) {
        user.sendTweet(tweet);
    }
    ;
    list() {
        console.log(tweets_1.default);
    }
    ;
}
;
exports.default = new TweetController;
