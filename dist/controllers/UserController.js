"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../database/users"));
const validateFieldsUser_1 = __importDefault(require("../middlewares/validateFieldsUser"));
const validateUsernameUser_1 = __importDefault(require("../middlewares/validateUsernameUser"));
class UserController {
    registerUser(user) {
        const validatedFields = (0, validateFieldsUser_1.default)(user);
        const validatedUsername = (0, validateUsernameUser_1.default)(user);
        if (validatedUsername && validatedFields) {
            users_1.default.push(user);
        }
        else if (!validatedUsername) {
            console.log("Usuário já existente.");
        }
        else if (!validatedFields) {
            console.log("Preencha todos os campos.");
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
