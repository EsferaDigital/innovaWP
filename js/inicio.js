"use strict";var slider=jQuery("#slider"),next=jQuery("#btn-next"),prev=jQuery("#btn-prev"),header=document.getElementById("mainHeader"),alturaHeader=header.offsetHeight;function moverD(){slider.animate({marginLeft:"-200%"},700,function(){jQuery("#slider section:first").insertAfter("#slider section:last"),slider.css("margin-left","-100%")})}function moverI(){slider.animate({marginLeft:0},700,function(){jQuery("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%")})}function autoplay(){setInterval(function(){moverD()},5e3)}function onePageScroll(e){e.preventDefault();var r=jQuery(this.hash).offset().top;jQuery("html, body").animate({scrollTop:r-alturaHeader},1e3)}function irArriba(){jQuery("#up").on("click",function(){jQuery("html, body").animate({scrollTop:0,scrollLeft:0},1e3)})}function showUp(){var e=jQuery(window).scrollTop();jQuery(window).scrollLeft();return 700<e?jQuery("#up").fadeIn():jQuery("#up").fadeOut()}jQuery("#slider section:last").insertBefore("#slider section:first"),slider.css("margin-left","-100%"),next.on("click",function(){moverD()}),prev.on("click",function(){moverI()}),autoplay(),jQuery(".link a").on("click",onePageScroll),jQuery(".top-inicio a").on("click",function(){jQuery("html, body").animate({scrollTop:0,scrollLeft:0},1e3)}),jQuery(document).ready(irArriba),jQuery(window).on("scroll",showUp);