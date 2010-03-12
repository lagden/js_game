var Key = (function() {
  var pressed = {};
  
  function isDown(keyCode) {
    return pressed[keyCode] === true;
  }
  
  function down(keyCode) {
    pressed[keyCode] = true;
  }
  
  function up(keyCode) {
    delete pressed[keyCode];
  }
  
  return {
    LEFT:  37,
    UP:    38,
    RIGHT: 39,
    DOWN:  40,
    
    isDown: isDown,
    down:   down,
    up:     up
  };
})();

var Game = (function() {
  var ship;
  
  function initialize() {
    // Create and insert the Ship element
    ship = new Element("div", { id: "ship" });
    $("canvas").insert(ship);
    
    tick();
  }
  
  function tick() {
    draw();
    setTimeout(tick, 20);
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

// Wait till the page has loaded and start the game
document.observe("dom:loaded", Game.initialize.bind(Game));

// Observe keydown events
document.observe("keydown", function(event) {
  Key.down(event.keyCode);
});

// Observe keyup events
document.observe("keyup", function(event) {
  Key.up(event.keyCode);
});