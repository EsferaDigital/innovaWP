<style>
.c-header{
	position:static !important;
	background-color: #0075a2;
	box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.575);
}
</style>
<?php
get_header();
printf('<section class="container-central">');
	$author_template = '
		<article class="c-autor">
			<div class="c-autor-item">%s</div>
			<div class="c-autor-item">
				<p class="c-autor-name">Autor: %s</p>
				<p class="c-autor-mail">Correo: %s</p>
				<p class="c-autor-description">Descripcion: %s</p>
			</div>		
		</article>
	';

	printf(
		$author_template,
		get_avatar(get_the_author_meta('ID')),
		get_the_author(),
		get_the_author_meta('user_email'),
		get_the_author_meta('description')
		
	);
	get_template_part('/plantillas/content');
	get_sidebar();
printf('</section>');
get_footer();