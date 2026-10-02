const numbers = [1, 2, 3, 4, 5];

// FUNGSI KE 1 BELAJAR MAPPING MAP()

// Buat array baru setiap angka di kali 5

const doubled = numbers.map((number, index) => {
    return number * 5;
});

doubled.forEach((number, index) => {
    console.log('Index ke- ' + index + ' adalah ' + number);
});