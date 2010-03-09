document.observe("dom:loaded", function() {
  document.observe("keypress", function(event) {
    
    var top = (parseInt($("ship").style.top) || 0),
      left = (parseInt($("ship").style.left) || 0);
    
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
    
    
    $("ship").style.top = top + "px";
    $("ship").style.left = left + "px";
    
  });
});