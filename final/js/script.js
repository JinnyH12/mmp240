document.addEventListener('DOMContentLoaded', function() {
    // 获取汉堡菜单和导航菜单
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    // 点击汉堡菜单时，切换导航菜单的显示
    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
