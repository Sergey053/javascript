'use strict';

let a = 45;
let res = a%10+(a-a%10)/10;
console.log(res);
a=61;
res = a%10+(a-a%10)/10;
console.log(res);


a = 1;
 let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

a = 2;
b = 3;
let c = 4;
let s = 2*(a*b+b*c+a*c);
console.log(s);

a = 8;
b = 9;
   res = a < b  ? b - a : -1;
console.log(res); 