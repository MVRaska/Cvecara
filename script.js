let inRose = document.getElementById('rose');
let inLily = document.getElementById('lily');
let inGerbera = document.getElementById('gerbera');

let giftCheckboxes = document.querySelectorAll('input[type="checkbox"]');
let radioCard = document.getElementById('card');

let outputDiv = document.getElementById('output');

let btnCalculate = document.getElementById('calculate');
let btnReset = document.getElementById('reset');

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();

    let price = 0;

    let numRoses = inRose.value;
    let numLilies = inLily.value;
    let numGerberas = inGerbera.value;
    
    if((numRoses % 1 != 0 || numRoses < 0) || 
       (numLilies % 1 != 0 || numLilies < 0) || 
       (numGerberas % 1 != 0 || numGerberas < 0)) {
        alert('Invalid flower quantity input');
        outputDiv.innerHTML = '';
    } else {
        outputDiv.innerHTML = `<h2>Your order:</h2>`;
        for(let i = 1; i <= numRoses; i++) {
            outputDiv.innerHTML += `<img src='rose.jpg'>`;
            price += 150;
        }
        outputDiv.innerHTML += '<br>';
        for(let i = 1; i <= numLilies; i++) {
            outputDiv.innerHTML += `<img src='lily.jpg'>`;
            price += 120;
        }
        outputDiv.innerHTML += '<br>';
        for(let i = 1; i <= numGerberas; i++) {
            outputDiv.innerHTML += `<img src='gerber.jpg'>`;
            price += 70;
        }
        
        giftCheckboxes.forEach(box => {
            if(box.id === 'choco_box' && box.checked) {
                outputDiv.innerHTML += '<br> + box of chocolates';
                price += 500;
            }
            if(box.id === 'chocolate' && box.checked) {
                outputDiv.innerHTML += '<br> + chocolate';
                price += 500;
            }
            if(box.id === 'champagne' && box.checked) {
                outputDiv.innerHTML += '<br> + champagne <br>';
                price += 500;
            }
        });
        outputDiv.innerHTML += `<p>Price without discount: ${price} RSD.</p>`;

        if(radioCard.checked && price > 2000) {
            price = price * 0.9;
            outputDiv.innerHTML += `<br><p style='font-size: 20px;'>Price with discount: <span>${price} RSD</span>.</p>`;
        }
    }
});

btnReset.addEventListener('click', () => {
    outputDiv.innerHTML = '';
});
