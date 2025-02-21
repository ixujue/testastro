// 为汉堡菜单按钮添加点击事件监听器
document.querySelector('.hamburger').addEventListener('click', () => {
    // 当点击汉堡菜单按钮时，切换导航链接列表的展开状态
    // 通过添加或移除 'expanded' 类来控制导航菜单的显示和隐藏
    document.querySelector('.nav-links').classList.toggle('expanded');
  });