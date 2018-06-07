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
	$search_template = '
		<p class="resultado-search">Los resultados para la busqueda <span>"%s"</span> son:</p>
	';
	printf($search_template, get_search_query() );
	get_template_part('/plantillas/content');
	get_sidebar();
printf('</section>');
get_footer();