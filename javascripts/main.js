var $header = $('.header'),
          $banner = $('.banner-graphic'),
          $fsRight = $('.fs-right'),
          $fsLeft = $('.fs-left');
      var tween = TweenLite.from($header, 1.6, {
        opacity: 0,
        ease: Power1.easeInOut
      });
      $banner.hover(
          function() {
            TweenLite.to($(this), .25, {scale: 1.07});
          },
          function() {
            TweenLite.to($(this), .25, {scale: 1});
          }
      );