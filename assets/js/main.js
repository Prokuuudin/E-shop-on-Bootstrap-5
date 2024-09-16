window.addEventListener('scroll', function(){
    document.getElementById('header-nav').classList.toggle('header-nav-scroll', window.scrollY > 150)
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>300) {
            $('#top').fadeIn();
        } else{
            $('#top').fadeOut();
        }
    });
    $('#top').click(function(){
        $('html, body').animate({scrollTop: 0}, 500)
    });
});

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e)=>{
    e.preventDefault();
    offcanvasCart.toggle();
});

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView();
    });
});

$(document).ready(function(){
    $(".owl-carousel-full").owlCarousel({
        loop:true,
    margin:20,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict' 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })();
  
  