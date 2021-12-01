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
let button = document.getElementById('button'); 
// console.log(button);
button.addEventListener('click', function() {   
    // creazione della griglia 10x10 
    let containerMain = document.querySelector('.grid-container');
    let select = document.getElementById('select');
    let value = select.value;
    if (value == 'easy'){
        containerMain.innerHTML = '';
        for (let counter = 1; counter <= 100; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = counter;
            containerMain.append(element);
        }
    }
    else if (value == 'hard') {
        containerMain.innerHTML = '';
        for (let counter = 1; counter <= 81; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = counter;
            containerMain.append(element);
        }
        
    }
    else {
        containerMain.innerHTML = '';
        for (let counter = 1; counter <= 49; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.innerHTML = counter;
            containerMain.append(element);
        }
    }
    
});