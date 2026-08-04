const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Apply the saved theme on page load
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Keep the toggle in sync with the saved theme
    toggleSwitch.checked = currentTheme === 'light';
}

function switchTheme(e) {
    const theme = e.target.checked ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

toggleSwitch.addEventListener('change', switchTheme, false);