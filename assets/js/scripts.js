(function ($) {
	"use strict";

	const selectors = {
		menuToggler: ".mbl-nav-toggler",
		canvas: ".flyout-canvas",
		canvasCloseBtn: ".flyout__close",
	};

	if ($(selectors.menuToggler).length > 0) {
		$(selectors.menuToggler).on("click", function (e) {
			$(selectors.canvas).addClass("show");
		});
	}
	if ($(selectors.canvasCloseBtn).length > 0) {
		$(selectors.canvasCloseBtn).on("click", function (e) {
			$(selectors.canvas).removeClass("show");
		});
	}
})(jQuery);
