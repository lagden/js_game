var Game = (function() {
  var ship;
  
  function initialize() {
    // Create and insert the Ship element
    ship = new Element("div", { id: "ship" });
    $("canvas").insert(ship);
    
    this.tick();
  }
  
  function tick() {
    this.draw();
    setTimeout(this.tick, 20);
  }
  
  function draw() {
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
  }
  
  return {
    initialize: initialize,
    draw:       draw,
    tick:       tick
  };
}());