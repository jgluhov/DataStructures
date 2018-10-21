"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = __importDefault(require("./stack"));
exports.isPolindrome = function (word) {
    var stack = new stack_1.default();
    for (var i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }
    var rword = '';
    while (stack.length() > 0) {
        rword += stack.pop();
    }
    if (word === rword) {
        return true;
    }
    return false;
};
