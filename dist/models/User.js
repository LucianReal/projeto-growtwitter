"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, email, username, password) {
        this.id = (0, uuid_1.v4)();
        this.followers = [];
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
}
exports.User = User;
