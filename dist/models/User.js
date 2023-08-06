"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
const tweets_1 = __importDefault(require("../database/tweets"));
class User {
    constructor(name, email, username, password) {
        this.id = (0, uuid_1.v4)();
        this.followers = [];
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    getInf() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
    }
    toTweet(tweet) {
        tweet.setUserId(this.getInf().id);
        tweets_1.default.push(tweet);
    }
}
exports.User = User;
