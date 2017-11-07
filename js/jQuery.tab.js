//main-onetab栏
(function ($) {
  $.tab = function (options) {
    var defaults = {
      tabMenu: '#tab',
      activeClass: 'active',
      tabMain: '#tab-main',
      tabMainSub: '.tab-con-main',
      selectedClass: 'selected'
    }
    $.extend(defaults, options);
    $(defaults.tabMenu).on('click', 'li', function () {
      $(this)
        .addClass(defaults.activeClass)
        .siblings()
        .removeClass(defaults.activeClass);
      var index = $(this).index();
      $(defaults.tabMain + ' ' + defaults.tabMainSub)
        .eq(index)
        .addClass(defaults.selectedClass)
        .siblings()
        .removeClass(defaults.selectedClass);
    })
  }
}(window.jQuery));
//tab栏-----main-six左
(function ($) {
  $.tabtwo = function (options) {
    var defaults = {
      tabMenu: '#tab',
      activeClass: 'act',
      tabMain: '#inter-content-main',
      tabMainSub: '.con-main',
      selectedClass: 'selected'
    }
    $.extend(defaults, options);
    $(defaults.tabMenu).on('mouseover', 'li', function () {
      $(this)
          .addClass(defaults.activeClass)
          .siblings()
          .removeClass(defaults.activeClass);
      var index = $(this).index();
      $(defaults.tabMain + ' ' + defaults.tabMainSub)
          .eq(index)
          .addClass(defaults.selectedClass)
          .siblings()
          .removeClass(defaults.selectedClass);
    })
  }
}(window.jQuery));
//tab栏-----main-six右
(function ($) {
    $.tabthree = function (options) {
        var defaults = {
            tabMenu: '#tab',
            activeClass: 'tr-active',
            tabMain: '#tr-con-main',
            tabMainSub: '.tr-c-m',
            selectedClass: 'selected'
        }
        $.extend(defaults, options);
        $(defaults.tabMenu).on('click', 'li', function () {
            $(this)
                .addClass(defaults.activeClass)
                .siblings()
                .removeClass(defaults.activeClass);
            var index = $(this).index();
            $(defaults.tabMain + ' ' + defaults.tabMainSub)
                .eq(index)
                .addClass(defaults.selectedClass)
                .siblings()
                .removeClass(defaults.selectedClass);
        })
    }
}(window.jQuery))
