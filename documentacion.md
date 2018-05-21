Estos archivos van dentro de una carpeta con el nombre del tema que queramos. A su vez esta carpeta va dentro de la carpeta theme del wordpress descargado y descomprimido

documentación oficial de wordpress codex.wordpress.org

Las plantillas (o páginas) para wordpress son

index.php >> template principal
	home.php >> template del home del sitio(si existe reemplaza a index.php) Es la que carga al principio
	archive.php >> template de categorias y etiquetas. La muestra cuando pinchamos en una categoria o una etiqueta
		category.php >> template de categorias. La muestra si pinchamos en una categoria (y reemplaza a archive)
		tag.php >> template de etiquetas. La muestra si pinchamos en una etiqueta (y reemplaza a archive)
	singular.php >> template de entradas y páginas
		single.php >> template de entradas(si existe reemplaza a singular.php)
		page.php >> template de páginas estáticas(si existe, reemplaza a singular.php para páginas estáticas)
	404.php >> template para error 404
	search.php >> template para búsquedas
	comments.php >> template para los comentarios
	author.php >> template para mostrar la página del autor

También podemos tener plantillas personalizadas para categorias, etiquetas y páginas estáticas
Podemos crear plantillas personalizadas por slug o id
Por ej:
category-7.php
category-asesorias.php
tag-5.php
tag-hosting.php
page-3.php
page-contacto.php

Ahora, sólo en las plantillas page-algo.php puedo añadir un comentario que me permitirá seleccionar esta plantilla en la interfáz gráfica de WP para vincularla con una página que creemos en dicha interfáz.
Ej:

<?php
/*
Template name: Plantilla para Servicios
 */
get_header();
get_template_part('/plantillas/banner-servicios');
get_template_part('/plantillas/servicios');
get_footer();



Taxonomia de wordpress = Es la forma en como WP estructura el contenido de nuestro sitio y lo hace a través de Categorías, Etiquetas, Entradas y Páginas.

Categorías: Son la tabla de contenido de tu sitio web. Son utilizadas para agrupar tus contenidos y mantener una clasificación. Deben ser la base de la organización ya que conservan un orden jerarquico, y podemos generar sub-categorias. Por ejemplo, Categoria Perros sub-categoría pequeños. Además tienen una descripción que son lo que muestran los navegadores cuando hacemos una búsqueda
Etiquetas (palabras clave, para búsquedas internas): Se utilizan como microdatos que describen detalles específicos del contenido. Sirven como keywords para el SEO de nuestras publicaciones, por ejemplo reproduccion, alimenatción (siguiendo la lógica de un sitio de veterinaria) 
Entradas (Publicaciones): Es el contenido final de nuestras páginas o secciones, pueden tener asociadas más de una categoría, si no le especificamos una, se guarda como parte de la categoría por defecto de WP "Sin Categoría" (se puede editar esta categoria). Podemos agregarles tantas etiquetas como sean necesarias
Páginas (Contenido estático): Son contenidos que dificilmente van a cambiar, no se pueden asociar a categorias ni etiquetas, por ejemplo, la página de contacto o acerca.

1 Generar contenido

1.1 Definir categorias, etiquetas y páginas (luego crearemos entradas)
1.2 Al crear páginas podemos asignarles un orden (que determinará el orden en el que apareceran en el menu), una plantilla, una imagen y una página superior de la cual pueden depender (lo que generaría un submenu). Al mismo tiempo, el contenido de cada página estática puede estar en el tema mismo, en cada plantilla que generemos
1.3 Creamos contenido en cada entrada, para el blog, asignandole una categoria (y subcategoria si corresponde), etiquetas, imagen principal, etc.

2 Creación de tema.

2.1 Creamos una carpeta dentro de themes con el nombre que queramos (esferagulp, por ej)
2.2 Creamos dentro de esa carpeta creamos un archivo index.php y otro style.css. Con ello, ya lo puede reconocer wordpress como un tema que podemos activar
2.3 Crear una imagen con el nombre screenshot.png de 880 * 660 y ponerlo tambien dentro de la carpeta del tema que estamos creando
2.4 Para mostrar información del tema, se pone un comentario especial al archivo style.css (ver ejemplo en modelo)
2.5 Dentro del index.php podemos poner lo mismo que en un index.html. Sin embargo se recomienda crear una plantilla header.php (en donde iría el doctype, el head y el header) y una plantilla footer.php (donde iría el footer y con la misma indentación que la etiqueta </footer> la función <?php wp_footer(); ?> gracias a la cual podemos cargar js y css personalizados)
2.6 Cumplido lo anterior el index.php puede quedar entonces con 

<?php
get_header(); //para obtener la plantilla header
get_template_part('/plantillas/loquequeramos'); //para obtener una plantilla dentro de la carpeta plantillas
get_template_part('/plantillas/content'); (dentro de content puede ir el loop)
get_footer();// para obtener el footer

Función bloginfo(); Muestra la información acerca de nuestro sitio y puede ir dentro de una etiqueta html

<p><?php bloginfo('name'); ?></p> Nombre(titulo) del sitio
<p><?php bloginfo('description'); ?></p> Descripción corta del sitio
<p><?php bloginfo('home'); ?></p> URL del home (la primera página que muestra al entrar al sitio)
<p><?php bloginfo('stylesheet_url'); ?></p> URL de la hoja de estilos
<p><?php bloginfo('template_url'); ?></p> URL del tema
<p><?php bloginfo('language'); ?></p> Idioma del sitio
<p><?php bloginfo('charset'); ?></p> Juego de caracteres (usamos UTF-8)

Estructura y maquetacion de un tema

Adicionalmente WP reconoce los archivos header.php, footer.php y sidebar.php Estos archivos sirven para "dividir" el contenido del archivo principal (index.php) que es el que conecta todo el contenido.
Tambien podemos crear una plantilla content.php para el contenido principal, de manera tal que usamos el header.php para el encabezado (desde el doctype hasta apertura del body), el footer para el footer (desde el footer hasta el cierre del body), content.php para el contenido principal (el main) y sidebar.php para el contenido secundario.

Entonces nuestro index podría quedar de la siguiente manera:

<?php
get_header();
get_sidebar();
get_footer();

Para mandar a llamar cualquiera plantilla en index que no sean estas tres (header.php, sidebar.php y footer.php), por ejemplo el content.php, usamos lo siguiente:

get_template_part('/content');

Esto mismo funciona en cualquier plantilla para llamar a cualquier otra plantilla.

Tambien podemos crear plantillas tales como header-secundario.php que se llamarian con get_header('secundario);

Además necesitamos incorporar funciones obligatorias en nuestro tema.
Si queremos que nuestro tema permita el correcto funcionamiento de plugins de terceros, debemos activar las siguientes funciones. De esta manera WP permite a los plugins imprimir información en el header o el footer.
<?php wp_head(); ?>
	Debemos colocarlo antes de </head>
<?php wp_footer(); ?>
	Debemos colocarlo antes de </body>

3 Creación de plantillas

3.1 Analizamos la estructura de plantillas que necesitamos y las creamos
3.2 Archivos sugeridos como mínimo son los que están en este modelo. Más las plantillas personalizadas que necesitemos. page-blog.php, single.php, search.php y archive.php pueden tener el mismo contenido (el loop) pero van a mostrar cosas distintas en función de lo que se esté solicitando (una entrada, el blog, una búsqueda, una busqueda por etiqueta o una búsqueda por categoria)

Voy a necesitar crear el loop y algunas entradas para poder mostrarlas y ver a qué plantillas me dirige WP cuando voy a los distintos enlaces.
Voy en el video 18 Plantillas Generales

