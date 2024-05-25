const theme_button = document.querySelector('.theme-option');
const scroller = document.querySelector('.wrapper');
const nav_toggler = document.querySelector('.nav-toggler');
const navbar__links = document.querySelector('.navbar__links');
const nav_closer = document.querySelector('.nav-closer');

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
        primaryNav.setAttribute('data-visible', false)

    })
})
nav_closer.addEventListener('click',(e) => {
    navbar__links.setAttribute('data-visible',false);
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
