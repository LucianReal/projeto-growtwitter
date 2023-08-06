"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateFieldsUser(data) {
    if (!data.name || !data.email || !data.username || !data.password) {
        return false;
    }
    return true;
}
exports.default = validateFieldsUser;
