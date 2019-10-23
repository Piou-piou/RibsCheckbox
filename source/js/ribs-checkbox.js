import RibsCore from 'ribs-core';

class RibsCheckbox {
  constructor() {
    this.roundedCheckboxs = document.getElementsByClassName('ribs-checkbox rounded');
    this.checkedCheckboxs = document.getElementsByClassName('ribs-checkbox checked');
    this.switchedCheckboxs = document.getElementsByClassName('ribs-checkbox switched');

    if (this.roundedCheckboxs.length > 0) {
      this.initRounded();
    }

    if (this.checkedCheckboxs.length > 0) {
      this.initChecked();
    }

    if (this.switchedCheckboxs.length > 0) {
      this.initSwitched();
    }
  }

  /**
   * function that add a span element after input in rounded div
   * to init rounded checkbox
   */
  initRounded() {
    Array.from(this.roundedCheckboxs).forEach((element, index) => {
      RibsCore.wrap(element, 'label', 'ribs-checkbox rounded');

      element.insertAdjacentHTML('afterend', '<span></span>');
    });
  }

  /**
   * function that add a span element after input in checked div
   * to init checked checkbox
   */
  initChecked() {
    Array.from(this.checkedCheckboxs).forEach((element, index) => {
      RibsCore.wrap(element, 'label', 'ribs-checkbox checked');

      element.insertAdjacentHTML('afterend', '<span></span>');
    });
  }

  /**
   * function that add a span element after input in switched div and hide input
   * to init switched checkbox
   */
  initSwitched() {
    Array.from(this.switchedCheckboxs).forEach((element, index) => {
      element.style.display = 'none';
      RibsCore.wrap(element, 'span', 'switch');

      RibsCore.wrap(element.parentNode, 'label', 'ribs-checkbox switched');

      element.insertAdjacentHTML('afterend', '<span class="switch-container"> <span class="on"></span> <span class="mid"><span></span></span> <span class="off"></span> </span>');
    });
  }
}

export default (RibsCheckbox);

const ribs = new RibsCheckbox();
