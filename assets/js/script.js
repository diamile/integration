$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  

  //deplacement des elements quand on scroll
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });



  
//   window.onscroll = changePos;

//   function changePos() {
//       var header = document.getElementById("navArea");
//       if (window.pageYOffset > 70) {
//           header.style.position = "fixed";
//           header.style.top = "0";
//       } else {
//           header.style.position = "";
//           header.style.top = "";
//       }
//   }

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('#navArea').addClass('stuck');
    } else {
        $('#navArea').removeClass('stuck');
    }
});