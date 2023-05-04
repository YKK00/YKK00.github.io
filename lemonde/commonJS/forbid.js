
const forbiSymbol = '*';
const forbiColor = 'tomato';
var forbiJson = {
  forbi: arr => {
    var forbiStr = '';
    var lenForbi;
    var elems = document.body.getElementsByTagName("*");
    for (var i = 0, len = elems.length; i < len; i++) {
      //循环每个标签
      // if (elems[i].innerText.length === elems[i].children.length) {
      //   console.log(elems[i].children[0]);
      // }

      arr.forEach(function (items, idx) {
        if ((elems[i].tagName.toLowerCase() !== 'script') && (elems[i].innerText.length !== 0) && (elems[i].innerText.indexOf(items) !== -1) && (elems[i].innerText.length === elems[i].children.length) && (elems[i].parentNode.className !== 'forbi-words')) {
          // console.log(elems[i].children[2]);
          forbiStr = '';
          lenForbi = arr[idx].length;

          //生成同等长度的屏蔽符号
          for (var j = 0; j < lenForbi; j++) {
            forbiStr += forbiSymbol;
          }
          console.log(forbiStr[2]);
          var idx1 = elems[i].innerText.indexOf(items);
          for (var k = idx1; k < idx1 + lenForbi; k++) {
            elems[i].children[k].innerText = forbiStr[k - idx1];
          }
        }
      })
    }
  },

  //屏蔽符号的变色
  reColor: function (newColor) {
    aColoredSlicedWord = $$('.colored-sliced-word');
    for (var i = 0, len = aColoredSlicedWord.length; i < len; i++) {
      if (aColoredSlicedWord[i].innerText === forbiSymbol) {
        aColoredSlicedWord[i].style.color = newColor;
      }
    }
  }

}

//标签分割文本方法
function sliceLabel(label) {
  var originText = label.innerText.split(' ');
  label.innerText = '';
  var newOriginText = originText.map(function (elem, idx) {
    elem = `<a class='sliced-word'>${elem}</a>`;
    return elem;
  });
  newOriginText = newOriginText.join('');
  label.innerHTML = newOriginText;
}


//单个标签变色方法
function allSlicedLabel(slicedLabel) {
  var slicedText = slicedLabel.innerText.split('');
  slicedLabel.innerText = '';
  var newColoredForbiText = slicedText.map(function (elem, idx) {
    var elem = `<a class='colored-sliced-word'>${elem}</a>`;
    return elem;
  });
  newColoredForbiText = newColoredForbiText.join('');
  slicedLabel.innerHTML = newColoredForbiText;
}



