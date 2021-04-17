'use strict'

// 1
    function GetNoun(number) {
      
        if (number === 1 || number %10 === 1) return `${number} товар`;
        if (number >= 2 && number <= 4 || number %10 >= 2 && number %10 <= 4 )  return `${number} товара`;
        if (number >= 5 && number <= 10 || number %10 >= 5 && number %10 <= 9 || number %10 === 0   )  return `${number} товаров`;     
        }
    let count = GetNoun(124);
console.log(count);

// 2
function range(x,y,z=1) {
    let arr = [];
    for (let i = x; i <= y; i += z){
        arr.push(i);    
    }
    return arr;
}
console.log(range(2, 6));
