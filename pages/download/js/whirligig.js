


//让全部网页加载完才执行
window.onload = function(){
    var config = [{
        width: 300,
        top: 20,
        left: 50,
        opacity: 0.1,
        zIndex: 2
    }, //0
        {
            width: 500,
            top: 70,
            left: 0,
            opacity: 0.2,
            zIndex: 3
        }, //1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        }, //2
        {
            width: 500,
            top: 70,
            left: 600,
            opacity: 0.2,
            zIndex: 3
        }, //3
        {
            width: 300,
            top: 20,
            left: 750,
            opacity: 0.1,
            zIndex: 2
        } //4
    ];
   var slide = document.getElementById("slide");
   var lis = slide.children[0].children;
   var arrow = slide.children[1];
   var leftBtn = slide.children[1].children[0];
   var rightBtn = slide.children[1].children[1];
   var lisArr = [];
   //遍历lis，设置每隔图片的位置
   for(var i = 0; i < lis.length ; i++){
    lisArr.push(lis[i]);
}

//先调用一次让他散开
rotate();

function rotate(){
    for(var i = 0; i < lisArr.length ; i++){
        animation(lisArr[i],config[i]);
    }
}
//    让左右按钮图片隐藏
slide.onmouseover=function(){
    rightBtn.style.display="block" ;
    leftBtn.style.display="block";
}
slide.onmouseout=function(){

    rightBtn.style.display="none";
    leftBtn.style.display="none";
}
//注册点击左右按钮
rightBtn.onclick = function(){
    //右边的逻辑  把所有的图片，看成数组，从后面取出一张，放到前面
    lisArr.unshift(lisArr.pop());
    rotate();
}
leftBtn.onclick = function(){
    //右边的逻辑  把所有的图片，看成数组，从后面取出一张，放到前面
    lisArr.push(lisArr.shift());
    rotate();
 }
 }