(($) => {

   const submenus = {
      _menu: null,
      _layers: null,
      _strOn: "on",
      _keyNo: 0,
      _speed: 500,

      setting: () => {
         submenus._menu = $(submenus.opt.menu);
         submenus._layers = $(submenus.opt.layers);
         submenus._strOn = submenus.opt.strOn;
         submenus._keyNo = submenus.opt.keyNo;
         submenus._speed = submenus.opt.speed;

         if (submenus._menu === null) return false;
         if (submenus._layers === null) return false;
         if (submenus._menu.length !== submenus._layers.length) return false;

         $.each(submenus._menu, (i, n) => {
            $(n).click((e) => {
               e.preventDefault();
               submenus._keyNo = i;
               submenus.engine();
            });
         });

         return submenus;
      },

      engine: () => {
         keyNo = submenus._keyNo;
         menu = submenus._menu;
         layers = submenus._layers;
         strOn = submenus._strOn;

         submenus.menuProc(keyNo, menu, strOn);
         submenus.layerProc(keyNo, layers);
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
                  .slideDown(submenus._speed);
            }
            else {
               $(n).stop(0, 0)
                  .css({ opacity: .3 })
                  .slideUp(submenus._speed);
            }
         });
      },

      init: (opt) => {
         submenus.opt = $.extend({}, opt);
         submenus.setting().engine();
      },
   };

   submenus.init({
      menu: ".lnb-menu > li > a",
      layers: ".inner-wrap > section",
      strOn: "on",
      keyNo: 1,
      speed: 500,
   });

})(jQuery);