"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateSelfFollow(data1, data2) {
    if (data1.id === data2.id) {
        return false;
    }
    return true;
}
exports.default = validateSelfFollow;
