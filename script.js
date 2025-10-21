var NAVIGATION_TEMPLATE = [
    '<div class="menu">',
    '    <button class="hamburger-icon" type="button" aria-label="Toggle navigation" aria-expanded="false">',
    '        <span></span>',
    '        <span></span>',
    '        <span></span>',
    '    </button>',
    '</div>',
    '<nav class="nav-links" aria-hidden="true">',
    '    <a href="index.html">Home</a>',
    '    <a href="about.html">About David</a>',
    '    <a href="vpn.html">VPN Essay</a>',
    '    <a href="resume.html">Resume</a>',
    '</nav>'
].join('');

// Setup menu interactions once navigation markup is available
function setupMenuInteractions() {
    var menu = document.querySelector('.menu');
    var toggleButton = menu ? menu.querySelector('.hamburger-icon') : null;
    var nav = document.querySelector('.nav-links');

    if (!menu || !toggleButton || !nav) {
        return;
    }

    function openMenu() {
        nav.style.width = '250px';
        menu.classList.add('change');
        toggleButton.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
        nav.style.width = '0';
        menu.classList.remove('change');
        toggleButton.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
    }

    function isMenuOpen() {
        return menu.classList.contains('change');
    }

    function toggleMenu(event) {
        if (event) {
            event.stopPropagation();
        }

        if (isMenuOpen()) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    document.addEventListener('click', function (event) {
        var clickInsideMenu = menu.contains(event.target);
        var clickInsideNav = nav.contains(event.target);

        if (!clickInsideMenu && !clickInsideNav && isMenuOpen()) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isMenuOpen()) {
            closeMenu();
            toggleButton.focus();
        }
    });

    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    menu.addEventListener('click', toggleMenu);

    closeMenu();
}

document.addEventListener('DOMContentLoaded', function () {
    var placeholder = document.getElementById('nav-placeholder');

    if (!placeholder) {
        setupMenuInteractions();
        return;
    }

    fetch('nav.html')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.text();
        })
        .then(function (html) {
            placeholder.innerHTML = html;
            setupMenuInteractions();
        })
        .catch(function (error) {
            console.warn('Failed to load navigation via fetch. Falling back to inline template.', error);
            placeholder.innerHTML = NAVIGATION_TEMPLATE;
            setupMenuInteractions();
        });
});
