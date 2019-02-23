# getSquareRoot(number): number

`number` must be finite number (and of type 'number').

## Examples
```
getSquareRoot(4);
    // --> 2

getSquareRoot(64);
    // --> 8

getSquareRoot(10);
    // --> 3.1622776601683795

getSquareRoot(Infinity);
    // Error: 'Input must be a finite number'

getSquareRoot("64");  // input cannot be type 'string'
    // Error: 'Input must be a finite number'
```

## Installation
`npm i  @writetome51/get-square-root`

## Loading
```
// if using TypeScript:
import { getSquareRoot } from '@writetome51/get-square-root';

// if using ES5 JavaScript:
var getSquareRoot = require('@writetome51/get-square-root').getSquareRoot;
```
