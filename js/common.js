document.addEventListener('DOMContentLoaded', function () {

	// $('body').hide()


	$('.intro__slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		centered: true,
		items: 1,
		smartSpeed: 2500,
		navText: [`<div class="prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
		<path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.2,3.578l-.707-.707a.761.761,0,0,0-1.079,0L.224,9.056a.761.761,0,0,0,0,1.079l6.188,6.188a.761.761,0,0,0,1.079,0l.707-.707a.765.765,0,0,0-.013-1.092L4.349,10.87H13.5a.762.762,0,0,0,.764-.764V9.088a.762.762,0,0,0-.764-.764H4.349L8.185,4.67A.759.759,0,0,0,8.2,3.578Z" transform="translate(0 -2.647)" fill="#cbcbcb"/>
	  </svg>
	  </div>`, `<div class='next-btn'><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
	  <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M6.063,3.578l.707-.707a.761.761,0,0,1,1.079,0l6.188,6.184a.761.761,0,0,1,0,1.079L7.849,16.323a.761.761,0,0,1-1.079,0l-.707-.707a.765.765,0,0,1,.013-1.092L9.912,10.87H.764A.762.762,0,0,1,0,10.106V9.088a.762.762,0,0,1,.764-.764H9.912L6.076,4.67A.759.759,0,0,1,6.063,3.578Z" transform="translate(0 -2.647)" fill="#CBCBCB"/>
	</svg>
	</div>`],
		
	})
	$('.teams__slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		centered: true,
		items: 1,
		smartSpeed: 2500,
		navText: [`<div class="prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
		<path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.2,3.578l-.707-.707a.761.761,0,0,0-1.079,0L.224,9.056a.761.761,0,0,0,0,1.079l6.188,6.188a.761.761,0,0,0,1.079,0l.707-.707a.765.765,0,0,0-.013-1.092L4.349,10.87H13.5a.762.762,0,0,0,.764-.764V9.088a.762.762,0,0,0-.764-.764H4.349L8.185,4.67A.759.759,0,0,0,8.2,3.578Z" transform="translate(0 -2.647)" fill="#cbcbcb"/>
	  </svg>
	  </div>`, `<div class='next-btn'><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
	  <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M6.063,3.578l.707-.707a.761.761,0,0,1,1.079,0l6.188,6.184a.761.761,0,0,1,0,1.079L7.849,16.323a.761.761,0,0,1-1.079,0l-.707-.707a.765.765,0,0,1,.013-1.092L9.912,10.87H.764A.762.762,0,0,1,0,10.106V9.088a.762.762,0,0,1,.764-.764H9.912L6.076,4.67A.759.759,0,0,1,6.063,3.578Z" transform="translate(0 -2.647)" fill="#CBCBCB"/>
	</svg>
	</div>`],
	
	})






	// $('.teams__slider').owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	margin: 20,
	// 	nav: true,
	// 	dots: true,
	// 	lazyLoad: true,
	// 	autoWidth: true,
	// 	navText: [`<div class="prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
	// 	<path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.2,3.578l-.707-.707a.761.761,0,0,0-1.079,0L.224,9.056a.761.761,0,0,0,0,1.079l6.188,6.188a.761.761,0,0,0,1.079,0l.707-.707a.765.765,0,0,0-.013-1.092L4.349,10.87H13.5a.762.762,0,0,0,.764-.764V9.088a.762.762,0,0,0-.764-.764H4.349L8.185,4.67A.759.759,0,0,0,8.2,3.578Z" transform="translate(0 -2.647)" fill="#cbcbcb"/>
	//   </svg>
	//   </div>`, `<div class='next-btn'><svg xmlns="http://www.w3.org/2000/svg" width="14.261" height="13.9" viewBox="0 0 14.261 13.9">
	//   <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M6.063,3.578l.707-.707a.761.761,0,0,1,1.079,0l6.188,6.184a.761.761,0,0,1,0,1.079L7.849,16.323a.761.761,0,0,1-1.079,0l-.707-.707a.765.765,0,0,1,.013-1.092L9.912,10.87H.764A.762.762,0,0,1,0,10.106V9.088a.762.762,0,0,1,.764-.764H9.912L6.076,4.67A.759.759,0,0,1,6.063,3.578Z" transform="translate(0 -2.647)" fill="#CBCBCB"/>
	// </svg>
	// </div>`],
	// });

	$('.header__nav__btn').click(function () {
		$('.header__nav').toggleClass('show')
	})

	let piece = $('#demo').find('*');
	$('.animLogo').toggleClass('active')
	piece.each(function (i, element) {
		$(element).removeAttr('transform').css({
			mixBlendMode: 'none'
		})
	})

})
