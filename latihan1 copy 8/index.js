// DI MODUL INI KITA AKAN BELAJAR MENGENAI OBJECT
const laptop = {
    merk: "Asus",
    tipe: "ROG",
    harga: 20000000,
    spesifikasi: {
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD"
    },
    fitur: ["Backlit Keyboard", "Fingerprint Sensor", "RGB Lighting"]
};

// Object.keys
const keys = Object.keys(laptop);
console.log("Keys: " + keys);

// Object.values
const values = Object.values(laptop);
console.log("Values: " +   values);

// Object.entries
const entries = Object.entries(laptop);
console.log("sjsjEntries: " + entries);

const card = laptop.map((value, index) => {
    console.log("Brand : " + value.merk);
    console.log("Tipe : " + value.tipe);
    console.log("Harga : " + value.harga);

})