document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
  
    // Ha a gombra kattintanak, görgetünk az oldal tetejére
    scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Vizsgáljuk, hogy hol van a felhasználó az oldalon, és megjelenítjük vagy elrejtjük a gombot
    window.addEventListener('scroll', function() {
      if (window.scrollY > 90) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  });
  
