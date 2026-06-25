document.addEventListener('DOMContentLoaded', function() {
  // 如果不是首頁，隱藏 Growing Thinker 標題，改用文章標題
  if (!document.body.classList.contains('home')) {
    const h1 = document.querySelector('.site-heading h1');
    const subheading = document.querySelector('.site-heading .subheading');
    const postHeading = document.querySelector('.post-heading h1');
    
    if (h1 && postHeading) {
      // 隱藏原始的 Growing Thinker
      h1.style.display = 'none';
      subheading.style.display = 'none';
      
      // 用文章標題替換
      const newH1 = document.createElement('h1');
      newH1.textContent = postHeading.textContent;
      newH1.className = h1.className;
      h1.parentNode.insertBefore(newH1, h1);
    }
  }
});
