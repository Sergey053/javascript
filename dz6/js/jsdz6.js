'use strict'

//2 
let text = "дом домик домой одомашненный бездомный супердом";
let word  = "дом";
function povtor(text, word){
    let wordsArr = text.split(word);
    return  wordsArr.length-1;
}
console.log(povtor(text,word));


// 3 

let str ="А роза упала на лапу Азора";

function Palindrom(str){
    let palArr = str.split("");
    let reverseStr="";
    for(let i=0; i<palArr.length; i++){
    if(palArr[i]===" ") palArr.splice(i,1);
    }
    let palStr = palArr.join("").toLowerCase();
    reverseStr = palArr.reverse().join("").toLowerCase();
    if(palStr.indexOf(reverseStr)!=-1) return str + " - является полиндромом";
    else return str + " - не является полиндромом" ;
    
    }
console.log(Palindrom(str));