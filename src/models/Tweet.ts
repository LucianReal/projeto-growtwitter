import { v4 as uuid } from "uuid";
import { Like } from "./Like";
import { User } from "./User";

export class Tweet {
    private id: string;
    private userId: string;
    private likes: string[];
    private content: string;
    private type: "normal" | "reply"

    constructor(content: string, type: any) {
        this.id = uuid();
        this.userId = "";
        this.likes = [];
        this.content = content;
        this.type = type;
    }

    public getInf() {
        return {
            id: this.id,
            userId: this.userId,
            likes: this.likes,
            content: this.content,
            type: this.type
        };
    }

    public setUserId(id: string): void {
        this.userId = id;
    }

    public reply(content: string) {

    };

    public like(username: string) {
        this.likes.push(username);
    };

    public show() {

    };

    public showReplies() {

    };
}