var Game = (function() {
  var ship, background;
  
  function initialize() {
    // Create the background
    background = new Background();
    
    // Create the Ship
    ship = new Ship();
    
    // Start the tick loop
    this.tick();
  }
  
  function tick() {
    this.draw();
    setTimeout(this.tick.bind(this), 20);
  }
  
  function draw() {
    background.onEnterFrame();
    ship.onEnterFrame();
    
    background.draw();
    ship.draw();
  }
  
  return {
    initialize: initialize,
    draw:       draw,
    tick:       tick
  };
}());