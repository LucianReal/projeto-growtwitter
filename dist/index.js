"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FeedController_1 = __importDefault(require("./controllers/FeedController"));
const FollowController_1 = __importDefault(require("./controllers/FollowController"));
const LikeController_1 = __importDefault(require("./controllers/LikeController"));
const ReplyController_1 = __importDefault(require("./controllers/ReplyController"));
const TweetController_1 = __importDefault(require("./controllers/TweetController"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const Like_1 = require("./models/Like");
const Tweet_1 = require("./models/Tweet");
const User_1 = require("./models/User");
// Registro de usuários
const user1 = new User_1.User("Luciano", "lucian", "luciano@gmail.com", "luciano123");
const user2 = new User_1.User("Angel", "angeli", "angel@gmail.com", "angel123");
const user3 = new User_1.User("Marcelo", "tio do codaí", "codaí@gmail.com", "codaí");
const user4 = new User_1.User("Bruno", "tech helper", "th@gmail.com", "tech");
UserController_1.default.registerUser(user1);
UserController_1.default.registerUser(user2);
UserController_1.default.registerUser(user3);
UserController_1.default.registerUser(user4);
// Registro de tweets
const tweet1 = new Tweet_1.Tweet("Primeiro tweet.", "normal");
const tweet2 = new Tweet_1.Tweet("Segundo tweet.", "normal");
const tweet3 = new Tweet_1.Tweet("Terceiro tweet.", "normal");
const tweet4 = new Tweet_1.Tweet("Quarto tweet.", "normal");
TweetController_1.default.registerTweet(user1, tweet1);
TweetController_1.default.registerTweet(user2, tweet2);
TweetController_1.default.registerTweet(user3, tweet3);
TweetController_1.default.registerTweet(user4, tweet4);
// Registro de follows
FollowController_1.default.registerFollow(user1, user2);
FollowController_1.default.registerFollow(user1, user3);
FollowController_1.default.registerFollow(user1, user4);
// Registro de likes
const like1 = new Like_1.Like(user1, tweet2);
const like2 = new Like_1.Like(user1, tweet3);
const like3 = new Like_1.Like(user1, tweet4);
LikeController_1.default.registerLike(like1);
LikeController_1.default.registerLike(like2);
LikeController_1.default.registerLike(like3);
// Registro de replies
const reply1 = new Tweet_1.Tweet("Resposta ao tweet da angeli.", "reply");
const reply2 = new Tweet_1.Tweet("Resposta ao tweet do tio do codaí.", "reply");
const reply3 = new Tweet_1.Tweet("Resposta ao tweet do tech helper.", "reply");
ReplyController_1.default.registerReply(user1, reply1, tweet2);
ReplyController_1.default.registerReply(user1, reply2, tweet3);
ReplyController_1.default.registerReply(user1, reply3, tweet4);
// Carregamento do feed
FeedController_1.default.loadFeed(user1);
