let darkModeToggle = document
.getElementById('darkModeToggle');
let body = document.body;
darkModeToggle.addEventListener('change', function () {
if (darkModeToggle.checked) {
enableDarkMode();
} else {
disableDarkMode();
}
});

function enableDarkMode() {
body.classList.add('dark-mode');
};

function disableDarkMode() {
body.classList.remove('dark-mode');
};


function myFunction() {
let x = document.getElementById("myTopnav");
if (x.classList.contains("responsive")) {
x.classList.remove("responsive");
} else {
x.classList.add("responsive");
}
}


let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    console.log(items);
})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


