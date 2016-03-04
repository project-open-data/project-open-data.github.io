;
(function(e, t, n, r) {
    e.fn.doubleTapToGo = function(r) {
        if (!("ontouchstart" in t) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
        this.each(function() {
            var t = false;
            e(this).on("click", function(n) {
                var r = e(this);
                if (r[0] != t[0]) {
                    n.preventDefault();
                    t = r
                }
            });
            e(n).on("click touchstart MSPointerDown", function(n) {
                var r = true,
                    i = e(n.target).parents();
                for (var s = 0; s < i.length; s++)
                    if (i[s] == t[0]) r = false;
                if (r) t = false
            })
        });
        return this
    }
})(jQuery, window, document);




$(function()
  {
    $('#nav li:has(ul)' ).doubleTapToGo();
    $('li:has(> ul)').addClass('parent');

    $(".mobile-masthead, li.foot, .top-close-block, #nav-background").click(function(){
        $("#nav, #nav-background").toggleClass("hidden");
        $('#nav-background').css("height", $(document).height());

      });

    $("li.parent a").click(function(){
        $("#nav ul li ul, #nav ul li.parent").toggleClass("open");
      });

    $(".mobile-masthead").click(function(){
        $('.nav-wrapper').css("top", $(document).scrollTop());
      });
})
