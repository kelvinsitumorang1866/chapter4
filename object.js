//no1
let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]
let amount = [4, 6, 6, 5]
let objNew = {};
for (let index = 0; index < fruits.length; index++) {
   objNew[fruits[index]] = amount[index];
  
}
console.log(objNew);
//no2
let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh";
let favwordConvert = favWord.split(" ");

const count = {};

favwordConvert.forEach(element => {
  count[element] = (count[element] || 0) + 1;
  
});


console.log(count);


//no3
const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
  ]
//   let umurDewi = people[3].usia


  function cekUsia(nama){
    people.forEach((i) => {
            if(i.nama == nama){
                console.log(i.usia)
            }

    })

  }
let umurDewi = cekUsia("Dewi");
const arr20 = [];
collectionUmur ={};
people.forEach(person => {
  const { nama, usia } = person;
  if (!collectionUmur[usia]) {
      collectionUmur[usia] = [];
  }
  collectionUmur[usia].push({ nama, usia });
});console.log(collectionUmur);


const data = {
  user: {
      profile: {
          name: "John Doe",
          address: {
              city: "Jakarta",
              postalCode: "12345"
          }
      }
  }
};

let result = data.user.profile.address.city;
console.log(result);

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];
const hitungSuara = {};
suara.forEach(element => {
  hitungSuara[element] = (hitungSuara[element] || 0) + 1;
});


console.log(hitungSuara);

const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };


const hasilGabungan = {
    a: obj1.a + obj2.a + obj3.a,
    b: obj1.b + obj2.b + obj3.b,
    c: obj1.c + obj2.c + obj3.c
};
console.log(hasilGabungan);

const orang = {
  nama: "Budi",
  alamat: {
      jalan: "Jl. Raya",
      kota: "Jakarta",
      kodePos: "10000"
  },
  kontak: {
      email: "budi@mail.com",
      telepon: "080080080"
  }
};

// Fungsi untuk merubah objek dengan kunci yang disusun ulang
function susunUlangObjek(obj, parentKey = "") {
  let result = {};

  for (let key in obj) {
      if (typeof obj[key] === "object") {
          const nestedKeys = susunUlangObjek(obj[key], `${parentKey}_${key}`);
          result = { ...result, ...nestedKeys };
      } else {
          result[`${parentKey}_${key}`] = obj[key];
      }
  }

  return result;
}

// Memanggil fungsi susunUlangObjek dengan objek orang
const hasilSusunanUlang = susunUlangObjek(orang);

console.log(hasilSusunanUlang);



const mahasiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ana", nilai: 90 },
  { nama: "Dono", nilai: 78 },
  { nama: "Dewi", nilai: 92 }
];
let arrEmpty = []


mahasiswa.forEach(element => {
  
  arrEmpty.push(element.nilai)
})
let nilaiMax = Math.max(...arrEmpty)

console.log(nilaiMax);
const filteredResult = mahasiswa.find((e) => e.nilai == nilaiMax);
console.log(filteredResult);


const kota = {
  Jakarta: 10,
  Bandung: 5,
  Surabaya: 7,
  Medan: 4
};

const hasilArray = [];

for (let namaKota in kota) {
  const nilai = kota[namaKota];
  hasilArray.push({ namaKota, nilai });
}

console.log(hasilArray[1]);