document.addEventListener('DOMContentLoaded', function() {
    console.log('%c Привет.', 'color: #ee007b;');

    const doc = document;
    const body = doc.body;
    const toggleThemeBtn = doc.querySelector('.js-toggle-theme-btn');

    const theme = localStorage.getItem('theme');

    body[(theme === 'dark' ? 'set' : 'remove') + 'Attribute']('data-theme', 'dark');

    toggleThemeBtn.addEventListener('click', function() {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            body.removeAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});