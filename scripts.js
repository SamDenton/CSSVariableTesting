window.onload = function() {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.onclick = function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        toggleButton.textContent = `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} theme`;
    };
    alert('Welcome to My Simple Site!');
};
