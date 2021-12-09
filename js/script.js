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
        let col = 10;
        let row = 10;
        for (let counter = 1; counter <= 100; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.style.width = `calc(100% / ${col})`;
            element.style.width = `calc(100% / ${row})`;
            element.addEventListener('click', function (){
                element.classList.add('bg-white');
            }
            );
            element.innerHTML = counter;
            containerMain.append(element);
        }
    }
    // creazione della griglia 9x9
    else if (value == 'hard') {
        containerMain.innerHTML = '';
        let col = 9;
        let row = 9;
        for (let counter = 1; counter <= 81; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.style.width = `calc(100% / ${col})`;
            element.style.width = `calc(100% / ${row})`;
            element.addEventListener('click', function () {
                element.classList.add('bg-white');
            }
            );
            element.innerHTML = counter;
            containerMain.append(element);
        }
    }
    // creazione della griglia 7x7
    else {
        containerMain.innerHTML = '';
        let col = 7;
        let row = 7;
        for (let counter = 1; counter <= 49; counter++) {
            // console.log(counter);
            const element = document.createElement('div');
            element.classList.add('box');
            element.style.width = `calc(100% / ${col})`;
            element.style.width = `calc(100% / ${row})`;
            element.addEventListener('click', function () {
                element.classList.add('bg-white');
            }
            );
            element.innerHTML = counter;
            containerMain.append(element);
        }
    }
});