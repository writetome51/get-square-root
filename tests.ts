import { getSquareRoot } from './index';


let result = getSquareRoot(16);
if (result === 4) console.log('test 1 passed');
else console.log('test 1 FAILED');


result = getSquareRoot(100);
if (result === 10) console.log('test 2 passed');
else console.log('test 2 FAILED');


result = getSquareRoot(20);
if (result < 4.472136 && result > 4.4721359549) console.log('test 3 passed');
else console.log('test 3 FAILED');


result = getSquareRoot(2001);
if (result > 44.7325 && result < 44.732538493) console.log('test 4 passed');
else console.log('test 4 FAILED');
