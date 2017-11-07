$(function(){
    /*//���ٶ���---�ֲ�ͼ��װ*/
    function animate(element,target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var staleft = element.offsetLeft;
            var step = 40;
            staleft += staleft <= target ? step : -step;
            element.style.left = staleft + "px";
            if (Math.abs(staleft - target) <= step) {
                clearInterval(element.timer);
                element.style.left = target + "px";
            }
        }, 20);
    };
    /*��������*/
    function animateHD(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function() {
            var current = element.offsetLeft;
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style.left = current + "px";
            if (current == target) {
                clearInterval(element.timer);
            }
        }, 20);
    };
    /*�ֲ�ͼ*/
    ;(function(window){
        var document = window.document;
        var slideshow = document.getElementById("slideshow");
        var ul = slideshow.children[0];
        var lis = slideshow.children[1].children;
        var btnleft = slideshow.children[2].children[0];
        var btnright = slideshow.children[2].children[1];
        var imgWidth = slideshow.offsetWidth;
        var myindex = 0;
        //1  �������Բ�㣬�л�ͼƬ
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseover = listOnMoseover;
        }
        function listOnMoseover(){
            myindex = this.index;
            var target = myindex * imgWidth * -1;
            ul.style.left = target + "px";
            animate(ul,target);
            for (var j = 0; j < lis.length; j++) {
                lis[j].removeAttribute("class");
            }
            this.className = "current";
        }
        //���Ұ�ť�л�
        btnleft.onclick = function () {
            if( myindex == 0){
                myindex = ul.children.length-1;
                ul.style.left = myindex * imgWidth * -1 +"px";
            }
            myindex--;
            var target = myindex * imgWidth * -1;
            animate(ul,target);
            for (var j = 0; j < lis.length; j++) {
                lis[j].removeAttribute("class");
            }
            lis[myindex].className = "current";
        }
        //�ұ�
        btnright.onclick = BtnRight;
        //��װ�������Զ��ֲ�
        function BtnRight() {
            if(myindex == ul.children.length-1){
                ul.style.left = 0;
                myindex = 0;
            }
            myindex++;
            var target = myindex * imgWidth * -1;
            animate(ul,target);
            //Բ��
            for (var j = 0; j < lis.length; j++) {
                lis[j].removeAttribute("class");
            }
            if(myindex == ul.children.length-1){
                lis[0].className = "current";
            }else{
                lis[myindex].className = "current";
            }
        }
        //�Զ��ֲ�
        var timer = setInterval(BtnRight,1600);
        //�������ͼƬ��Χ��ֹͣ�Զ��ֲ�
        slideshow.onmouseover = function () {
            clearInterval(timer);
        }
        slideshow.onmouseout = function () {
            timer = setInterval(BtnRight,1600);
        }
        /*��������*/
        var cloud = document.getElementById("cloud");
        var listItems = document.getElementById("nav-list").children;
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].onmouseover = mouseOverHandle;
            listItems[i].onclick = clickHandle;
            listItems[i].onmouseout = mouseOutHandle;
        }
        var lastPoistion = 0;
        function mouseOverHandle() {
            animateHD(cloud,this.offsetLeft);
        }
        function clickHandle() {
            lastPoistion = this.offsetLeft;
        }
        function mouseOutHandle() {
            animateHD(cloud,lastPoistion);
        }
    })(window);
    $(function () {
        /*����tab��*/
        //main-one tab��
       /* $.tab({
            tabMenu: '#tab-menu'
        });*/
        //main-six ��tab��
       /* $.tabtwo({
            tabMenu: '#list-tit'
        });*/
        //main-six ��tab��
        /*$.tabthree({
            tabMenu: '#tr-tit'
        });*/
        /*main-one tab��*/
        $("#tab-main div").eq(0).show();
        $("#tab-menu li").on("click", function (){
            //ֻ��ʾһ��ԲȦ
            var index = $(this).index();
            //$(this).css({"backgroundColor":rgba(151, 121, 75, 0.6)});
            $("#tab-menu li.active").removeClass("active");
            $(this).addClass("active");

            //����ͼƬ
            $("#tab-main div").hide(300);
            $("#tab-main div").eq(index).show(500);
        });

        /*ͬ���� ��tab��*/
        $("#tr-con-main div").eq(0).show();
        $("#tr-tit li").on("click", function (){
            //ֻ��ʾһ��ԲȦ
            var index = $(this).index();
            $("#tr-tit li.tr-active").removeClass("tr-active");
            $(this).addClass("tr-active");
            //����ͼƬ
            $("#tr-con-main div").hide(50);
            $("#tr-con-main div").eq(index).show(200);
        });

        /*��һ����� ��tab��*/
        $("#inter-content-main div").eq(0).show();
        $("#list-tit li").on("click", function (){
            //ֻ��ʾһ��ԲȦ
            var index = $(this).index();
            $("#list-tit li.act").removeClass("act");
            $(this).addClass("act");
            //����ͼƬ
            $("#inter-content-main div").hide(300);
            $("#inter-content-main div").eq(index).show(500);
        });
        /*ְҵ����*/
        $("#m-j-content div").eq(0).show();
        $("#m-j-tabs li").on("click", function () {
            //ֻ��ʾһ��ԲȦ
                var index = $(this).index();
                $("#m-j-tabs li.round").removeClass("round");
                $(this).addClass("round");
            //����ͼƬ
            $("#m-j-content div").hide();
            $("#m-j-content div").eq(index).show(500);
        });
        /*�м��ͼbanner*/
        $(".main-content-three #bigimgs img").eq(0).show();
        $("#tab-tit li").on("click", function () {
            var index = $(this).index();
            $("#tab-tit li.selected").removeClass("selected");
            $(this).addClass("selected");
            $(".main-content-three #bigimgs img").hide(400);
            $(".main-content-three #bigimgs img").eq(index).show(800);
        });
        /*�Զ��ֲ�*/
        var media = document.getElementById("media");
        var ul = media.children[1];
        var timerId = null;
        timerId = setInterval(play,150);
        media.onmouseover = function(){
            clearInterval(timerId);
        }
        media.onmouseout = function(){
            timerId = setInterval(play,100);
        }
        function play(){
            var current = ul.offsetLeft;
            var step = -1;
            current = current+step;
            ul.style.left = current+'px';
            if(current <= -570) {
                ul.style.left = "0px";
            }
        }
        //���ע�����
            var flg = false;
            $('.btn-sidebar').on('click', function(){
                flg = !flg;
                if(flg){
                    $('.sidebar').animate({right: "-281px"}, 500);
                }else{
                    $('.sidebar').animate({right: "0px"}, 500);
                }
            })
        //function regdone(c){
        //    alert('��ϲ����ע��ɹ���');
        //    ////ˢ��regIframe
        //    var src = $('#register').attr('src');
        //    $('#register').attr('src', src);
        //};
        /*//���ָ��
        var img = document.getElementById("printer");
        document.onmousemove = function (e) {
            img.style.left = eventTool.getPageX(e) + "px";
            img.style.top = eventTool.getPageY(e) + "px";
        }

        var eventTool = {
            getEvent:function (e) {
                return e || window.event;
            },
            getClientX:function (e) {
                return this.getEvent(e).clientX;
            },
            getClientY:function (e) {
                return this.getEvent(e).clientY;
            },
            getPageX:function (e) {
                return this.getClientX(e) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
            },
            getPageY:function (e) {
                return this.getClientY(e) + (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            }
        }*/
        //���ض���
        $(window).scroll(function() {
            //ֻҪ�����ˣ����õ��ݵ�������
            var st = $(window).scrollTop();
            //�ж��Ƿ��й�����st ��� ���� 0 �͹�����
            if (st > 0) {
                $("#top").show();
            } else {
                $("#top").hide();
            }
        });
            $("#top").click(function() {
                $("html,body").animate({
                    scrollTop: 0,
                }, 200)
        });
    });
});

