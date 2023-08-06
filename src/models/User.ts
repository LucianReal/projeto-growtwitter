import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";
import tweets from "../database/tweets";

export class User {
    private id: string;
    private followers: [];
    private name: string;
    private email: string;
    private username: string;
    private password: string;

    constructor(name: string, email: string, username: string, password: any) {
        this.id = uuid();
        this.followers = [];
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public getInf() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
          };      
    }

    public toTweet(tweet: Tweet): void {
        tweet.setUserId(this.getInf().id);
        tweets.push(tweet);
    }
}