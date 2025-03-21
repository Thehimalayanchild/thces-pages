// generic scripts for the site.
console.info(`scripts.js: note that _, and __ are functions in global scope that may interfere with libraries that use these symbols as their global identifiers.`);

// utility functions
const _ = (s) => document.querySelector(s);
const __ = (s) => document.querySelectorAll(s);

const open_class = 'js_open';

const close_menu_switch = _('.close-drawer-switch label')
const has_submenu = __('li.has-submenu')


close_menu_switch.addEventListener('click', (e)=> {
  has_submenu.classList.remove(open_class);
})

has_submenu.forEach(menu => {
  const link = menu.querySelector('a');

  link.addEventListener('click', (e) => {
    e.preventDefault();

    // toggle class for actively clicked element
    menu.classList.toggle(open_class);

    // console.log(e.target)
    // TODO: implement accordion logic; exclusive selection:
    // if a different menu is selected, all others should close.
  })
})
