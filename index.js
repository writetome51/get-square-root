import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';

export function getSquareRoot(num) {
	errorIfNotFiniteNumber(num);
	return Math.sqrt(num);
}
