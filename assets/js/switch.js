const themeToggle = document.querySelector('#theme-toggle');
const sunIcon = document.querySelector('.theme-icon-sun');
const moonIcon = document.querySelector('.theme-icon-moon');

// Apply the saved theme on page load
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
} else {
    updateThemeIcon(
        document.documentElement.getAttribute('data-theme') || 'dark'
    );
}

function updateThemeIcon(theme) {
    const isLight = theme === 'light';

    sunIcon.style.display = isLight ? 'none' : 'block';
    moonIcon.style.display = isLight ? 'block' : 'none';

    themeToggle.setAttribute(
        'aria-label',
        isLight ? 'Switch to dark mode' : 'Switch to light mode'
    );
}

function switchTheme() {
    const currentTheme =
        document.documentElement.getAttribute('data-theme');

    const theme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    updateThemeIcon(theme);
}

themeToggle.addEventListener('click', switchTheme);