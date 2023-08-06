"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TweetController_1 = __importDefault(require("./controllers/TweetController"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const Tweet_1 = require("./models/Tweet");
const User_1 = require("./models/User");
const user1 = new User_1.User("Luciano", "lucian", "luciano@gmail.com", "luciano123");
const user2 = new User_1.User("Angel", "angeli", "angel@gmail.com", "angel123");
UserController_1.default.registerUser(user1);
UserController_1.default.registerUser(user2);
const tweet1 = new Tweet_1.Tweet("Primeiro tweet", "normal");
const tweet2 = new Tweet_1.Tweet("Segundo tweet", "normal");
TweetController_1.default.registerTweet(user1, tweet1);
TweetController_1.default.registerTweet(user2, tweet2);
TweetController_1.default.list();
UserController_1.default.list();
