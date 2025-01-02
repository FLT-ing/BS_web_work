// 获取所有具有 'panel' 类的元素
const panels = document.querySelectorAll('.panel')

// 为每个 'panel' 元素添加点击事件监听器
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()  // 移除所有 'panel' 元素的 'active' 类
        panel.classList.add('active')  // 为当前点击的 'panel' 元素添加 'active' 类
    })
})

// 移除所有 'panel' 元素的 'active' 类
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// 监听窗口的滚动事件
window.addEventListener('scroll', function () {
  const cards = document.querySelectorAll('.card2');  // 获取所有具有 'card2' 类的元素
  const windowHeight = window.innerHeight;  // 获取窗口的高度
  
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;  // 获取卡片元素顶部距离视口顶部的距离
    
    if (cardTop < windowHeight * 0.8) {  // 当卡片即将出现在视口时
      card.style.opacity = 1;  // 设置卡片的透明度为 1
      card.style.transform = 'translateX(0)';  // 设置卡片的动画效果
    }
  });
});

// 点击展开详细内容
function toggleDetails(card2) {
  const details = card2.querySelector('.details');  // 获取卡片中的 'details' 元素
  const isVisible = details.style.display === 'block';  // 检查 'details' 元素是否可见
  details.style.display = isVisible ? 'none' : 'block';  // 切换 'details' 元素的显示状态
}

// 获取按钮元素
const toTopBtn = document.getElementById("toTopBtn");

// 监听窗口的滚动事件
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // 当滚动高度大于 300 时，显示按钮
    toTopBtn.style.display = "block";
  } else {
    // 否则隐藏按钮
    toTopBtn.style.display = "none";
  }
});

// 按钮点击事件，回到顶部
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0, // 滚动到顶部
    behavior: "smooth" // 平滑滚动效果
  });
});
