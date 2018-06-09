//tope de ventana
const header = document.getElementById('mainHeader')
const windowTop = window.pageYOffset
let lastScrollTop = 0;

function headerFixed(){
	//al hace scroll aumenta el valor de sctop
	let sctop = document.documentElement.scrollTop;
	let st = window.pageYOffset || document.documentElement.scrollTop;
	console.log(sctop)

	if (st > lastScrollTop) {
		header.classList.add('show-header')

	}else if (sctop === 0) {
		header.classList.remove('show-header')
	}

	lastScrollTop = st;	
}

// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')

//Muestra u ocultamos el menu
function showHideMenu() {
	// alert('funciona')
	mainNav.classList.toggle('show-menu')
}

//Oculta el menu
function hideMenu() {
	mainNav.classList.remove('show-menu')
}

mainNav.addEventListener('mouseleave', hideMenu)
toggleMenu.addEventListener('click', showHideMenu)
window.addEventListener('scroll', headerFixed, false);