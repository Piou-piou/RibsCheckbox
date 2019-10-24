import RibsCore from 'ribs-core';

class RibsCheckbox {
  constructor() {
    this.ribsCheckboxClasses = ['ribs-checkbox', 'rounded', 'checked', 'switched'];
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
   * method to get other class on input
   * @param element
   * @returns {string}
   */
  getOtherClassOnElement(element) {
    let otherClasses = '';
    element.classList.forEach((cssClass, index) => {
      if (this.ribsCheckboxClasses.indexOf(cssClass) === -1) {
        otherClasses += cssClass+' ';
      }
    });

    return otherClasses;
  }

  /**
   * function that add a span element after input in rounded div
   * to init rounded checkbox
   */
  initRounded() {
    Array.from(this.roundedCheckboxs).forEach((element, index) => {
      RibsCore.wrap(element, 'label', `ribs-checkbox rounded ${this.getOtherClassOnElement(element)}`);

      element.insertAdjacentHTML('afterend', '<span></span>');
    });
  }

  /**
   * function that add a span element after input in checked div
   * to init checked checkbox
   */
  initChecked() {
    Array.from(this.checkedCheckboxs).forEach((element, index) => {
      RibsCore.wrap(element, 'label', `ribs-checkbox checked ${this.getOtherClassOnElement(element)}`);

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

      RibsCore.wrap(element.parentNode, 'label', `ribs-checkbox switched ${this.getOtherClassOnElement(element)}`);

      element.insertAdjacentHTML('afterend', '<span class="switch-container"> <span class="on"></span> <span class="mid"><span></span></span> <span class="off"></span> </span>');
    });
  }
}

export default (RibsCheckbox);

const ribs = new RibsCheckbox();
