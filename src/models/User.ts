import { v4 as uuid } from "uuid";

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

    public getUsername(): string {
        return this.username;
    }
}