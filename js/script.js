// alert ('ciao');
// creare gli elementi da inserire nel dom della sezione header 
let containerHeader = document.querySelector('.col-3');
console.log(containerHeader);
let difficulty = document.createElement('span');
const string = 'Difficoltà:';
difficulty.append(string);
containerHeader.append(difficulty);

