import { Like } from "../models/Like";
import { Tweet } from "../models/Tweet";
import { User } from "../models/User";

class LikeController {
    public registerLike(like: Like) {
        like.tweet.like(like.getInf().username);
    };

    /*public listLikes(like: Like) {
        const likes = like.tweet.getInf().likes.length;

        if (likes === 1) {
            console.log("@" + like.username + " liked this.")
        } else if (likes >= 2) {
            console.log("@" + like.username + " and other " + likes + " users liked this.");
        }
    }*/
};

export default new LikeController();