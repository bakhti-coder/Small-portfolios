// s1. Satrdagi undoshlar(tinish belgilari va bo'sh joylar ham kiradi) va unlilar soni
// o’rtasidagi farqni topuvchi getDif() funksiya tuzilsin. vowels = 'aiuoe'

// input: "Men kelajakda kuchli dasturchi bo'laman";
// output:

// Jami:  39
// Unlilar:  13
// Undoshlar:  26
// 13

// s2. Satrdagi eng uzun va eng qisqa so'zlarni uzunligini ayirmasini qaytaruvchi getDifMaxMin(str) funksiya tuzing

// input:

// let str =
//   "Satrdagi eng uzun va eng qisqa so'zlarni uzunligini ayirmasini qaytaruvchi funksiya tuzing";

// output:

// min_word: va
// max_word: qaytaruvchi
// 9

// obj1. Sonlardan iborat massiv argument sifatida kiritilganda,
// propertysi o’sha sonlardan, qiymati esa ularning necha xonali ekanligidan iborat bo’lgan
// object qaytaradigan getNumberDigit(arr) funksiya tuzilsin.

// input: [10, 453, 89, 589, 9034, 28574, 184, 73901, 5];

// output:

// {
//   '5': 1,
//   '10': 2,
//   '89': 2,
//   '184': 3,
//   '453': 3,
//   '589': 3,
//   '9034': 4,
//   '28574': 5,
//   '73901': 5
// }


// obj2. Object ichidagi truthy va falsy qiymatga ega propertylardan alohida objectlar tuzilsin;

// input: obj = {
//   a: false,
//   b: 12,
//   c: '',
//   d: "salom",
//   e: 102,
//   f: null,
//   g: -1
// }

// output: 

// falsy: {a: false, c: '', f: null}
// truthy: {b: 12, d: "salom", e: 102, g: -1}

// 3. Yonidagi qo’shnilarini yig'insidan iborat
// yangi massiv qaytaruvchi getCloseSum(arr) funksiya tuzilsin.

// input: [10, 5, 7, 8, 11, 3, 1, 6];

// output: [15, 22, 20, 26, 22, 15, 10, 7]

// 4. Products massivi hamda mahsulotlar id sidan iborat massiv berilgan.
// Id lar massivi ichidagi mahsulotlar narxlari yi'gindisi getTotalPrice(products, ids) funksiyasi tuzilsin.

// input:

// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// let ids = [1, 4, 8];

// output: 900