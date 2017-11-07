

    var nava = document.getElementById("nava");
    var navas= document.getElementById("navas");
    var navasTtems=navas.children;
console.log(navasTtems);
    for (var i = 0; i<navasTtems.length ; i++){
        navasTtems[i].onmouseover=a;
    }
    function  a(){
        animatev0(nava,this.offsetLeft);
    }
    function animatev0(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var current = element.offsetLeft;
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style.left = current + "px";

            if (current == target) {
                clearInterval(element.timer);
            }
        }, 20);
    }

