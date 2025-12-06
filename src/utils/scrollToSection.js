export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 0; 
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };