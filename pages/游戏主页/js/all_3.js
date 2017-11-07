var imgArr = [
	'loadingbg.jpg', 'txtline.png', 'jian.png', 'jian_s.png', 'in/g.png', 'in/1.png', 'in/2.png','in/3.png','in/4.png','in/5.png','in/6.png','in/7.png','in/8.png','in/9.png','in/10.png','in/11.png','in/12.png','in/13.png','in/14.png','in/15.png','in/16.png','in/17.png','in/18.png', 'in/19.png', 'in/20.png', 'in/21.png', 'in/22.png', 'in/23.png', 'in/24.png', 'bg_top.jpg', 'logo.png', 'slogan.png', 'orderBtn1.png', 'orderBtn2.png', 'pojun.png', 'ts_r1.jpg', 'ts_r2.jpg', 'ts_r3.jpg', 'ts_r4.jpg', 'ts_r5.jpg', 'bg_gf.jpg', 'bg_youqi.jpg', 'bg_gf.jpg'
];
var im = {
	krpano: null,
	HEAD_URL:'',
	CK_HEAD_URL:function(){
		var self = this;
		//测试环境判断
		var _str = "xx2.web.ztgame.com";
		var val_ = new RegExp(_str);
		if( val_.test(window.location) ){
	        self.HEAD_URL = "http://xx2.web.ztgame.com/";
        }else{
        	self.HEAD_URL = "http://xx2.ztgame.com/";
        };
	},
	init:function(){
        var self = this;
        //self.setFlash();
        ////获取预约人数
        //self.getNum();
        //self.changeSence();
        //显示预约弹窗
        //self.showEventPop('.orderBtn', '.rgPop');
        //self.xiayu();
        /////是否支持Flash
        self.isFlash();
        self.videoPlay();
        self.pageEvents();
        //self.pageSwiper();
        self.timesTab('#feature', '#feature ul', '.f_pints', 3000);
        //self.intervalImg();

        //切换特色
        self.changeShow();
        //self.goY();
        self.setGy();
        self.closeFloat();
        self.setCookie();
        //self.rdDlUrl();
				self.setmx();
        var browser=navigator.appName
        var b_version=navigator.appVersion
        var version=b_version.split(";");
        var trim_Version=version[1].replace(/[ ]/g,"");
        if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){
            $('body').addClass('last');
        }
    },
		setmx:function(){
			var cur = 0;
			var length = $(".mx_outer a").length;
			setInterval(function(){
				cur++;
				if(cur>=length)
					cur = 0;
				$(".mx_outer .cur").stop().fadeOut(300);
				$(".mx_outer a").eq(cur).fadeIn(300,function(){
					$(".mx_outer .cur").removeClass('cur');
					$(".mx_outer a").eq(cur).addClass('cur');
				});
			},2500);
		},
    rdDlUrl: function(){
        var self = this;
        var u1 = "http://xxsj2update.ztgame.com.cn/xxsj2tools/xxsj2_p2p.exe",
            u2 = "http://xxsj2download.ztgame.com.cn/xxsj2_p2p.exe",
            url = u1;
        //1-10;
        var rd = Math.floor(Math.random()*10+1);
        if(rd<=5){
            url = u2;
        };
        $('.step2 a, .floatBar .b2, .pop .dlBtn').attr('href', url);
    },
    setCookie: function(){
        var self = this;
        var search = window.location.search;
        var utm_source = "";
        var utm_medium = "";
        if(search.length>1){
            var ops = search.split('&');
            for(var i = 0;i<ops.length;i++){
                var opss = (ops[i].split("="))[0];
                var opsv = (ops[i].split("="))[1];

                if( opss.indexOf('utm_source') != -1 ) utm_source = opsv;
                if( opss.indexOf('utm_medium') != -1 ) utm_medium = opsv;
            }
        }
        if(utm_source != "" && utm_source != undefined && utm_medium != "" && utm_medium != undefined){
            document.cookie="utm_xx2="+(utm_source + "_" + utm_medium) + "; domain=.ztgame.com";
        }
    },
    getCookie: function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    videoPlay: function(){
        var self = this;
        require(['jquery','gplayer/v2.1'], function($,gplayer) {
            $(".videoPlay").on("click", function(e){
                console.log(33)
              e.preventDefault();
              self.showPop('.modal');

              var myplayer = $("#gplayer").gplayer({
                file: $(this).data('file'),
                image: $(this).data('image'),
                auto:true,
                loop:false,
                volume:1,
                //toolbar: false,
                pc:{
                  width:746,
                  height:420
                },
                mobile:{
                  width:'100%',
                  height:'auto'
                }
              });
            })
        });
    },
    setFlash: function(){
    	$('embed#krpanoSWFObject').attr('wmode', 'opaque');
    	//设置
    	var width = $(document).width();
    	if(width<=1920){
    		$('.pageIn').addClass('sm');
    		$('.page').addClass('sm');
    	}

    },
    isFlash: function(){
        var self = this;

        var _is = true;
        var isIE = !-[1,];
        if(isIE){
            try{
                var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                console.log('安装了Flash');
            }
            catch(e){
                console.log('没有安装Flash');
                //_is = false;
            }
        }
        else {
            try{
                var swf2 = navigator.plugins['Shockwave Flash'];
                if(swf2 == undefined){
                    console.log('没有安装Flash');
                    _is = false;
                }
                else {
                    console.log('安装了Flash');
                }
            }
            catch(e){
                console.log('没有安装Flash');
                _is = false;
            }
        };

        if(!_is){
            setTimeout(function(){
                $('.flashbg').hide();
            }, 1000);
        }
    },
    loading: function(imgArr){
    	var self = this;
        var page = $('#page');
        var loader = $('#loadingbox');
        var bar = $('#loadingbar');
        var num = $('#loadingnum');

        var imgArr = imgArr;
        var _img,
            len = imgArr.length,
            count = 0,
            tmcount = 0;

        for (var i = 0; i < len; i++) {
            _img = new Image();
            _img.src = 'images/v9/' + imgArr[i];
            _img.onload = function() {
                count++;
                if (count >= len) {
                    //$('#loading').hide();
                };
            }
        };
        //page.fadeIn();
        //loader.fadeOut();
        var times = setInterval(countfn, 50);
        function countfn(){
        	count++;
        	if(count>100){
        		//////检查当前图片是否加载90%；
        		var tt = setInterval(function(){
        			if(count/len*100 > 98){
        				next();
        				clearInterval(tt);
        			}
        		},10);
        		//$('.pageIn').hide();
        		clearInterval(times);
        		return false;
        	};
        	var paln = count+ '%';
        	bar.css('height', paln);
        	num.text(paln);
        }

        function next(){
        	page.show();
        	loader.fadeOut();
        	///开始入场动画
        	self.pageIn();
        }
    },
    ////切换特色图
    changeShow: function(){
        var self = this;
        var imgs = $('.tabShow .imgs img');
        $('.tbbtns li').on('click', function(){
            var _index = $(this).index();

            $('.tabShow .tit').attr('class', 'tit im'+ (1+_index));
            $(this).addClass('on').siblings().removeClass('on');
            imgs.removeClass('on').eq(_index).addClass('on');
        })
    },
    pageEvents: function(){
        var self = this;
        $('.floatBar .btn.b1').on('click', function(){
            self.showPop('.rgPop');
        })
    },
    //滚动到位置
    goY: function(){
        var self = this;
        var dtop = $('.topbox').offset().top;
        $('.floatBar .btn.b1').on('click', function(){
            dtop = $('.topbox').offset().top;
            $('body,html').animate({'scrollTop': dtop+ 'px'},500);
        })
    },
    setGy: function(){
        var self = this;
        window.onscroll = function(){
            var cls = $('.closeBtn').hasClass('on');
            if(!cls){
                var sltop = document.body.scrollTop || document.documentElement.scrollTop;
                if(sltop>940){
                    $('.floatBar').fadeIn();
                }else{
                    $('.floatBar').fadeOut();
                }
            }

        }
    },
    closeFloat: function(){
        var self = this;
        $('.closeBtn').on('click', function(){
            $('.floatBar').fadeOut();
            $(this).addClass('on');
        })
    },
    pageSwiper: function(){
        var featureSwiper = new Swiper('#feature', {
            direction: 'horizontal',
            pagination: '.f_pints',
            autoplay: 3000,
            paginationClickable: true
        });
    },
    intervalImg: function(){
        var self = this;
        var num = 61;
        var i = 1;
        var videoimg = $('#videoimg');

        var timer = setInterval(function(){
            i++;
            if(i>61) i = 1;
            videoimg.attr('src', 'images/v9/videos/im'+ i + '.png');
        }, 100);
    },
    //定时切换
    timesTab:function(box, imgList, tabdot, speed){
        var spd = 2000;
        if(!!speed){
            spd = speed;
        };
        var _index = 0;//初始位置
        //图片父容器，点击控制父容器，文字父容器
        var imgListDom = $(imgList),
            tabdot = $(tabdot),
            imgLen = imgListDom.children().length,
            //imgWid = parseInt(imgListDom.children().eq(0).width()),
            imgWid = parseInt($(box).width());
        imgListDom.children().css('width',imgWid+'px');
        var Tab = {
            times:null,
            crClick:function(){
                var dom = '<span></span>';
                for(var i = 0;i<imgLen;i++){
                    dom = '<span class="'+ (i==0?"on":"") +'"></span>';
                    tabdot.append(dom);
                }
            },
            location:function(_index){
                imgListDom.children().removeClass('on').eq(_index).addClass('on');
                imgListDom.stop().animate({'marginLeft':-(_index)*imgWid + 'px'}, 500);
                tabdot.children().removeClass('on').eq(_index).addClass('on');
            },
            doTimes:function(){
                var _this = this;
                _this.times = setInterval(function(){
                    _index++;
                    if(_index >= imgLen){_index = 0;}
                    _this.location(_index);
                },spd);
            },
            doClic:function(){
                var _this = this;
                imgListDom.on('mouseover',function(){
                    clearInterval(_this.times);
                });
                imgListDom.parent().on('mouseout',function(){
                    //清除积压的setInterval，再来调用
                    clearInterval(_this.times);
                    _this.doTimes();
                    //console.log(2);
                });
                //click定位
                tabdot.children().on('mouseover',function(){
                    var _index_t = $(this).index();
                    clearInterval(_this.times);
                    _index = _index_t;
                    _this.location(_index);
                })
            },
            init:function(){
                var _this = this;
                _this.crClick();//插入click结构
                _this.doTimes();//定时切换
                _this.doClic();//点击控制
            }
        }
        Tab.init();
    },
    xiayu: function(){
		var NUMBER_OF_LEAVES = 10;
		var winwidth = $(window).width();

	    var container = document.getElementById('leafContainer');
	    for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
	        container.appendChild(createALeaf());
	    }

		function randomInteger(low, high){
		    return low + Math.floor(Math.random() * (high - low));
		}

		function randomFloat(low, high){
		    return low + Math.random() * (high - low);
		}

		function pixelValue(value){
		    return value + 'px';
		}

		function durationValue(value){
		    return value + 's';
		}

		function createALeaf(){
		    var leafDiv = document.createElement('div');
		    var imageDiv = document.createElement('div');
		    imageDiv.className = 'im';
		    leafDiv.className = 'img' + randomInteger(1, 4);
		    leafDiv.style.top = "-100px";
		    leafDiv.style.left = pixelValue(randomInteger(0, winwidth));
		    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
		    leafDiv.style.webkitAnimationName = 'fade, drop';
		    imageDiv.style.webkitAnimationName = spinAnimationName;
		    var fadeAndDropDuration = durationValue(randomFloat(5, 20));
		    var spinDuration = durationValue(randomFloat(4, 15));
		    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
		    var leafDelay = durationValue(randomFloat(0, 10));
		    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
		    imageDiv.style.webkitAnimationDuration = spinDuration;
		    leafDiv.appendChild(imageDiv);
		    return leafDiv;
		}
	},
	showEventPop: function(ele, pop){
		$(ele).on('click', function(){
			$('.popbg').fadeIn();
			$(pop).fadeIn();
		});
		$(pop).children('.closePop').on('click', function(){
			$('.popbg').fadeOut();
			$(pop).fadeOut();
		});
	},
	showPop: function(pop){

		$('.popbg').fadeIn();
		$(pop).fadeIn();

		$(pop).children('.closePop').on('click', function(){
			$('.popbg').fadeOut();
			$(pop).fadeOut();
		});
        $(pop).find('.back').on('click', function(){
            $('.popbg').fadeOut();
            $(pop).fadeOut();
        });
	},
	hidePop: function(){
		$('.popbg').hide();
		$('.pop').hide();
	},
	hideRgPop: function(){
		var self = this;
		var ifr = $('.iframeBox').find('iframe');
		var url = ifr.attr('src');
		self.hidePop();
		ifr.attr('src', url);
	}
}

$(function(){
	//im.loading(imgArr);
	//////开始全景
	//embedpano({swf:"source/tour.swf", xml:"source/tour.xml", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true});

	im.CK_HEAD_URL();
	im.init();
})
