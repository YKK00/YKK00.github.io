    //选择所有需要屏蔽的标签
    var aForbiLabel = $$('.origin-words');
    var oMain = $('.main');
    var aImgBox = $$('.img-box');
    var aOriginImg = $$('.origin-img');


    

    const originWords = ['manifestant', 'dissident', 'chinois', 'dégradé', 'président', 'Xi-Jinping', 'Xi', 'mort', 'prison', 'militants', 'médias.', 'Dong-Jianbiao', 'Dong-Jianbiao,', 'purgeait-une-peine', 'Dong-Yaoqiong','Dong-Yaoqiong,', 'opposé', 'l-internement', 'psychiatrique', 'éclaboussé', 'Twitter,', 'Free', 'décédé', 'militant-des-droits-de-l-homme', 'Chen-Siming,', 'Chen,', 'détenu', 'tweeté', 'mort,', 'Dong,', 'mineur', 'blessure', 'morgue', 'blessures', 'sang', 'anus', 'Twitter', '@feefeefly', 'd-asperger', 'pénitentiaires', 'incinéré', 'soupçonnaient', 'criminel.', 'dirigeants', 'd-encre', 'obligatoire', 'dictature', 'tyrannie', 'communiste.', 'policiers', 'uniforme', 'crime.', 'coupables', 'arrêté', 'sensible', 'politiques', 'parti', 'direction', 'Xi,', 'rompre', 'militaires', 'mandat', 'surveillance', 'rumeurs', 'rébellion', 'pro-démocratie', 'pro-réforme,', 'dissidents,', 'répression', 'Pékin', 'Chine.','Chine,', 'Shanghai,', 'chinoises', 'manifestations', 'Tiananmen', '1989.', 'gouvernement', 'chinois,', 'interdit'];
    const forbiWords = ['émeutier', 'hérésie', 'viêtnam', 'dé9rаdé', 'pRé*ident', 'Tonton Xi', 'Xī', 'dodo', 'pr1s*n', 'traître à la nation', 'médias occidentaux éhontés', '**J**', '**J**,', 'Repas et hébergement gratuits', '**Y**', '**Y**,', 'd\'accord', 'immobile', 'bsychIa7r1qu3', '3clab。ussé', '404,', 'Fr33', 'endormit', 'force étrangère', 'C** ****,', 'C***,', 'repos', '404é', 'dodo,', 'D***,', 'm1nœr', 'caresse', 'dodogue', 'caresses', 'ketchup', 'trou', '404', '@*********', 'd"AsBerGer', 'pén1Tent1a1res', 'iNci3r3', 'soopsonnaient', 'paternel.', 'd1r1geants', 'd"*ncre', 'ebligateire', 'd1cTaTur3', 'TyRa*n1E', 'capitalisme.', 'bourres', 'un1f0rme', 'cr*me.', 'co*p*bles', 'arr*t*', 's**s*ble', 'p0l1t1ques', 'part*', 'dire*tion', 'Xï,', 'r*mpre', 'm1l1taIr*s', 'ma*d*t', 'surveiiiance', 'rumœrs', 'r3b3llion', 'pro-d3m*crat1e', 'pro-r3f*rm3,', 'hérésies,', 'r3pr*ssi*n', 'Hanoï', 'Vietnam.','Vietnam,', 'Hô-Chi-Minh-Ville,','vietnamiens', 'des activités sportives', 'washington', '19**.', 'g**v**n*ment', 'viêtnam,', '1nt3rd1t'];




    //原图片和过滤图，同样注意下标一一对应
    const originImgs = ['img/Le_pere_dun_manifestant_chinois_qui_a_degrade_laffiche_de_1140x570.jpeg'];
    const forbiImgs = ['img/msg950735869-49987.jpg'];

    //赋予过滤后链接


    aOriginImg[0].src = forbiImgs[0];
    aOriginImg[1].src = forbiImgs[0];

    aOriginImg[0].addEventListener('mouseover', function () {
      aOriginImg[0].src = originImgs[0];
    });
    aOriginImg[1].addEventListener('mouseover', function () {
      aOriginImg[1].src = originImgs[0];
    });

    // oOriginImg.addEventListener('click', function () {
    //   navigator.vibrate(200);
    //   console.log('1111');
    // });

    aOriginImg[0].addEventListener('mouseleave', function () {
      aOriginImg[0].src = forbiImgs[0];
    });
    aOriginImg[1].addEventListener('mouseleave', function () {
      aOriginImg[1].src = forbiImgs[0];
    });

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

    //[\u4e00-\u9fa5]  汉字转义码



    //屏蔽方法
    function addForbi(label) {
      for (var i = 0, len = label.children.length; i < len; i++) {
        if (originWords.includes(label.children[i].innerText)) {
          // 添加特效
          label.children[i].classList.add('douyin');
          var newBlock = document.createElement('a');
          newBlock.classList.add('cover-forbid');
          newBlock.innerText = forbiWords[originWords.indexOf(label.children[i].innerText)];
          var lenWords = forbiWords[originWords.indexOf(label.children[i].innerText)].length;

          //屏蔽词比原词长度的情况
          if ((lenWords - label.children[i].innerText.length) < 0) {
            newBlock.style.width = label.children[i].offsetWidth + 'px';
          } else if (lenWords - label.children[i].innerText.length === 0) {
            newBlock.style.width = label.children[i].offsetWidth + 60 + 'px';
            label.children[i].style.width = label.children[i].offsetWidth + 60 + 'px';
          } else {
            newBlock.style.width = lenWords * 15 + 'px';
            label.children[i].style.width = lenWords * 15 + 'px';
          }

          newBlock.style.height = newH = label.children[i].offsetHeight + 'px';
          newBlock.style.left = label.children[i].offsetLeft + 'px';
          newBlock.style.top = label.children[i].offsetTop + 'px';
          newBlock.style.lineHeight = newH;
          label.appendChild(newBlock);
        }
      }
    }

    //分割
    for (var i = 0, len = aForbiLabel.length; i < len; i++) {
      sliceLabel(aForbiLabel[i]);
    }

    //取词
    var aSingleWord = $$('.sliced-word');
    var oWhySensitive = $('.why-sensitive');

    //屏蔽+加外部链接
    for (var i = 0, len = aForbiLabel.length; i < len; i++) {
      addForbi(aForbiLabel[i]);
    }
    var aCoveredWords = $$('.cover-forbid');
    for (var i = 0, len = aCoveredWords.length; i < len; i++) {
      // aCoveredWords[i].href = 'why-sensitive.html';
      aCoveredWords[i].target = '_blank';
      //浮动解释
      // aCoveredWords[i].addEventListener('mousemove', floatExplain);
      aCoveredWords[i].addEventListener('mouseleave', e => {
        oWhySensitive.style.display = 'none';
        soundEffect.pause();
        soundEffect.currentTime = 0;
        noiseDensity = 0.05;
      });
      aCoveredWords[i].addEventListener('mouseenter', e => {
        soundEffect.currentTime = 0;
        soundEffect.play();
        noiseDensity = 0.5;
      });
    }

    // //遇到非英文字体改小
    // var aCoverForbid = $$('.cover-forbid');
    // //中文范围
    // // var reg = /[\u4e00-\u9fa5]+/g;
    // //非英文范围
    // // var reg = /[^a-zA-Z0-9]+/g
    // //非英文,法文,数字,特殊符号范围
    // var regEnFrNumSpec = /^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ `~!@#_$%^&*()=|{}':;',\\\[\\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\s]*$/
    // for (var i = 0, len = aCoverForbid.length; i < len; i++) {
    //   if (!aCoverForbid[i].innerText.match(regEnFrNumSpec)) {
    //     aCoverForbid[i].style.fontSize = '24px';
    //   }
    // }

    // aOriginImg[0].addEventListener('mousemove', floatExplain);
    aImgBox[0].addEventListener('mouseleave', e => {
      oWhySensitive.style.display = 'none';
      soundEffect.pause();
      soundEffect.currentTime = 0;
      noiseDensity = 0.05;
      aOriginImg[0].classList.remove('shake');
    });
    aImgBox[0].addEventListener('mouseenter', e => {
      oWhySensitive.style.display = 'none';
      soundEffect.currentTime = 0;
      soundEffect.play();
      noiseDensity = 0.5;
      aOriginImg[0].classList.add('shake');
    });
    // aOriginImg[1].addEventListener('mousemove', floatExplain);
    aImgBox[1].addEventListener('mouseleave', e => {
      oWhySensitive.style.display = 'none';
      noiseDensity = 0.05;
      aOriginImg[1].classList.remove('shake');
    });
    aImgBox[1].addEventListener('mouseenter', e => {
      oWhySensitive.style.display = 'none';
      soundEffect.currentTime = 0;
      soundEffect.play();
      noiseDensity = 0.5;
      aOriginImg[1].classList.add('shake');
    });
    aImgBox[1].addEventListener('mouseleave', e => {
      oWhySensitive.style.display = 'none';
      soundEffect.pause();
      soundEffect.currentTime = 0;
    });

    // //鼠标经过延迟两秒触发移动函数
    // function mouseOverSilence(e) {
    //   var timer = setTimeout(function () {
    //     oWhySensitive.style.display = 'block';
    //     oWhySensitive.style.left = e.offsetX + e.target.offsetLeft + 'px';
    //     oWhySensitive.style.top = e.pageY - oMain.offsetTop - 50 + 'px';
    //     e.target.addEventListener('mousemove', floatExplain);
    //   }, 2000);
    // }


    //浮动解释方法
    function floatExplain(e) {
      oWhySensitive.style.display = 'block';
      oWhySensitive.style.left = e.offsetX + e.target.offsetLeft + 23 + 'px';
      oWhySensitive.style.top = e.pageY - oMain.offsetTop - 30 + 'px';
    }

    oMain.addEventListener("click", (e) => {
      if (e.target.className === 'cover-forbid' && e.target.innerText === 'メī') {
        e.target.href = 'why-sensitive-xi.html';
      }
    }, false);

    document.addEventListener('DOMContentLoaded', () => {
      backgroundMusic.play();
    });

    document.querySelector('#click-sound').addEventListener('click', () => {
      backgroundMusic.play();
    })
