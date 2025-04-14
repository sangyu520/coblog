// 假设你已将代码放在source/js/sidebar-color.js
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const links = sidebar.querySelectorAll('a');

  function getBackgroundColorBrightness(element) {
    const bgColor = window.getComputedStyle(element).backgroundColor;
    const rgb = bgColor.match(/\d+/g);
    const r = parseInt(rgb[0], 10);
    const g = parseInt(rgb[1], 10);
    const b = parseInt(rgb[2], 10);
    // 计算亮度（使用加权公式）
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  function adjustTextColor() {
    // 获取背景亮度
    const brightness = getBackgroundColorBrightness(sidebar);

    // 根据亮度来改变文字颜色
    if (brightness > 128) {
      // 背景亮时，文字颜色设置为黑色
      links.forEach(link => {
        link.style.color = '#000'; // 黑色
        link.style.borderBottomColor = '#000'; // 边框也用黑色
      });
    } else {
      // 背景暗时，文字颜色设置为白色
      links.forEach(link => {
        link.style.color = '#FFF'; // 白色
        link.style.borderBottomColor = '#FFF'; // 边框也用白色
      });
    }
  }

  // 初始调整文字颜色
  adjustTextColor();

  // 监听背景色变化，重新调整文字颜色
  window.addEventListener('resize', adjustTextColor);
});
