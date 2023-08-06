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

UserController.registerUser(user1);
UserController.registerUser(user2);

// Registro de tweets
const tweet1 = new Tweet("Primeiro tweet", "normal");
const tweet2 = new Tweet("Segundo tweet", "normal");

TweetController.registerTweet(user1, tweet1);
TweetController.registerTweet(user2, tweet2);

// Registro de follows
FollowController.registerFollow(user1, user2);
FollowController.registerFollow(user1, user3);

// Registro de likes

const like1 = new Like(user1, tweet2);
const like2 = new Like(user3, tweet2);
//const like3 = new Like(user1, tweet2);

LikeController.registerLike(like1);

//Registro de replies
const tweet4 = new Tweet("Resposta a outro tweet", "reply")

ReplyController.registerReply(user1, tweet4, tweet1);

UserController.listUsers();
TweetController.listTweets();
FollowController.listFollowing(user1);