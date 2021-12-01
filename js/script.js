// alert ('ciao');
// creare gli elementi da inserire nel dom della sezione header 
let containerHeader = document.querySelector('.col-3');
// console.log(containerHeader);
let difficulty = document.createElement('span');
const string = 'Difficoltà:';
difficulty.classList.add('fs-3', 'me-2')
difficulty.append(string);
containerHeader.append(difficulty);



// far vedere la griglia al click della option
let easy = document.getElementById('easy'); 
console.log(easy);
easy.addEventListener('click', function() {   
    // creazione della griglia 10x10 
    let containerMain = document.querySelector('.col-6');
    // containerMain.innerHTML = '';
    for (let counter = 1; counter <= 100; counter++) {
        // console.log(counter);
        const element = document.createElement('div');
        element.classList.add('box');
        element.innerHTML = counter;
        containerMain.append(element);
    }
});


// // creazione della griglia 9x9
// let containerMain = document.querySelector('.col-6');
// for (let counter = 1; counter <= 81; counter++) {
//     // console.log(counter);
//     const element = document.createElement('div');
//     element.classList.add('box');
//     element.innerHTML = counter;
//     containerMain.append(element);
// }

// // creazione della griglia 7x7
// let containerMain = document.querySelector('.col-6');
// for (let counter = 1; counter <= 49; counter++) {
//     // console.log(counter);
//     const element = document.createElement('div');
//     element.classList.add('box');
//     element.innerHTML = counter;
//     containerMain.append(element);
// }