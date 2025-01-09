// Function to add active link in the menu based on the page showing

const addActive = () => {
  const showing = window.location.href;

  const page = showing.substring(showing.lastIndexOf('/') + 1);

  const navLinks = document.querySelectorAll('.nav__link');

  const linkText = navLinks[0];

  const indexLink = linkText.indexOf('/');

  console.log(indexLink);
};

addActive();
