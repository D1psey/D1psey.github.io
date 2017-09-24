var navbtn = false;

$(".nav-icon div").click(function(){
    navbtn = true;
    $(".nav-icon:hover:before").css({
        "-webkit-transform" : "translateY(12px), rotate(135deg)",
        "-moz-transform"    : "translateY(12px), rotate(135deg)",
        "-ms-transform"     : "translateY(12px), rotate(135deg)",
        "-o-transform"      : "translateY(12px), rotate(135deg)",
        "transform"         : "translateY(12px), rotate(135deg)"
    });

        $(".nav-icon div").css({
        "-webkit-transform" : "scale(0)",
        "-moz-transform"    : "scale(0)",
        "-ms-transform"     : "scale(0)",
        "-o-transform"      : "scale(0)",
        "transform"         : "scale(0)"
    });
    //mda
});
