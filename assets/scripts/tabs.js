/*
Script to handle tabs and navigation
Author: Kamaleshwar Morjal <kamal@designr.in>
*/
// FIXME: eliminate use of these globals if possible
let _content;
let _tabs;

// function activate tab
const activate_tab = (tab, content = null) => {

  if(content === null) content = _content;

  let target_pane_id = tab.dataset['for']

  let target_pane = document.querySelector(`#${target_pane_id}`)

  tab.classList.toggle('active');

  for(let pane of content) {
    pane.classList.remove('active')
    target_pane.classList.add('active')
  }

  tab.classList.add('active');
}


// function tab handler
const tab_handler = (event) => {

  let clicked_tab;

  let tabs = _tabs; // setting the value from the global _tabs

  for(let tab of tabs) {
    tab.classList.remove('active')
    if(tab.contains(event.target)) {
      clicked_tab = tab
    }
  }
  console.log(`event.target is `, clicked_tab)

  activate_tab(clicked_tab);

}

// function to register tabs.
// each set of tabs-tabpanes combination should be unique set of classes
// by design.
/// expects:
/// @tabs: classname of tab elements, or js collection returned by querySelectorAll
/// @content: classname of pane elements, or js collection returned by querySelectorAll
const register_tabs = (tabs, content) => {
  let tab_elements, content_elements;

  // set the globals
  _content = content;
  _tabs = tabs;

  if( typeof tabs === "string" ) {
    tab_elements = document.querySelectorAll(tabs);
  } else if ( typeof tabs === 'object') {
    // trust the author and attempt to regist tabs with the given collection (expected)
    tab_elements = tabs
  }

  if( typeof content === "string" ) {
    content_elements = document.querySelectorAll(content);
  } else if (typeof content === 'object') {
    content_elements = content
  }


  if(tab_elements.length !== content_elements.length) {
    console.log(`Something is wrong in markup,
    number of tabs don't match number of tab panes`);
  }

  let active_tab;

  tab_elements.forEach((tab, i) =>  {
    content_elements[i].id = `tab-pane-${i}`
    tab.dataset['for'] = `tab-pane-${i}`

    if(tab.classList.contains('active')) {
      active_tab = tab
    }

    tab.addEventListener('mouseover', tab_handler)
  })

  // handle initial tab activation // optional;
  // not for the case of menu accordions, which shall remain collapsed until
  // interacted with.
  // ---
  // activate_tab(active_tab, _content);
}
