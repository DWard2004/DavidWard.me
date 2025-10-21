const NAV_OPEN_CLASS = 'nav-links--open';
const MENU_ACTIVE_CLASS = 'change';

const initAudioControls = () => {
    const audioElement = document.getElementById('bgmusic');
    const toggleButton = document.getElementById('audioControl');

    if (!audioElement || !toggleButton) {
        return;
    }

    const updateButtonState = () => {
        const isPaused = audioElement.paused;
        toggleButton.textContent = isPaused ? 'Play audio' : 'Pause audio';
        toggleButton.setAttribute('aria-pressed', String(!isPaused));
    };

    toggleButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play().catch(() => {
                // Ignored: user interaction required in some browsers
            });
        } else {
            audioElement.pause();
        }
    });

    audioElement.addEventListener('play', updateButtonState);
    audioElement.addEventListener('pause', updateButtonState);
    audioElement.addEventListener('ended', updateButtonState);

    updateButtonState();
};

const initNavigation = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');

    if (!menu || !nav) {
        return;
    }

    const toggleButton = menu.querySelector('.hamburger-icon');

    if (!toggleButton) {
        return;
    }

    const setMenuState = (isOpen) => {
        nav.classList.toggle(NAV_OPEN_CLASS, isOpen);
        menu.classList.toggle(MENU_ACTIVE_CLASS, isOpen);
        toggleButton.setAttribute('aria-expanded', String(isOpen));
        nav.setAttribute('aria-hidden', String(!isOpen));
    };

    const closeMenu = () => setMenuState(false);
    const toggleMenu = () => setMenuState(!nav.classList.contains(NAV_OPEN_CLASS));

    toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    nav.addEventListener('click', (event) => {
        const target = event.target;

        if (target instanceof Element && target.closest('a')) {
            closeMenu();
        }

        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !nav.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    setMenuState(nav.classList.contains(NAV_OPEN_CLASS));
};

const loadNavigation = async () => {
    const placeholder = document.getElementById('nav-placeholder');

    if (!placeholder) {
        initNavigation();
        return;
    }

    try {
        const response = await fetch('nav.html', { cache: 'no-cache' });

        if (!response.ok) {
            throw new Error(`Navigation request failed with status ${response.status}`);
        }

        placeholder.innerHTML = await response.text();
    } catch (error) {
        console.error('Failed to load navigation:', error);
        placeholder.innerHTML = '<p class="nav-error">Navigation unavailable</p>';
    } finally {
        initNavigation();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    initAudioControls();
});
