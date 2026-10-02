// ARRAY MANIPULATION

let fruits = ["apple", "Banana", "Cherry", "Orange", "Guava"];

fruits.map((item, index) => {
    console.log('Index ke- ' + index + ' adalah ' + item)
})
// PUSH (Menggunakan sistem stack, menambahkan data di akhir array)
fruits.push("Mango");

console.log("setelah Push");
fruits.map((item, index) => {
    console.log('</br>' + 'Index ke= ' + index + ' adalah ' + item);
})


// POP juga menggunakan sistem stack, mengapus data terakhir dalam array
fruits.pop();
console.log("setelah Pop");

fruits.map((item, index) => {
    console.log('</br>' + 'Index ke= ' + index + ' adalah ' + item);
})


// Unshift (menambahkan data di awal array)
fruits.unshift("Strawberry");
console.log("setelah Unshift");

fruits.map((item, index) => {
    console.log('</br>' + 'Index ke= ' + index + ' adalah ' + item);
})

// Shift (menghapus data di awal array)
fruits.shift();
console.log("setelah Shift");

fruits.map((item, index) => {
    console.log('</br>' + 'Index ke= ' + index + ' adalah ' + item);
})