const DrawerInitiator = {
  init({
    menu, drawer,
  }) {
    menu.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });

    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        drawer.classList.toggle('open');
      }
    });

    document.body.addEventListener('click', (event) => {
      const isClickInsideHeader = event.target.closest('header');
      const isClickInsideFooter = event.target.closest('footer');

      if (!isClickInsideHeader || isClickInsideFooter) {
        drawer.classList.remove('open');
      }
    });
  },
};

export default DrawerInitiator;
