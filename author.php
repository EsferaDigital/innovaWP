<?php
/*
https://codex.wordpress.org/Function_Reference/the_author
 */
get_header();
$author_template = '
	<article>
		<p>Autor: %s</p>
		<p>Correo: %s</p>
		<p>Descripcion: %s</p>
		<p>Otro: %s</p>
		%s		
	</article>
';
printf(
	$author_template,
	get_the_author(),
	get_the_author_meta('user_email'),
	get_the_author_meta('description'),
	get_the_author_meta('user_level'),
	get_avatar(get_the_author_meta('ID'))
);
get_template_part('/plantillas/content');
get_sidebar();
get_footer();