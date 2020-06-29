$(document).ready(function () {
	const body = $('body'),
		headerBurger = $('.menu-header__burger'),
		menuBody = $('.menu-header__body'),
		slider = $('.slider'),
		header = $('.header'),
		filterBurger = $('.filter-menu__burger'),
		filterMenu = $('.filter-menu__list'),
		inputPhone = $('.input-phone'),
		filter = $('[data-filter]');

	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	function burgerMenu(item, elem) {
		$(item).toggleClass('active');
		elem.toggleClass('active');
	}

	headerBurger.on('click', function () {
		burgerMenu(headerBurger, menuBody);
		body.toggleClass('lock');
	});

	filterBurger.on('click', function () {
		burgerMenu(filterBurger, filterMenu);
	});

	slider.slick({
		arrows: false,
		dots: true,
		autoplay: 1500,
		adaptiveHeight: true
	});

	$(window).scroll(function () {
		const h = $(window).scrollTop();

		if (h > 20) {
			header.addClass('scroll');
		} else {
			header.removeClass('scroll');
		}
	});

	$('#timepicker').timepicki({
		show_meridian: false,
		min_hour_value: 0,
		max_hour_value: 23,
		step_size_minutes: 15,
		overflow_minutes: true,
		increase_direction: 'up',
		disable_keyboard_mobile: true
	});

	inputPhone.inputmask({ "mask": "+40 999 999 999" });

	$('a[href^="#"]').on('click', function () {
		const id = $(this).attr('href'),
			top = $(id).offset().top;

		// $('.menu-header__burger, .menu-header__body').removeClass('active');
		$(this).parents('.active').removeClass('active');
		$('.burger').removeClass('active');
		$('body').removeClass('lock');

		$('body, html').animate({ scrollTop: top }, 1000);
	});

	filter.on('click', function (event) {
		event.preventDefault();
		const category = $(this).data('filter');
		$(this).parents('.active').removeClass('active');
		$(filterBurger).removeClass('active');

		if (category == 'all') {
			$('[data-category]').show();
		} else {
			$('[data-category]').each(function () {
				const categoryItem = $(this).data('category');
				if (categoryItem != category) {
					$(this).hide();
				} else {
					$(this).show();
				}
			});
		}
	});

	ibg();
});