<?php
printf('<ol class="comentarios">');
	wp_list_comments();
printf('</ol>');
printf('<section class="form-comentarios">');
	comment_form();
printf('</section>');