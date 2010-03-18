var Background = Class.create(Sprite, (function() {
  function initialize($super) {
    var el = new Element("div", { id: "background" });
    $("canvas").insert({ "top": el });    
    $super(el);
  }
  
  function update() {
    this._x = this._x - 1;
    if (this._x < -2110) {
      this._x = 0;
    }
  }
  
  return {
    initialize: initialize,
    update:     update
  };
})());