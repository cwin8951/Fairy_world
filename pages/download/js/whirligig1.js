

//    终极封装函数
function animation(element, obj, callback) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var attr in obj) {
            //   针对不同属性 做一些特殊处理
            if (attr == "opacity") {
                var target = obj[attr];
                //   获取元素当前位置   parseFloat将字符转换浮点
                var current = parseFloat(getStyle(element, attr));
                //   计算
                //   带小数点比较很危险所以要  先放大后取整数
                target *= 100;
                current *= 100;
                //   向下取整 防止进入死循环
                target = Math.floor(target);
                current = Math.floor(current);
                //   步数=(目标-当前)/10
                var step = (target - current) / 10;
                step = current <= target ? Math.ceil(step) : Math.floor(step);
                current += step;
                //    此时current是小数计算的结果，如果直接把小数计算的结果和另外一个数字比较，十分危险
                //    方式：  放大取整再比较  先放大100倍，向下取整之后在比较
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                //  能看见zIndex的动画吗？因为看不见，不做动画了
                //   直接设置为目标值即可
                var target = obj[attr];
                var current = target;
                element.style[attr] = current;
            } else {
                //以下是以px为单位的逻辑
                var target = obj[attr];
                //  获取元素当前位置
                var current = parseInt(getStyle(element, attr));
                //   计算
                var step = (target - current) / 10;//步数=（目标-当前）/系数
                step = current <= target ? Math.ceil(step) : Math.floor(step);
                current += step;
                //        重置样式
                element.style[attr] = current + "px";
            }

            if (target != current) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            //如果希望函数执行完毕之后，还能做别额事情，一般直接传递一个回调函数进来，只要满足条件就执行这个回调函数
            callback && callback();
        }
//
//
    }, 20);
}
//    兼容
function getStyle(element,arrt) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[arrt];
    } else {
        return element.currentStyle[arrt];
    }
}