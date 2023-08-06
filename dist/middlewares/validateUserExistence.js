"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../database/users"));
function validateUserExistence(data1, data2) {
    const exist1 = users_1.default.some(item => item.getInf().id === data1.id);
    const exist2 = users_1.default.some(item => item.getInf().id === data2.id);
    if (!exist1 || !exist2) {
        return false;
    }
    return true;
}
exports.default = validateUserExistence;
