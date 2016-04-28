console.log('game.js');

var cards = {1, 2, 3, 4, 1, 2, 3, 4};

function shuffle(a) {
    var j, x, i;

    for(i = a.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = a[i-1];
      a[i - 1] = a[i];
      a[i] = x;
    }
}

shuffle(cards);

var $wrap = $('.wrap');

cards.forEach(function(card)) {
  $wrap.append('<div class="front">' + card + '</div>')
}
