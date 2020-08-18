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
function get_current()
{
  let current_section = null
  for( let section of sections)
  {
    let bounding = section.getBoundingClientRect()
    if (
      bounding.top >=-300 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
     // console.log(bounding.top);
      current_section = section;
    } 
    
  }
return current_section;
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function add_sections_to_nav()
{
    for (let section of sections)
    {
        // build the nav
      let list_item = document.createElement("li"); //Create list item for navbar
      let anchor_tag = document.createElement("a"); //Create anchore tag to referee to the section
      //nchor_tag.href = "#"+section.id; //adding a like to for the section
      anchor_tag.classList.add("menu__link");
      anchor_tag.innerHTML = section.dataset.nav;
      list_item.dataset.nav = section.id;
      list_item.appendChild(anchor_tag)
      nav_bar.appendChild(list_item);

    }
}




// Add class 'active' to section when near top of viewport
function inview_section()
{
  window.addEventListener('scroll',function(){
    let section = get_current()
    section.classList.add('your-active-class')
    for (let sec of sections)
    {
      if(sec.id != section.id)
      {
        sec.classList.remove('your-active-class')
      }
      
      for (let nav_item of nav_bar.childNodes){
        if(nav_item.dataset.nav == section.id)
        {
          nav_item.childNodes[0].classList.add('menu__link_active')
        }
        if(section.id != nav_item.dataset.nav) 
        {
          nav_item.childNodes[0].classList.remove('menu__link_active')
        }
        }
      } 
  });
}
// Scroll to anchor ID using scrollTO event
function jump_to_section()
{
  let x = document.querySelectorAll('#navbar__list li');
  for (let items of x)
  {
    items.addEventListener('click',function(){
      let clicked_section = document.querySelector('#'+items.dataset.nav);
      clicked_section.scrollIntoView({behavior: "smooth"});
      console.log(items.dataset.nav, 'cliked');

    });
  }
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
add_sections_to_nav();
// Scroll to section on link click 
jump_to_section()
// Set sections as active
inview_section();