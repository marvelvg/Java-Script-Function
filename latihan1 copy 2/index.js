// DI LATIHAN KE 2 KITA AKAN BELAJAR TENTANG FILTERING, FIND DAN FINDINDEX

const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Alice", age: 35 },
];

// FUNGSI 1 FILTER
// Mengambil user yang umurnya di atas 25 TAHUN

const Adult = users.filter((user) => {
    return user.age > 25;
})

Adult.forEach((user) => {
    console.log(user);
});

// FUNGSI 2 FIND
// Mengambil user yang namanya "Bob"
const userPicked = users.find((user)=>{
    return user.name === "Bob"
})

console.log(userPicked);

const userPickedIndex = users.findIndex((user)=>{
    return user.name === "Bob"
});

console.log(userPickedIndex + 1);