var Ship = Class.create(Sprite, (function() {
  function initialize($super) {
    var el = new Element("div", { id: "ship" });
    $("canvas").insert(el);
    
    this.speed = 5;
    
    $super(el);
  }
  
  function update() {
    if (Key.isDown(Key.LEFT)) {
      this._x -= this.speed;
    }
    if (Key.isDown(Key.RIGHT)) {
      this._x += this.speed;
    }
    if (Key.isDown(Key.UP)) {
      this._y -= this.speed;
    }
    if (Key.isDown(Key.DOWN)) {
      this._y += this.speed;
    }
  }
  
  return {
    initialize: initialize,
    update:     update
  };
})());