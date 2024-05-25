const theme_button = document.querySelector('.theme-option');

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

// background: url('./assets/sun-svgrepo-com.svg');
