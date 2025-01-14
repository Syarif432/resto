const drawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this.toogleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  toogleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default drawerInitiator;
