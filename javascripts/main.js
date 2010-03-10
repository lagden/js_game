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

function draw() {
  var ship = $("ship"),
    left = parseInt(ship.style.left) || 0,
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

function tick() {
  draw();
  setTimeout(tick, 20);
}

// wait till the page has loaded before observing events
document.observe("dom:loaded", function() {
  
  // Create and insert the Ship element
  var ship = new Element("div", { id: "ship" });
  $("canvas").insert(ship);
  
  // observe keypress events
  document.observe("keydown", function(event) {
    Key.down(event.keyCode);
  });
  
  document.observe("keyup", function(event) {
    Key.up(event.keyCode);
  });
  
  // Start the timer
  tick();
});