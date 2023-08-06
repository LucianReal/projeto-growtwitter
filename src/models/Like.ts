import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Tweet } from "./Tweet";

export class Like {
    id: string;
    username: string;
    tweet: Tweet;

    constructor(user: User, tweet: Tweet) {
        this.id = uuid();
        this.username = user.getInf().username;
        this.tweet = tweet;
    }

    public getInf() {
        return {
            id: this.id,
            username: this.username,
            tweet: this.tweet,
        };
    }
}