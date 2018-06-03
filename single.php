<style>.c-header{
	position:static !important;
	background-color: #0075a2;
}
</style>
<?php
get_header();
get_template_part('/plantillas/content-post');
get_sidebar();
comments_template();
get_footer();