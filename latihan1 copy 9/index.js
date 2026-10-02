const laptop = [{
    merk: "Asus",
    tipe: "ROG",
    harga: 20000000,
    stok : 5,
    spesifikasi: {
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD"
    },
    fitur: ["Backlit Keyboard", "Fingerprint Sensor", "RGB Lighting"]
},
{
    merk: "Acer",
    tipe: "Predator",
    harga: 25000000,
    stok : 2,
    spesifikasi: {
        processor: "Intel Core i9",
        ram: "32GB",
        storage: "2TB SSD"
    },
    fitur: ["Backlit Keyboard", "Fingerprint Sensor", "RGB Lighting"]   
},

{
    merk: "Lenovo",
    tipe: "Legion",
    harga: 15000000,
    stok : 3,
    spesifikasi: {
        processor: "Intel Core i5",
        ram: "8GB",
        storage: "512GB SSD"
    },
    fitur: ["Backlit Keyboard", "Fingerprint Sensor", "RGB Lighting"]
}

];

// STUDY CASE 
const laptopFiltered = laptop.filter((value, index) => {
    return value.harga < 20000000;
});

console.log(laptopFiltered);

const laptopFound = laptop.find((value, index) => {
    return value.merk === "Acer";
});

console.log(laptopFound ? `${laptopFound.merk} ${laptopFound.tipe} ditemukan` : "Laptop tidak ditemukan");
console.log("laptop index:" + laptop.findIndex((value, index) => {
    return value.merk === "Acer";
}));
console.log("=======================");

console.log("Laptop yang masih tersedia di stok : ");
const laptopinStock = laptop.filter((value, index) =>
{
    return value.stok > 0;
});

console.log(laptopinStock);

const LaptopFilteredPrice = laptop.filter((value, index) => {
    return value.harga < 20000000;
});

console.log("Laptop yang harganya dibawah 20 juta : ");
console.log(LaptopFilteredPrice);

const ProductName = laptop.map((value, index) => {
    console.log("Brand : " + value.merk);
})

const TotalHargaStok = laptop.reduce((item, value) => {
    return item + (value.harga * value.stok);
}, 0);

console.log("Total Harga Semua Laptop yang tersedia di stok : " + TotalHargaStok);

// URUTKAN BERDASARKAN HARGA
const sortedPrice = laptop.slice().sort((a, b) => {
    return a.harga - b.harga;
})

console.log("Termurah ke termahal : ",  sortedPrice);
console.log("Mahal ke termurah : " ,  sortedPrice.slice().reverse());

// LIST PRODUK YANG KITA JUAL

const ProductList = laptop.map((item, index) => {
    return `${item.merk} ${item.tipe}`;    
}).join(", ");;

console.log(ProductList);