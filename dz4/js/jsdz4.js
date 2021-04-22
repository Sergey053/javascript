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

//3 

let text = "Lorem error ipsum dolor sit amet consectetur adipisicing elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officia officiis vero error voluptatibus Aliquam ea ipsa quasi dolor sapiente error ullam A dolore dolorum minima provident error  voluptas Aliquam aut fugiat hic inventore error nam provident ratione sed"; 

let checkSpam = (text, ...spamWords) => {
    let frequency = [];
    frequency.length = spamWords.length;
     let wordsArr = text.split(" ");

   for (let spamWordIndex = 0; spamWordIndex < spamWords.length; spamWordIndex ++) {
        for( let textWord of wordsArr ){
            if (textWord === spamWords[spamWordIndex]){
                if (frequency[spamWordIndex]!==undefined){
                    frequency[spamWordIndex]++;
                } else {
                    frequency[spamWordIndex] = 1;
                }
            }
        }
    }

    return frequency; 
}
console.log("checkSpam", checkSpam(text, "error", "dolor"));



// 4
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
console.log(numsArr);

let numsArrPlus = numsArr.map(sub_numsArr => sub_numsArr.map(elem => elem+10));
console.log(numsArrPlus);

let numsArrFilter = numsArr.map(sub_numsArr => sub_numsArr.filter(e => e > 0));
console.log(numsArrFilter);