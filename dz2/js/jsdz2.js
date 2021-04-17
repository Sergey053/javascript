'use strict';
// 1
let count = 15;
if (count <= 100 && count >= 90) {
    console.log("Отлично");
} else if (count <= 89 && count >= 60) {
    console.log("Хорошо");
} else if (count <= 59 && count >= 40) {
        console.log("Удовлетворительно");
} else {
    console.log("Попробуй потом");
}
// 2
let a = 18;
let b = 1;
let c = 9;
switch (c) {
    case 3:
        console.log(a+b+c);
        break;
    case 5:
        console.log(a-b-c);
        break;
    case 7:
        console.log(a*b*c);
        break;
    case 9:
        console.log(a/b/c);
        break;
}
// 3
//Задача на Math.random() и if
//Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [10;500]
//в интервал (25;200) и выводить результат в консоль.
//Примеры работы программы:
//Число 345 не содержится в интервале (25;200)
//Число 110 содержится в интервале (25;200)

a = 10;
b = 500;
c = Math.random()*(b - a + 1) + a ;
if(c >= 25 && c <= 200){
console.log("Число " + c + " содержится в интервале (25,200)");
}
else{
    console.log("Число " + c + " не содержится в интервале (25,200)");
         }

// 4
for( let i = 2; i <= 40; i += 2){
console.log(i);
 }        
 
 //5

 let n = 20; 
let fibonacci = [0, 1]; 

for ( let i = 2; i < n; i ++) {
   fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.slice(0,n));

//6 
let q;
let w;
for (let q = 1; q <= 6; q++) {
    for (let w = 1; w <= 1; w++) {
        console.log(`${q}×${w}=${q * w}`);
    }
}
 let minimum = 1, maximum = 100;
 while (true) {
     //let tmp =(minimum + maximum)/2
// answer  это число равно tmp?
// если answer  равно 1 - break
// answer =  Это число меньше tmp?
// если answer  равно 1 - maximum = tmp
// еще если answer равно 0 - minimum = tmp
 }