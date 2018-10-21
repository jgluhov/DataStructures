"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var examples = __importStar(require("./examples"));
describe('#isPolindrome()', function () {
    describe('when string looks like polindrome', function () {
        it('should return true', function () {
            expect(examples.isPolindrome('racecar')).toBe(true);
        });
    });
    describe('when string looks differencly', function () {
        it('should return false', function () {
            expect(examples.isPolindrome('raceca')).toBe(false);
        });
    });
});
