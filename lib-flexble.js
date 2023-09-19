(function flexible (window, document) {
  var docEl = document.documentElement
  function setRemUnit () {
    var oWidth = docEl.clientWidth ;
    docEl.style.fontSize = oWidth / 750 * 100 + "px";
  }
  setRemUnit()
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document))