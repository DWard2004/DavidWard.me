// Setup menu interactions once navigation markup is available
function setupMenuInteractions() {
    var menu = document.querySelector('.menu');
    var nav = document.querySelector('.nav-links');

    if (!menu || !nav) {
        return;
    }

    function toggleMenu() {
        nav.style.width = nav.style.width === '250px' ? '0' : '250px';
        menu.classList.toggle('change');
    }

    document.addEventListener('click', function (event) {
        var clickInsideMenu = menu.contains(event.target);
        var clickInsideNav = nav.contains(event.target);

        if (!clickInsideMenu && !clickInsideNav && nav.style.width === '250px') {
            nav.style.width = '0';
            menu.classList.remove('change');
        }
    });

    menu.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var placeholder = document.getElementById('nav-placeholder');

    if (!placeholder) {
        setupMenuInteractions();
        return;
    }

    fetch('nav.html')
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            placeholder.innerHTML = html;
            setupMenuInteractions();
        })
        .catch(function (error) {
            console.error('Failed to load navigation:', error);
            setupMenuInteractions();
        });
});
