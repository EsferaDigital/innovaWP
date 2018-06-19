<style>
.c-header{
	background-color: rgb(101, 118, 142) !important;
	box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.575);
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