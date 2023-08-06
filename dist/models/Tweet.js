"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const uuid_1 = require("uuid");
class Tweet {
    constructor(content, type) {
        this.id = (0, uuid_1.v4)();
        this.likes = 0;
        this.content = content;
        this.type = type;
    }
}
exports.Tweet = Tweet;
