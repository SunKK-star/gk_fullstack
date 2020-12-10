// 读取到用的设备宽度，并设置项目的根字体大小
(function(doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationChange' in window ? 'orientationChange' : 'resize'
    recalc = function () {
      let clientWith = docEl.clientWidth;
      if(!clientWith) return;
      docEl.style.fontSize = 20 * (clientWith / 375) + 'px'
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)