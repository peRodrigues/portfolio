// THEME
const themeIcon = document.querySelector('.header__theme-icon-content')

themeIcon.addEventListener('click', () => {
  const html = document.querySelector('html')
  html.classList.toggle('html--light')
})


// MENU MOBILE
const menuIcon = document.querySelector('.header__menu-icon-content')

menuIcon.addEventListener('click', () => {
  const menuMobile = document.querySelector('.header__menu-mobile')
  menuMobile.classList.toggle('header__menu-mobile--active');
})

// MENU HEADER
document.querySelectorAll('.header__link').forEach(headerLink => {
  headerLink.addEventListener('click', () => {
    document.querySelectorAll('.header__link').forEach(link => {
      link.classList.remove('header__link--active');
    });
    headerLink.classList.add('header__link--active');
  });
});