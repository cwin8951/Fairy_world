//µã»÷¿ªÆô´óÍ¼
$(function(){
    $(".content ul li").on("click",function(){
        var str = $(this).offset().top;
        console.log(str);
        $("body,html").scrollTop(str);
        if($(this).index() == 1){
            $(".modal .inner .zoom").attr("src","images/b/2.jpg");
        }else if($(this).index() == 2){
            $(".modal .inner .zoom").attr("src","images/b/3.jpg");
        }else if($(this).index() == 3){
            $(".modal .inner .zoom").attr("src","images/b/4.jpg");
        }else if($(this).index() == 4){
            $(".modal .inner .zoom").attr("src","images/b/6.jpg");
        }
        $(".modal").show();
    })
    $(".modal .xjt img").on("click",function(){
        $(".modal").toggle();
    })
});

