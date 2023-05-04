/**
 * @description: 一些通用函数
 */

//返回一个节点在其父元素中的位置
function idxElem(Elem) {
  var parentNode = Elem.parentNode;
  for (var i = 0, len = parentNode.children.length; i < len; i++) {
    if (parentNode.children[i] === Elem) {
      return i;
    }
  }
}

//返回一个0到本身(不包含本身)的随机整数
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


//简易版 document.querySelector
function $(name) {
  return document.querySelector(name);
}

//简易版 document.querySelectorAll
function $$(name) {
  return document.querySelectorAll(name);
}

//个位补零函数,返回一个字符串
function padZero(num) {
  return String(num)[1] && num || ('0' + num);
}

//设置元素的css属性
function setStyle(obj, css) {
  for (var key in css) {
    obj['style'][key] = css[key];
  }
}

//产生一个类型为#XXXXXX的随机颜色
function randColor() {
  var str = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e'];
  function randHex() {
    return Math.floor(Math.random() * 15);
  }
  var randCol = '#';
  for (var i = 0; i < 6; i++) {
    randCol += str[randHex()];
  }
  return randCol;
}

//动画函数(无回调)
var animate = function (obj, cssJson, time, speed) {
  //先终止计时器
  clearInterval(obj.time);
  time = time || 500;
  speed = speed || 'linear';
  obj.style.transition = `${time}ms ${speed}`;
  setStyle(obj, cssJson);
  //检测函数是否结束
  obj.addEventListener('transitionend', endAnimation, false);
  function endAnimation() {
    obj.removeEventListener('transitionend', endAnimation);
    obj.style.transition = '0';
  }
}

//动画函数(有回调)
var animateNCallback = function (obj, cssJson, time, speed, callback) {
  //先终止计时器
  clearInterval(obj.time);
  time = time || 500;
  speed = speed || 'linear';
  setStyle(obj, cssJson);
  obj.style.transition = `${time}ms ${speed}`;
  //检测函数是否结束
  obj.addEventListener('transitionend', endAnimation, false);
  function endAnimation() {
    setTimeout(function () {
      callback() && callback;
    })
    obj.removeEventListener('transitionend', endAnimation);
    obj.style.transition = '0';
  }
}

//降序或升序对象数组排序
function jsonCompare(attr, order) {
  return function (m, n) {
    var a = m[attr];
    var b = n[attr];
    if (order === 0) {
      //降序
      return b - a;
    } else {
      return a - b;
    }
  }
}

