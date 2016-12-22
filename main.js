function matrixShow(v) {
  var v16 = [];
  var v2 = [];
  var vimg = [];
  var va = v.split('');
  for (var n = 0; n < 8; n++) {
    v16[n] = va[n * 2] + va[n * 2 + 1];
  }
  for (var m = 0; m < 8; m++) {
    var qq = parseInt(v16[m], 16);
    v2[m] = qq.toString(2);
    if (v2[m].length < 8) {
      var ml = 8 - v2[m].length;
      for (var o = 0; o < ml; o++) {
        v2[m] = '0' + v2[m];
      }
    }
  }
  for (var n = 0; n < 8; n++) {
    vimg[n] = v2[n].split('');
    for (var m = 0; m < 8; m++) {
      if (vimg[n][m] == 1) {
        $('.a').eq(n).find('.b').eq(7 - m).addClass('light');
      } else {
        if ($('.a').eq(n).find('.b').eq(7 - m).hasClass('light')) {
          $('.a').eq(n).find('.b').eq(7 - m).removeClass('light');
        }
      }
    }
  }
}

matrixShow('1026464040462610');
