/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Magnific Popup
-----------------------------------------------*/
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function ($) {

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this),
        filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});


$(document).ready(function () {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  /*  smoothscroll
  ----------------------------------------------*/
  $(function () {
    $('#home a, .navbar-default a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });



  /* home slideshow section
  -----------------------------------------------*/
  $(function () {
    jQuery(document).ready(function () {
      $('#home').backstretch([
        "images/home-bg-slideshow1.jpg",
        "images/home-bg-slideshow2.jpg",
        "images/home-bg-slideshow3.jpg",
      ], {
        duration: 2000,
        fade: 750
      });
    });
  })


  /* Flexslider
   -----------------------------------------------*/
  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });


  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#about').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.1);
    $('#video').parallax("100%", 0.2);
    $('#menu').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#gallery').parallax("100%", 0.1);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();

  /*


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#gallery .col-md-4 a').nivoLightbox({
    effect: 'fadeScale',
  });

  // scroll to top
  $('#totop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow'); //回到顶部
  });


  /* app turiol
  -------------------------------*/
  $(".phone_mode").click(function () {
    $(this).addClass('select');
    $(this).siblings().removeClass('select');
    if ($(this).text() == 'IOS') {
      $("#goforeat_video").attr("src", "https://www.youtube.com/embed/Ggs2uUg8LuQ");
    } else {
      $("#goforeat_video").attr("src", "https://www.youtube.com/embed/gD5g_dII418")
    }
  })


  /* wow
  -------------------------------*/
  new WOW({
    mobile: false
  }).init();

  /* feedback
  -------------------------------*/
  $("#contact-form").submit(function(e){
    e.preventDefault();
  });
  $("#submit_feedback").click(function () {
    $.ajax({
      url: "http://api.goforeat.hk/feedback/add",
      type: "POST",
      data: {
        memberInfo: $("#memberInfo").text(),
        content: $("#content").text()
      },
      dataType: "jsonp", //指定服务器返回的数据类型
      success: function (data) {
        alert('success');
        $("#submit_feedback").attr('disabled');
      }
    });
  })
});