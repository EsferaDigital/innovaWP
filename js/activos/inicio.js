//Slider

var slider = jQuery('#slider')
var next = jQuery('#btn-next')
var prev = jQuery('#btn-prev')
const header = document.getElementById('mainHeader')
let alturaHeader = header.offsetHeight;

//Movemos ultima imagen al primer lugar
jQuery('#slider section:last').insertBefore('#slider section:first')

slider.css('margin-left', '-' + 100 + '%')

function moverD() {
	slider.animate({
		marginLeft: '-' + 200 + '%'
	}, 700, function () {
		jQuery('#slider section:first').insertAfter('#slider section:last')
		slider.css('margin-left', '-' + 100 + '%')
	})
}

function moverI() {
	slider.animate({
		marginLeft: 0
	}, 700, function () {
		jQuery('#slider section:last').insertBefore('#slider section:first')
		slider.css('margin-left', '-' + 100 + '%')
	})
}

next.on('click', function () {
	moverD()
})

prev.on('click', function () {
	moverI()
})

function autoplay() {
	setInterval(function () {
		moverD()
	}, 5000)
}

autoplay()

//Fin Slider

// One Page Scroll

function onePageScroll(e){
	e.preventDefault()
	var idLink = jQuery(this.hash)
	var coordSection = idLink.offset().top

	jQuery('html, body').animate({
		scrollTop: (coordSection - alturaHeader)
	}, 1000)
}

//ejecutamos la función
jQuery('.link a').on('click', onePageScroll);
// Fin One Page Scroll

//boton ir arriba y link inicio

function irArriba(){
	jQuery('#up').on('click', function(){
		jQuery('html, body').animate({
			scrollTop: 0,
			scrollLeft: 0
		}, 1000)
	})
}

function showUp() {
	var scrollVertical = jQuery(window).scrollTop(),
		scrollHorizontal = jQuery(window).scrollLeft()
	//console.log(scrollVertical, scrollHorizontal)	
	//Si scrollVertical es mayor a 700px al id up añadele un fadeIn, sino añadele un fadeOut
	return (scrollVertical > 700) ? jQuery('#up').fadeIn() : jQuery('#up').fadeOut()
}

jQuery('.top-inicio a').on('click', function () {
	jQuery('html, body').animate({
		scrollTop: 0,
		scrollLeft: 0
	}, 1000)
})



//ejecutamos la función ir arriba cuando el documento esté cargado

jQuery(document).ready(irArriba)
jQuery(window).on('scroll', showUp)

