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