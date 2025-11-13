// Setup menu interactions once navigation markup is available
function setupMenuInteractions() {
    var menu = document.querySelector('.menu');
    var nav = document.querySelector('.nav-links');

    if (!menu || !nav) {
        return;
    }

    nav.setAttribute('aria-hidden', 'true');
    menu.setAttribute('aria-expanded', 'false');

    function openMenu() {
        nav.classList.add('is-open');
        nav.setAttribute('aria-hidden', 'false');
        menu.classList.add('change');
        menu.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        nav.classList.remove('is-open');
        nav.setAttribute('aria-hidden', 'true');
        menu.classList.remove('change');
        menu.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        if (nav.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    document.addEventListener('click', function (event) {
        var clickInsideMenu = menu.contains(event.target);
        var clickInsideNav = nav.contains(event.target);

        if (!clickInsideMenu && !clickInsideNav && nav.classList.contains('is-open')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            closeMenu();
            menu.focus();
        }
    });

    nav.addEventListener('click', function (event) {
        var link = event.target.closest('a');
        if (link) {
            closeMenu();
        }
        event.stopPropagation();
    });

    menu.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();
    });
}

function setupAudioControls() {
    var audio = document.getElementById('bgmusic');
    var control = document.getElementById('audioControl');

    if (!audio || !control) {
        return;
    }

    function updateLabel() {
        control.textContent = audio.paused ? 'Play Audio' : 'Pause Audio';
        control.setAttribute('aria-pressed', audio.paused ? 'false' : 'true');
    }

    // Ensure audio is paused on load until user interaction
    audio.pause();
    updateLabel();

    control.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', updateLabel);
    audio.addEventListener('pause', updateLabel);
    audio.addEventListener('ended', updateLabel);
}

document.addEventListener('DOMContentLoaded', function () {
    var placeholder = document.getElementById('nav-placeholder');

    if (!placeholder) {
        setupMenuInteractions();
        setupAudioControls();
        return;
    }

    fetch('nav.html')
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            placeholder.innerHTML = html;
            setupMenuInteractions();
            setupAudioControls();
        })
        .catch(function (error) {
            console.error('Failed to load navigation:', error);
            setupMenuInteractions();
            setupAudioControls();
        });
});
