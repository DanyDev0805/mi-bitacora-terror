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


## Despliegue local con Apache

Para realizar el despliegue de la aplicación utilicé
XAMPP en Windows, que incluye el servidor web Apache.

Primero preparé una carpeta con los archivos optimizados
y generé un paquete ZIP. Después descomprimí su contenido
en el directorio de Apache:

C:\xampp\htdocs\mi-bitacora-terror

Para comprobar el funcionamiento inicial, accedí a:

http://localhost/mi-bitacora-terror/

Posteriormente configuré un Virtual Host utilizando
el archivo httpd-vhosts.conf.

Los datos principales de la configuración fueron:

- Servidor: Apache
- Puerto: 80
- Nombre del Virtual Host: bitacora.test
- DocumentRoot: C:/xampp/htdocs/mi-bitacora-terror
- Archivo principal: index.html

También configuré el archivo hosts de Windows para
asociar bitacora.test con la dirección 127.0.0.1.

Finalmente, comprobé la configuración mediante los
comandos httpd.exe -t y httpd.exe -S.

Apache mostró el mensaje Syntax OK y reconoció
correctamente el Virtual Host.

La aplicación quedó disponible localmente en:

http://bitacora.test/

## Estado del proyecto

La aplicación se encuentra desarrollada, optimizada,
versionada y desplegada correctamente en un servidor
Apache local.

Este despliegue corresponde a un entorno académico
de simulación y no a un sitio publicado en Internet.
