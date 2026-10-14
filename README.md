# Mi bitácora del terror

## Descripción del proyecto

Mi bitácora del terror es una aplicación web sencilla que desarrollé como parte de la materia Despliegue de aplicaciones web y móviles v2 de la UVEG.

La idea del proyecto es contar con un pequeño catálogo de películas de terror donde el usuario pueda buscar títulos y marcar las películas que ya ha visto.

## Tecnologías utilizadas

- **HTML:** para crear la estructura de la página.
- **CSS:** para diseñar la interfaz y organizar los elementos.
- **JavaScript:** para desarrollar el buscador y los botones interactivos.
- **LocalStorage:** para conservar las películas marcadas como vistas.

## Funcionalidades

La aplicación permite consultar un catálogo de tres películas, buscar títulos y registrar cuáles se han visto. Las selecciones se guardan en el navegador y permanecen disponibles cuando se vuelve a abrir la página.

## Preparación y optimización

Para preparar la aplicación organicé los archivos en carpetas separadas para los estilos, los scripts y las imágenes.

También convertí la imagen principal al formato WebP para reducir su tamaño. Después minifiqué los archivos CSS y JavaScript y comprobé que la aplicación siguiera funcionando correctamente.

Finalmente, preparé una carpeta con los archivos optimizados y generé un paquete ZIP para utilizarlo durante el despliegue.

## Ejecución local

Para probar la aplicación durante su desarrollo:

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo `index.html`.
3. Ejecutarlo con la extensión Live Server.
4. Comprobar las funciones desde el navegador.

## Estructura del proyecto

- `index.html`: página principal.
- `css/`: archivos de estilos originales y minificados.
- `js/`: archivos JavaScript originales y minificados.
- `img/`: imagen de portada optimizada.

## Estado del proyecto

La aplicación se encuentra desarrollada, optimizada y empaquetada. El siguiente paso es configurar un servidor Apache para realizar las pruebas de despliegue en un entorno local.