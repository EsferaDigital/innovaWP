<?php
printf('<section class="c-comment">');
	printf('<ol class="c-comment-list">');
		wp_list_comments();
	printf('</ol>');
	printf('<section class="c-comment-form">');
		comment_form();
	printf('</section>');
printf('</section>');