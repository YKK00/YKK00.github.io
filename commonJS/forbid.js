function forbi() {
  //在此处写下你希望屏蔽的词汇
  const forbiWords = ['Chine', 'Xi Jinping'];
  var forbiStr = '';
  var lenForbi;
  var elems = document.body.getElementsByTagName("*");
  for (var i = 0, len = elems.length; i < len; i++) {
    forbiWords.forEach(function (items, idx) {
      if ((elems[i].tagName.toLowerCase() !== 'script') && (elems[i].innerText.length !== 0) && (elems[i].innerText.indexOf(items) !== -1) && (elems[i].children.length === 0)) {
        forbiStr = '';
        lenForbi = forbiWords[idx].length;
        for (var j = 0; j < lenForbi; j++) {
          forbiStr += '▢';
        }
        var idxForbi = elems[i].innerText.indexOf(items);
        var newStr = elems[i].innerText;
        newStr = newStr.replace(items, `<a class="forbi">${forbiStr}</a>`);
        elems[i].innerHTML += newStr;
      }
    })
  }
  //所有屏蔽词加红
  var forbiWord = document.querySelectorAll('.forbi');
  forbiWord.forEach(function (items) {
    items.style.color = 'red';
  })
}