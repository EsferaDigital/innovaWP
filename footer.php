	<footer>
		<h1>Soy el Footer</h1>
		<?php
			$social_menu = array(
				'theme_location' => 'menu_social',
				'container' => 'nav',
				'container_class' => 'c-menu-social'
			);
			wp_nav_menu($social_menu);
		?>
	</footer>
	<?php wp_footer(); ?>
</body>