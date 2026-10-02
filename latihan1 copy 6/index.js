// Di Modul ini kita akan belajar tentang sort, reverse, join, concat
const numbers = [3, 1, 4, 2, 5];
const current = numbers.slice();
// sort() => mengurutkan array dari kecil ke besar

const Numbersorted = numbers.sort();

Numbersorted.map((number, index) =>
{
    console.log('Index ke- ' + index + ' adalah ' + number);
})


// reverse() => membalikkan urutan array
const Numberreversed = numbers.reverse();

Numberreversed.map((number, index) =>
{
    console.log('Index ke- ' + index + ' adalah ' + number);
})


// join() => menggabungkan semua elemen array menjadi string
const Numberjoined = current.join(", ");

console.log("ini adalah: " + Numberjoined); 

numbers.map((number, index) => {
    console.log('Index ke- ' + index + ' adalah ' + number);
});


const concatenated = numbers.concat(current);

console.log("concate: " + concatenated);