import validateSelfFollow from "../middlewares/validateSelfFollow";
import { User } from "../models/User";

class FollowController {
    public registerFollow(follower: User, followed: User) {

        const validatedSelfFollow = validateSelfFollow(follower, followed);

        if (validatedSelfFollow) {
            follower.follow(followed);
        } else if (!validatedSelfFollow) {
            console.log("Não é possível seguir a si próprio.")
        }
    };

    public list(user: User) {
        console.log("Você está seguindo estes usuários: " + user.showFollowing());
    };
};

export default new FollowController;