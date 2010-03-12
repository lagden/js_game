var Game = (function() {
  var ship, background;
  
  function initialize() {
    // Create and insert the background element
    background = new Element("div", { id: "background" });
    $("canvas").insert(background);

    // Create and insert the Ship element
    ship = new Element("div", { id: "ship" });
    $("canvas").insert(ship);
    
    // Start the tick loop
    this.tick();
  }
  
  function tick() {
    this.draw();
    setTimeout(this.tick.bind(this), 20);
  }
  
  function draw() {
    // First, move the ship
    var left = parseInt(ship.style.left) || 0,
        top = parseInt(ship.style.top) || 0;
    
    if (Key.isDown(Key.LEFT)) {
      left--;
    }
    if (Key.isDown(Key.RIGHT)) {
      left++;
    }
    if (Key.isDown(Key.UP)) {
      top--;
    }
    if (Key.isDown(Key.DOWN)) {
      top++;
    }
    
    ship.style.left = left + "px";
    ship.style.top = top + "px";
    
    // Now move the background
    left = parseInt(background.style.left) || 0;
    left -= 1;
    if (left < -2110) {
      left = 0;
    } 
    background.style.left = left + "px";
  }
  
  return {
    initialize: initialize,
    draw:       draw,
    tick:       tick
  };
}());