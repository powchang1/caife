(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

	// Chatbot Functions
// 	var INDEX = 0; 
//   $("#chat-submit").click(function(e) {
//     e.preventDefault();
//     var msg = $("#chat-input").val(); 
//     if(msg.trim() == ''){
//       return false;
//     }
//     generate_message(msg, 'self');
//     var buttons = [
//         {
//           name: 'Existing User',
//           value: 'existing'
//         },
//         {
//           name: 'New User',
//           value: 'new'
//         }
//       ];
//     setTimeout(function() {      
//       generate_message(msg, 'user');  
//     }, 1000)
    
//   })
  
//   function generate_message(msg, type) {
//     INDEX++;
//     var str="";
//     str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
//     str += "          <span class=\"msg-avatar\">";
//     str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
//     str += "          <\/span>";
//     str += "          <div class=\"cm-msg-text\">";
//     str += msg;
//     str += "          <\/div>";
//     str += "        <\/div>";
//     $(".chat-logs").append(str);
//     $("#cm-msg-"+INDEX).hide().fadeIn(300);
//     if(type == 'self'){
//      $("#chat-input").val(''); 
//     }    
//     $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
//   }  
  
//   function generate_button_message(msg, buttons){    
//     /* Buttons should be object array 
//       [
//         {
//           name: 'Existing User',
//           value: 'existing'
//         },
//         {
//           name: 'New User',
//           value: 'new'
//         }
//       ]
//     */
//     INDEX++;
//     var btn_obj = buttons.map(function(button) {
//        return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
//     }).join('');
//     var str="";
//     str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
//     str += "          <span class=\"msg-avatar\">";
//     str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
//     str += "          <\/span>";
//     str += "          <div class=\"cm-msg-text\">";
//     str += msg;
//     str += "          <\/div>";
//     str += "          <div class=\"cm-msg-button\">";
//     str += "            <ul>";   
//     str += btn_obj;
//     str += "            <\/ul>";
//     str += "          <\/div>";
//     str += "        <\/div>";
//     $(".chat-logs").append(str);
//     $("#cm-msg-"+INDEX).hide().fadeIn(300);   
//     $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
//     $("#chat-input").attr("disabled", true);
//   }
  
//   $(document).delegate(".chat-btn", "click", function() {
//     var value = $(this).attr("chat-value");
//     var name = $(this).html();
//     $("#chat-input").attr("disabled", false);
//     generate_message(name, 'self');
//   })
  
//   $("#chat-circle").click(function() {    
//     $("#chat-circle").toggle('scale');
//     $(".chat-box").toggle('scale');
//   })
  
//   $(".chat-box-toggle").click(function() {
//     $("#chat-circle").toggle('scale');
//     $(".chat-box").toggle('scale');
//   })
  
	
	
	
	



})(window.jQuery);
