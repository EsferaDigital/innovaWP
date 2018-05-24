<?php
printf('
<!DOCTYPE html>
<html lang="' . get_bloginfo('language') . '">
<head>
	<title>' . get_bloginfo('name') . '</title>
	<meta charset="' . get_bloginfo('charset') . '" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="description" content="' . get_bloginfo('description') . '" />
	<link rel="icon" type="image/x-icon" href="' . get_bloginfo('template_url') . '/img/favicon.png"/>
	<link rel="stylesheet" href="http://localhost:8080/innova/wp-content/themes/innova/fonts.css" />
	<link rel="stylesheet" href="' . get_bloginfo('stylesheet_url') . '" />');
wp_head();
printf('
</head>
<body>
	<div class="l-container" id="inicio">
		<header class="c-header show-header" id="mainHeader">
        <h1 class="c-header-logo"><a href="#inicio"><img src="' . get_bloginfo('template_url') . '/img/logo.svg" alt="Logo"/></a></h1>
        <div class="c-header-menu icon-menu" id="toggle-menu"></div>
');
		$args = array(
			'theme_location' => 'menu_principal',
			'container' => 'nav',
			'container_class' => 'c-nav',
			'container_id' => 'main-nav'
		);
		wp_nav_menu($args);
printf('
	</header>
');

