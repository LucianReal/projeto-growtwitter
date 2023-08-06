"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../database/users"));
function validateUsernameUser(data) {
    const exist = users_1.default.some(item => item.getInf().username === data.username);
    if (exist) {
        return false;
    }
    return true;
}
exports.default = validateUsernameUser;
