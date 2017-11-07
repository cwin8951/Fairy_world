

//    �ռ���װ����
function animation(element, obj, callback) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var attr in obj) {
            //   ��Բ�ͬ���� ��һЩ���⴦��
            if (attr == "opacity") {
                var target = obj[attr];
                //   ��ȡԪ�ص�ǰλ��   parseFloat���ַ�ת������
                var current = parseFloat(getStyle(element, attr));
                //   ����
                //   ��С����ȽϺ�Σ������Ҫ  �ȷŴ��ȡ����
                target *= 100;
                current *= 100;
                //   ����ȡ�� ��ֹ������ѭ��
                target = Math.floor(target);
                current = Math.floor(current);
                //   ����=(Ŀ��-��ǰ)/10
                var step = (target - current) / 10;
                step = current <= target ? Math.ceil(step) : Math.floor(step);
                current += step;
                //    ��ʱcurrent��С������Ľ�������ֱ�Ӱ�С������Ľ��������һ�����ֱȽϣ�ʮ��Σ��
                //    ��ʽ��  �Ŵ�ȡ���ٱȽ�  �ȷŴ�100��������ȡ��֮���ڱȽ�
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                //  �ܿ���zIndex�Ķ�������Ϊ������������������
                //   ֱ������ΪĿ��ֵ����
                var target = obj[attr];
                var current = target;
                element.style[attr] = current;
            } else {
                //��������pxΪ��λ���߼�
                var target = obj[attr];
                //  ��ȡԪ�ص�ǰλ��
                var current = parseInt(getStyle(element, attr));
                //   ����
                var step = (target - current) / 10;//����=��Ŀ��-��ǰ��/ϵ��
                step = current <= target ? Math.ceil(step) : Math.floor(step);
                current += step;
                //        ������ʽ
                element.style[attr] = current + "px";
            }

            if (target != current) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            //���ϣ������ִ�����֮�󣬻�����������飬һ��ֱ�Ӵ���һ���ص�����������ֻҪ����������ִ������ص�����
            callback && callback();
        }
//
//
    }, 20);
}
//    ����
function getStyle(element,arrt) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[arrt];
    } else {
        return element.currentStyle[arrt];
    }
}