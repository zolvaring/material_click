class Game {
  
  static update_view() {

    console.log('Updating view.');
    //let div_id = String(`view_div`);
    let paragraph_id = String(`hello_world_p`);
    let attributes = {
      'innerText' : 'Hello, World!',
      'innerHTML' : 'Hello world.'
    }
    Game.ensure_element_exists(paragraph_id, null, attributes);

    //let div = document.createElement();
    //let paragraph = document.createElement()

  }

  static ensure_element_exists(element_id, div_id=null, attributes=null) {
    console.log(`Creating element with <${element_id}>, <${div_id}> and the following attributes:`)
    console.log(attributes);
    /*
    Ensure that element with <element_id> exists and creates it if it doesn't.
    If <div_id> is provided, creates the element within that div.
    */
    // TODO:  If <div_id> is provided, should check for <element_id> within
    //        the div associated with <div_id>.

    // If the length of elements with matching ID is 0, than assume that the
    // element doesn't exist.

    /*
    if ($(`#${element_id}`).length === 0) {
      if (div_id) {
        let parent = document.getElementById(div_id);
      }
      else {
        let parent = document.body;
      }

    }
    */

    if ($(`#${element_id}`).length === 0) {
      Game.create_element(element_id, div_id, attributes);
    }


  }

  static create_element(element_id, div_id=null, attributes=null) {

    let element = document.createElement(element_id);
    element.setAttribute('id', element_id);

    if (div_id) {
      console.log(`Creating div with div_id: <${div_id}>.`);
      console.log(div_id);
      var parent = document.createElement(div_id);
    }
    else {
      console.log('Creating an element outside of any div.');
      var parent = document.body;
      console.log(document.body);
      console.log(parent);
    }

    if (attributes) {
      console.log(attributes);
      //for (const [[key, value]] of Object.entries(Object.entries(attributes))) {
      for (const [key, value] of Object.entries(attributes)) {
        if (key == 'innerHTML') {
          element.innerHTML = value;
        }
        else {
          console.log(`Key, value: <${key}>, <${value}>.`);
          element.setAttribute(key, value);
        }
      }
    }

    /*
    if (div_id) {
      div = document.createElement(div_id);
      div.appendChild(element);
    }
    else {
      document.body.appendChild(element);
      //document.querySelector('body').appendChild(element);
    }
    */

    console.log(parent);
    parent.appendChild(element);
    console.log(parent);
  }



}


/*
class Material {
  constructor() {}
}
*/

// Game logic
window.onload = function() {
  Game.update_view();
}