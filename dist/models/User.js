"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
const tweets_1 = __importDefault(require("../database/tweets"));
class User {
    constructor(name, username, email, password) {
        this.id = (0, uuid_1.v4)();
        this.following = [];
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    getInf() {
        return {
            id: this.id,
            following: this.following,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
    }
    sendTweet(tweet) {
        tweet.setUsername(this.getInf().username);
        tweets_1.default.push(tweet);
    }
    follow(user) {
        this.following.push(user.username);
    }
    ;
    showFollowing() {
        return this.following;
    }
    ;
    showFeed() {
    }
    ;
    showTweets() {
    }
    ;
}
exports.User = User;
