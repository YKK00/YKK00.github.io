   
    /*弹窗部分*/
    /*弹窗部分*/
    //弹窗DOM
    var oVerifyWrap = $('.verify-wrap');
    var oVeriImgs = $('.veri-imgs');
    var oVeriVerify = $('.veri-verify');
    var aImgSelected = $$('.img-selected');
    var aDiffImgs = $$('.diff-imgs');
    var oLoading = $('.loading');
    document.documentElement.style.overflowY = 'hidden';
    var trueImgArr = [];
    var i = 0;
    while (i < 28) {
      trueImgArr.push(`happy-people-${i}.png`);
      i++;
    }


    //图片随机选取九张
    console.log(aDiffImgs[0].src);
    var ranImgArr = [];
    for (var i = 0, len = aDiffImgs.length; i < len; i++) {
      var ranIdx = getRandomInt(28);
      if (ranImgArr.indexOf(ranIdx) === -1) {
        ranImgArr.push(ranIdx);
      } else {
        i--;
      }
    }
    for (var i = 0, len = aDiffImgs.length; i < len; i++) {
      aDiffImgs[i].src = `img/imgs-french-version-verify/imgs/happy-people-${ranImgArr[i]}.png`
    }
    console.log(aDiffImgs);

    //最少选取多少张
    var leastNumVerified = 1;
    var numCorrectImgs = 0;
    var numErrorImgs = 0;
    oVeriImgs.addEventListener('click', function (e) {
      if (e.target.tagName === 'IMG') {
        // console.log(idxElem(e.target.parentNode));
        if (e.target.offsetWidth === 126) {
          e.target.style.width = '100px';
          e.target.style.height = '100px';
          aImgSelected[idxElem(e.target.parentNode)].style.display = 'block';
          // console.log(aDiffImgs[idxElem(e.target.parentNode)].src);
          var isExist = false;
          trueImgArr.forEach(item => {
            if (aDiffImgs[idxElem(e.target.parentNode)].src.indexOf(item) !== -1) {
              numCorrectImgs += 1;
              isExist = true;
            }
          });
          if (!isExist) {
            numErrorImgs += 1;
          }
          console.log('numCorrectImgs:' + numCorrectImgs);
          console.log('numErrorImgs:' + numErrorImgs);
        }
        //释放
        else {
          e.target.style.width = '126px';
          e.target.style.height = '126px';
          aImgSelected[idxElem(e.target.parentNode)].style.display = 'none';
          var isExist = false;
          trueImgArr.forEach(item => {
            if (aDiffImgs[idxElem(e.target.parentNode)].src.indexOf(item) !== -1) {
              numCorrectImgs -= 1;
              isExist = true;
            }
          });
          if (!isExist) {
            numErrorImgs -= 1;
          }
        }
      }
    });

    oVeriVerify.addEventListener('mouseup', function () {
      oVeriVerify.style.backgroundColor = '#4A90E2';
    })

    oVeriVerify.addEventListener('mousedown', function () {
      oVeriVerify.style.backgroundColor = '#7995BA';
      if (numCorrectImgs >= leastNumVerified && numErrorImgs === 0) {
        oLoading.style.display = 'block';
        setTimeout(function () {
          oVerifyWrap.style.display = 'none';
        }, 500);
        document.documentElement.style.overflowY = 'scroll';
      }
    })
    /*弹窗部分*/
    /*弹窗部分*/