//no 1
let fruits = ['apple', 'banana', 'cherry']
fruits.pop();
console.log("--------------soal1-------------")
console.log(fruits);
//no2

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e'];
let total = bulkAlphabet.length
console.log("--------------soal2-------------");
console.log(total, "====> ini panjang array");

//no3
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34];

const maxNumb  = angkaUnik.reduce((a, b) => Math.max(a, b), -Infinity);
const minNumb = Math.min(...angkaUnik);

let sortUp = angkaUnik.sort(function(a,b){return a-b;})
let reverse = [...sortUp];
let sortDown = reverse.reverse();
console.log("--------------soal3-------------");
console.log(maxNumb,"=====> ini angka terbesar dari array angka unik");
console.log(minNumb,"=====> ini angka terkecil dari array angka unik");
console.log(sortUp, "======> sort dari kecil ke besar");
console.log(sortDown, "====> sort dari besar ke kecil");


//no4
//
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5,9];
let result =[];
let Length1 = arr1.length;
let length2 = arr2.length;

for (let i = 0; i<Length1; i++){
    result.push(arr1[i]);
    }
    for(let j = 0; j<length2;j++){
        result.push(arr2[j]);}


  let withBuildInFunction = arr1.concat(arr2); 
  console.log("--------------soal4-------------");     
console.log(result, "===>no build in function");
console.log(withBuildInFunction,"==> buildin")
//no5
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function oddNumb(x) {
    let angkaGanjil = [];
    let lengthAr3 = x.length - 1;
    for (let index = 0; index <= lengthAr3; index++) {
        if(x[index] % 2 !== 0 ){
            angkaGanjil.push(x[index]);
        }
        
    }
    return angkaGanjil;
    
}
console.log("--------------soal5-------------");   
console.log(oddNumb(arr3), "===>sort angka ganjil");



//no6
let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let result2 = [];
let sortedArr = angkaKumupulan.sort(function (a,b){return a-b;})
let reverseArr = [...sortedArr].reverse();
for (let index = 0; index <= angkaKumupulan.length - 1; index++) {
    if(reverseArr.indexOf(index) == -1){
        result2.push(reverseArr[index]);
    };
    
}
console.log("--------------soal6-------------"); 
console.log(sortedArr);
console.log(reverseArr);
console.log(result);

//no7
let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c","z"]

let lengthNum= kumpulanAngka.length ;
let lengtAlpha= kumpulanHuruf.length ;
let lengthTotal = lengthNum + lengtAlpha

const newArr=[];

for (let index = 0; index < lengthTotal - 1; index++) {
       if(index < lengtAlpha){
        newArr.push(kumpulanHuruf[index])
       }
       if (index < lengthNum){
        newArr.push(kumpulanAngka[index])
       }
    
}
console.log(newArr);

