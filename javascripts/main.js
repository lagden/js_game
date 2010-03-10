// wait till the page has loaded before observing events
document.observe("dom:loaded", function() {
  
  // Create and insert the Ship element
  var ship = new Element("div", { id: "ship" });
  $("canvas").insert(ship);
  
  // observe keypress events
  document.observe("keypress", function(event) {
    
    // top and left represent the x and y position
    // of our ship from the top left corner.
    var top = (parseInt($("ship").style.top) || 0),
      left = (parseInt($("ship").style.left) || 0);
    
    // Move the ship based on the pressed keys
    switch (event.keyCode) {
      case 37: // Left arrow
        left--;
        break;
      
      case 38: // Up arrow
        top--;
        break;
      
      case 39: // Right arrow
        left++;
        break;
      
      case 40: // Down arrow
        top++;
        break;
    }
    
    // Move the ship to its new position.
    $("ship").style.top = top + "px";
    $("ship").style.left = left + "px";
  });
});