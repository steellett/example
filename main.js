let carusel = document.querySelector('.carusel-imgs');
let rightBut = document.querySelector('.right-button');
let leftBut = document.querySelector('.left-button');

let buttons = document.querySelectorAll('.buttons');
let radioButtons = document.querySelectorAll('[data-id]');
let caruselPos = 0;
document.querySelector('.carusel-carusel').addEventListener('click', event => {



        if (event.target.closest('div').classList.contains('buttons')) {



            if (event.target.closest('.left-button') == leftBut) {
                if (caruselPos <= 0) {
                    caruselPos = 0;
                    leftBut.classList.add('inactive');
                    return;
                }
                caruselPos = caruselPos - 100;
                carusel.style.cssText = `transform: translateX(-${caruselPos}%)`
                if (caruselPos <= 0) {
                    caruselPos = 0;
                    leftBut.classList.add('inactive');


                }
            } else if (event.target.closest('.right-button') == rightBut) {
                if (caruselPos >= 200) {
                    caruselPos = 200;
                    rightBut.classList.add('inactive')
                    return;
                }
                caruselPos = caruselPos + 100;
                carusel.style.cssText = `transform: translateX(-${caruselPos}%)`
                if (caruselPos >= 200) {
                    caruselPos = 200;
                    rightBut.classList.add('inactive')

                }
            }
            checkRadio();
        } else if (event.target.closest('input')) {
            caruselPos = Number(event.target.dataset.id);
            carusel.style.cssText = `transform: translateX(-${caruselPos}%)`
            if (caruselPos > 0) {
                leftBut.classList.remove('inactive');
                if (caruselPos == 200) {
                    rightBut.classList.add('inactive');
                }
            } else if (caruselPos < 200) {
                rightBut.classList.remove('inactive');
                if (caruselPos == 0) {
                    leftBut.classList.add('inactive');
                }
            }
            checkRadio();
        } else {
            return;
        }

        checkButtons(event);
        console.log(caruselPos)

    })
    //проверка на активность кнопок
function checkButtons(event) {

    if ((event.target.closest('.left-button') == leftBut && rightBut.classList.contains('inactive'))) {
        rightBut.classList.remove('inactive');
    } else if ((event.target.closest('.right-button') == rightBut && leftBut.classList.contains('inactive'))) {
        leftBut.classList.remove('inactive');
    }
}


function checkRadio() {

    radioButtons.forEach(button => {
        if (button.dataset.id == caruselPos) {
            button.setAttribute('checked', 'checked');
        } else {
            button.removeAttribute('checked')
        }
    })
}