function parallaxInit() {
    if (!document.querySelector('[data-parallax]')) return;
    const target = document.querySelectorAll('[data-parallax]')
  
    target.forEach(el => {
      jarallax(el, {
        speed: el.getAttribute('data-parallax'),
        imgElement: '[data-parallax-target]',
      })
    })
  }
  
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
  
    function ddInit() {
      const targets = document.querySelectorAll(".js-form-dd")
      if (!targets) return
  
      targets.forEach((el) => {
        const eventTarget = el.querySelector('[data-x-dd-click]')
        const attributes = eventTarget.getAttribute('data-x-dd-click').split(', ')
        
        attributes.forEach((el2) => {
          const target = el.querySelector(`[data-x-dd=${el2}]`)
          const toggleClass = target.getAttribute('data-x-dd-toggle')
          
          eventTarget.addEventListener('click', () => {
            if (eventTarget.querySelector('.js-dd-focus'))
              eventTarget.querySelector('.js-dd-focus').focus()
  
            if (target.classList.contains(toggleClass)) {
              target.classList.remove(toggleClass)
              el.classList.remove("-is-dd-wrap-active")
            } else {
              closeAllDropdowns()
              target.classList.add(toggleClass)
              el.classList.add("-is-dd-wrap-active")
            }
          })
        })
      })
    }
  
    function closeAllDropdowns() {
      const classes = document.querySelectorAll(".-is-dd-wrap-active")
      if (classes) {
        classes.forEach(el => {
          el.classList.remove('-is-dd-wrap-active')
        });
      }
  
      const targets = document.querySelectorAll(".js-form-dd")
      if (!targets) return
    
      targets.forEach((el) => {
        const eventElement = el.querySelector('[data-x-dd]')
        const eventTarget = el.querySelector('[data-x-dd-click]')
        const attributes = eventTarget.getAttribute('data-x-dd-click').split(', ')
        
        attributes.forEach((el) => {
          eventElement.classList.remove('-is-active')
          const target = document.querySelector(`[data-x-dd=${el}]`)
          const toggleClass = target.getAttribute('data-x-dd-toggle')
          target.classList.remove(toggleClass)
        })
      })
    }
  
    return {
      ddInit: ddInit,
      closeAllDropdowns: closeAllDropdowns,
      init: init,
    }
  })()