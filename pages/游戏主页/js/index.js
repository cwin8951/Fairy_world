
$(function(){
    //浮动栏

    //点击按钮关闭浮动栏
    $("#view_btn").on("click",function(){
        //console.log(1);
        $("#view").slideUp();
        $("#feature").css("margin-bottom",0);
    })
    $(window).scroll(function(){
        //滑到一定距离时出现浮动栏
        var feature = $("#feature .tit").offset().top;
        //console.log(current);
        var str = $("body").scrollTop();
        //console.log(str);
        if(str > feature){
            $(".view").slideDown();
            //console.log(1);
        }
    })

    //轮播图
    var index = 0;
    //移到小圆点，改变小圆点样式
    $("#feature .f_pints span").on("mouseover",function(){
        index = $(this).index();
        $("#feature .f_pints span.on").removeClass("on");
        $(this).addClass("on");
        //移到小圆点位置，移到对应图片
        var imgl = $("#feature .swiper-wrapper li .l");
        var imgr = $("#feature .swiper-wrapper li .r");
        //$("#feature .swiper-wrapper li.current").removeClass("current");
        //$("#feature .swiper-wrapper li").eq(index).addClass("current");
        //$("#feature .swiper-wrapper li").each(function(){
        //    $("#feature .swiper-wrapper li").children(".l").css("right",1350);
        //    $("#feature .swiper-wrapper li").children(".r").css("right",-125);
        //})
        $("#feature .swiper-wrapper li").each(function(){
            $(this).hide();
        })
        $("#feature .swiper-wrapper li").eq(index).show();
        $("#feature .swiper-wrapper li").eq(index).children(".l").animate({
            right:-68
        },1000)
        $("#feature .swiper-wrapper li").eq(index).children(".r").animate({
            right:126
        },1000)
    })
    //移开鼠标，图片重新回到原处
    $("#feature .f_pints span").on("mouseout",function(){
        $("#feature .swiper-wrapper li").eq(index).addClass("current");
        $("#feature .swiper-wrapper li").each(function(element){
            $("#feature .swiper-wrapper li").children(".l").css("right",1350);
            $("#feature .swiper-wrapper li").children(".r").css("right",-125);
        })
    })
    //自动轮播
    //setInterval(function(){
    //    $("#feature .swiper-wrapper li").each(function(){
    //        $(this).hide();
    //    })
    //    $("#feature .swiper-wrapper li").eq(index).show();
    //    $("#feature .swiper-wrapper li").eq(index).children(".l").animate({
    //        right:-68
    //    },1000)
    //    $("#feature .swiper-wrapper li").eq(index).children(".r").animate({
    //        right:126
    //    },1000)
    //},1000)
});
