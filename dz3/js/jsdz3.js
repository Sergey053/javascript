'use strict';

//1
let num =  [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
]
console.log(num);
num = num.map(sub_num => sub_num.map(elem => elem+10));


console.log(num);

//2 
let myArray = [];
let arrayMax = 7;
let limit = 100;
for (let i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random()*limit));
}
console.log(myArray);
let max = myArray[0]; let maxIndex = 0;
let min = myArray[0]; let minIndex = 0;

for (let i = 1; i < myArray.length; i++)
            {
                if (myArray[i] < min)
                {
                    min = myArray[i];
                    minIndex = i;
                }
 
                if (myArray[i] > max)
                {
                    max = myArray[i];
                    maxIndex = i;
                }
            }
 
            myArray[minIndex] = max;
            myArray[maxIndex] = min;
            console.log(myArray);




// 3
let number = [4, -5, 0, 2, -67, 8, 10, -34 ];

let negatives = number.filter(e => e < 0);

console.log(negatives);


