<?php
// $sidebar = '<aside>%s</aside>';
// printf($sidebar, dynamic_sidebar(1) );

// get_search_form(false)
printf('<aside class="c-aside">');
 dynamic_sidebar('sidebar');
printf('</aside>');
