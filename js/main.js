$(document).ready(function(){//시작

  $(".depth2, .depth2-bg").hide();

  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $(".depth2-bg").stop().fadeIn();
  });
  $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $(".depth2-bg").stop().fadeOut();
  });


  $(".btn-menu").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({"right" : "0"});
  });

  $(".mgnb-close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({"right" : "-100%"});
  });


  $(".mgnb-wrap").hide();
  $(".btn-menu").click(function(){
    $(".mgnb-wrap").fadeIn();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });






  const mb = new Swiper('.mb', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },

  });

  $("#consulting ul li").hover(function(){
    $(this).addClass("active");
    $(this).siblings().addClass("actives")
  });
  
  $("#consulting ul li").mouseleave(function(){
    $(this).removeClass("active")
    $(this).siblings().removeClass("actives")

  });


});//끝