$(document).ready(function(){
   
    var lefthook = $("#lefthook")[0];
    var righthook = $("#righthook")[0];
    var howyoudoing = $("#howyoudoing")[0];
  
    $("#left").mouseover(function(){
        $(this).mouseenter(function(){
            lefthook.play();
            $(this).removeClass("lefthand").addClass("punch_left");
        }).mouseleave(function(){
            $(this).removeClass("punch_left").addClass("lefthand");
        });
    });

    $("#right").mouseover(function(){
        $(this).mouseenter(function(){
            righthook.play();
            $(this).removeClass("righthand").addClass("punch_right");
        }).mouseleave(function(){
            $(this).removeClass("punch_right").addClass("righthand");
        });
    });
    
    $("#flowers").mouseover(function(){
        $(this).mouseenter(function(){
            howyoudoing.play();
            $(this).removeClass("flowers").addClass("flowers_give");
        }).mouseleave(function(){
            $(this).removeClass("flowers_give").addClass("flowers");
        });
    });
    
    $('.carousel').carousel({
        interval: 5000
    });
    
    $(".contact_icon").hover(function(){
        $(this).addClass("contact_hover");
    },
    function(){
        $(this).removeClass("contact_hover");
    });

});