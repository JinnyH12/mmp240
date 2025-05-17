// 切换汉堡菜单显示
function toggleMenu() {
    var menu = document.getElementById("nav-links");
    menu.classList.toggle("show"); // 切换显示和隐藏
  }
  
  // 切换下拉菜单显示
  var dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      this.classList.toggle('show'); // 切换下拉菜单显示
      e.stopPropagation(); // 阻止事件冒泡，防止触发父级菜单的关闭
    });
  });
  
  // 点击其他地方时，关闭下拉菜单
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show');
      });
    }
  });
  