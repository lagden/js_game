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

  var TICKS_PER_SECOND = 50;
  var SKIP_TICKS = 1000 / TICKS_PER_SECOND;
  var MAX_FRAMESKIP = 10;

  var loops;
  var nextGameTick = (new Date).getTime();
  
  function tick() {
    loops = 0;
    
    while ((new Date).getTime() > nextGameTick && loops < MAX_FRAMESKIP) {
      this.update();
      nextGameTick += SKIP_TICKS;
      loops++;
    }

    this.draw();
    setTimeout(this.tick.bind(this), 1);
  }
  
  function draw() {
    background.draw();
    ship.draw();
  }
  
  function update() {
    background.update();
    ship.update();
  }
  
  return {
    initialize:   initialize,
    draw:         draw,
    tick:         tick,
    update:       update
  };
}());