
// 導入WOW動態
new WOW().init();




$(function(){

	// 回到頂端
    $('.btn-goTop').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      if(scrollVal > 80){
        $('.side-btn').addClass('show');
      }else{
        $('.side-btn').removeClass('show');
      };
    });



  // 到聯絡
    var goButton = $('.footer-info').offset().top;
    $('.btn-goButton').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: goButton
      }, 600);
      return false;
    });


  //wrap高度
    var fh = $('.footer').height();
    var hh = $('.header').height();
    // console.log(fh);
    $('.wrap').css({
      'margin-bottom':fh*-1,
      'padding-bottom':fh,
      'padding-top':hh-1
    });

    $(window).resize(function(){
      var fh = $('.footer').height();
      var hh = $('.header').height();
      // console.log(fh);
      $('.wrap').css({
        'margin-bottom':fh*-1,
        'padding-bottom':fh,
        'padding-top':hh-1
      });
    });





    // 案例輪播
    $('.shareCase-slick-list').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    // 受獎輪播
    $('.awards-slick-list').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });



  // 數字增加
  $('.counterUp').each(function () {
    var $counter = $(this);
    var hasAnimated = false;

    function animateCounter() {
      var endNUM = parseInt($counter.attr("data-countNUM"), 10);
      $({ countNum: 0 }).animate({
        countNum: endNUM
      }, {
        duration: 1000,
        easing: 'linear',
        step: function () {
          $counter.text(Math.floor(this.countNum));
        },
        complete: function () {
          $counter.text(this.countNum);
        }
      });
    }

    function checkInView() {
      if (hasAnimated) return;

      var windowBottom = $(window).scrollTop() + $(window).height();
      var counterTop = $counter.offset().top;

      if (windowBottom > counterTop) {
        hasAnimated = true;
        animateCounter();
      }
    }

    // 初始檢查
    checkInView();

    // 滾動時再檢查
    $(window).on('scroll', checkInView);
  });






});



