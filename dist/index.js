"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FollowController_1 = __importDefault(require("./controllers/FollowController"));
const LikeController_1 = __importDefault(require("./controllers/LikeController"));
const TweetController_1 = __importDefault(require("./controllers/TweetController"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const Like_1 = require("./models/Like");
const Tweet_1 = require("./models/Tweet");
const User_1 = require("./models/User");
// Registro de usuários
const user1 = new User_1.User("Luciano", "lucian", "luciano@gmail.com", "luciano123");
const user2 = new User_1.User("Angel", "angeli", "angel@gmail.com", "angel123");
const user3 = new User_1.User("Marcelo", "tio do codaí", "codaí@gmail.com", "codaí");
UserController_1.default.registerUser(user1);
UserController_1.default.registerUser(user2);
// Registro de tweets
const tweet1 = new Tweet_1.Tweet("Primeiro tweet", "normal");
const tweet2 = new Tweet_1.Tweet("Segundo tweet", "normal");
TweetController_1.default.registerTweet(user1, tweet1);
TweetController_1.default.registerTweet(user2, tweet2);
// Registro de follows
FollowController_1.default.registerFollow(user1, user2);
FollowController_1.default.registerFollow(user1, user3);
// Registro de likes
const like1 = new Like_1.Like(user1, tweet2);
const like2 = new Like_1.Like(user3, tweet2);
//const like3 = new Like(user1, tweet2);
LikeController_1.default.registerLike(like1);
UserController_1.default.listUsers();
TweetController_1.default.listTweets();
FollowController_1.default.listFollowing(user1);
LikeController_1.default.listLikes(like1);
