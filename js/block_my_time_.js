// Generated by CoffeeScript 1.6.2
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_my_time_ = (function() {
  function block_my_time_() {
    this.run = __bind(this.run, this);
    var css;

    css = "";
    $("<style type='text/css'></style>").html(css).appendTo("head");
    $("<div id=\"drag8\" class=\"draggable block1\">MY TIME</div>").appendTo(".block_bank_wrapper");
  }

  block_my_time_.prototype.run = function() {
    return moment().format('HH:mm');
  };

  return block_my_time_;

})();