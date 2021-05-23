'use strict'

// Exercise 1
document.getElementById('btn-css').addEventListener("click", cssHide);
document.getElementById('btn-js').addEventListener("click", jsHide);
document.getElementById('btn-css-js').addEventListener("click", cssJsHide);
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

//Exercise 2
document.getElementById('btn-hide-show').addEventListener("click", hideShowBlock);

function hideShowBlock() {
    let block2 = document.getElementById('block2');
    hideShow(block2);
}

function hideShow(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

//Exercise 3
document.getElementById('btn-hide-show-all').addEventListener("click", hideShowAll);

function hideShowAll() {
    let blocks3 = document.getElementsByClassName('block3');
    for (let i = 0; i < blocks3.length; i++) {
        hideShow(blocks3[i]);
    }
}

//Exercise 4
document.getElementById('hide-by-selector').addEventListener("click",
    hideBySelector);

function hideBySelector() {
    let selectorName = document.getElementById('selector-input').value;
    let elementsToHide = document.querySelectorAll(selectorName);
    for (let i = 0; i < elementsToHide.length; i++) {
        hideShow(elementsToHide[i]);
    }
}

//Exercise 5
let clicksCounter = 0;
let clicksField = document.createElement('div');
let clicksFieldParagraph = document.createElement('p');
let paragraphText = document.createTextNode("Clicks number: " + clicksCounter);
clicksFieldParagraph.appendChild(paragraphText);
clicksField.appendChild(clicksFieldParagraph);
let parent = document.querySelector('.exercise:nth-child(5)');
parent.appendChild(clicksField);

let yellowBlock = document.getElementById('yellow-block');
yellowBlock.addEventListener("click", encreaseClicksCounter);
yellowBlock.addEventListener("click", sayHello);
yellowBlock.addEventListener("click", removeYellowSquare);

function sayHello() {
    alert("Hello! One more click and yellow square will disappear! Magic:)");
}

function removeYellowSquare() {
    if (clicksCounter > 0) {
        yellowBlock.removeEventListener("click", sayHello);
        yellowBlock.addEventListener("click", function () {
            yellowBlock.remove();
        });
    }
}

function encreaseClicksCounter() {
    clicksCounter++;
    clicksFieldParagraph.innerHTML = "Clicks number: " + clicksCounter;
}

//Exercise 6
let btnMouseOn = document.getElementById('btn-mouse-show');
btnMouseOn.addEventListener("mouseover", showRedBlock);
btnMouseOn.addEventListener("mouseout", hideRedBlock);

function hideRedBlock() {
    let redBlock = document.getElementById('red-block');
    redBlock.classList.add('hidden');
}

function showRedBlock() {
    let redBlock = document.getElementById('red-block');
    redBlock.classList.remove('hidden');
}

//Exercise 7
let inputFocus = document.getElementById('focus-input');
inputFocus.addEventListener("focus", showGreenBlock);
inputFocus.addEventListener("input", hideGreenBlock);

function hideGreenBlock() {
    let greenBlock = document.getElementById('green-block');
    greenBlock.classList.add('hidden');
}

function showGreenBlock() {
    let greenBlock = document.getElementById('green-block');
    greenBlock.classList.remove('hidden');
}

//Exercise 8
document.getElementById('btn-show-img').addEventListener("click", addImage);

function addImage() {
    let inputLink = document.getElementById('link-input');
    let parentToAppend = document.querySelector('.exercise:nth-child(8)');
    createImg(inputLink.value, parentToAppend);
}

function createImg(imgLink, parent) {
    let imgField = document.createElement('div');
    let img = document.createElement('img');
    imgField.appendChild(img);
    parent.appendChild(imgField);
    img.src = imgLink;
    img.style.width = "50%";
}

//Exercise 9
let inputToTextArea = document.getElementById("many-links-input");
let parentLi = document.querySelector('.exercise:nth-child(9)');
let textArea = document.createElement("textarea");
parentLi.replaceChild(textArea, inputToTextArea);

document.getElementById('btn-show-imgs').addEventListener("click", addImages);

function addImages() {
    let links = textArea.value.split('\n');
    let parentToAppend = document.querySelector('.exercise:nth-child(9)');

    for (let i = 0; i < links.length; i++) {
        createImg(links[i], parentToAppend);
    }
}

//Exercise 10
let monitor = createMonitor();
let coursorMonitor = addCoursorInfo();
window.addEventListener("mousemove", showCoursorCoordinates);

function createMonitor() {
    let container = document.querySelector('.container');
    let monitor = document.createElement('div');
    let exercisesBlock = document.querySelector('.exercises');
    container.insertBefore(monitor, exercisesBlock);
    monitor.style.border = "2px solid black";
    monitor.style.width = "100px";
    monitor.style.height = "240px";
    monitor.style.position = "fixed";
    monitor.style.right = "30px";
    monitor.style.padding = "10px";
    monitor.style.borderRadius = "5px";
    return monitor;
}
function addCoursorInfo() {
    let coursorMonitor = document.createElement('p');
    monitor.appendChild(coursorMonitor);
    coursorMonitor.innerText = "X: " + "\n Y: ";
    return coursorMonitor;
}

function showCoursorCoordinates(event) {
    coursorMonitor.innerText = "X: " + event.clientX + "\n Y: " + event.clientY;
}

//Exercise 11
let languageMonitor = addLanguageInfo();
window.addEventListener("load", showLanguage);

function addLanguageInfo() {
    let languageMonitor = document.createElement('p');
    monitor.appendChild(languageMonitor);
    return languageMonitor;
}

function showLanguage() {
    languageMonitor.innerText = "Language \n" + navigator.language;
}

//Exercise 12
let geoMonitor = addGeoInfo();
window.addEventListener("load", showGeo);

function addGeoInfo() {
    let geoMonitor = document.createElement('p');
    monitor.appendChild(geoMonitor);
    geoMonitor.innerText = "Geolocation is requested... ";
    return geoMonitor;
}

function showGeo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeoCoordinates);
    } else {
        geoMonitor.innerText = "Geolocation is not supported by this browser.";
    }
}

