// no btn
const buttonElement = document.querySelector(".no");
let position = "";
buttonElement.addEventListener("mouseover", function () {
    if (position === 0) {
        position = 400;
    } else {
        position = 0;
    }
    buttonElement.style.transform = `translate(${position}px , 100px)`;
});

// POp up
let btn = document.querySelector('.yes');
let popup = document.querySelector('.popup');
btn.addEventListener('click', show);

function show() {
    popup.classList.add('show');
    console.log('clicked');

}
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


// sounds Effects

const noo = new Audio();
noo.src = "sounds/noo.mp3"

const yeah = new Audio();
yeah.src = "sounds/ohyeah.mp3"
