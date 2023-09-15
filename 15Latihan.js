/**
 * Latihan Callback dengan skenario belanja
 * 
 * Saldo awal sebesar Rp100.000. Anda ingin berbelanja di sebuah toko dengan urutan sebagai berikut:
 * 1. Membeli buku seharga Rp50.000.
 * 2. Membeli pulpen seharga Rp20.000.
 * 3. Membeli penghapus seharga Rp10.000.
 * 4. Membeli pensil seharga Rp5.000.
 * 
 * Tugas:
 * 1. Buatlah fungsi belanja yang menerima saldo awal, harga barang, dan sebuah callback.
 * 2. Fungsi tersebut akan mengurangi saldo dengan harga barang, lalu memanggil callback dengan sisa saldo setelah pembelian.
 * 3. Jika saldo tidak mencukupi untuk pembelian, fungsi harus menampilkan pesan "Uang tidak mencukupi" dan tidak memanggil callback.
 * 4. Gunakan fungsi belanja untuk melakukan setiap pembelian dengan urutan yang sudah ditentukan.
 * 5. Setelah setiap pembelian, tampilkan sisa saldo Anda.
 * 
 */

let hargaBuku = 50000
let barang1 = "Buku"

let barang2 = "Pulpen"
let hargaPulpen = 20000

let barang3 = "Penghapus"
let hargaPenghapus = 10000

let barang4 = "Pensil"
let hargaPensil = 5000
// let functionCB = function (sisaSaldo);

let saldoAwal = 100000

function belanja(saldoAwal, hargaBarang, jenisBarang, callback) {
    
    if (saldoAwal >= hargaBarang) {
        saldoAwal -= hargaBarang
        console.log(`Membeli ${jenisBarang} dengan harga ${hargaBarang}. Dan sisa saldo adalah ${saldoAwal}`);
        callback(saldoAwal)
    }else {
        console.log("Duh uangnya ga cukup, silahkan nabung");
    }
}


// s




//Output:
// Membeli buku dengan harga Rp50.000. Sisa saldo: Rp50.000.
// Membeli pulpen dengan harga Rp20.000. Sisa saldo: Rp30.000.
// Membeli penghapus dengan harga Rp10.000. Sisa saldo: Rp20.000.
// Membeli pensil dengan harga Rp5.000. Sisa saldo: Rp15.000.

// ============================================================================================================================

/**
 * Buatlah tiga fungsi yang masing-masing mengembalikan Promise. 
 * Fungsi pertama langkahPertama di-resolve DALAM 2 DETIK dengan pesan "Langkah 1 selesai", 
 * fungsi kedua langkahKedua di-resolve DALAM 3 DETIK dengan pesan "Langkah 2 selesai", dan 
 * fungsi ketiga langkahKetiga di-resolve DALAM 1 DETIK dengan pesan "Langkah 3 selesai".
 * Panggil ketiga fungsi tersebut secara berurutan menggunakan chaining sehingga pesan ditampilkan dalam urutan yang benar.
 */
  


/**
 * Ubahlah chaining Promise dari soal sebelumnya menjadi sebuah fungsi async yang menggunakan await untuk menunggu setiap langkah selesai sebelum melanjutkan ke langkah berikutnya.
 */



/**
 * Ubahlah Callback hell Belanja menjadi fungsi yang mengembalikan Promise
 */



/**
 * Error Handling dengan Async/Await
 * Buatlah sebuah fungsi async pembagian yang menerima dua argumen, pembilang dan penyebut. 
 * Fungsi tersebut harus mengembalikan hasil bagi jika penyebut bukan 0 dan melempar sebuah kesalahan jika penyebut adalah 0. 
 * Tangani kesalahan tersebut menggunakan blok try/catch dalam fungsi async.
 */


function langkahPertama() { 
    return new Promise( (resolve) => {
        setTimeout(() =>{
            resolve("langkah 1 selesai");}, 2000)
        
    })
    
}

function langkahKedua() {
    return new Promise( (resolve) => {
        setTimeout(() =>{
            resolve("langkah 2 selesai");}, 3000)
        
    })
}

function langkahKetiga() {
    return new Promise( (resolve) => {
        setTimeout(() =>{
            resolve("langkah 3 selesai");}, 1000)
        
    })
    
}


langkahPertama()
    .then((data)=> {
        console.log(data);
        return langkahKedua();
    })
    .then ((data) => {
        console.log(data);
        return langkahKetiga();
    })
    .then((data) => {
        console.log(data);
                
    })
    .catch((err) => {
        console.log( err,"==>error");
    })


     async function solverProblem (){
        let pertama1 = await langkahPertama();
        let kedua2 =  await langkahKedua();
        let ketiga3 = await langkahKetiga ();
        console.log("-------------async---------")
        console.log(pertama1);
        console.log(kedua2);
        console.log(ketiga3);
     }       

     solverProblem()



     function belanja1(saldoAwal, hargaBarang, jenisBarang){
        return new Promise((resolve, reject) => {
            if (saldoAwal >= hargaBarang) {
                saldoAwal -= hargaBarang
                
                resolve(saldoAwal, `Membeli ${jenisBarang} dengan harga ${hargaBarang}. Dan sisa saldo adalah ${saldoAwal}`);
            }else {
                reject("Duh uangnya ga cukup, silahkan nabung");
            }
            
        })
     }

     belanja1()
                .then((sisaSaldo) => belanja1(saldoAwal, hargaPulpen, barang2))
                .then((sisaSaldo) => belanja1(sisaSaldo, hargaPenghapus, barang3))
                .then((sisaSaldo) => belanja1(sisaSaldo, hargaPensil, barang4))
                .then((sisaSaldo) => belanja1(sisaSaldo, hargaPenghapus, barang3))
                .then((sisaSaldo) => belanja1(sisaSaldo, hargaBuku, barang1))
                .catch((error) => {
                console.log(error);
            });


async function  pembagian(pembilang, penyebut) {
   try {
        if (penyebut === 0) {
            throw new Error("error input");
        }else{
            return pembilang/penyebut;   
        } 
   }catch (error) {
        return error;   
   }
   
                
}
pembagian(4,2)
    .then((data) => {console.log(data);
    })
    .catch((error) =>{
        console.log(error);

    })