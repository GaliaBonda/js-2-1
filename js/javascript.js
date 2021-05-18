'use strict'

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
let btnShowImg = document.getElementById('btn-show-img');
let btnShowImgs = document.getElementById('btn-show-imgs');
let container = document.querySelector('.container');

let clicksField = document.createElement('div');
let clicksFieldParagraph = document.createElement('p');
let paragraphText = document.createTextNode("Clicks number: " + clicksCounter);
clicksFieldParagraph.appendChild(paragraphText);
clicksField.appendChild(clicksFieldParagraph);
let parent = document.querySelector('.exercise:nth-child(5)');
parent.appendChild(clicksField);

let inputToTextArea = document.getElementById("many-links-input");
let parentLi = document.querySelector('.exercise:nth-child(9)');
let textArea = document.createElement("textarea");
parentLi.replaceChild(textArea, inputToTextArea);

let monitor = document.createElement('div');
let exercisesBlock = document.querySelector('.exercises');
container.insertBefore(monitor, exercisesBlock);
monitor.style.border = "2px solid black";
monitor.style.width = "100px";
monitor.style.height = "240px";
monitor.style.position = "fixed";
monitor.style.right = "30px";
monitor.style.padding = "10px";
let coursorMonitor = document.createElement('p');
monitor.appendChild(coursorMonitor);
coursorMonitor.innerText = "X: " +  "\n Y: ";
let languageMonitor = document.createElement('p');
monitor.appendChild(languageMonitor);
let geoMonitor = document.createElement('p');
monitor.appendChild(geoMonitor);
geoMonitor.innerText = "Geolocation is requested... ";


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
btnShowImg.addEventListener("click", addImage);
btnShowImgs.addEventListener("click", addImages);
window.addEventListener("mousemove", showCoursorCoordinates);
window.addEventListener("load", showLanguage);
window.addEventListener("load", showGeo);

function showGeo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeoCoordinates);
  } else { 
    geoMonitor.innerText = "Geolocation is not supported by this browser.";
  }
}

function showGeoCoordinates(position) {
    geoMonitor.innerText = "Latitude: " + position.coords.latitude + 
  "\n Longitude: " + position.coords.longitude;
}

function showLanguage() {
    languageMonitor.innerText = "Language \n" + navigator.language;
}

function showCoursorCoordinates(event) {
    coursorMonitor.innerText = "X: " + event.clientX + "\n Y: " + event.clientY;
}

function addImages() {
    let links = textArea.value.split('\n');
    for (let i = 0; i < links.length; i++) {
        let imgField = document.createElement('div');
        let img = document.createElement('img');
        let parentToAppend = document.querySelector('.exercise:nth-child(9)');
        imgField.appendChild(img);
        parentToAppend.appendChild(imgField);
        img.src = links[i];
        img.style.width = "50%";
    }
}

function addImage() {
    let inputLink = document.getElementById('link-input');
    let imgField = document.createElement('div');
    let img = document.createElement('img');
    let parentToAppend = document.querySelector('.exercise:nth-child(8)');
    imgField.appendChild(img);
    parentToAppend.appendChild(imgField);
    img.src = inputLink.value;
    img.style.width = "50%";
}

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
    for (let i = 0; i < blocks3.length; i++) {
        if (blocks3[i].classList.contains('hidden')) {
            blocks3[i].classList.remove('hidden');
        } else {
            blocks3[i].classList.add('hidden');
        }
        
    }
}

function hideBySelector() {
    let selectorName = document.getElementById('selector-input').value;
    let elementsToHide = document.querySelectorAll(selectorName);
    for (let i = 0; i < elementsToHide.length; i++) {
        if (elementsToHide[i].classList.contains('hidden')) {
            elementsToHide[i].classList.remove('hidden');
        } else {
            elementsToHide[i].classList.add('hidden');
        }
    }
}

