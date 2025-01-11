const navLinks = document.querySelectorAll('.nav__link');

const addActive = e => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  console.log(e.target.href);
};

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => addActive(e));
});
