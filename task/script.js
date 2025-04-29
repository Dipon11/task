(function swapMenuItems() {
  if (sessionStorage.getItem('menuSwapped')) {
    console.log('Menu already swapped this session.');
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      const nav = document.querySelector('nav');
     

      const listItems = [...nav.querySelectorAll('li')];

      const referenceItem = listItems.find(li =>
        li.textContent.trim() === 'Reference'
      );
      const communityItem = listItems.find(li =>
        li.textContent.trim() === 'Community'
      );

  

      const parent = referenceItem.parentElement;

  
      const refClone = referenceItem.cloneNode(true);
      const commClone = communityItem.cloneNode(true);

      parent.replaceChild(commClone, referenceItem);
      parent.replaceChild(refClone, communityItem);

      sessionStorage.setItem('menuSwapped', 'true');
      console.log('Swapped successfully');
    } catch (e) {
      console.warn('Swap failed:', e.message);
    }
  });
})();
