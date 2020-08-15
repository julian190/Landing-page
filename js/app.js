/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const nav_bar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function getCurrentElement(){ // getting the current section on the screen
  current_section = sections[0]; 
  min_val = 1000000;
  for (let section of sections){
    let position = section.getBoundingClientRect();
    if(position.top >-300 & position.top < min_val)
    {
      min_val = position.top;
      current_section = section

    };
    
  };
  return current_section;
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function add_sections_to_nav()
{
    for (section of sections)
    {
        // build the nav
      let list_item = document.createElement("li"); //Create list item for navbar
      let anchor_tag = document.createElement("a"); //Create anchore tag to referee to the section
      anchor_tag.href = "#"+section.id; //adding a like to for the section 
      anchor_tag.classList.add("menu__link"); 
      anchor_tag.innerHTML = section.dataset.nav;
      list_item.appendChild(anchor_tag)
      nav_bar.appendChild(list_item);

    }
}




// Add class 'active' to section when near top of viewport
function currentSection()
{
  window.addEventListener("scroll",function(event){ // add scroll event listener 
    let current_section = getCurrentElement(); // getting current on screen section 
    current_section.classList.add('your-active-class');// add class
    for(let section of sections)
    {
      if(section.id != current_section.id & section.classList.contains('your-active-class')){
        section.classList.remove('your-active-class');
      };
    };
    console.log(current_section)
  });
};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
add_sections_to_nav();
// Scroll to section on link click (it is working throw anchor tag) 

// Set sections as active
currentSection();