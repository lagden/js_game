var Sprite = Class.create((function() {
  function initialize(element) {
    this._element = element;
    this._style = element.style;
    
    this._x = parseInt(this._style.left) || 0;
    this._y = parseInt(this._style.top) || 0;
  }
  
  function update() {
    
  }
  
  function draw() {
    this._style.left = this._x + "px";
    this._style.top  = this._y + "px";
  }
  
  return {
    initialize: initialize,
    update:     update,
    draw:       draw
  };
})());