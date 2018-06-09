// Capturamos los elementos

let mainNav = document.getElementById('main-nav')
let toggleMenu = document.getElementById('toggle-menu')

//Muestra u ocultamos el menu
function showHideMenu() {
	alert('funciona')
	// mainNav.classList.toggle('show-menu')
}


toggleMenu.addEventListener('click', showHideMenu)