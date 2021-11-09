/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

class BulmaTabs {
  constructor(tabsMenuList, tabsContentList) {
    this.tabsMenuList = tabsMenuList;
    this.tabsContentList = tabsContentList;
  }

  init() {
    Array.from(this.tabsMenuList).forEach((child) => {
      child.addEventListener('click', () => {
        this.toggle(child.dataset.target);
      });

      if (child.className.includes('is-active')) {
        this.toggle(child.dataset.target);
      }
    });
  }

  toggle(targetId) {
    Array.from(this.tabsContentList).forEach((contentElement) => {
      contentElement.style.display = contentElement.id === targetId ? 'block' : 'none';
      document
        .querySelector(`[data-target="${contentElement.id}"]`)
        .classList[contentElement.id === targetId ? 'add' : 'remove']('is-active');
    });
  }
}

export { BulmaTabs };
