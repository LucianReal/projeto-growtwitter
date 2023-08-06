"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
class Tweet {
    constructor(content, type) {
        this.id = (0, uuid_1.v4)();
        this.username = "";
        this.likes = [];
        this.replies = [];
        this.content = content;
        this.type = type;
    }
    getInf() {
        return {
            id: this.id,
            username: this.username,
            likes: this.likes,
            replies: this.replies,
            content: this.content,
            type: this.type
        };
    }
    setUsername(username) {
        this.username = username;
    }
    reply(content) {
    }
    ;
    like(username) {
        this.likes.push(username);
    }
    ;
    show() {
    }
    ;
    showReplies() {
        return this.replies;
    }
    ;
}
exports.Tweet = Tweet;
