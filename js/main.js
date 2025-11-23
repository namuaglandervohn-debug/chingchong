document.addEventListener('DOMContentLoaded', function () {
    // Highlight active nav link based on current URL
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
            // If it's inside a dropdown, also highlight the parent
            if (menuItem[i].closest('.dropdown-menu')) {
                menuItem[i].closest('.dropdown').querySelector('.dropdown-toggle').classList.add('active');
            }
        }
    }
});
