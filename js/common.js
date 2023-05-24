(($) => {

   const pageCtrl = {
      _menu: null,
      _layers: null,
      _strOn: "on",
      _keyNo: 0,
      _speed: 500,

      setting: () => {
         pageCtrl._menu = $(pageCtrl.opt.menu);
         pageCtrl._layers = $(pageCtrl.opt.layers);
         pageCtrl._strOn = pageCtrl.opt.strOn;
         pageCtrl._keyNo = pageCtrl.opt.keyNo || pageCtrl._keyNo;
         pageCtrl._speed = pageCtrl.opt.speed;

         if (pageCtrl._menu === null) return false;
         if (pageCtrl._layers === null) return false;
         if (pageCtrl._menu.length !== pageCtrl._layers.length) return false;

         $.each(pageCtrl._menu, (i, n) => {
            $(n).click((e) => {
               e.preventDefault();
               pageCtrl._keyNo = i;
               pageCtrl.engine();
            });
         });

         return pageCtrl;
      },

      engine: () => {
         keyNo = pageCtrl._keyNo;
         menu = pageCtrl._menu;
         layers = pageCtrl._layers;
         strOn = pageCtrl._strOn;

         pageCtrl.menuProc(keyNo, menu, strOn);
         pageCtrl.layerProc(keyNo, layers);
      },

      menuProc: (keyNo, menu, strOn) => {
         $.each(menu, (i, n) => {
            i === keyNo ? $(n).addClass(strOn) : $(n).removeClass(strOn);
         });
      },

      layerProc: (keyNo, layers) => {
         $.each(layers, (i, n) => {
            if (i === keyNo) {
               $(n).stop(0, 0)
                  .css({ opacity: 1 })
                  .slideDown(pageCtrl._speed);
            }
            else {
               $(n).stop(0, 0)
                  .css({ opacity: .3 })
                  .slideUp(pageCtrl._speed);
            }
         });
      },

      init: (opt) => {
         pageCtrl.opt = $.extend({}, opt);
         pageCtrl.setting().engine();
      },
   };

   pageCtrl.init({
      menu: ".lnb-menu > li > a",
      layers: ".inner-wrap > section",
      strOn: "on",
      // keyNo: 1,
      speed: 500,
   });

})(jQuery);