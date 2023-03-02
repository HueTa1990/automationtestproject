(function () {

   /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top")
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }

    };

    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
           imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } 
    };
   

})();


const Events = (function() {
    function init() {
      const targets = document.querySelectorAll("[data-x-click]")
      if (!targets) return
  
      targets.forEach((eventTarget) => {
        const attributes = eventTarget.getAttribute('data-x-click').split(', ')
        
        attributes.forEach((el) => {
          const target = document.querySelector(`[data-x=${el}]`)
          
          eventTarget.addEventListener('click', () => {
            const toggleClass = target.getAttribute('data-x-toggle')
            target.classList.toggle(toggleClass)
          })
        })
      })
    }
  
    
  
    return {
      init: init,
    }
  })()



  function initComponents() {
    Events.init();
  }

  window.onload = function () {
    document.fonts.ready.then(function () {
      initComponents()
    });
  }

  initSample();

  function openSearch(evt, cityName) {
    var i, tabcontent2, tablinks1;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  
  }

    /* Get the element with id="defaultOpen" and click on it */
    document.getElementById("defaultOpen").click();
    
