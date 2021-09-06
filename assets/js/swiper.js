//Инициализация Swiper
const swiper = new Swiper('.swiper', {
			  // Optional parameters
			  direction: 'horizontal',
			  loop: true,

			  // Navigation arrows
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },

			});
const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();