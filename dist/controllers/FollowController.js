"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateSelfFollow_1 = __importDefault(require("../middlewares/validateSelfFollow"));
class FollowController {
    registerFollow(follower, followed) {
        const validatedSelfFollow = (0, validateSelfFollow_1.default)(follower, followed);
        if (validatedSelfFollow) {
            follower.follow(followed);
        }
        else if (!validatedSelfFollow) {
            console.log("Não é possível seguir a si próprio.");
        }
    }
    ;
    list(user) {
        console.log("Você está seguindo estes usuários: " + user.showFollowing());
    }
    ;
}
;
exports.default = new FollowController;
