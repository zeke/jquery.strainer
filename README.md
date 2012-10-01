Strainer
========

Strainer is a jQuery plugin that lets your filter DOM elements based on the contents of a text input.


Installation
------------

    curl -O  
    
Usage
-----

As you enter text into a strainer input, a 'match' class is applied to all elements that 
match the filter string, and removed from all elements that don't. It's up to you to use
CSS to determine what a match looks like.

```css
  ul.things > li { display: none; }
  ul.things > li.match { display: block; }
```

Vanilla:
```js
$(function() {
  $('input.strainer').strainer({selector: "ul.things > li"});
});
```

Custom:
```js
$(function() {
  $('input.strainer').strainer({
    selector: "ul.things > li",
    mode: "additive",
    minChars: 3
  });
});
```

### Options

- `selector`: The only required option; a CSS selector string like 'ul.things > li'
- `mode`: `'reductive'` (default) shows everything until you start filtering. `'additive'` shows nothing until you start filtering.
- 'numChars`: The minimum number of characters required before filtering is performed. Default: `1`

Development
-----------

Use coffee to watch and compile...
      
      coffee -wc *.coffee

License
-------

MIT. Go Nuts.

Created by @zeke
    
$ ->
  
  $("#my_filter_input").strainer({
    selector: "ul.teachers > li",
    minChars: 1,
    mode: 'reductive'
  })