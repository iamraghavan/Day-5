//  1. Print odd numbers in an array
let arrValue = [1,2,3,4,5,6,7,8,9,10,11,12];
((arrPass)=>{
    let odd = arrPass.filter(function(arrPass){
        return arrPass % 2 == 0;
    })
    console.log(odd);
})(arrValue);


// 2. Convert all the strings to title caps in a string array

let strValue = ['Guvi', 'Raghvan'];
((strCap)=>{

    let outCap = strCap[0].toUpperCase();
    let outCap2 = strCap[1].toUpperCase();
    console.log(outCap);
    console.log(outCap2);

})(strValue);

// 3. Sum of all numbers in an array

let arrSumValue = [1,2,3,4,5,6,7,8,9]
let sum = 0;
((sumOfTheValue)=>{
    for (let i = 0; i < sumOfTheValue.length; i++) {
        sum += sumOfTheValue[i];
    }
    console.log(sum);
})(arrSumValue);


// 4. Return all the prime numbers in an array

// let numValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// ((findPrime)=>{
// })(numValues);

// 5. Return all the palindromes in an array

let str = ["Anbu",1,1,"Anbu"];


((findStr)=>{
    let findLen = findStr.length;
    for (let i = 0; i < findLen / 2; i++ ){
        if (findStr[i] !== findStr[findLen -1 - i]){
            return false;
        }
    }
    return true;
})(str);


