<?php
/*
https://codex.wordpress.org/Function_Reference/add_action
https://codex.wordpress.org/Function_Reference/add_theme_support
https://codex.wordpress.org/Plugin_API
	Listado de acciones - https://codex.wordpress.org/Plugin_API/Action_Reference
	Listado de filtros- https://codex.wordpress.org/Plugin_API/Filter_Reference
 */

 //función para agregar funciones personalizadas.
function custom_theme(){
	//agregar soporte al tema(parametro)
	add_theme_support( 'post-thumbnails' );
	//Array de menus
	$locations = array(
		'menu_principal' => 'Menú Principal',
		'menu_social' => 'Menú Redes Sociales'
	);

	//Función para crear menus
	register_nav_menus($locations);
}
 // Añadimos una accion. Como parametros recibe, 1° una acción (que quiere decir el momento en que se ejecuta), 2° el nombre de la función que ejecutará(función que nosotros debemos crear)

 add_action('after_setup_theme', 'custom_theme' );

 //funcion para personalizar el leer más del loop
 // &nbsp; = espacio en blanco (para separar)
 // necesito pasar la variable entre comillas simples, para ello necesito pasar todo el return con comillas dobles

function read_more(){
	$url_post = get_permalink();
	return "&nbsp;<a href='$url_post'><span>Leer más...</span></a>";
}

// Añadimos un filtro. Como parametros recibe, 1° un hook (buscar lista de hooks para filtros ), 2° el nombre de la función que ejecutará(función que nosotros debemos crear)
add_filter('excerpt_more', 'read_more');

//Función para activar widgets
function activa_widgets(){
	//Por cada register_sidebar() que ponga acá, me dará una barra lateral en la sección widgets de mi interfáz gráfica
	$datos = array(
		'name' => __( 'Barra Lateral 1'),
		'id' => 'sidebar',
		'class' => 'widgets',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2>',
		'after_title'   => '</h2>',
	);
	register_sidebar($datos);
}

//Añadimos un nuevo hooks para activar los widgets

add_action('widgets_init', 'activa_widgets');

// JS Personalizado
// ruta al jquery https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js

function insertar_js(){
	$scriptSrc = get_template_directory_uri() . '/js/index.js';
	$jqSrc = get_template_directory_uri() . '/js/jquery.js';
	wp_enqueue_script('jQuery', $jqSrc, array(), '1.0', true);
	wp_enqueue_script( 'personal', $scriptSrc , array(), '1.0',  true );
}

add_action( 'wp_enqueue_scripts', 'insertar_js' );



