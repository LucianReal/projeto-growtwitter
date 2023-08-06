import { v4 as uuid } from "uuid";

export class Tweet {
    private id: string;
    private userId: string;
    private likes: number;
    private content: string;
    private type: "normal" | "reply"

    constructor(content: string, type: any) {
        this.id = uuid();
        this.userId = "";
        this.likes = 0;
        this.content = content;
        this.type = type;
    }

    public getDetails() {
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
    
}