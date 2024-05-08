document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
 
    window.addEventListener('scroll', function() {
      if (window.scrollY > 90) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  });
  