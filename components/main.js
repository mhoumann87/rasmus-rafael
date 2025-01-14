const navLinks = document.querySelectorAll('.nav__link');

const addActive = e => {
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', e => console.log(e.target));
  });
};

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => addActive(e));
});
