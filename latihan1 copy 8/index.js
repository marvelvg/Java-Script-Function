// DI MODUL INI KITA AKAN BELAJAR MENGENAI OBJECT
const laptop = [{
    merk: "Asus",
    tipe: "ROG",
    harga: 20000000,
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
    spesifikasi: {
        processor: "Intel Core i5",
        ram: "8GB",
        storage: "512GB SSD"
    },
    fitur: ["Backlit Keyboard", "Fingerprint Sensor", "RGB Lighting"]
}

];

// Object.keys
const keys = Object.keys(laptop[0]);
console.log("Keys: " + keys);

// Object.values
const values = Object.values(laptop[0]);
console.log("Values: " +   values);

// Object.entries
const entries = Object.entries(laptop[0]);
console.log("sjsjEntries: " + entries);

const card = laptop.map((value, index) => {
    console.log("Brand : " + value.merk);
    console.log("Tipe : " + value.tipe);
    console.log("Harga : " + value.harga);

})