"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LikeController {
    registerLike(like) {
        like.tweet.like(like.getInf().username);
    }
    ;
}
;
exports.default = new LikeController();
