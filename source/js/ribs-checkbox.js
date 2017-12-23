/*import $ from 'jQuery'

 $(document).ready(function() {
 $(".checkbox-perso.rounded").each(function() {
 var $input = $("input", this);

 $input.after('<span></span>');
 })

 $(".checkbox-perso.switched").each(function() {
 var $input = $("input", this);

 $input.hide().wrap('<span class="switch">');
 $input.after('<span class="switch-container"> <span class="on">OUI</span> <span class="mid"></span> <span class="off">NON</span> </span>');
 });
 });*/

class RibsCheckbox {
  constructor() {
    this.roundedCheckboxs = document.getElementsByClassName('ribs-checkbox rounded');
    this.switchedCheckboxs = document.getElementsByClassName('ribs-checkbox switched');

    if (this.roundedCheckboxs.length > 0) {
      this.initRounded();
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
      const input = element.querySelector('input');

      input.insertAdjacentHTML('afterend', '<span></span>');
    });
  }

  /**
   * function that add a span element after input in switched div and hide input
   * to init switched checkbox
   */
  initSwitched() {
    Array.from(this.switchedCheckboxs).forEach((element, index) => {
      const input = element.querySelector('input');

      input.style.display = 'none';
      input.insertAdjacentHTML('afterend', '<span class="switch-container"> <span class="on">OUI</span> <span class="mid"></span> <span class="off">NON</span> </span>');
    });
  }
}

export default (RibsCheckbox);

const ribs = new RibsCheckbox();
