document.addEventListener('DOMContentLoaded', function() {
  // 不是首頁時，改變中間的標題
  const siteHeading = document.querySelector('.site-heading');
  const siteH1 = document.querySelector('.site-heading h1');
  const subheading = document.querySelector('.site-heading .subheading');
  
  // 如果是首頁，document.title 通常是 "Growing Thinker | Growing Thinker"
  // 如果是文章頁，document.title 是 "文章標題 | Growing Thinker"
  const pageTitle = document.title;
  
  // 檢查是否是首頁（通過URL或title）
  const isHome = window.location.pathname === '/' || pageTitle.includes('Growing Thinker | Growing Thinker');
  
  if (!isHome && siteHeading && siteH1) {
    // 提取標題（去掉" | Growing Thinker"部分）
    const titlePart = pageTitle.split(' | ')[0];
    
    if (titlePart && titlePart !== 'Growing Thinker') {
      siteH1.textContent = titlePart;
      if (subheading) {
        subheading.style.display = 'none';
      }
    }
  }
});
