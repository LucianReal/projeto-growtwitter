import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";
import tweets from "../database/tweets";

export class User {
    private id: string;
    private following: string[];
    private name: string;
    private username: string;
    private email: string;
    private password: string;

    constructor(name: string, username: string, email: string, password: any) {
        this.id = uuid();
        this.following = [];
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public getInf() {
        return {
            id: this.id,
            following: this.following,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
    }

    public sendTweet(tweet: Tweet): void {
        tweet.setUsername(this.getInf().username);
        tweets.push(tweet);
    }

    public follow(user: User) {
        this.following.push(user.username);
    };

    public showFollowing() {
        return this.following;
    };

    public showFeed() {

    };

    public showTweets() {

    };
}