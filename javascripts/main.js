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