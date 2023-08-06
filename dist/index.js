"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("./controllers/UserController"));
const user1 = UserController_1.default.createUser({ name: "Luciano", username: "lucian", email: "luciano@gmail.com", password: "batata123" });
const user2 = UserController_1.default.createUser({ name: "Luciano", username: "lucian", email: "luciano@gmail.com", password: "batata123" });
const user3 = UserController_1.default.createUser({ name: "Luciano", username: "lucian2", email: "luciano@gmail.com" });
const user4 = UserController_1.default.createUser({ name: "Luciano", username: "lucian", email: "luciano@gmail.com" });
UserController_1.default.list();
