document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function() {
      siteNav.classList.toggle('is-open');
    });

    // Close menu when a link is clicked (mobile)
    siteNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        siteNav.classList.remove('is-open');
      });
    });
  }
});
