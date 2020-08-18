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
function get_current()//get current view section
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
    let section = get_current() // getting in page class
    section.classList.add('your-active-class') // add active class
    for (let sec of sections)
    {
      if(sec.id != section.id) // if the class not in view 
      {
        sec.classList.remove('your-active-class') // remove active section class
      }
      
      for (let nav_item of nav_bar.childNodes){ // getting navbar items 
        if(nav_item.dataset.nav == section.id) // if the navbar dataset = section id
        {
          nav_item.childNodes[0].classList.add('menu__link_active') // add class menu active 
        }
        if(section.id != nav_item.dataset.nav) // if not 
        {
          nav_item.childNodes[0].classList.remove('menu__link_active') // remove the class 
        }
        }
      } 
  });
}
// Scroll to anchor ID using scrollTO event
function jump_to_section()
{
  let x = document.querySelectorAll('#navbar__list li'); // getting all navbar list item
  for (let items of x) // loop throw them
  {
    items.addEventListener('click',function(){ // add event listener to them all 
      let clicked_section = document.querySelector('#'+items.dataset.nav);// getting the selected item id
      clicked_section.scrollIntoView({behavior: "smooth"}); // jump to it 
     // console.log(items.dataset.nav, 'cliked'); // this for debug 

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