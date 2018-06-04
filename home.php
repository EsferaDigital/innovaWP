<style>

.c-header{
	position:static !important;
	background-color: #0075a2;
}

.c-header-menu{
	@media screen and (min-width: 768px){
		top: .5rem !important;
	}
}
</style>
<?php
get_header();
get_template_part('/plantillas/content');
get_sidebar();
get_footer();