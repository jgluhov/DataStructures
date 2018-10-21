"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function (item) {
        this.dataStore[this.top++] = item;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            return;
        }
        return this.dataStore[--this.top];
    };
    Stack.prototype.peek = function () {
        return this.dataStore[this.top - 1];
    };
    Stack.prototype.length = function () {
        return this.top;
    };
    Stack.prototype.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    };
    return Stack;
}());
exports.default = Stack;
