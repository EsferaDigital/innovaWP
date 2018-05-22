<?php
printf('<main>');
	//Lógica de the_loop
	//Si (hay entradas)
		//mientras(hay entradas)
			//muestra la info de las entradas
	//Si no
		//Mensaje de no hay entradas
	//Limpiar el loop
	if( have_posts() ):
		while( have_posts() ):
			the_post();
			//creamos una variable en la que iremos insertando los datos
			$html = '
				<article>
					<h1>%s</h1>
					<a href="%s">%s</a>
					<p>%s - %s</p>
					<p>%s</p>
					<p>%s</p>
					<p>%s</p>
					<p>%s</p>
					<div>%s</div>
				</article>
			';
			printf(
				$html,
				get_the_title(),
				get_the_permalink(),
				get_the_permalink(),
				get_the_date(),
				get_the_time(),
				get_the_excerpt(),
				get_the_category_list( ' - ' ),
				get_the_tag_list('<p>Tags: ',', ','</p>'),
				get_the_author(),
				get_the_content()
			);
		endwhile;
	else:
		printf('<p>No hay entradas disponibles</p>');
	endif;
	rewind_posts();
printf('</main>');