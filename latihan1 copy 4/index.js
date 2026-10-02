// DI FUNGSI INI KITA AKAN BELAJAR REDUCE
const priceList = [10000, 20000, 30000, 40000, 50000];

// MENGHITUNG JUMLAH TOTAL
// reduce(accumulator, currentValue) => { return accumulator + currentValue; }, initialStartingValue)
const totalHarga = priceList.reduce((total, harga) => {
    return total + harga;
}, 0);

console.log(totalHarga);

const Hargatertinggi = priceList.reduce((max, harga) => {
    return harga > max ? harga : max;
}, 0);

console.log(Hargatertinggi);

const jumlahPriceList = priceList.reduce((count, harga) => {
    return count + 1;
}, 0);

console.log(jumlahPriceList);