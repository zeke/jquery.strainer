// Generated by CoffeeScript 1.3.3
(function() {

  String.prototype.looselyContains = function(substring) {
    var word, words, _i, _len;
    words = substring.split(' ');
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      word = words[_i];
      if (!(this.search(new RegExp(word, "i")) > -1)) {
        return false;
      }
    }
    return true;
  };

  jQuery.fn.strainer = function(options) {
    var _this = this;
    this.data('selector', $(options.selector));
    this.data('mode', options.mode || 'reductive');
    this.data('minChars', options.minChars || 1);
    if (this.data('mode') === 'reductive') {
      this.data('selector').addClass('match');
    } else {
      this.data('selector').removeClass('match');
    }
    return this.keyup(function(event) {
      var q;
      q = _this.val();
      if (q.length < _this.data('minChars')) {
        if (_this.data('mode') === 'reductive') {
          _this.data('selector').addClass('match');
        } else {
          _this.data('selector').removeClass('match');
        }
        return;
      }
      return _this.data('selector').each(function() {
        if ($(this).text().looselyContains(q)) {
          return $(this).addClass('match');
        } else {
          return $(this).removeClass('match');
        }
      });
    });
  };

}).call(this);