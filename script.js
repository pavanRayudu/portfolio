import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";


const theme_button = document.querySelector('.theme-option');
const scroller = document.querySelector('.wrapper');
const nav_toggler = document.querySelector('.nav-toggler');
const navbar__links = document.querySelector('.navbar__links');
const nav_closer = document.querySelector('.nav-closer');
const gotoTop_btn = document.querySelector('.goto-top');


// nav toggling

nav_toggler.addEventListener('click', (e) => {
    let state = navbar__links.getAttribute('data-visible');
    if (state === 'false') {
        navbar__links.setAttribute('data-visible', true);
        nav_closer.style.display = "block";
    }
    else {
        navbar__links.setAttribute('data-visible', false);
    }

    document.addEventListener('scroll', () => {
        navbar__links.setAttribute('data-visible', false)
        nav_closer.style.display = "none";

    })
})
nav_closer.addEventListener('click', (e) => {
    navbar__links.setAttribute('data-visible', false);
    nav_closer.style.display = "none"
})
// Theme Changer

theme_button.addEventListener('click', (e) => {
    let current_mode = document.documentElement.getAttribute('data-theme');
    if (current_mode === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        theme_button.style.backgroundImage = "url('./assets/sun-svgrepo-com.svg')";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        theme_button.style.backgroundImage = "url('./assets/moon-svgrepo-com.svg')";

    }
})

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scroller.setAttribute('data-animated', true)

    const scrollerInner = scroller.querySelector('.scroller');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
    })

    console.log(scrollerContent)

}
// background: url('./assets/sun-svgrepo-com.svg');



const firebaseConfig = {
    apiKey: "AIzaSyBpO1geCM5Jm_G6mD5dZdpy6rm4Qj6cAZI",
    authDomain: "portfolio-c9627.firebaseapp.com",
    projectId: "portfolio-c9627",
    storageBucket: "portfolio-c9627.appspot.com",
    messagingSenderId: "628496701000",
    // databaseURL: "https://portfolio-c9627-default-rtdb.firebaseio.com",
    appId: "1:628496701000:web:a3f0eac8ac245bfb422a7d",
    measurementId: "G-8SK7Y4YZ71"
};

const app = initializeApp(firebaseConfig);



// Initialize Firebase
let contactFormDB = getDatabase(app)

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    const name = getVal("name");
    const email = getVal("email");
    const message = getVal("message");


    set(ref(contactFormDB, 'user/' + name),
        {
            name: name,
            email: email,
            message: message,
        })
    clearForm()


}

function getVal(id) {
    return document.getElementById(id).value;
}

function clearForm() {
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
}


const projects = document.querySelectorAll('.project');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', (e) => {
        redirect(projects[i].classList[1])
    })
}

function redirect(num) {
    switch (num) {
        case "one":
            window.location.href = "https://mytodolistapp123.netlify.app/";
            break;
        case "two":
            window.location.href = "https://pavanrayudu.github.io/weather-app/";
            break;
        case "three":
            window.location.href = "https://pavanrayudu.github.io/bmi-calculator/";
            break;

        default:
            break;
    }
}









