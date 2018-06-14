//One Page scroll

function onePageScroll(e) {
	e.preventDefault()
	var idLink = $(this).attr('href'),
		coordSection = $(idLink).offset().top

	$('html, body').animate({
		//para separarlo un poco del top le puse (coordSection - 60)
		scrollTop: (coordSection - 60)
	}, 1000)
}

//ejecutamos la funcion onePageScroll en el eventos click de cada enlace

$('.link').on('click', onePageScroll)

//Fin onepage scroll

//One Page scroll

// function onePageScroll(e) {
// 	e.preventDefault()
// 	var idLink = $(this).attr('href'),
// 		coordSection = $(idLink).offset().top

// 	$('html, body').animate({
// 		//para separarlo un poco del top le puse (coordSection - 60)
// 		scrollTop: (coordSection - 60)
// 	}, 1000)
// }

// $('a[href^=\\#]').click(function () {

// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
// 		&& location.hostname == this.hostname) {

// 		var $target = $(this.hash);

// 		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

// 		if ($target.length) {

// 			var targetOffset = $target.offset().top;

// 			$('html,body').animate({ scrollTop: targetOffset }, 3000);

// 			return false;

// 		}

// 	}

// });




// let marginY = 0;
// let destination = 0;
// let speed = 5;

// $(document).on('click', 'a[href^="#"', function(event){
// 	event.preventDefault();
// 	$('html, body').animate({
// 		scrollTop: $($.attr(this, 'href')).offset().top
// 	}, 1000);
// })

// let linkMenu = document.querySelectorAll('.link > a')

// for (let n = 0; n < linkMenu.length; n++) {
// 	linkMenu[n].addEventListener('click', onePageScroll)
// }

// function onePageScroll(elementId) {
// 	destination = document.getElementById(elementId).offsetTop
// 	console.log(destination)
// }

// function prueba(){
// 	alert('linkMenu')
// }

// for (let n = 0; n < linkMenu.length; n++) {
// 	linkMenu[n].addEventListener('click', (elementId) => {
// 		// e.preventDefault()
// 		destination = document.getElementById(elementId).offsetTop
// 		console.log(destination)

// 	})
// }

//fin one page scroll