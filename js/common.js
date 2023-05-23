const swiper = new Swiper(".swiper", {
   direction: "horizontal",
   // direction: "vertical",
   loop: false,
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerView: "auto",
   centeredSlides: true,
   pagination: {   //페이징 사용자 설정
      el: ".pazing",   //페이징 태그 클래스 설정 
      type: 'bullets',
      // Bullet Numbering 설정
      // renderBullet: function (index, className) {
      // 	return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
   },
   controller: {
      inverse: true,
   },
});
