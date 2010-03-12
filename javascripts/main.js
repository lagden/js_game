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