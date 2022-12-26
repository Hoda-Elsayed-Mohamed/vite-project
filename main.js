const toggleBtn = document.querySelector('.mobile-nav-toggle');
const toggledMenu = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');
const primaryImg = document.querySelector('.icon-hamburger');

toggleBtn.addEventListener('click', ()=>{
    toggledMenu.hasAttribute('data-visible')
    ?toggleBtn.setAttribute("aria-expanded", false)
    :toggleBtn.setAttribute("aria-expanded", true);
    toggledMenu.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute('data-overlay');
})
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    responsive: {
        480: {
            dots: false,
        },
    }
  });