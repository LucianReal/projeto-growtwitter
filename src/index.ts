import FeedController from "./controllers/FeedController";
import FollowController from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import ReplyController from "./controllers/ReplyController";
import TweetController from "./controllers/TweetController";
import UserController from "./controllers/UserController";
import { Like } from "./models/Like";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";

// Registro de usuários
const user1 = new User("Luciano", "lucian", "luciano@gmail.com", "luciano123");
const user2 = new User("Angel", "angeli", "angel@gmail.com", "angel123");
const user3 = new User("Marcelo", "tio do codaí", "codaí@gmail.com", "codaí");
const user4 = new User("Bruno", "tech helper", "th@gmail.com", "tech");

UserController.registerUser(user1);
UserController.registerUser(user2);
UserController.registerUser(user3);
UserController.registerUser(user4);

// Registro de tweets
const tweet1 = new Tweet("Primeiro tweet.", "normal");
const tweet2 = new Tweet("Segundo tweet.", "normal");
const tweet3 = new Tweet("Terceiro tweet.", "normal");
const tweet4 = new Tweet("Quarto tweet.", "normal");

TweetController.registerTweet(user1, tweet1);
TweetController.registerTweet(user2, tweet2);
TweetController.registerTweet(user3, tweet3);
TweetController.registerTweet(user4, tweet4);

// Registro de follows
FollowController.registerFollow(user1, user2);
FollowController.registerFollow(user1, user3);
FollowController.registerFollow(user1, user4);

// Registro de likes

const like1 = new Like(user1, tweet2);
const like2 = new Like(user1, tweet3);
const like3 = new Like(user1, tweet4);

LikeController.registerLike(like1);
LikeController.registerLike(like2);
LikeController.registerLike(like3);

// Registro de replies
const reply1 = new Tweet("Resposta ao tweet da angeli.", "reply");
const reply2 = new Tweet("Resposta ao tweet do tio do codaí.", "reply");
const reply3 = new Tweet("Resposta ao tweet do tech helper.", "reply");

ReplyController.registerReply(user1, reply1, tweet2);
ReplyController.registerReply(user1, reply2, tweet3);
ReplyController.registerReply(user1, reply3, tweet4);

// Carregamento do feed

FeedController.loadFeed(user1);