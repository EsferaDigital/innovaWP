//Slider

let slider = jQuery('#slider')
let next = jQuery('#btn-next')
let prev = jQuery('#btn-prev')
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
		scrollTop: (coordSection - alturaHeader + (parseFloat(0.25) * 100) )
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

//Ventana Modal

// Funciones necesarias

// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
	for (let attr in attrObj) {
		if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
	}
};

// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
	let customElement = document.createElement(element);
	if (children !== undefined) children.forEach(el => {
		if (el.nodeType) {
			if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
		} else {
			customElement.innerHTML += el;
		}
	});
	addAttributes(customElement, attributes);
	return customElement;
};

// Imprimir modal

//Obtenemos cada modal

const modal1 = document.getElementById('modal1'),
	modal2 = document.getElementById('modal2'),
	modal3 = document.getElementById('modal3'),
	modal4 = document.getElementById('modal4'),
	modal5 = document.getElementById('modal5'),
	modal6 = document.getElementById('modal6'),
	modalPrograma = document.getElementById('modal-programa'),
	modalPostula = document.getElementsByClassName('postula')

//content es el parametro que recibe la funcion. En el meteremos el contenido del modal en si que va dentro del div modalContentEl
const printModal = content => {
	//Crea contenedor interno
	const modalContentEl = createCustomElement('div', {
		id: 'content-modal',
		class: 'c-modal-item'
	}, [content])
	// crea contenedor principal
	const modalContainerEl = createCustomElement('div', {
		id: 'container-modal',
		class: 'c-modal'
	}, [modalContentEl])

	// Imprimir el modal
	document.body.appendChild(modalContainerEl)

	//Remover el modal
	const removeModal = () => document.body.removeChild(modalContainerEl)

	// Evento que ejecuta la funcion que remueve el modal

	modalContainerEl.addEventListener('click', e => {
		if (e.target === modalContainerEl) removeModal()
	})
}

//Contenido de cada modal
// Si quisiera embeber un pdf: contDesafio6 = `<embed src="/files/aguas.pdf" type="application/pdf" width="100%" height="100%" />`
const contDesafio1 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/bejos.png" alt="Desafio Bejos" />
							</div>`,
	contDesafio2 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/d-mercurio.png" alt="Desafio Mercurio" />
							</div>`,
	contDesafio3 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/buildtek.png" alt="Desafio Buildtek" />
							</div>`,
	contDesafio4 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/ferrocarril.png" alt="Desafio Ferrocarril" />
							</div>`,
	contDesafio5 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/d-novamine.png" alt="Desafio Novamine" />
							</div>`,
	contDesafio6 = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/aguas.png" alt="Desafio Aguas" />
							</div>`,

	contPostula = `
		<div class="scroll-iframe">
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSflJ4hlP3x_0OANM2W2ZywnFvm6PyHrovoDsjxoBSQJw0S5PQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
		</div>`,

	contPrograma = `<div class="scroll-desafio">
									<img src="http://localhost:8080/innova/wp-content/themes/innova/img/infografia.png" alt="Infografia" />
							</div>`

//Ejecución de cada modal (esto se puede mejorar con un array de elementos)

// for (let n = 0; n < itemLink.length; n++) {
// 	itemLink[n].addEventListener('click', showHideMenu)
// 	// 	itemLink[n].addEventListener('click', hideHeader)
// }

modal1.addEventListener('click', () => {
	printModal(`${contDesafio1}`)
})

modal2.addEventListener('click', () => {
	printModal(`${contDesafio2}`)
})

modal3.addEventListener('click', () => {
	printModal(`${contDesafio3}`)
})
modal4.addEventListener('click', () => {
	printModal(`${contDesafio4}`)
})

modal5.addEventListener('click', () => {
	printModal(`${contDesafio5}`)
})

modal6.addEventListener('click', () => {
	printModal(`${contDesafio6}`)
})

modalPrograma.addEventListener('click', () => {
	printModal(`${contPrograma}`)
})

for (let n = 0; n < modalPostula.length; n++) {
	modalPostula[n].addEventListener('click', (e) => {
		e.preventDefault()
		printModal(`${contPostula}`)
	})
}

