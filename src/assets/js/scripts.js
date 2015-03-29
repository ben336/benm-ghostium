
/* global FastClick: false, DISQUS: false, DISQUSWIDGETS: true, disqus_identifier:false, ga:false, Drawer: false, ImageLoader: false, Prism: false */
(function ($, window, document, undefined) {

//since this is apparently the only way Bigfoot will work
!function(a){a.bigfoot=function(b){var c,d=a.extend({actionOriginalFN:"hide",activateCallback:function(){},activateOnHover:!1,allowMultipleFN:!1,breakpoints:{},deleteOnUnhover:!1,hoverDelay:250,maxWidthRelativeTo:void 0,numberResetSelector:void 0,popoverDeleteDelay:300,popoverCreateDelay:100,positionContent:!0,preventPageScroll:!0,scope:!1,useFootnoteOnlyOnce:!0,contentMarkup:'<aside class="footnote-content bottom"data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="Footnote {{FOOTNOTENUM}}"><div class="footnote-main-wrapper"><div class="footnote-content-wrapper">{{FOOTNOTECONTENT}}</div></div><div class="bigfoot-tooltip"></div></aside>',buttonMarkup:'<div class=\'footnote-container\'><a href="#" class="footnote-button" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="See Footnote {{FOOTNOTENUM}}" rel="footnote"data-footnote-content="{{FOOTNOTECONTENT}}"><span class="footnote-circle" data-footnote-number="{{FOOTNOTENUM}}"></span><span class="footnote-circle"></span><span class="footnote-circle"></span></a></div>'},b),e={},f=function(){var b;b=d.scope?d.scope+' a[href*="#"]':'a[href*="#"]';var c,e,f=a(b).filter(function(){var b=a(this),c=b.attr("rel");return c&&"null"!=c||(c=""),(b.attr("href")+c).match(/(fn|footnote|note)[:\-_\d]/gi)&&b.closest("[class*=footnote]:not(a):not(sup)").length<1}),k=[],l=[],m=[];g(f,l),a(l).each(function(){c=a(this).attr("data-footnote-ref").replace(/[:.+~*\]\[]/g,"\\$&"),d.useFootnoteOnlyOnce&&(c+=":not(.footnote-processed)"),e=a(c).closest("li"),e.length>0&&(k.push(e.first().addClass("footnote-processed")),m.push(this))});var n,o,p,q,r,s,t,u,v,w=1;r=a("[data-footnote-identifier]:last"),q=r.length>0?+r.data("footnote-identifier"):0;for(var x=0;x<k.length;x++){p=i(a(k[x]).html().trim(),a(m[x]).data("footnote-backlink-ref")).replace(/"/g,"&quot;").replace(/&lt;/g,"&ltsym;").replace(/&gt;/g,"&gtsym;"),q+=1,u="",s=a(m[x]),t=a(k[x]),d.numberResetSelector?(o=s.closest(d.numberResetSelector),o.is(n)?w+=1:w=1,n=o):w=q,0!==p.indexOf("<")&&(p="<p>"+p+"</p>"),u=d.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,w).replace(/\{\{FOOTNOTEID\}\}/g,q).replace(/\{\{FOOTNOTECONTENT\}\}/g,p),u=j(u,"SUP",s),u=j(u,"FN",t),v=a(u).insertBefore(s);var y=t.parent();switch(d.actionOriginalFN.toLowerCase()){case"delete":s.remove(),t.remove(),h(y);break;case"hide":s.addClass("footnote-print-only"),t.addClass("footnote-print-only"),h(y);break;case"ignore":s.addClass("footnote-print-only")}}},g=function(b,c){var d,e,f,g;b.each(function(){var b=a(this);f="#"+b.attr("href").split("#")[1],d=b.closest("sup"),e=b.find("sup"),d.length>0?(g=(d.attr("id")||"")+(b.attr("id")||""),c.push(d.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f}))):e.length>0?(g=(e.attr("id")||"")+(b.attr("id")||""),c.push(b.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f}))):(g=b.attr("id")||"",c.push(b.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f})))})},h=function(a){var b;a.is(":empty")||0===a.children(":not(.footnote-print-only)").length?(b=a.parent(),"delete"===d.actionOriginalFN.toLowerCase()?a.remove():a.addClass("footnote-print-only"),h(b)):a.children(":not(.footnote-print-only)").length==a.children("hr:not(.footnote-print-only)").length&&(b=a.parent(),"delete"===d.actionOriginalFN.toLowerCase()?a.remove():(a.children("hr").addClass("footnote-print-only"),a.addClass("footnote-print-only")),h(b))},i=function(a,b){b.indexOf(" ")>=0&&(b=b.trim().replace(/ +/g,"|").replace(/(.*)/g,"($1)"));var c=new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#"+b+"[^>]*>(.*?)<\\s*/\\s*a>","g");return a.replace(c,"").replace("[]","")},j=function(a,b,c){var d,e,f=new RegExp("\\{\\{"+b+":([^\\}]*)\\}\\}","g");for(d=f.exec(a);d;)d[1]&&(e=c.attr(d[1])||"",a=a.replace("{{"+b+":"+d[1]+"}}",e)),d=f.exec(a);return a},k=function(b){if(d.activateOnHover){var c=a(b.target).closest(".footnote-button"),e='[data-footnote-identifier="'+c.attr("data-footnote-identifier")+'"]';if(c.hasClass("active"))return;if(c.addClass("hover-instantiated"),!d.allowMultipleFN){var f=".footnote-content:not("+e+")";s(f)}n(".footnote-button"+e).addClass("hover-instantiated")}},l=function(b){var c=a(b.target),d=c.closest(".footnote-button");$nearFootnote=c.closest(".footnote-content"),d.length>0?(b.preventDefault(),m(d)):$nearFootnote.length<1&&a(".footnote-content").length>0&&s()},m=function(a){a.blur();var b='data-footnote-identifier="'+a.attr("data-footnote-identifier")+'"';a.hasClass("changing")||(a.hasClass("active")?d.allowMultipleFN?s(".footnote-content["+b+"]"):s():(a.addClass("changing"),setTimeout(function(){a.removeClass("changing")},d.popoverCreateDelay),n(".footnote-button["+b+"]"),a.addClass("click-instantiated"),d.allowMultipleFN||s(".footnote-content:not(["+b+"])")))},n=function(b){b=b||".footnote-button";var c;c="string"!=typeof b&&d.allowMultipleFN?b:"string"!=typeof b?b.first():d.allowMultipleFN?a(b).closest(".footnote-button"):a(b+":first").closest(".footnote-button");var f=a();return c.each(function(){var b,g=a(this);try{b=d.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,g.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g,g.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g,g.attr("data-footnote-content")),console.log(b),b=b.replace(/\&gtsym\;/gi,"&gt;").replace(/\&ltsym\;/gi,"&lt;"),b=j(b,"BUTTON",g)}finally{$content=a(b);try{d.activateCallback($content)}catch(h){}$content.insertAfter(c),e[g.attr("data-footnote-identifier")]="init",$content.attr("bigfoot-max-width",p($content.css("max-width"),$content)),$content.css("max-width",1e4);var i=$content.find(".footnote-content-wrapper");$content.attr("data-bigfoot-max-height",p(i.css("max-height"),i)),t(),g.addClass("active"),$content.find(".footnote-content-wrapper").bindScrollHandler(),f=f.add($content)}}),setTimeout(function(){f.addClass("active")},d.popoverCreateDelay),f},o=function(){var a=document.createElement("div");a.style.cssText="display:inline-block;padding:0;line-height:1;position:absolute;visibility:hidden;font-size:1em;",a.appendChild(document.createElement("M")),document.body.appendChild(a);var b=a.offsetHeight;return document.body.removeChild(a),b},p=function(a,b){return"none"==a?a=1e4:a.indexOf("rem")>=0?a=parseFloat(a)*o():a.indexOf("em")>=0?a=parseFloat(a)*parseFloat(b.css("font-size")):a.indexOf("px")>=0?a=parseFloat(a):a.indexOf("%")>=0&&(a=parseFloat(a)/100),a};a.fn.bindScrollHandler=function(){d.preventPageScroll&&a(this).on("DOMMouseScroll mousewheel",function(b){var c=a(this),d=c.scrollTop(),e=c[0].scrollHeight,f=parseInt(c.css("height")),g=c.closest(".footnote-content");if(c.scrollTop()>0&&c.scrollTop()<10&&g.addClass("scrollable"),g.hasClass("scrollable")){var h="DOMMouseScroll"==b.type?-40*b.originalEvent.detail:b.originalEvent.wheelDelta,i=h>0,j=function(){return b.stopPropagation(),b.preventDefault(),b.returnValue=!1,!1};return!i&&-h>e-f-d?(c.scrollTop(e),g.addClass("fully-scrolled"),j()):i&&h>d?(c.scrollTop(0),g.removeClass("fully-scrolled"),j()):(g.removeClass("fully-scrolled"),void 0)}})};var q=function(b){d.deleteOnUnhover&&d.activateOnHover&&setTimeout(function(){a(b.target).closest(".footnote-content, .footnote-button");a(".footnote-button:hover, .footnote-content:hover").length<1&&s()},d.hoverDelay)},r=function(a){27==a.keyCode&&s()},s=function(b,c){b=b||".footnote-content",c=c||d.popoverDeleteDelay;var f,g,h,i=a();return a(b).each(function(){h=a(this),f=h.attr("data-footnote-identifier"),g=a('.footnote-button[data-footnote-identifier="'+f+'"]'),g.hasClass("changing")||(i=i.add(g),g.removeClass("active hover-instantiated click-instantiated").addClass("changing"),h.removeClass("active").addClass("disapearing"),setTimeout(function(){h.remove(),delete e[f],g.removeClass("changing")},c))}),i},t=function(b){if(d.positionContent){var c=b?b.type:"resize";a(".footnote-content").each(function(){var b=a(this),f=b.attr("data-footnote-identifier"),g=(b.find(".footnote-content-wrapper"),b.siblings(".footnote-button")),h=v(g),i=parseFloat(b.css("margin-top")),j=+b.attr("data-bigfoot-max-height"),k=2*i+b.outerHeight(),l=1e4,m=h.bottomRoom<k&&h.topRoom>h.bottomRoom,n=e[f];if(m?("top"!=n&&(e[f]="top",b.addClass("top").removeClass("bottom"),b.css("transform-origin",100*h.leftRelative+"% 100%")),l=h.topRoom-i-15):(("bottom"!=n||"init"==n)&&(e[f]="bottom",b.removeClass("top").addClass("bottom"),b.css("transform-origin",100*h.leftRelative+"% 0%")),l=h.bottomRoom-i-15),b.find(".footnote-content-wrapper").css({"max-height":Math.min(l,j)+"px"}),"resize"==c){var o=parseFloat(b.attr("bigfoot-max-width")),p=b.find(".footnote-main-wrapper"),q=o;if(1>=o){var r=function(){var b=1e4;if(d.maxWidthRelativeTo){var c=a(d.maxWidthRelativeTo);c.length>0&&(b=c.outerWidth())}return Math.min(window.innerWidth,b)}();q=r*o}q=Math.min(q,b.find(".footnote-content-wrapper").outerWidth()+1),p.css("max-width",q+"px"),b.css({left:-h.leftRelative*q+parseFloat(g.css("margin-left"))+g.outerWidth()/2+"px"}),u(b,h.leftRelative)}parseInt(b.outerHeight())<b.find(".footnote-content-wrapper")[0].scrollHeight&&b.addClass("scrollable")})}},u=function(a,b){b=b||.5;var c=a.find(".bigfoot-tooltip");c.length>0&&c.css({left:100*b+"%"})},v=function(a){var b=parseFloat(a.css("margin-left")),c=parseFloat(a.outerWidth())-b,d=parseFloat(a.outerHeight()),e=w(),f=a.offset().top-e.scrollY+d/2,g=a.offset().left-e.scrollX+c/2;return{topRoom:f,bottomRoom:e.height-f,leftRoom:g,rightRoom:e.width-g,leftRelative:g/e.width,topRelative:f/e.height}},w=function(){return{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX,scrollY:window.scrollY}},x=function(a,b,e,f,g){b=b||d.popoverDeleteDelay,(null===e||e!==!1)&&(e=!0);var h,i,j;if("string"==typeof a){j="iphone"===a.toLowerCase()?"<320px":"ipad"===a.toLowerCase()?"<768px":a,i=">"===j.charAt(0)?"min":"<"===j.charAt(0)?"max":null;var k=i?"("+i+"-width: "+j.substring(1)+")":j;h=window.matchMedia(k)}else h=a;if(h.media&&"invalid"===h.media)return{added:!1,mq:h,listener:null};var l="min"===i,m="max"===i;f=f||y(e,b,l,function(a){a.addClass("fixed-bottom")}),g=g||y(e,b,m,function(){});var n=function(a){a.matches?f(e,c):g(e,c)};return h.addListener(n),n(h),d.breakpoints[a]={added:!0,mq:h,listener:n},d.breakpoints[a]},y=function(a,b,c,d){return function(a,e){var f;a&&(f=e.close(),e.updateSetting("activateCallback",d)),setTimeout(function(){e.updateSetting("positionContent",c),a&&e.activate(f)},b)}},z=function(a,b){var c;if("string"==typeof a)mqFound=void 0!==d.breakpoints[a];else for(c in d.breakpoints)if(d.breakpoints.hasOwnProperty(c)&&d.breakpoints[c].mq===a){mqFound=!0;break}if(mqFound){var e=d.breakpoints[c||a];b?b({matches:!1}):e.listener({matches:!1}),e.mq.removeListener(e.listener),delete d.breakpoints[c||a]}return mqFound},A=function(a,b){var c;if("string"==typeof a)c=d[a],d[a]=b;else{c={};for(var e in a)a.hasOwnProperty(e)&&(c[e]=d[e],d[e]=a[e])}return c},B=function(a){return d[a]};return a(document).ready(function(){f(),a(document).on("mouseenter",".footnote-button",k),a(document).on("touchend click",l),a(document).on("mouseout",".hover-instantiated",q),a(document).on("keyup",r),a(window).on("scroll resize",t),a(document).on("gestureend",function(){t()})}),c={close:function(a,b){return s(a,b)},activate:function(a){return n(a)},reposition:function(){return t()},addBreakpoint:function(a,b,c,d,e){return x(a,b,c,d,e)},removeBreakpoint:function(a,b){return z(a,b)},getSetting:function(a){return B(a)},updateSetting:function(a,b){return A(a,b)}}}}(jQuery);

  'use strict';

  $(function () {
    var GHOSTIUM = window.GHOSTIUM;

    // Cache a couple of useful elements
    // =================
    var $window   = $(window),
        $document = $(document),
        $html     = $(document.documentElement),
        $body     = $(document.body),
        $head     = $('head'),
        $surface  = $body,
        $content  = $('.content', $surface);

    // FastClick bindings
    // =================
    FastClick.attach(document.body);

    // PrismJS handler
    // =================
    Prism.languages.html = Prism.languages.markup;

    var _prismHandler = function() {
      $('code').not('[class*="language-"]').addClass(function() {
        var _lang = $(this).attr('class')  || 'markup';

        _lang = _lang.replace(/(language|lang)+\-/gi, '');
        return 'language-' + (Prism.languages.hasOwnProperty(_lang) ? _lang : 'markup');
      });

      Prism.highlightAll();
    };

    _prismHandler();

    // DISQUS Handlers
    // =================
    var _disqusHandler = function() {
      if(!GHOSTIUM.haveDisqus) return;

      if(typeof DISQUS === 'object' && $('#disqus_thread').length) {
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.identifier = disqus_identifier;
          }
        });
      }
    };

    var _disqusCounterHandler = function() {
      if(!GHOSTIUM.haveDisqus) {
        $('[data-disqus-identifier]').parent('li').remove();
        return;
      }

      if(typeof DISQUSWIDGETS === 'object') {
        var $identifiers = $body.find('[data-disqus-identifier]'),
            $script      = $head.find('script[src*="disqus.com/count-data.js"]');

        var posts = $identifiers
          .map(function() {
            return '1=' + encodeURIComponent($(this).data('disqus-identifier'));
          })
          .sort()
          .get()
        ;

        $script.remove();

        if(posts.length && $script.length) {
          $head.append($('<script/>', {
            async: true,
            src: $script.attr('src').split('?')[0] + '?' + posts.join('&')
          }));

          DISQUSWIDGETS.getCount();
        }
      }
    };

    _disqusCounterHandler();

    // GA Handler
    // =================
    var _gaHandler = function() {
      if(!GHOSTIUM.haveGA) return;

      if(typeof ga === 'function') {
        ga('set', 'location', window.location.href);
        ga('send', 'pageview');
      }
    };

    // PJax bindings
    // =================
    if ($.support.pjax && GHOSTIUM.enablePjax) {
      $document.on('pjax:start', function() {
        $surface.scrollTop(0);
      });

      $document.on('pjax:end', function() {
        _disqusHandler();
        _gaHandler();
        _disqusCounterHandler();
        _prismHandler();
        _bigfootHandler();
        $('[data-load-image]', $content).each(function() {
          ImageLoader.load($(this));
        });
      });

      var _pjaxOptions = {
        container: '[data-pjax-container]',
        fragment: '[data-pjax-container]'
      };

      $document.pjax('a[data-pjax]', _pjaxOptions);

      $document.on('submit', 'form[data-pjax]', function(e) {
        $.pjax.submit(e, _pjaxOptions);
      });
    }

    // Data API bindings
    // =================
    $document.on('click', '[data-action]', function(e) {
      var _self = $(this),
         action = _self.data('action');

      var _openWindow = function(url, h, w) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,
            dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,
            left = ((screen.width / 2) - (w / 2)) + dualScreenLeft,
            top = ((screen.height / 2) - (h / 2)) + dualScreenTop;

        var newWindow = window.open(url, '',
          'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no' +
          ', width=' + w +
          ', height=' + h +
          ', top=' + top +
          ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
        return newWindow;
      };

      e.preventDefault();

      switch(action) {
        case 'open-drawer':
          Drawer.open();
          break;
        case 'close-drawer':
          Drawer.close();
          break;
        case 'share-gplus':
          _openWindow(
            'https://plus.google.com/share?url=' + encodeURIComponent(location.href),
            600, 600);
          break;
        case 'share-facebook':
          _openWindow(
            'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
            436, 626);
          break;
        case 'share-twitter':
          _openWindow(
            'https://twitter.com/share?url=' + encodeURIComponent(location.href) + '&text=' + encodeURIComponent(document.title),
            440, 550);
          break;
      }

      return false;
    });

    // Async load images
    $('[data-load-image]', $body).each(function() {
      ImageLoader.load($(this));
    });

    // Hide drawer button on scroll for best readability
    // =================
    $surface.on('scroll', function() {
      var offset = $surface.scrollTop(),
          btn = $('#drawer-button');
      if(offset === 0) {
        btn.removeClass('drawer-button-hidden');
      } else if(!btn.hasClass('drawer-button-hidden')) {
        btn.addClass('drawer-button-hidden');
      }
    });

    // Smooth scrolling for same page anchors
    // =================
    $document.on('click', 'a[href^=#]:not([href=#])', function(e) {
      // This is nice but doesn't seem to work
      // e.preventDefault();

      // var target = $(this.hash);
      // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      // if (target.length) {
      //   $surface.animate({
      //     scrollTop: target.offset().top
      //   }, 500);
      //   location.hash = this.hash;
      //   return false;
      // }
    });

    // Fix oveflow-scrolling on iOS7
    // =================
    $surface.on('touchstart', function(e) {});

    // Fix keyboard scrolling not working when page load
    // =================
    if($body.hasClass('home-template')) {
      $('.wrapper').eq(0).focus();
    }

    // Fix DISQUS iframe does not resize on mobile orientation change
    // =================
    $window.on('orientationchange', function(e) {
      _disqusHandler();
    });

  });

  /** Ben's Helper Scripts Here **/

  //we want wrappers around subscribe and More Resources without writing ugly HTML
  var $resources = $('#moreresources,#moreresources+ul'),
      $subscribe = $('#subscribe,#subscribe+p');
      $resources.wrapAll('<div class="resources"/>');
      $subscribe.wrapAll('<div class="subscribe"/>');

  //Tags should be subclassed by title
  // var tags = $('.tags .tag');

  // tags.each(function() {
  //   var $tag = $(this),
  //     text = $tag.text().trim(),
  //     className = text.replace(/\W/g,'-').toLowerCase();
  //   $tag.addClass(className);
  // });

  $('body').on('click', '.comment-button', function() {
    $('.post-comments').removeClass('hidden');
  });


  function _bigfootHandler() {
    $.bigfoot();
  }
  _bigfootHandler();


})(jQuery, window, document);
