domready(function() {
  let tab_buttons = document.querySelectorAll('.label.tab-btn');
  if(tab_buttons) {
    for(let button of tab_buttons) {
      button.addEventListener('click', tab_manager)
    }

    function tab_manager(e) {
      let tab_id = e.currentTarget.id
      for(let button of tab_buttons) {
        button.classList.remove('active')
      }

      e.currentTarget.classList.add('active')
    }
  }
});
