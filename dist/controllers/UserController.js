"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const users_1 = __importDefault(require("../database/users"));
const validateFieldsUser_1 = __importDefault(require("../middlewares/validateFieldsUser"));
const validateUsernameUser_1 = __importDefault(require("../middlewares/validateUsernameUser"));
class UserController {
    createUser(data) {
        const validatedFields = (0, validateFieldsUser_1.default)(data);
        const validatedUsername = (0, validateUsernameUser_1.default)(data);
        if (validatedUsername && validatedFields) {
            const newUser = new User_1.User(data.name, data.email, data.username, data.password);
            users_1.default.push(newUser);
            return newUser;
        }
        else if (!validatedUsername) {
            console.log("Nome de usuário já existe.");
            return false;
        }
        else if (!validatedFields) {
            console.log("Preencha todos os campos para o cadastro.");
            return false;
        }
        else {
            console.log("Dados inválidos.");
            return false;
        }
    }
    ;
    list() {
        console.log(users_1.default);
    }
    ;
}
;
exports.default = new UserController;
