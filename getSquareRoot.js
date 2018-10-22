"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
function getSquareRoot(num) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    return Math.sqrt(num);
}
exports.getSquareRoot = getSquareRoot;
