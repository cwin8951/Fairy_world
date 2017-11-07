//点击切换新闻列表
$(".tab-title li").click(function(){
    $(".tab-title li").removeClass("active");
    $(this).addClass("active");
    var str = $(".breadcrumb").offset().top;
    //console.log(str);
    $("body,html").scrollTop(str);
    if($(this).index() == 1){
        $(".article-list .a").hide();
    }else if($(this).index() == 2){
        $(".article-list .a").hide();
        $(".article-list .b").hide();
    }else{
        $(".article-list .a").toggle();
        $(".article-list .b").toggle();
    }
})