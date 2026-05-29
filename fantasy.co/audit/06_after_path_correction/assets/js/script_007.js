(function(l) {
  if (!l) {
    window.lintrk = function(a, b) {
      window.lintrk.q.push([a, b])
    };
    window.lintrk.q = []
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "/assets/js/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);
