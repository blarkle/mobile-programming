// Generated by CoffeeScript 1.6.2
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_array_ = (function() {
  function block_array_() {
    this.run = __bind(this.run, this);
    var css;

    css = "";
    $("<style type='text/css'></style>").html(css).appendTo("head");
    $("<div class=\"drag-wrap draggable\" name=\"array\">\n	ARRAY\n</div>").appendTo(".drag-zone");
  }

  block_array_.prototype.run = function() {
    return [1, 2, 3, 4, 5];
  };

  return block_array_;

})();