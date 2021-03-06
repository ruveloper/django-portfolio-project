(function() {
  "use strict";

  /**
   * Typing animation
   */
  const typed = document.querySelector('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000
    });
  }

})()