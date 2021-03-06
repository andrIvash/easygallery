(function($) {
  $(document).ready(function(){
    $(document).bind('click', function(event) {
      var target = event.target||event.srcElement; // check the onclick target
      if(!$('.maingallery').length && $(target).hasClass('galleryimg') ) {  //append or remove big image
          var bigImg = $('<img src="#" />').addClass('bigimg'); // make element - big image
          var mainGallery = $('<div>').addClass('maingallery'); // make gallery wrapper
          var caption = $('<figcaption>'); // make a image caption
          mainGallery.append(bigImg);
          mainGallery.append(caption);
          var newUrl = $(target).data('fileUrl'); // receive url of big image
          var captionText = $(target).attr('title'); // set image caption
          var mainGalleryWidth = $(target).data('fileWidth')+10; // set width of the big image
          var mainGalleryHeight = $(target).data('fileHeight')+40;// set heigth of the big image
          bigImg.attr('src', newUrl); // set url of big image
          mainGallery.css({'width': mainGalleryWidth+'px', 'height': mainGalleryHeight+'px'}); // add size to gallery wrapper
          mainGallery.makeCenter(); // make our gallery centered
          $('body').append(mainGallery);
          $('.maingallery figcaption').text(captionText);
          $('.maingallery').fadeIn(600);
      } else if ($('.maingallery')) {
          $('.maingallery').fadeOut(600);
          function removeImg() {
              $(".maingallery").remove();
          };
          setTimeout(removeImg, 600);
      };
    });
    $.fn.makeCenter = function() { // centered big image , if height or width are negative - top and left = 20px
      this.css("position", "absolute");
      var positionHeight = (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop();
      var positionWidth =  (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft();
      if (positionHeight < 0 ) positionHeight = 0;
      if (positionWidth < 0 ) positionWidth = 0;
      this.css("top",  positionHeight + "px");
      this.css("left", positionWidth + "px");
      return this;
    };
  });
})(jQuery);
 
 