function showGeoCoordinates(position) {
    geoMonitor.innerText = "Latitude: " + position.coords.latitude.toFixed(7) +
        "\n Longitude: " + position.coords.longitude.toFixed(7);
}

//Exercise 13

//Local storage
let localStorageBlock = document.getElementById('local-storage-block');
localStorageBlock.addEventListener("input", saveToLocalStorage)
window.addEventListener("load", loadLocalStorageInput);

function saveToLocalStorage() {
    localStorage.setItem('user-input', localStorageBlock.innerHTML);
}

function loadLocalStorageInput() {
    if (localStorage.getItem('user-input') != null) {
        localStorageBlock.innerHTML = localStorage.getItem('user-input');
    }
}

//Cookies
let cookiesBlock = document.getElementById('cookies-block');
cookiesBlock.addEventListener("input", saveAsCookies);
window.addEventListener("load", loadCookies);

function saveAsCookies() {
    document.cookie = "user-input=" + cookiesBlock.innerHTML;
}

function loadCookies() {
    let cookiesArr = document.cookie.split(";");
    let userCookie = "";
    for (let i = 0; i < cookiesArr.length; i++) {
        let indexOfUserCookie = cookiesArr[i].search(/(user-input)/);
        if (indexOfUserCookie != -1) {
            userCookie = cookiesArr[i].substr(indexOfUserCookie + 11);
        }
    }
    cookiesBlock.innerHTML = userCookie;
}

//Session storage
let sessionStorageBlock = document.getElementById('session-storage-block');
sessionStorageBlock.addEventListener("input", saveToSessionStorage);
window.addEventListener("load", loadSessionStorageInput);

function saveToSessionStorage() {
    sessionStorage.setItem('user-input', sessionStorageBlock.innerHTML);
}

function loadSessionStorageInput() {
    if (sessionStorage.getItem('user-input') != null) {
        sessionStorageBlock.innerHTML = sessionStorage.getItem('user-input');
    }
}

//Exercise 14
window.addEventListener('scroll', showUpButton);
let upButton = document.getElementById("up-button");
upButton.classList.add('hidden');
upButton.addEventListener('click', goUp);

function showUpButton() {
    if (pageYOffset >= document.documentElement.clientHeight) {
        upButton.classList.remove('hidden');
    } else {
        upButton.classList.add('hidden');
    }
}

function goUp() {
    window.scrollTo({
        top: 0,
        left: pageXOffset,
        behavior: "smooth"
    });
}

//Exercise 15
document.getElementById('big-block').addEventListener('click', bigAlert);
document.getElementById('little-block').addEventListener('click', littleAlert);
document.getElementById('little-block').addEventListener('click', stopProganation);

function bigAlert() {
    alert("Big block alert!");
}

function littleAlert() {
    alert("Little block alert!");
}

function stopProganation(event) {
    event.stopPropagation();
}

//Exercise 16
document.getElementById('window-blocker').addEventListener("click", blockWindow);
let blocker = document.createElement('div');
document.querySelector('.exercise:nth-child(16)').appendChild(blocker);
blocker.addEventListener("click", removeBlocker);

function blockWindow() {
    blocker.style.width = "100vw";
    blocker.style.height = "100vh";
    blocker.style.backgroundColor = "grey";
    blocker.style.position = "fixed";
    blocker.style.top = "0px";
    blocker.style.left = "0px";
    blocker.style.opacity = "30%";
    document.body.style.overflow = "hidden";

}

function removeBlocker() {
    document.body.style.overflow = "auto";
    blocker.remove();
}

//Exercise 17
function noReload() {
    return false;
}

//Exercise 18
document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
});

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "file-input") {
        event.target.style.background = "greenYellow";
        event.target.style.border = "2px solid grey";
        event.target.style.color = "grey";
        event.target.innerHTML = "You can drop file now";
    }

});

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "file-input") {
        event.target.style.background = "";
        event.target.style.border = "2px solid black";
        event.target.innerHTML = "Drag file to download it";
        event.target.style.color = "black";
    }

});

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "file-input") {
        event.target.style.background = "green";
        event.target.innerHTML = "File downloaded";
        event.target.style.color = "black";
        event.target.style.border = "2px solid black";
    }
});