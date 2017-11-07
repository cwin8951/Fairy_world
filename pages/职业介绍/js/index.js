// 公共函数
(function ($) {
    $.extend({
        changeHash:function(name,val){
            location.hash=name+"="+val;
        },
        getHash:function(){
            var pairs = location.hash.slice(1).split('&&'), param = {};
            pairs.forEach(function (pair) {
                pair = pair.split('=');
                param[pair[0]] = decodeURIComponent(pair[1] || '');
            });
            return param;
        },
        changePage:function(pageid){
            var info={
                jobType:4,
                nUm:5
            };
            if(pageid=="1"){
                info.jobType=4;
                info.nUm=5;
            }
            if(pageid=="2"){
                info.jobType=2;
                info.nUm=3;
            }
            if(pageid=="3"){
                info.jobType=1;
                info.nUm=2;
            }
            if(pageid=="4"){
                info.jobType=5;
                info.nUm=6;
            }
            if(pageid=="5"){
                info.jobType=0;
                info.nUm=1;
            }
            if(pageid=="6"){
                info.jobType=7;
                info.nUm=8;
            }
            if(pageid=="7"){
                info.jobType=6;
                info.nUm=7;
            }
            if(pageid=="8"){
                info.jobType=3;
                info.nUm=4;
            }
            return info;
        },
        getPageid:function(jobType){
            var pageid=null;
            if(jobType=="0"){
                pageid=5;
            }
            if(jobType=="1"){
                pageid=3;
            }
            if(jobType=="2"){
                pageid=2;
            }
            if(jobType=="3"){
                pageid=8;
            }
            if(jobType=="4"){
                pageid=1;
            }
            if(jobType=="5"){
                pageid=4;
            }
            if(jobType=="6"){
                pageid=7;
            }
            if(jobType=="7"){
                pageid=6;
            }
            return pageid;
        }
    })
    window.$ = jQuery;
})(jQuery);
//动态效果
(function($){
  $.fn.animateFn=function(clsname){
    var $this=$(this);
    $this.removeClass(clsname).addClass(clsname + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $this.removeClass(clsname);
    });
  };
})(jQuery);
//BackBone

	defaultModel,
  bgPlayer,
  songsList=[
    "images/bg.mp3",
    "images/bg2.mp3",
    "images/bg3.mp3",
    "images/bg4.mp3",
    "images/bg5.mp3",
    "images/bg6.mp3",
    "images/bg7.mp3",
    "images/bg8.mp3"
  ];
