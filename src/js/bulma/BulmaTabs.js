/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

class BulmaTabs {
  constructor(tabsOptionsList, tabsContainersList) {
    this.tabsOptionsList = tabsOptionsList;
    this.tabsContainersList = tabsContainersList;
  }

  init() {
    let activeTabDataTarget;
    let tabsDataTargetList = [];

    Array.from(this.tabsOptionsList).forEach((tabsOption) => {
      tabsDataTargetList.push(tabsOption.dataset.target);

      tabsOption.addEventListener('click', () => {
        this.toggle(tabsOption.dataset.target);
      });

      if (tabsOption.className.includes('is-active')) {
        activeTabDataTarget = tabsOption.dataset.target;
      }

      const activeTabDataTargetFromUrl = window.location.hash.substring(1);
      if (Array.from(this.tabsOptionsList).includes(activeTabDataTargetFromUrl)) {
        activeTabDataTarget = activeTabDataTargetFromUrl;
      }

      this.toggle(activeTabDataTarget);
    });

    window.addEventListener('hashchange', () => {
      activeTabDataTarget = window.location.hash.substring(1);

      if (tabsDataTargetList.includes(activeTabDataTarget)) {
        this.toggle(activeTabDataTarget);
      }
    });
  }

  toggle(dataTarget) {
    Array.from(this.tabsContainersList).forEach((tabContainer) => {
      tabContainer.style.display = tabContainer.id === dataTarget ? 'block' : 'none';
      document
        .querySelector(`[data-target="${tabContainer.id}"]`)
        .classList[tabContainer.id === dataTarget ? 'add' : 'remove']('is-active');
    });

    const windowUrl = new URL(document.URL);
    windowUrl.hash = '#' + dataTarget;
    document.location.href = windowUrl;

    window.scroll(0, 0);
  }
}

export { BulmaTabs };
