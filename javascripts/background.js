var Background = Class.create(Sprite, (function() {
  function initialize($super) {
    var el = new Element("div", { id: "background" });
    $("canvas").insert({ "top": el });    
    $super(el);
  }
  
  function onEnterFrame() {
    this._x = this._x - 1;
  }
  
  return {
    initialize:   initialize,
    onEnterFrame: onEnterFrame
  };
})());