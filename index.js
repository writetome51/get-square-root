"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var errINFNumber_1 = require("error-if-not-finite-number");

function getSquareRoot(num) {
	errINFNumber_1.errorIfNotFiniteNumber(num);
	return Math.sqrt(num);
}

exports.getSquareRoot = getSquareRoot;
