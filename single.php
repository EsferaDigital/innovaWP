<style>
.c-header{
	position:static !important;
	background-color: #0075a2;
}

</style>
<?php
get_header();
printf('<section class="container-central">');
	get_template_part('/plantillas/content-post');
	get_sidebar();
printf('</section>');
comments_template();
get_footer();