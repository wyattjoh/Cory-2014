(function(){var n,o,r;o=$(".logo"),n=$(".intro .text"),n.slideUp(1),o.slideUp(1).delay(300).slideDown("slow",function(){return n.delay(600).slideDown("slow")}),r=function(n,o,r,l){var s,t;return null==o&&(o=0),null==r&&(r=64),null==l&&(l=100),t=$(n),o=Math.floor(Math.random()*(r-o+1))+o,s=function(){return o--,o%r===0&&(o=0),t.css("background-position-x",o)},setInterval(s,l),s()},r(".backgrounds .ground, .clouds .body, .backgrounds .forest-ground"),r(".backgrounds .mountains",0,1024,450),r(".backgrounds .forest",0,512,450)}).call(this);