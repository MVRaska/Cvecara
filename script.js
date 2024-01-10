let inRuza = document.getElementById('ruza');
let inLili = document.getElementById('lili');
let inGerber = document.getElementById('gerber');

let btnCheck = document.querySelectorAll('input[type="checkbox"]');
let btnRadioKartica = document.getElementById('kartica');

let divIspis = document.getElementById('ispis');

let btnIzracunaj = document.getElementById('izracunaj');
let btnResetuj = document.querySelector("input[type='reset']");

btnIzracunaj.addEventListener('click', (e) => {
    e.preventDefault();

    let cena = 0;

    let brRuza = inRuza.value;
    let brLili = inLili.value;
    let brGerbera = inGerber.value;
    
    if(brRuza % 1 != 0 && brRuza < 0 || 
        brLili % 1 != 0 && brLili < 0 || 
        brGerbera % 1 != 0 && brGerbera < 0) {
        divIspis.innerHTML = '';
            if(brRuza % 1 != 0 && brRuza < 0) {
                alert('Pogrešan unos broja cvetova ruze');
            } else if(brLili % 1 != 0 && brLili < 0) {
                alert('Pogrešan unos broja cvetova ljiljana');
            } else {
                alert('Pogrešan unos broja cvetova gerbera');
            }
        } else {
            divIspis.innerHTML = `<h2>Vaša porudžbina:</h2>`;
            for(let i = 1; i <= brRuza; i++) {
                divIspis.innerHTML += `<img src='rose.jpg'>`;
                cena += 150;
            }
            divIspis.innerHTML += '<br>';
            for(let i = 1; i <= brLili; i++) {
                divIspis.innerHTML += `<img src='lily.jpg'>`;
                cena += 120;
            }
            divIspis.innerHTML += '<br>';
            for(let i = 1; i <= brGerbera; i++) {
                divIspis.innerHTML += `<img src='gerber.jpg'>`;
                cena += 70;
            }
            
            btnCheck.forEach(box => {
                if(box.id == 'bombo' && box.checked) {
                    divIspis.innerHTML += '<br> + bombonjera';
                    cena += 500;
                }
                if(box.id == 'coko' && box.checked) {
                    divIspis.innerHTML += '<br> + čokolada';
                    cena += 500;
                }
                if(box.id == 'sampanj' && box.checked) {
                    divIspis.innerHTML += '<br> + šampanjac <br>';
                    cena += 500;
                }
            });
            divIspis.innerHTML += `<p>Cena bez popusta je: ${cena} din.</p>`;

            if(btnRadioKartica.checked && cena > 2000) {
                cena = cena * 0.9;
                divIspis.innerHTML += `<br><p style= 'font-size: 20px;'>Cena sa popustom je: <span>${cena} din<span>.</p>`;
            }
        }
});

btnResetuj.addEventListener('click', () => {
    divIspis.innerHTML = '';
});
