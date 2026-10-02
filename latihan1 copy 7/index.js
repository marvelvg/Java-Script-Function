const text = " Javascript is a programming language that is commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. JavaScript allows developers to create responsive user interfaces, manipulate the Document Object Model (DOM), and handle events such as user input. It is an essential technology alongside HTML and CSS, enabling the creation of modern web applications.";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

const isThere = text.includes("JavaScript");
console.log(isThere ? "Ada" : "Tidak Ada");

const isThere2 = text.includes("JavaScript", 10);
console.log(isThere2 ? "Ada" : "Tidak Ada");

const startWith = text.startsWith("Javascript");
console.log(startWith ? "Ya" : "Tidak");

const endWith = text.endsWith("applications.");
console.log(endWith ? "Ya" : "Tidak");

const trimmed = text.trim();
console.log(trimmed);

const splitText = text.split(" ");
console.log(splitText);
