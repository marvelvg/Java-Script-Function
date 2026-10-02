const students = [
    {
        name: "Marvel",
        major: "Informatics",
        age: 19,
        gpa: 3.8
    },
    {
        name: "Andi",
        major: "Information Systems",
        age: 20,
        gpa: 3.2
    },
    {
        name: "Budi",
        major: "Informatics",
        age: 21,
        gpa: 3.6
    },
    {
        name: "Citra",
        major: "Computer Engineering",
        age: 19,
        gpa: 3.9
    },
    {
        name: "Doni",
        major: "Informatics",
        age: 22,
        gpa: 2.9
    }
];

const findStudent = students.find((nama, index) => {
    return nama.name === "Marvel";
})

console.log(findStudent.name + " Ketemu");

const FilteredStudent = students.filter((nama, index) => {
    return nama.major == "Informatics";
});

console.log(FilteredStudent);

const mapStudent = students.map((nama, index) => {
    console.log(nama.name);
});

const someStudent = students.some((name, index) => {
    return name.gpa >= 3.9;
});

console.log(someStudent ? "Ada CUYY" : "Tidak ada");

const StudentAverage = students.reduce((acc, student) => {
    return acc + student.gpa;
}, 0) / students.length;

console.log(StudentAverage);


// URUTKAN MAHASISWA DARI GPA TERBESAR
// SORT

const StudentFilteredDescending = students.slice().sort((nama, index) => {
    return nama.gpa - index.gpa;
})

console.log(StudentFilteredDescending.reverse());

const tampilanMahasiswa = students.map((a, b) => {
    console.log(a.name + " -  " + a.major + " - GPA " + a.gpa );
}).join(" \n");