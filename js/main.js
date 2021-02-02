// jquery ready start
$(document).ready(function () {
  // jQuery code

  ///////////////// fixed menu on scroll for desctop
  if ($(window).width() > 992) {
    var navbar_height = $(".navbar").outerHeight();

    // When Scroll nav fixed on top

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".navbar-wrap").css("height", navbar_height + "px");
        $("#navbar_top").addClass("fixed-top");
      } else {
        $("#navbar_top").removeClass("fixed-top");
        $(".navbar-wrap").css("height", "auto");
      }
    });
  } // end if



  // Page loader

  var $loading = $("#wait").hide();
  $(document)
    .ajaxStart(function () {
      $loading.show();
    })
    .ajaxStop(function () {
      $loading.hide();
    });



  // Date Range Picker

  (function () {
    var datepickercheckin = new HotelDatepicker(
      document.querySelector("#datepickercheckin-input-parent input")
    );
  })();



    // Guest Panel Adult and Child Choose Start

     /********** Panel_Dropdown ***********/
     function close_panel_dropdown() {
      $(".panel-dropdown").removeClass("active")
      }
      $(".panel-dropdown a").on("click", function (event) {
      if ($(this).parent().is(".active")) {
      close_panel_dropdown()
      } else {
      close_panel_dropdown();
      $(this).parent().addClass("active")
      };
      event.preventDefault()
      });
      var mouse_is_inside = false;
      $(".panel-dropdown").hover(function () {
      mouse_is_inside = true
      }, function () {
      mouse_is_inside = false
      });
      $("body").mouseup(function () {
      if (!mouse_is_inside) {
      close_panel_dropdown()
      }
      });


      
         /********** Quality ***********/
         function qtySum(){
          var arr = document.getElementsByName('qtyInput');
          var tot=0;
          for(var i=0;i<arr.length;i++){
          if(parseInt(arr[i].value))
          tot += parseInt(arr[i].value);
          }
          var cardQty = document.querySelector(".qtyTotal");
          cardQty.innerHTML = tot;
          } 
          qtySum();
          
          $(function() {
          $(".qtyButtons input").after('<div class="qtyInc"></div>');
          $(".qtyButtons input").before('<div class="qtyDec"></div>');
          $(".qtyDec, .qtyInc").on("click", function() {
          
          var $button = $(this);
          var oldValue = $button.parent().find("input").val();
          
          if ($button.hasClass('qtyInc')) {
          var newVal = parseFloat(oldValue) + 1;
          } else {					 
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
          }
          
          $button.parent().find("input").val(newVal);
          qtySum();
          $(".qtyTotal").addClass("rotate-x");
          });
          
          function removeAnimation() { $(".qtyTotal").removeClass("rotate-x"); }
          const counter = document.querySelector(".qtyTotal");
          counter.addEventListener("animationend", removeAnimation);
          });
          
         /* // Guest Panel Adult and Child Choose end */


          

}); // jquery end





