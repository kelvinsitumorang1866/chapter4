let age;

function ageCategory(age){
        if(typeof age !== "number" || age < 0){
            return "input wrong";
        }
    else if(age >= 0 && age <=12){
        return "Anak - Anak";
    } else if( age >= 13  && age <= 19 ){
        return "Remaja";
    } else if( age >= 20 &&  age <= 35){
        return "Dewasa";
    } else if(age >= 36){
        return "Lanjut Usia";
    }

}

console.log("============ Soal Satu ============");

console.log(ageCategory(13));
// Output: Anak-anak

console.log(ageCategory(15));
// Output: Remaja

console.log(ageCategory(25));
// Output: Dewasa

console.log(ageCategory(40));
// Output: Lanjut Usia



function parkFee(duration, day, nationalDayOff){
     if( duration <=1){
        total= 10000;
        
     }
     if(duration >= 1 ){
   let total = 10000;
    for (let index = 1; index < duration; index++) {
        total += 5000
        
    }
        if( day =="minggu"){
      total += 5000}
        if(duration >5){
            total -=10000
        }

        if(total >30000 && nationalDayOff == "true"){
            total -= 7000
        }
    return total;
 } 
}

console.log("============ Soal Dua ============");
console.log(parkFee(2, 'Sabtu', false));
console.log(parkFee(6,"minggu","true"));


function jadwalFestival(hari,cuaca,suhu,angin){
 let acara = [];

 
 
 if (cuaca == "hujan" && angin < 20){
     acara.push("acara dalam ruangan");
     
    }
    if (suhu < 5){
        acara.push("acara indoor")
    }
    if(cuaca == "Cerah" && suhu >25){
        acara.push("pesta es krim");
    }
    if (hari == "Minggu" && cuaca == "Cerah"){
        acara.push("marathon senja");
    } 
    if(angin > 20){
        acara.pop("pesta es krim", "marathon senja")
    }
    acara.push("pameran seni");
               
return acara;

}

console.log("============ Soal tiga ============");
console.log('Daftar acara ==>',jadwalFestival('Sabtu', 'hujan', 23, 30));
console.log( 'Daftar acara ==>' , jadwalFestival('Sabtu', 'hujan', 23, 10));
console.log('Daftar acara ==>' ,jadwalFestival('Minggu', 'Cerah', 27, 8));
console.log('Daftar acara ==>' ,jadwalFestival('senin', 'Cerah', 27, 10));





function evenNumb(x) {
    let number = [];
    for (let index = 1; index < x; index++) {
        if (index%2 == 0){
        number.push(index);
        }
        
    }
    return number;
}

console.log("-----------------GENAP -> 100--------------");
console.log(evenNumb(100));;

function sumNum(x){
i = 1;
let total = 0;
while(i <= 100){
    total += i;
    i++;
}
return total
}
console.log("-----------------jumlah -> 100--------------");
console.log(sumNum(100));



function rightTriangle(x){
    let stars =" ";
    for (let index = 0; index <= x; index++) {
        for (let j = 0; j < index; j++) {
           stars += "x";
        }
        stars += '\n';
        
    }
    return stars;
}
console.log("-----------------segitiga siku--------------");
console.log(rightTriangle(5));


function segitigaTerbalik(x){
    let stars = "";
    for (let index = 0; index <= x ; index++) {
        for (let j = x; j > index; j--) {
            stars += "x";
         }
         stars += '\n';
        
    }
    return stars;
}
console.log("-----------------segitiga terbalik--------------");
console.log(segitigaTerbalik(5));

function diamond(size) {
    let col = size * 2 - 1;
    for (let i = 1; i <= size; i++) {
      let s = "";
      for (let j = 1; j <= col; j++) {
        if (j >= size + 1 - i && j <= size - 1 + i) {
          s += "*";
        } else {
          s += " ";
        }
      }
      console.log(s);
    }
    for (let i = size - 1; i >= 1; i--) {
      let s = "";
      for (let j = 1; j <= col; j++) {
        if (j >= size + 1 - i && j <= size - 1 + i) {
          s += "*";
        } else {
          s += " ";
        }
      }
      console.log(s);
    }
  }
  console.log(diamond(5));


function rightNum(x){
    let stars ="";
    for (let index = 0; index <= x; index++) {
        for (let j = 1; j <= index; j++) {
           if(j => 1 ){
            stars += "*";
           }
            stars += j ;
            
        }
        stars += '\n';
        
    }
    return stars;
}
console.log(rightNum(5));