(function () {

    "use strict";

    var fsulogourl = "http://en.wikipedia.org/wiki/File:FSU_Seminoles.svg",

//inline HTML:
// http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/52.png&w=80&h=80&transparent=true
// http://image.cdnllnwnl.xosnetwork.com/fls/32900/site_graphics/logo.png
// http://image.cdnllnwnl.xosnetwork.com/fls/32900/site_graphics/footerlogo.png

//within CSS:
// http://a1.espncdn.com/prod/assets/clubhouses/2010/ncaa/logos/52.png

    init = function(){
      var images = document.querySelectorAll('img:not([data-src])');
       Array.prototype.forEach.call(images, function (img) {
        var image = new Image();
        image.src = img.getAttribute('src');
        image.onerror = function () {
          img.setAttribute('data-fsuholder-original', image.src);
          img.setAttribute('src', fsulogourl);
        };
      });
    };

    init();

    if (typeof(fsuholderLoop) == "undefined")
      window.fsuholderLoop = setInterval(init, 3000);
    else
      clearInterval(fsuholderLoop);

}());