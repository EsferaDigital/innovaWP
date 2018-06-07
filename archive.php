<style>
.c-header{
	position:static !important;
	background-color: #0075a2;
}
</style>
<?php
get_header();
printf('<section class="container-central">');
	get_template_part('/plantillas/content');
	get_sidebar();
printf('</section>');
get_footer();