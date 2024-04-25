//
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    showSlide(currentSlide);
  
    // // Auto slide functionality (optional)
    // setInterval(nextSlide, 7000); // Change the time interval as needed
  
    document.querySelector('.fa-chevron-left').addEventListener('click', prevSlide);
    document.querySelector('.fa-chevron-right').addEventListener('click', nextSlide);
  });


  //hover
 
const element = document.querySelector('.featured-games .item .thumb .hover-effect');
element.style.bottom = '-100px';
element.style.opacity = '0';
element.style.visibility = 'hidden';
element.style.transition = '0.7s';
element.style.fontSize = '14px';
element.style.fontWeight = '600';
element.style.color = 'var(--main-color)';
element.style.backgroundColor = 'var(--main-color)';
element.style.padding = '10px 20px';
//featured
// Define the styles as objects
document.addEventListener('DOMContentLoaded', function () {
    const hoverEffectStyles = {
      bottom: '-100px',
      opacity: '0',
      visibility: 'hidden',
      transition: '0.7s'
    };
  
    const hoverEffectH6Styles = {
      fontSize: '14px',
      fontWeight: '600',
      color: 'var(--main-color)',
      backgroundColor: 'rgba(31,33,34,0.95)',
      padding: '10px 20px'
    };
  
    const thumb = document.querySelector('.thumb');
    const hoverEffect = thumb.querySelector('.hover-effect');
    const hoverEffectH6 = thumb.querySelector('.hover-effect h6');
  
    const applyStyles = (element, styles) => {
      for (const property in styles) {
        element.style[property] = styles[property];
      }
    };
  
    applyStyles(hoverEffect, hoverEffectStyles);
    applyStyles(hoverEffectH6, hoverEffectH6Styles);
  
    thumb.addEventListener('mouseover', function () {
      applyStyles(hoverEffect, {
        opacity: '1',
        visibility: 'visible',
        bottom: '15px'
      });
    });
  
    thumb.addEventListener('mouseout', function () {
      applyStyles(hoverEffect, {
        opacity: '0',
        visibility: 'hidden',
        bottom: '-100px'
      });
    });
  });
  //////
  const items = document.querySelectorAll('#servicesRow');

items.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(20px)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
    
        this.style.transform = 'translateX(0)';
    });
});


