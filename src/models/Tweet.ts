import { v4 as uuid } from "uuid";

export class Tweet {
    private id: string;
    private likes: number;
    private content: string;
    private type: string;

    constructor(content: string, type: string) {
        this.id = uuid();
        this.likes = 0;
        this.content = content;
        this.type = type;
    }

    
}