// copyright for fm
(function () {   
        var ie = !!(window.attachEvent && !window.opera);   
        var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);   
        var fn = [];   
        var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };   
        var d = document;   
        d.readydom = function (f) {   
            if (!ie && !wk && d.addEventListener)return d.addEventListener('DOMContentLoaded', f, false);   
            if (fn.push(f) > 1) return;   
            if (ie)(function () {  try { d.documentElement.doScroll('left'); run(); } catch (err) { setTimeout(arguments.callee, 0); }   })();   
            else if (wk)   var t = setInterval(function () {   if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();   }, 0);   
        };   
})(); 
var CreatStat={
    creatJs:function(sUrl){
          var _script=document.createElement('script');    
          _script.type='text/javascript';  
          _script.src=sUrl;
          document.body.appendChild(_script);  
      },
      creatDom:function(ISBN){
         var copyright = "<div class='footer'>"
        +'<div class="footer_tip" style="text-align:center;color:white;padding-top:25px;">健康游戏公告：抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防上当受骗，适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。</div>'
        +"<div class='wrap'>"
          +"<div class='pad'>"
              +"<div class='botp1'>"
                +"<a target='_blank' href='http://www.ga-me.com/cn/about_us.php'>关于巨人</a>|<a target='_blank' href='http://www.ztgame.com/html/clause.html'>服务条款</a>|<a target='_blank' href='http://www.ztgame.com/swhz.html'>商务中心</a>|<a target='_blank' href='http://www.ga-me.com/cn/contact_details.php'>联系我们</a>"
              +"</div>"
              +"<div class='botp2'>上海巨人网络科技有限公司 版权所有（021-61205656）</div>"
              +"<div class='botp3'>"+ISBN+"</div>"
            +"</div>"
          +"</div>"
        +"</div>";
        document.write(copyright);
      
      }
} 
CreatStat.creatDom('[2011]0494-054  许可证编号：沪B2-20050107   新出网证：(沪)字008号 &nbsp;&nbsp;&nbsp;文网游备字〔 2016 〕Ｃ -RPG 0521号');
document.readydom(function(){
    //CreatStat.creatJs('http://js.ztgame.com/stat.js?gametype=45&eletype=2');
});
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1253726563'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "w.cnzz.com/c.php%3Fid%3D1253726563' type='text/javascript'%3E%3C/script%3E"));

//cnzz事件追踪
function cnzztrack(category,action,label,value,nodeid){
    _czc.push(["_trackEvent",category,action,label,value,nodeid]);
}                

///最新统计
var _gadate = new Date().getTime();
    var _maq = _maq || [];
    var _gatype  = 45;    //游戏类型
    _maq.push(['_setAccount', _gatype]);
 
(function() {
    var ma = document.createElement('script'); ma.type = 'text/javascript'; ma.async = true;
    ma.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'gaanalytics.ztgame.com/analytics.js?'+_gadate;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ma, s);
})(); 