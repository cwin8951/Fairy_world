
var im = {
	krpano: null,
	HEAD_URL:'',
	CK_HEAD_URL:function(){
		var self = this;
		//测试环境判断
		var _str = "xx2.web.ztgame.com";
		var val_ = new RegExp(_str);
		if( val_.test(window.location) ){
            self.HEAD_URL = "http://sapi.dev.ztgame.com/";
	        //self.HEAD_URL = "http://sapi.ztgame.com/";
        }else{
            self.HEAD_URL = "http://sapi.ztgame.com/";
        };
	},
	init:function(){
        var self = this;

        im.showHover('#menulist', "#menusublist");
        ////获取预约人数
        //self.getNum();

        var browser=navigator.appName 
        var b_version=navigator.appVersion 
        var version=b_version.split(";"); 
        var trim_Version=version[1].replace(/[ ]/g,"");
        if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){
            $('body').addClass('last');
        }
    },
    ////menu效果
    showHover: function(tabclass, showclass){
        var self = this;
        //////menu下拉效果
        var timer = null;
        $($(tabclass), $(showclass)).hover(function(){
            clearTimeout(timer);
            setTimeout(function(){
                $('#menu').addClass('on');
            }, 100);
            
        }, function(){
            clearInterval(timer);
            timer = setTimeout(function(){
                $("#menu").removeClass('on');
            } ,200);
        });
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
    ////////新闻tab切换
    tabfn: function(classname,conBox,num,addclass){
        var classname = $(classname);
        var box = $(conBox);
        var  len = classname.children().length;
        classname.children().on('click',function (){
            var index = $(this).index();

            var aurl = $(this).attr('href') || $(this).find('a').attr('href') || "javascript:";
            if(aurl.indexOf('javascript:') == -1) return true;
            //if(index > num-1) return true;
            $(this).addClass(addclass).siblings().removeClass(addclass);
            box.children().hide();
            box.children().eq(index).fadeIn();
        });
         
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
    getNum: function(){
    	var self = this;
    	$.ajax({
            url: self.HEAD_URL + "yuyue/dataCount?cid=3",
            type: 'get',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function(result) {
                $('.orderNum').text(result.count);
            }
        });
    },
    pageEvents: function(){
        var self = this;
        $('#r_cons .n_con').eq(0).show();
        $('.r_t_con').eq(0).show();

        $('.gss_btn').on('click', function(){
            var indexSearch = $('#indexSearch').val();
            console.log(indexSearch)
            if(indexSearch.length<1){
                alert('请输入关键字！');
                return false;
            };
            window.open("/search.shtml?keyword=" + indexSearch);
            //window.location.href = "/search.shtml?keyword=" + indexSearch;
        })

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
    //滚动到位置
    goY: function(){
        var self = this;
        var dtop = $('.gfBox').offset().top;
        $('.gflists').on('click', function(){
            dtop = $('.gfBox').offset().top;
            console.log(dtop)
            $('body,html').animate({'scrollTop': dtop+ 'px'},500);
        })
    },
    doSearch: function(keyword){
        var self = this;
        var project = 'site_xx2',
            game_type = 45,
            type = "",
            limit = 10,
            count = 1,
            pagecount = 1,
            page = 1;
        //////如果有参数则默认显示
        if(!!keyword){
            //初始化翻页
            $('.search_paginator').attr('data-page', 1);
            $('.search_paginator').attr('data-searchv', searchv);
            //显示翻页
            $('.search_paginator').show();
            $('.search_paginator').attr('data-searchv', keyword);
            doajax(0, keyword);
        };
        $('#searchb').on('click', function(){
            var searchv = $('#searchv').val();
            if(searchv.length < 1){
                alert('请输入搜索关键字！');
                return false;
            };
            //初始化翻页
            $('.search_paginator').attr('data-page', 1);
            $('.search_paginator').attr('data-searchv', searchv);
            //显示翻页
            $('.search_paginator').show();
            page = 1;
            doajax(0, searchv);
        });
        //翻页事件
        $('.search_paginator .btn').on('click', function(){
            if($(this).hasClass('disabled')) return false;
            var search_paginator = $('.search_paginator');

            //var page = search_paginator.attr('data-page');
            var searchv = search_paginator.attr('data-searchv');
            var idx =$(this).index();
            console.log(idx)
            if(idx == 0){
                page--;
            }else{
                page++;
                console.log(1111111)
            };
            console.log(page)
            $('.search_paginator .btn').removeClass('disabled');
            if(page == 1 || page == pagecount){
                $(this).addClass('disabled');
            };

            if(page<1){
                page = 1;
                return false;
            };
            if(page>pagecount){
                page = pagecount;
                return false;
            };

            var start = (page-1)*limit;
            //search_paginator.attr('datapage', page);
            doajax(start, searchv);

        });
        function doajax(start, keyword){
            $.ajax({
                url: self.HEAD_URL + "search/search",
                type: 'get',
                data: {
                    project: project,
                    game_type: game_type,
                    limit: limit,
                    start: start,
                    keyword: keyword
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                success: function(result) {
                    ///总页数
                    pagecount = parseInt(result.count/limit) + (result.count%limit==0? 0: 1);
                    console.log(pagecount);
                    /////只有一页
                    if(pagecount == 1) $('.search_paginator .btn').addClass('disabled');

                    dodom(result.list);
                }
            });
        };
        function dodom(list){
            var searchList = $('#searchList');
            var dom = "";
            //self.strip_tags()
            for(var i = 0;i<list.length;i++){
                dom += '<li><a target="_blank" href="'+ list[i].url +'" class="link">'+ list[i].title +'</a><div class="txts">'+ list[i].content +'</div></li>';
            }
            searchList.empty();
            searchList.append(dom);

        }
        
    },
    //变换的结构，第几个-1，圈数，速度，最小速度，回调
    dogdong: function(ele, speed, minspeed, callback){
        var self = this;
        var ele = $(ele),
            child = ele.children();
        
        var onWidth = parseInt(child.width()),
            len = child.length;

        var sx = 0, q = 1, allwidth = len*onWidth, sp = speed, timer = null;

        //////重置
        ele.css({left: '0px'});
        //复制结构
        ele.append(child.clone());
        //ele[0].scrollTop = 0;

        dodo();
        function dodo(){
            //ele[0].scrollTop = sx ;
            ele.css('left', sx + 'px');
            sx -= 1;
            if( sx<= (-allwidth) ){
                sx = 0;
                q++;
            };
            //最后一圈之前，减速
            //if(q == as-1) sp = minspeed;
            ////最后一圈 并且等于对应值，则结束
            /*if(q == as && (sx <= edv)){
                //ele[0].scrollTop = edv;
                ele.css('marginLeft', edv + 'px');
                clearTimeout(timer);
                if(!!callback) callback.call(self);
                return false;
            }*/
            timer = setTimeout(dodo, sp);
        };
        ele.hover(function(){
            clearTimeout(timer);
        }, function(){
            clearTimeout(timer);
            dodo();
        })
    },
    bigImg: function(ele){
        var self = this;
        $(ele).on("click", function(e){
          e.preventDefault();

          var url =  $(this).find('a').attr('href');
          if(url.indexOf('javascript:')!=-1){
            url =  $(this).find('img').attr('pic');
          }
          console.log(url)
          var img = new Image(),
              wid = 0,
              hei = 0;
          img.onload=function(){
              wid = img.width;
              hei = img.height;
              doshow(url, wid, hei);
          };  
          img.src = url;
          
        });

        function doshow(url, wid, hei){
              $(".zoom").attr('src', url);
              var maxv = wid>hei? wid: hei;
              var org = wid/hei;
              wd_width = $(window).width();
              wd_height = $(window).height();

              if(org>1 && (wid> wd_width-100)){
                  wid = wd_width-120;
                  hei = wid/org;
              }else if(org<1 && (hei> wd_height-100)){
                  hei = wd_height-120;
                  wid = hei*org;
              };

              
              //img_height = wd_height-40;
              $('.modal').css('padding','20px 0')
              $('.modal .inner').css({
                'height': hei+'px', 
                'width': wid+'px',
                'marginTop': (wd_height-hei)/2+'px'
              });

              $(".modal").show()
        };
        $(".modal .close").on("click", function(){
          $(".modal").hide()
        })
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
	},
    strip_tags:function (input, allowed) {
        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
                return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
    }
}

$(function(){
	im.CK_HEAD_URL();
	im.init();
})