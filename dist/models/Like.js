"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const uuid_1 = require("uuid");
class Like {
    constructor(user, tweet) {
        this.id = (0, uuid_1.v4)();
        this.username = user.getInf().username;
        this.tweet = tweet;
    }
    getInf() {
        return {
            id: this.id,
            username: this.username,
            tweet: this.tweet,
        };
    }
}
exports.Like = Like;
