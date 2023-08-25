/**************************************
            Sticky Menu
  **************************************/

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('body').addClass("sticky-header");
    } else {
        $('body').removeClass("sticky-header");
    }
  });

/**************************************
        Booking tables validation
**************************************/
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()