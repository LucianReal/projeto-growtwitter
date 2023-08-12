import { v4 as uuid } from "uuid";

export class Tweet {
    private id: string;
    private username: string;
    private likes: string[];
    private replies: Tweet[];
    private content: string;
    private type: "normal" | "reply"

    constructor(content: string, type: any) {
        this.id = uuid();
        this.username = "";
        this.likes = [];
        this.replies = [];
        this.content = content;
        this.type = type;
    };

    public getInf() {
        return {
            id: this.id,
            username: this.username,
            likes: this.likes,
            replies: this.replies,
            content: this.content,
            type: this.type
        };
    };

    public setUsername(username: string): void {
        this.username = username;
    };

    public reply(reply: Tweet) {
        this.replies.push(reply);
    };

    public like(username: string) {
        this.likes.push(username);
    };

    public show() {

    };

    public showReplies() {
        return this.replies;
    };
};