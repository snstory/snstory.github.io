$('a[href="#"]').click(function (e) {
   e.preventDefault();
   return false;
}).hover(function () {
   $(this)
      .css('position', 'relative')
      .append('<span class="temp-alert-layer">준비중입니다</span>');
}, function () {
   $(this).find('span:first').remove();
}
);;