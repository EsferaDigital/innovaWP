<?php
get_header();
printf('<h1>Soy el single</h1>');
get_template_part('/plantillas/content');
get_sidebar();
comments_template();
get_footer();