$(document).ready(function () {
  var $article = $(".post-body");
  var count = [0, 0, 0, 0, 0, 0];
  var mark = [0, 0, 0, 0, 0, 0];

  (function setMark() {
    var hTag = ["h1", "h2", "h3", "h4", "h5", "h6"];
    var index = 0;
    for (var i = 0; i < 6; ++i) {
      if ($article.children(hTag[i]).length > 0) {
        ++index;
        mark[i] = index;
      }
    }
  })();

  $article.children(":header").each(function () {
    var t = $(this);
    var pos = 0;
    switch (t[0].tagName) {
      case "H1": pos = 0; break;
      case "H2": pos = 1; break;
      case "H3": pos = 2; break;
      case "H4": pos = 3; break;
      case "H5": pos = 4; break;
      case "H6": pos = 5; break;
    }

    var len = mark[pos];
    if (len < 6) { count[len] = 0; }
    count[len - 1]++;

    var listStr = count[0] + "";
    for (var i = 1; i < len; ++i) { listStr += "." + count[i]; }
    listStr += " ";
    t.html(listStr + t.html());
  });

  function toc(parent, prefex) {
    parent.children("ul").each(function () {
      $ul = $(this);
      $ul.children("li").each(function () {
        $li = $(this);
        listStr = prefex
        if ($li.children("a").length > 0) {
          if (listStr != "") { listStr += "."}
          listStr += ($li.index() + 1);
          $li.html(listStr + " " + $li.html());
          toc($li, listStr)
        } else {
          toc($li, listStr)
        }
      });
    });
  }

  var $t = $("#TableOfContents");
  toc($t, "");
});


