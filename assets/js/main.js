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

// SCROLL SUAVE
document.querySelectorAll('.header__link').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault(); // Corrigido

    const target = document.querySelector(e.currentTarget.getAttribute('href')); // Usando e.currentTarget
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// // ACTIVE LINK
// function isSectionInView(section) {
//   const rect = section.getBoundingClientRect();
//   return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
// }

// window.addEventListener('scroll', function() {
//   const sections = document.querySelectorAll('.main__section'); // Corrigido o seletor
//   sections.forEach(section => {
//     const headerLink = document.querySelector(`.header__link[href="#${section.id}"]`);
    
//     if (isSectionInView(section)) {
//       headerLink.classList.add('header__link--active');
//     } else {
//       headerLink.classList.remove('header__link--active');
//     }
//   });
// });
// Função para verificar se a seção está em view
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  // A seção é considerada visível se a parte superior estiver na viewport ou a parte inferior não saiu da viewport
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.main__section');
  let currentSection = null;

  // Corrigimos para que a primeira seção fique ativa ao rolar para o topo
  sections.forEach(section => {
    if (isSectionInView(section)) {
      if (!currentSection || section.getBoundingClientRect().top < currentSection.getBoundingClientRect().top) {
        currentSection = section;  // Pega a primeira seção visível no topo
      }
    }
  });

  // Se uma seção atual foi encontrada
  if (currentSection) {
    const headerLink = document.querySelector(`.header__link[href="#${currentSection.id}"]`);
    
    // Remove a classe de todos os links primeiro
    document.querySelectorAll('.header__link').forEach(link => link.classList.remove('header__link--active'));
    
    // Adiciona a classe ao link correspondente
    headerLink.classList.add('header__link--active');
  } else {
    // Se não houver seções visíveis, remova a classe ativa de todos os links
    document.querySelectorAll('.header__link').forEach(link => link.classList.remove('header__link--active'));
  }
});

