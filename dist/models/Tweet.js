"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
class Tweet {
    constructor(content, type) {
        this.id = (0, uuid_1.v4)();
        this.userId = "";
        this.likes = 0;
        this.content = content;
        this.type = type;
    }
    getDetails() {
        return {
            id: this.id,
            userId: this.userId,
            likes: this.likes,
            content: this.content,
            type: this.type
        };
    }
    setUserId(id) {
        this.userId = id;
    }
}
exports.Tweet = Tweet;
