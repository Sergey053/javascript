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
function range(x,y) {
    for (let i = x; i <= y; i = 1){
        range[i] = i + 1;
    }
}
// let massiv = range(2,6);
// console.log(massiv);