var defaultView;
defaultView = Backbone.View.extend({
    el: "#defaultView",
    events: {
    	"click #leftNav>li":"changeRole",
        "click .nav-wrap span":"changeSkill",
        "click #fixeContr .link4":"contrMusic",
        "click .circle .item,.circle .middle":"descActive"
    },
    initialize: function(){
        var _this = this;
        _this.render();
    },
    render: function () {
        var _this=this,
            pageid=($.getHash()["page"])?$.getHash()["page"]:1;
        //播放对应的背景音乐
        // _this.bgMusic(pageid-1);
        _this.loadResource();
        _this.parallax();
    },
    templates: {
        "template" : _.template($("#template").html()),
        "navTemp":_.template($("#navTemp").html())
    },
    changeRole:function(e){
    	var _this=this,
          target=$(e.currentTarget),
          index=target.index(),
          className=target.attr("data-class");
        if(!target.hasClass('active')){
            target.siblings().removeClass('active');
            target.addClass('active');
            //更换职业
            _this.getSkill(index,0);
            $(".wrap").removeClass('wrap1');
            $(".wrap").removeClass('wrap2');
            $(".wrap").removeClass('wrap3');
            $(".wrap").removeClass('wrap4');
            $(".wrap").removeClass('wrap5');
            $(".wrap").removeClass('wrap6');
            $(".wrap").removeClass('wrap7');
            $(".wrap").removeClass('wrap8');
            $(".wrap").addClass(className);
            $(".wrap").find(".job").animateFn("fadeInLeft");
            $(".wrap").find(".role").animateFn("fadeInRight");
            $(".skill-nav span").removeClass('active');
            $(".skill-nav span").eq(0).trigger('click');
            //播放对应的背景音乐
            // _this.bgMusic(index);
            //修改Hash值
            var pageid=$.getPageid(index);
            $.changeHash("page",pageid);

        }
    },
    changeSkill:function(e){
        var _this=this,
            target=$(e.currentTarget),
            jobType=$("#leftNav li.active").index(),
            index=target.index();
        if(!target.hasClass('active')){
            target.siblings().removeClass('active');
            target.addClass('active');
            _this.getDetail(jobType,index);
        }
    },
    //getSkill:function(jobtype,index){
    //    var _this=this;
    //    var list=_.filter(jobData,function(item){
    //            return item.JobType==jobtype;
    //        }),
    //            result=list[index];
    //        $(".skill-desc").html(_this.templates.template({"data":result}));
    //        $(".nav-wrap").html(_this.templates.navTemp({"list":list}));
    //        $(".skill-desc").animateFn("fadeInUp");
    //        $(".job-title").animateFn("fadeInDown");
    //},
    //getDetail:function(jobtype,index){
    //    var _this=this;
    //    var list=_.filter(jobData,function(item){
    //            return item.JobType==jobtype;
    //        }),
    //            result=list[index];
    //        $(".skill-desc").html(_this.templates.template({"data":result,"num":index+1}));
    //        $(".skill-desc").animateFn("fadeInUp");
    //        $(".job-title").animateFn("fadeInDown");
    //},
    loadResource:function(){
             var _this=this,
                loader = new resLoader({
                 resources : [
                      'images/1-bg.jpg',
                      'images/2-bg.jpg',
                      'images/3-bg.jpg',
                      'images/4-bg.jpg',
                      'images/5-bg.jpg',
                      'images/6-bg.jpg',
                      'images/7-bg.jpg',
                      'images/8-bg.jpg',
                      'images/icon.png',
                      'images/job1.png',
                      'images/job2.png',
                      'images/job3.png',
                      'images/job4.png',
                      'images/job5.png',
                      'images/job6.png',
                      'images/job7.png',
                      'images/job8.png',
                      'images/role1.png',
                      'images/role2.png',
                      'images/role3.png',
                      'images/role4.png',
                      'images/role5.png',
                      'images/role6.png',
                      'images/role7.png',
                      'images/role8.png'
                 ],
                 onStart : function(total){

                 },
                 onProgress : function(current, total){
                    var percent = parseInt(current/total*100);
                    $(".progress .precent").html(percent+"%");
                    $(".progress h2 span").css("height",(100-percent)+"%");
                 },
                 onComplete : function(total){
                      $(".wrap").show();
                      $(".loading").hide();
                      _this.getPage();
                      setTimeout(function(){
                        $("#leftNav").addClass('show');
                        $(".logo").addClass('show');
                        $("#fixeContr").addClass('show');
                        $(".wrap").find(".inner").addClass("show");
                        $("#content .skill").addClass('show');
                      },1200);
                 }
            });
            loader.start();
    },
    descActive:function(e){
        var _this=this,
            target=$(e.currentTarget);
        if(!target.hasClass('middle') && !target.hasClass('active')){
            target.addClass('active');
            var id=target.attr("data-id");
            $(".detail p").eq(id-1).addClass('active');
            if($(".circle .item.active").length==3){
                $(".circle .middle").addClass('ready');
                $(".circle .middle").removeClass('forbid');
                $(".circle .three").addClass('active');
                $(".circle .c-inner").addClass('active');
            }
        }else{
            if($(".circle .item.active").length==3){
                target.addClass('active');
                var id=target.attr("data-id");
                $(".detail p").eq(id-1).addClass('active');
                $(".circle .c-inner").removeClass('active');
                $(".circle .three").removeClass('active');
                $(".circle .middle").removeClass('ready');
            }
        }
    },
    bgMusic:function(index){
            bgPlayer = $("#bgplayer");
            bgPlayer.jPlayer("destroy");
            $("#fixeContr .link4").addClass("play");
            bgPlayer.jPlayer({
                ready: function () {
                    bgPlayer.jPlayer("setMedia", {
                        mp3:songsList[index]
                    });
                    bgPlayer.jPlayer("play").jPlayer("repeat");
                },
                timeupdate: function (event) {
                },
                play: function (event) {
                },
                pause: function (event) {
                },
                ended: function (event) {
                },
                swfPath: "images",
                cssSelectorAncestor: ".play",
                supplied: "mp3",
                wmode: "window"
            });
    },
    contrMusic:function(e){
        e.preventDefault();
        // var target=$(e.currentTarget);
        // if(!target.hasClass('play')){
        //     bgPlayer.jPlayer("play");
        //     target.addClass('play');
        // }else{
        //     bgPlayer.jPlayer("pause");
        //     target.removeClass('play');
        // }
    },
    getPage:function(){
      var _this=this,
          pageid=($.getHash()["page"])?$.getHash()["page"]:1;
          var className='wrap'+pageid;
          $(".wrap").removeClass('wrap1');
          $(".wrap").removeClass('wrap2');
          $(".wrap").removeClass('wrap3');
          $(".wrap").removeClass('wrap4');
          $(".wrap").removeClass('wrap5');
          $(".wrap").removeClass('wrap6');
          $(".wrap").removeClass('wrap7');
          $(".wrap").removeClass('wrap8');
          $(".wrap").addClass(className);
          $("#leftNav li").removeClass("active");
          $("#leftNav li").eq(pageid-1).addClass("active");
          //转换调整关系
          var info=$.changePage(pageid);
          $("#leftNav li.li"+info.nUm).trigger('click');
          //获取指定职业的第一个技能
          _this.getSkill(info.jobType,0);    
    },
    parallax:function(){
      $("#scene").parallax({
            calibrateX: true,
            calibrateY: true,
            invertX: true,
            invertY: true,
            limitX: 80,
            limitY: 40,
            scalarX: 5,
            scalarY: 5,
            frictionX: 0.8,
            frictionY: 0.8
        });
    }
});
$(document).ready(function(){
	var bodyE1=$("body");
    	bodyE1.hide();
	var view=new defaultView();
	bodyE1.show();
})