const ThemeEngine = {
    init() {
        const savedTheme = localStorage.getItem('app-theme') || 'dark';
        this.applyTheme(savedTheme);
        this.registerListeners();
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);

        const sunIcon = document.querySelector('.icon-sun');
        const moonIcon = document.querySelector('.icon-moon');

        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    },

    registerListeners() {
        const toggleBtn = document.querySelector('[data-theme-toggle]');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                this.applyTheme(nextTheme);
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => ThemeEngine.init());