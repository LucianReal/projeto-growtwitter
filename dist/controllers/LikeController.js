"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LikeController {
    registerLike(like) {
        like.tweet.like(like.getInf().username);
    }
    ;
    listLikes(like) {
        const likes = like.tweet.getInf().likes.length;
        if (likes === 1) {
            console.log("@" + like.username + " liked this.");
        }
        else if (likes >= 2) {
            console.log("@" + like.username + " and other " + likes + " users liked this.");
        }
    }
}
;
exports.default = new LikeController();
