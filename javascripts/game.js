var Game = (function() {
  function initialize() {
    this.sprites = [];

    // Create the background
    this.sprites.push(new Background());

    // Create the Ship
    this.sprites.push(new Ship());
    
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
    this.sprites.invoke("draw");
  }
  
  function update() {
    this.sprites.invoke("update");
  }
  
  return {
    initialize:   initialize,
    draw:         draw,
    tick:         tick,
    update:       update
  };
}());