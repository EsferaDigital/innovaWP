<?php
get_header();
$search_template = '
	<p>Los resultados para la busqueda <span>%s</span> son:</p>
';
printf($search_template, get_search_query() );
get_template_part('/plantillas/content');
get_sidebar();
get_footer();