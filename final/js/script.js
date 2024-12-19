// 获取汉堡菜单和导航菜单
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.querySelector('.nav'); // 获取导航菜单
const dropdowns = document.querySelectorAll('.dropdown'); // 获取所有下拉菜单

// JavaScript 控制汉堡菜单显示
if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active'); // 切换导航菜单的显示/隐藏
    });
}

// 可选：防止点击下拉菜单时，菜单被关闭
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡，避免点击下拉菜单时触发关闭
    });
});

// 点击页面其他地方时关闭导航菜单（可选）
document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        nav.classList.remove('active'); // 点击其他地方时隐藏菜单
    }
});
