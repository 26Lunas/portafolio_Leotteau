    
    let prevScrollpos = window.pageYOffset;
    let visible = false;
    let navbar = document.getElementById("navbarScroll");

    window.addEventListener("scroll", function() {
      let currentScrollPos = window.pageYOffset;
      

      if (prevScrollpos >= currentScrollPos) {
        // El usuario se está desplazando hacia arriba
        if (!visible) {
          // Mostrar la barra de navegación si estaba oculta
          navbar.classList.add("navbarScroll");
          visible = true;
        }
      } else {
        // El usuario se está desplazando hacia abajo
        if (visible) {
          // Ocultar la barra de navegación si estaba visible
          navbar.classList.remove("navbarScroll");
          visible = false;
        }
      }

      prevScrollpos = currentScrollPos;

      if(prevScrollpos <=0){
        navbar.classList.remove("navbarScroll");
        
      }

    });

    let enlaceYamir = document.getElementById("yamir");

    enlaceYamir.addEventListener("click", function(){
      window.location = "http://desarrolladoryamir.ml/";
    })



    $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');
      
      let filter = $(this).attr('data-filter');

      if(filter == 'all'){
        $('.image').show(400);
      }else{
        $('.image').not('.'+filter).hide(200);
        $('.image').filter('.'+filter).show(400);
      }
      // console.log(filter)
    });

    $('.gallery').magnificPopup({

      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: false
      }

    });

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });