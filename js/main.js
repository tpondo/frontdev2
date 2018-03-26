$('.grid-container').hide().fadeIn(1000);
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $(window).on('scroll' , function() {
   
    if ($(window).scrollTop() > 150) {
     $("#scroll-to-top").css("right" , "0.5em");
    
    } else {
     $("#scroll-to-top").css("right" , "-1em");
    
    }

 
})

$("#scroll-to-top").on('click touch' , function() {
 $("html, body").animate({ scrollTop: 0 }, "slow");
 // return false;
});

function throttle (callback, limit) {

  var wait = false;
  return function () {
    if (!wait) {

      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}
const navigation = {
    collapsed : true,
    expand : () => {
        
        $(".grid-container #home #menu ul").fadeIn(500);
        $(".grid-container #home #menu #hamburger-nav").css("transform" , "rotate(90deg)");
        navigation.collapsed = false;
       
    },
    collapse : () => {
       
        $(".grid-container #home #menu ul").fadeOut(500);
        $(".grid-container #home #menu #hamburger-nav").css("transform" , "rotate(0deg)");
        navigation.collapsed = true;
       
    },
    check : () => {
      (navigation.collapsed) ? navigation.expand() : navigation.collapse();
      
    }
}

$("#hamburger-nav").on('click touch' , throttle(navigation.check,500));

 