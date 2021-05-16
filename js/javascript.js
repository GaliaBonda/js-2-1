let btnCss = document.getElementById('btn-css');
let btnJs = document.getElementById('btn-js');
let btnCssJs = document.getElementById('btn-css-js');
let btnHideShow = document.getElementById('btn-hide-show');
let btnHideShowAll = document.getElementById('btn-hide-show-all');
let btnSelectorHide = document.getElementById('hide-by-selector');
let yellowBlock = document.getElementById('yellow-block');
let clicksCounter = 0;
let btnMouseOn = document.getElementById('btn-mouse-show');
let redBlock = document.getElementById('red-block');
let inputFocus = document.getElementById('focus-input');
let greenBlock = document.getElementById('green-block');

let clicksField = document.createElement('div');
let clicksFieldParagraph = document.createElement('p');
let paragraphText = document.createTextNode("Clicks number: " + clicksCounter);
clicksFieldParagraph.appendChild(paragraphText);
clicksField.appendChild(clicksFieldParagraph);
let parent = document.querySelector('.exercise:nth-child(5)');
parent.appendChild(clicksField);

btnCss.addEventListener("click", cssHide);
btnJs.addEventListener("click", jsHide);
btnCssJs.addEventListener("click", cssJsHide);
btnHideShow.addEventListener("click", hideShow);
btnHideShowAll.addEventListener("click", hideShowAll);
btnSelectorHide.addEventListener("click", hideBySelector);
yellowBlock.addEventListener("click", encreaseClicksCounter);
yellowBlock.addEventListener("click", sayHello);
btnMouseOn.addEventListener("mouseover", showRedBlock);
btnMouseOn.addEventListener("mouseout", hideRedBlock);
inputFocus.addEventListener("focus", showGreenBlock);
inputFocus.addEventListener("input", hideGreenBlock);

function hideGreenBlock() {
    greenBlock.classList.add('hidden');
}

function showGreenBlock() {
    greenBlock.classList.remove('hidden');
}

function hideRedBlock() {
    redBlock.classList.add('hidden');
}

function showRedBlock() {
    redBlock.classList.remove('hidden');
}

function sayHello() {
    alert("Hello! One more click and yellow square will disappear! Magic:)");
    if (clicksCounter > 0) removeYellowSquare();
}

function removeYellowSquare() {
    yellowBlock.removeEventListener("click", sayHello);
    yellowBlock.addEventListener("click", function () {
        yellowBlock.remove();
    });
}

function encreaseClicksCounter() {
    clicksCounter++;
    clicksFieldParagraph.innerHTML = "Clicks number: " + clicksCounter;
}

function cssHide() {
    let block1 = document.getElementById('block1');
    block1.style.display = "none";
}

function jsHide() {
    let block1 = document.getElementById('block1');
    block1.remove();
}

function cssJsHide() {
    let block1 = document.getElementById('block1');
    block1.classList.add('hidden');
}

function hideShow() {
    let block2 = document.getElementById('block2');
    if (block2.classList.contains('hidden')) {
        block2.classList.remove('hidden');
    } else {
        block2.classList.add('hidden');
    }
}

function hideShowAll() {
    let blocks3 = document.getElementsByClassName('block3');
    for (b of blocks3) {
        if (b.classList.contains('hidden')) {
            b.classList.remove('hidden');
        } else {
            b.classList.add('hidden');
        }
        
    }
}

function hideBySelector() {
    let selectorName = document.getElementById('selector-input').value;
    let elementsToHide = document.querySelectorAll(selectorName);
    for (el of elementsToHide) {
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }
}

