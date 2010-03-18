var Missile = Class.create(Sprite, (function() {
  function initialize($super, x, y) {    
    var el = new Element("div", { className: "missile" });
    $("canvas").insert({ "bottom": el });
    
    $super(el);

    this._x = x;
    this._y = y;
    
    this.speed = 20;
  }
  
  function update() {
    this._x += this.speed;
    if (this._x > 600) {
      Game.removeSprite(this);
      this._element.remove();
    }
  }
  
  return {
    initialize: initialize,
    update:     update
  }
})());