
//返回見到某高度才出現

$(window).on("scroll", function () {
    var windowScrollTop = $(window).scrollTop()
    if (windowScrollTop > 100) {
        $(".returnBut").fadeIn()
    }
    else {
        $(".returnBut").fadeOut()
    }
})

/* 返回鍵到最頂上 */
$(".returnBut").on("click", function () {



    $('html,body').animate({ scrollTop: 0 },1000,"linear");   

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

//手機nav選單控制//

$(function () {
    $(window).on("resize", function () {
        var wdth = $(window).width();
        if (wdth > 850) {
            // $(".nav_btn_guide").hide()
            $(".guide_extraPages").removeClass("active")
            $(".mobile_nav_btns").removeClass("active")
            $(".mobile_nav_btn").removeClass("active")
            $(".nav_btn_guide").removeClass("heightChange")  
            $(".nav_btn_guide").addClass("mobile_afterSite") 
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
            // $(".nav_btn_guide").show()

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
            $(".nav_btn_guide").addClass("mobile_afterSite")  
            $(".nav_btn_guide").removeClass("heightChange")   
             
        }
        else {
            $(".fas").addClass("active")
            $(".guide_extraPages").addClass("active")
            $(".nav_btn_guide").removeClass("mobile_afterSite")
            $(".nav_btn_guide").addClass("heightChange")   
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
        $(".nav_btn_guide").removeClass("heightChange")
        $(".extraPage_trigger").removeClass("active")  
        $(".nav_btn_guide").addClass("mobile_afterSite")  
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
