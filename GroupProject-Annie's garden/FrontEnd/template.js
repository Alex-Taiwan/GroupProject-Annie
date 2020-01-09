$(window).on("scroll", function () {
    var windowScrollTop = $(window).scrollTop()
    if (windowScrollTop > 100) {
        $(".returnBut").fadeIn()
    }
    else {
        $(".returnBut").fadeOut()
    }
})

$(".returnBut").on("click", function () {



    $('html,body').animate({ scrollTop: 0 },1000,"linear");   /* 返回到最頂上 */

    return false;
})

// $(window).on("resize",function () {
//     if($(window).width() > 850){
//         $(".nav_btn_guide").hide()
//         $(".mobile_nav_btns").hide()

//             if($(".mobile_nav_btns").hasClass("active")){
//                 $(".mobile_nav_btns").removeClass("active")
//             }

//             if (burger_decoration1.hasClass("active")) {
//                 $(".burger_decoration1").stop()
//                 $(".burger_decoration2").stop()
//                 $(".burger_decoration3").stop()
//                 $(".burger_decoration1").removeClass("active")
//                 $(".burger_decoration2").removeClass("active")
//                 $(".burger_decoration3").removeClass("active")
//             }
//     }

// })

$(function () {
    $(window).on("resize", function () {
        var wdth = $(window).width();
        if (wdth > 850) {
            $(".nav_btn_guide").hide()
            $(".mobile_nav_btns").removeClass("active")
            $(".mobile_nav_btn").removeClass("active")
            $(".mobile_mask").hide()
            $(".burger_decoration1").removeClass("active")
            $(".burger_decoration2").removeClass("active")
            $(".burger_decoration3").removeClass("active")
            $(".fas").removeClass("active")
            // if ($(".mobile_nav_btns").hasClass("active")) {
            //     $(".mobile_nav_btns").removeClass("active")
            // }

            // if (burger_decoration1.hasClass("active")) {
            //     // $(".burger_decoration1").stop()
            //     // $(".burger_decoration2").stop()
            //     // $(".burger_decoration3").stop()
            //     $(".burger_decoration1").removeClass("active")
            //     $(".burger_decoration2").removeClass("active")
            //     $(".burger_decoration3").removeClass("active")
            // }
        }
        if (wdth <= 850) {
            $(".nav_btn_guide").show()
            // $(".nav_btn_guide i").on("click", function () {
            //     if ($(".guide_extraPages").hasClass("active")) {
            //         $(".guide_extraPages").removeClass("active")
            //     }
            //     else {
            //         $(".guide_extraPages").addClass("active")
            //     }
        
            // })
        
        }
    })

})


   
    $(".nav_btn_guide i").on("click", function () {
        if ($(".guide_extraPages").hasClass("active")) {
            $(".fas").removeClass("active")
            $(".guide_extraPages").removeClass("active")
           

        }
        else {
            $(".fas").addClass("active")
            $(".guide_extraPages").addClass("active")
        }
    })




$(".nav_btnGroup_mobile ").on("click", function () {
    $(".mobile_mask").toggle()
    // $(".mobile_nav_btns").toggle()
    $(".guide_extraPages").removeClass("active")
    var burger_decoration1 = $(".burger_decoration1")

    if ($(".mobile_nav_btns").hasClass("active")) {
        $(".mobile_nav_btns").removeClass("active")
    }
    else {
        $(".mobile_nav_btns").addClass("active")
    }

    if ($(".mobile_nav_btn").hasClass("active")) {
        $(".mobile_nav_btn").removeClass("active")
    }
    else {
        $(".mobile_nav_btn").addClass("active")
    }

    if (burger_decoration1.hasClass("active")) {
        $(".burger_decoration1").removeClass("active")
        $(".burger_decoration2").removeClass("active")
        $(".burger_decoration3").removeClass("active")
        
    }
    else {
        $(".burger_decoration1").addClass("active")
        $(".burger_decoration2").addClass("active")
        $(".burger_decoration3").addClass("active")
        
    }

})

$(".mobile_mask").on("click",function(){
    $(".mobile_mask").hide()
    // $(".mobile_nav_btn").css({
    //     "width":"0vw",
    // })
    $(".mobile_nav_btn").removeClass("active")
    $(".mobile_nav_btns").removeClass("active")
    $(".guide_extraPages").removeClass("active")
    $(".burger_decoration1").removeClass("active")
    $(".burger_decoration2").removeClass("active")
    $(".burger_decoration3").removeClass("active")
    
})

// var window_width=$(window).width()

// if(window_width<850){
//     var css=document.querySelector("#css");
//     console.log(css);
//     var gmail_iconBox=document.querySelector("#gmail_iconBox");
//     var c=css.sheet;
//     c.insertRule("#gmail_iconBox#gmail_iconBox::after{display:block;}", 0)
// }
// $(".gmail_iconBox").on("click",function(){
//     var window_Nowwidth=$(window).width()
//     if(window_Nowwidth<850){
//         var css=document.querySelector("#css");
//     console.log(css);
//     var gmail_iconBox=document.querySelector("#gmail_iconBox");
//     var c=css.sheet;
//     c.insertRule("#gmail_iconBox#gmail_iconBox::after{display:block;}", 0)
//     }
// })

// $(window).on("dblclick",function(){
//     var window_Nowwidth=$(window).width()
//     if(window_Nowwidth<850){
//         var css=document.querySelector("#css");
//     console.log(123);
//     var gmail_iconBox=document.querySelector("#gmail_iconBox");
//     var c=css.sheet;
//     c.insertRule("#gmail_iconBox#gmail_iconBox::after{display:none;}", 0)
//     }
// })