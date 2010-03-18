var Ship = Class.create(Sprite, (function() {
  function initialize($super) {
    var el = new Element("div", { id: "ship" });
    $("canvas").insert(el);
    
    this.speed = 5;
    this.shootLimiter = 0;
    
    $super(el);
  }
  
  function update() {
    this.shootLimiter++;
    
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
    if (Key.isDown(Key.SPACE) && this.shootLimiter > 8) {
      this.shootLimiter = 0;
      Game.addSprite(new Missile(this._x + 80, this._y + 18));
    }
  }
  
  return {
    initialize: initialize,
    update:     update
  };
})());