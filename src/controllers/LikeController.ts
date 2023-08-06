import { Like } from "../models/Like";

class LikeController {
    public registerLike(like: Like) {
        like.tweet.like(like.getInf().username);
    };
};

export default new LikeController();