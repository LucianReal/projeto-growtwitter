import TweetController from "./controllers/TweetController";
import UserController from "./controllers/UserController";
import { Tweet } from "./models/Tweet";
import { User } from "./models/User";

const user1 = new User("Luciano", "lucian", "luciano@gmail.com", "luciano123");
const user2 = new User("Angel", "angeli", "angel@gmail.com", "angel123");
 
UserController.registerUser(user1);
UserController.registerUser(user2);

const tweet1 = new Tweet("Primeiro tweet", "normal");
const tweet2 = new Tweet("Segundo tweet", "normal");

TweetController.registerTweet(user1, tweet1);
TweetController.registerTweet(user2, tweet2);

TweetController.list();
UserController.list();