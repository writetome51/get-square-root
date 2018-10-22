import {errorIfNotNumber} from 'basic-data-handling/errorIfNotNumber';

export function getSquareRoot(num){
	errorIfNotNumber(num);
	return Math.sqrt(num);
}