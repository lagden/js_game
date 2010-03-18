var EnemyShip = Class.create(Sprite, (function() {
  function intialize($super) {
    var el = new Element("div", { className: "enemy_ship" });
    $("canvas").insert({ "bottom": el });
    
    $super(el);
    
    this._x = 700;
    this._y = Math.random() * 200 + 50;
    this.speed = Math.random() * 5 + 5;
  }
  
  function update() {
    this._x -= this.speed;
    if (this._x < -100) {
      Game.removeSprite(this);
      this._element.remove();
    }
  }
  
  return {
    initialize: intialize,
    update:     update
  };
})());