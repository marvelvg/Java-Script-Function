const numbers = [1, 2, 3, 4, 5];

// FUNGSI KE 1 BELAJAR MAPPING MAP()

// Buat array baru setiap angka di kali 5

const doubled = numbers.map((number) => {
    return number * 5;
});

doubled.forEach((number) => {
    console.log(number);
});