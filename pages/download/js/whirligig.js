


//��ȫ����ҳ�������ִ��
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
   //����lis������ÿ��ͼƬ��λ��
   for(var i = 0; i < lis.length ; i++){
    lisArr.push(lis[i]);
}

//�ȵ���һ������ɢ��
rotate();

function rotate(){
    for(var i = 0; i < lisArr.length ; i++){
        animation(lisArr[i],config[i]);
    }
}
//    �����Ұ�ťͼƬ����
slide.onmouseover=function(){
    rightBtn.style.display="block" ;
    leftBtn.style.display="block";
}
slide.onmouseout=function(){

    rightBtn.style.display="none";
    leftBtn.style.display="none";
}
//ע�������Ұ�ť
rightBtn.onclick = function(){
    //�ұߵ��߼�  �����е�ͼƬ���������飬�Ӻ���ȡ��һ�ţ��ŵ�ǰ��
    lisArr.unshift(lisArr.pop());
    rotate();
}
leftBtn.onclick = function(){
    //�ұߵ��߼�  �����е�ͼƬ���������飬�Ӻ���ȡ��һ�ţ��ŵ�ǰ��
    lisArr.push(lisArr.shift());
    rotate();
 }
 }