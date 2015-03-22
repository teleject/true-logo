(function () {

    "use strict";

    var reset = function(){
      var images = document.querySelectorAll('img[data-fsuholder-original]');
      Array.prototype.forEach.call(images, function (img) {
        img.setAttribute('data-fsuholder', img.getAttribute('src'))
        img.setAttribute('src', img.getAttribute('data-fsuholder-original'));
      });
    };

    reset();

    if (typeof(fsuholderLoop) != "undefined")
        clearInterval(fsuholderLoop);

}());