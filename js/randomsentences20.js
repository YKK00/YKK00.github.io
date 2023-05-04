const list = ['text'];


const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

var ul = document.getElementsByTagName("ul");
var li = document.getElementsByTagName("li");

//每次页面刷新后改变ul、li以及li内的文本
function everyFresh() {
    for (var num = 0; num < ul.length; num++) {
        ul[num].style.background = randomHex();//设置ul背景颜色
        li[num].style.background = randomHex();//设置li背景颜色
        var rand = GetRandomNum(1, 60);
        var a = [];
        for (var num1 = 0; num1 < rand; num1++) {
            a = a + list[0];
        }
        li[num].innerHTML = a;
    }
    savetextlengthofeveryli();//页面刷新后储存第一次各个长度
    console.log(listofText);
}


//改变第n个块的函数
function changeOnePiece(n) {
    ul[n].style.background = randomHex();
    li[n].style.background = randomHex();
    var rand = GetRandomNum(1, 30);
    var a = [];
    for (var num1 = 0; num1 < rand; num1++) {
        a = a + list[0];
    }
    li[n].innerHTML = a;
}




//储存每一个li中的文本长度乘60
var listofText = new Array();//全局变量
//更新每一个li的文本长度
function savetextlengthofeveryli() {
    for (var i = 0; i < ul.length; i++) {
        listofText[i] = li[i].innerHTML.length * 60;
    }
}
//单独更新li的文本长度
function savetextlengthofeachli(n) {
    listofText[n] = li[n].innerHTML.length * 60;
}

//先储存该页面的板块字节长度数组，再根据字节改变各个板块
function loopChange() {
    savetextlengthofeveryli();
    function set(n) {
        var set = setInterval(loop, listofText[n]);
        function loop() {
            changeOnePiece(n);
            clearInterval(set);
            savetextlengthofeachli(n);
            console.log(listofText);
            set = setInterval(loop, listofText[n]);
        }
    }

    for (var i = 0; i < ul.length; i++) {
        set(i);
    }

}

window.onload = function () {
    everyFresh();
    loopChange();
}







