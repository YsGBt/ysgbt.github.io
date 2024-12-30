/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // These should be the same as the settings in _variables.scss
  scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function() {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });    

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});

/*网页特效 - 蜘蛛网*/ /* !function ()表示自执行的 JavaScript 函数 */
!(function () {
  function n(n, e, t) {
    return n.getAttribute(e) || t;
  }
 
  function e(n) {
    return document.getElementsByTagName(n);
  }
 
  function t() {
    var t = e("script"),
      o = t.length,
      i = t[o - 1];
    return {
      l: o,
      z: n(i, "zIndex", -1),
      o: n(i, "opacity", 0.5),
      c: n(i, "color", "0,0,0"),
      n: n(i, "count", 99),
    };
  }
 
  function o() {
    (a = m.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth),
      (c = m.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight);
  }
 
  function i() {
    r.clearRect(0, 0, a, c);
    var n, e, t, o, m, l;
    // s.forEach(function (i, x) {
    //     for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
    // }), x(i)
    // 灰色的线条
    // 下面是改为粉红色的线条
    s.forEach(function (i, x) {
      for (
        i.x += i.xa,
          i.y += i.ya,
          i.xa *= i.x > a || i.x < 0 ? -1 : 1,
          i.ya *= i.y > c || i.y < 0 ? -1 : 1,
          r.fillRect(i.x - 0.5, i.y - 0.5, 1, 1),
          e = x + 1;
        e < u.length;
        e++
      )
        (n = u[e]),
          null !== n.x &&
            null !== n.y &&
            ((o = i.x - n.x),
            (m = i.y - n.y),
            (l = o * o + m * m),
            l < n.max &&
              (n === y &&
                l >= n.max / 2 &&
                ((i.x -= 0.03 * o), (i.y -= 0.03 * m)),
              (t = (n.max - l) / n.max),
              r.beginPath(),
              (r.lineWidth = t / 2),
              (r.strokeStyle = "rgba(255,105,180," + (t + 0.2) + ")"),
              r.moveTo(i.x, i.y),
              r.lineTo(n.x, n.y),
              r.stroke()));
    }),
      x(i);
  }
 
  var a,
    c,
    u,
    m = document.createElement("canvas"),
    d = t(),
    l = "c_n" + d.l,
    r = m.getContext("2d"),
    x =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (n) {
        window.setTimeout(n, 1e3 / 45);
      },
    w = Math.random,
    y = { x: null, y: null, max: 2e4 };
  (m.id = l),
    (m.style.cssText =
      "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o),
    e("body")[0].appendChild(m),
    o(),
    (window.onresize = o),
    (window.onmousemove = function (n) {
      (n = n || window.event), (y.x = n.clientX), (y.y = n.clientY);
    }),
    (window.onmouseout = function () {
      (y.x = null), (y.y = null);
    });
  for (var s = [], f = 0; d.n > f; f++) {
    var h = w() * a,
      g = w() * c,
      v = 2 * w() - 1,
      p = 2 * w() - 1;
    s.push({ x: h, y: g, xa: v, ya: p, max: 6e3 });
  }
  (u = s.concat([y])),
    setTimeout(function () {
      i();
    }, 100);
})();
