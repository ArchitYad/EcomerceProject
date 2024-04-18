function showDiv(divid) {
  document.getElementById(divid).style.display = "block";
 }
 function hideDiv(divid) {
   document.getElementById(divid).style.display = "none";
 }
 function prev(itemName) {
   console.log("Adding item to history:", itemName);
     const list = document.querySelector('.PrevContent ul');
     const listItem = document.createElement('li');
     listItem.textContent ="/"+itemName;
     list.appendChild(listItem);

     // Add a state to the history
     history.pushState({ item: itemName }, "", "#");
 }
 window.addEventListener('popstate', function(event) {
   if(event.state){
    const list = document.querySelector('.PrevContent ul');
    if (list.children.length > 1) { // Ensure there's more than the initial item
        list.removeChild(list.lastChild);
    }
  }
  else{
    history.replaceState({ initial: true }, "", window.location.pathname);
  }
});
// window.onload = function() {
    // Initialize your page state here
  //  history.replaceState({ initial: true }, "", window.location.pathname);
//};
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slist');
    const slideWidth = slides.querySelector('li').offsetWidth;
    let index = 0;
    document.querySelector('.b2').addEventListener('click', function() {
        index = (index + 1) % slides.children.length; // Cycle through slides
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
    });

    document.querySelector('.b1').addEventListener('click', function() {
        index = (index - 1 + slides.children.length) % slides.children.length; // Cycle through slides
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
    });
});
