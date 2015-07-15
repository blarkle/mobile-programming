// Generated by CoffeeScript 1.6.2
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_siren_ = (function() {
  function block_siren_() {
    this.run = __bind(this.run, this);
    var css;

    css = "";
    $("<style type='text/css'></style>").html(css).appendTo("head");
    $("<div class=\"drag-wrap draggable\" name=\"siren\">\n	SIREN\n</div>").appendTo(".drag-zone");
  }

  block_siren_.prototype.run = function() {
    var audio;

    audio = new Audio("sound/Siren.mp3");
    return audio.play();
  };

  return block_siren_;

})();
