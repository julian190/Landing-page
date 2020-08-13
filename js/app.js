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
const nav_bar = document.querySelector(".navbar__menu");
const sections = document.querySelectorAll(".landing__container");
const un_order_list = document.createElement("ul");
let list_of_offsets = []



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
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
      let list_item = document.createElement("li");
      let anchor_tag = document.createElement("a");
      anchor_tag.href = "#"+section.parentNode.id;
      anchor_tag.classList.add("menu__link");
      anchor_tag.innerHTML = section.firstElementChild.innerText;
      list_item.appendChild(anchor_tag)
      un_order_list.appendChild(list_item);
      nav_bar.appendChild(un_order_list);
    }
}




// Add class 'active' to section when near top of viewport
function get_offsets()
{

    for (section of sections)
    {
        list_of_offsets.push(section.parentElement.offsetTop);
    }
}
var findMe = document.querySelector('.main__hero');
window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe)) {
		console.log('In viewport!');
	} else {
    console.log('Nope...');
  }
}, false);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
add_sections_to_nav()
// Scroll to section on link click

// Set sections as active
get_offsets()