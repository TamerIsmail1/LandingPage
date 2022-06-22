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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * The resources used in this project mainly the course lectures 
 * * and references and some W3Schools pages that explain the usage of some functions like:
 * 
 * for working with attribute data:
 * https://www.w3schools.com/tags/att_data-.asp
 * 
 * for working with smooth scroll
 * https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
 * https://www.w3schools.com/jsref/met_element_scrollintoview.asp
 * 
 * for working with getBoundingClientRect()
 * https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
 * 
 */

/**
 * Define Global Variables
 * 
*/
const mainNavUl = document.getElementById('navbar__list');
const mySections = document.getElementsByTagName('section');
let navElement = null;
let anchorElement = null;
let navFooter = null;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildTheNavigation(){
    for(let i = 0; i < mySections.length; ++i){  
        navElement = document.createElement('li');//create li element for the unorder list
        anchorElement = document.createElement('a');//create anchor element for navigating to sections
        anchorElement.setAttribute('data-nav',mySections[i].id);//save the name of the section in data attribute
        anchorElement.href = `#${mySections[i].id}` //specify the location of the anchor
        anchorElement.textContent = mySections[i].getAttribute('data-nav');//getting data attribute from sections to set the anchor text
        anchorElement.classList = 'navbar__menu menu__link';//setting class for the anchor to make it stand out
        navElement.appendChild(anchorElement);//adding anchor to the navigation list item    
        mainNavUl.appendChild(navElement);// adding li to the navigation section
    }
}


// Add class 'active' to section when near top of viewport
function setTheActiveState(){
    document.addEventListener('scroll',function(){ //listen to the scroll event
        for(let i = 0; i < mySections.length; ++i){ //loop through the sections on the page
            rectangleElement = mySections[i].getBoundingClientRect(); //get a rectangle for the current section
            if (rectangleElement.top >= -400 && rectangleElement.top <= 471 ) { //check the position of the rectangle to withing the viewport
                if(!mySections[i].classList.contains('nav-active-class'))//only add the active state class if it is not exist
                    mySections[i].classList.add('nav-active-class');
            } else { //remove the active state from the section if it is out of the viewport
                if(mySections[i].classList.contains('nav-active-class'))//if the active state exist remove it
                    mySections[i].classList.remove('nav-active-class');
            }
        }
    });
}

// Scroll to anchor ID using scrollTO event
function makeSmoothScroll(){
    const myAnchors = document.getElementsByTagName('a');//select all anchors on the page
    for(let i = 0; i < myAnchors.length; i++){
        let myAnchor = myAnchors[i];//define variable for the current anchor
        myAnchor.addEventListener('click', function(event){//add listener for the click event on the anchor element
            event.preventDefault();// prevent the default behavior for clicking which jumb to the section without scrolling
            let mySection = document.getElementById(this.getAttribute('data-nav'));//get related section using its name from data attribute
            mySection.scrollIntoView({behavior:'smooth'});//call the scroll method with smoothe behavior option
        })
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildTheNavigation();//call the build navigation method
// Scroll to section on link click
makeSmoothScroll();//call the smooth scrolling method
// Set sections as active
setTheActiveState();//call the active state method

