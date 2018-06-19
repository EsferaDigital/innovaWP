// Capturamos elementos del DOM

const header = document.getElementById('mainHeader')
let alturaHeader = header.offsetHeight;
let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')
let lastScrollTop = 0;

// Creamos las funciones


function headerFixed(){
	//al hace scroll aumenta el valor de sctop
	let sctop = document.documentElement.scrollTop;
	let st = window.pageYOffset || document.documentElement.scrollTop;
	// console.log(sctop)

	if (st > lastScrollTop) {
		header.classList.add('show-header')

	}else if (window.pageYOffset === 0) {
		header.classList.remove('show-header')
	}
	lastScrollTop = st;	
}

//Muestra u ocultamos el menu
function showHideMenu() {
	// alert('funciona')
	mainNav.classList.toggle('show-menu')
}

//Oculta el menu
function hideMenu() {
	mainNav.classList.remove('show-menu')
}

// Escuchamos eventos que disparan las funciones

document.addEventListener('click', e => {
	if(e.target !== mainNav && e.target !== toggleMenu) hideMenu()
})
mainNav.addEventListener('mouseleave', hideMenu)
toggleMenu.addEventListener('click', showHideMenu)
window.addEventListener('scroll', headerFixed, false);