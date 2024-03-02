window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_nav_menu'),
    menuItem = document.querySelectorAll('.header_nav_menu_item'),
    hamburger = document.querySelector('.header_nav_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header_nav_hamburger_active');
        menu.classList.toggle('header_nav_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header_nav_hamburger_active');
            menu.classList.toggle('header_nav_menu_active');
        })
    })
})