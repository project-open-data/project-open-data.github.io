---
published: true
permalink: /que/
layout: navegable
filename: que.md
title: Guía para la Publicación de Datos Abiertos
sections:
  - name: Introducción
    path: /intro
  - name: ¿Quién se hace cargo?
    path: /quien
  - name: ¿Qué datos tenemos?
    path: /que
  - name: ¿Cuál es el plan para abrir los datos?
    path: /cuando
  - name: ¿Cómo abrir los datos?
    path: /como
  - name: Anexos
    path: /addendum
---

## ¿Qué datos tenemos?

Las entidades de la APF están obligadas a crear y mantener un inventario que incorpore todas las bases de datos que producen y recolectan, incluyendo de manera no limitativa, datos utilizados en sus sistemas de información derivados de actividades financieras, estadísticas, administrativas y de investigación.

Los objetivos de este proceso son:

 * Construir un inventario de todas las bases de datos utilizadas en los sistemas de información que tienen en su responsabilidad. 
 
 * Incluir (de manera no limitativa) todas aquellas bases de datos generadas o recolectadas en actividades financieras, estadísticas, administrativas y de investigación, sin dejar fuera aquellas producidas a través de contratos y acuerdos de cooperación o bajo algún financiamiento. 
 
 * Indicar si las bases de datos pueden ser publicadas y si ya están disponibles. 
 
 * Describir las bases de datos con los metadatos mínimos requeridos en esta guía. 
 
 * Hacer público el plan de acción de apertura de datos dentro de la entidad. 

Requerimientos mínimos para crear y mantener un inventario de datos:


 * Crear un inventario de datos de la entidad (1 de Septiembre de 2014): 

   * Asegurar que el inventario registra todas las bases de datos de la entidad. 

   * Incluir los metadatos requeridos y definidos en esta guía. 

   * Enviar el inventario a la CEDN como un documento en formato [CSV](http://es.wikipedia.org/wiki/Comma-separated_values). 
 
 * Publicar un documento que describa el “Plan de acción de datos abiertos” de la entidad, donde entre otros puntos, se describa la estrategia para la creación y mantenimiento del inventario de datos de la entidad y que cumpla con los siguientes puntos (1 de Septiembre de 2014): 

   * Describir cómo la entidad se asegurará de identificar y registrar en el inventario todas las bases de datos en su responsabilidad para el (1 de Septiembre de 2015). 

   * Describir como la entidad planea expandir y enriquecer su inventario cada 6 meses hasta el (1 de Septiembre de 2015), incluyendo hitos y fechas clave en el [“Cronograma de publicación”]. 

   * Publicar el documento en la dirección “/plan-de-datos” dentro del sitio oficial de la entidad, p. ej. www.[entidad].gob.mx/plan-de-datos. 

 * Mantener, actualizar, y expandir el inventario de datos, así como el “Plan de acción de datos abiertos” de la entidad (a partir del 1 de Septiembre de 2014). 

## Realizar un inventario de todas las bases de datos

El inventario de datos será exhaustivo, es decir, incorporará un listado de todas las bases de datos que tenga la organización, incluyendo aquellas que por razones de ley no se puedan publicar.

Cada registro en el inventario deberá contener toda la información solicitada en los campos definidos como “Metadatos mínimos requeridos” y en los casos que aplique, aquellos definidos como “Metadatos requeridos en los casos que aplique” (Ver [“Definición de metadatos“](#def-metadatos) más adelante).

En la dirección [http://bit.ly/inventario-de-datos](http://bit.ly/inventario-de-datos) se puede descargar un inventario de ejemplo, donde se registra un caso hipotético para dos bases de datos con diferentes características.

Este inventario deberá ser entregado a la (CEDN) a más tardar el día (1 de Septiembre de 2014).

## Definición de metadatos
{:#def-metadatos}

Los metadatos son campos o elementos descriptivos que ofrecen al usuario información suficiente para procesar y entender los datos. Estos campos pueden variar en detalle, desde descripciones muy básicas como explicar el tema general de la base de datos, hasta proveer detalle semántico para permitir un alto grado de legibilidad para máquinas. Lograr esto último incrementa en gran manera la apertura y utilidad de los datos.

Establecer un vocabulario común es imprescindible para la comunicación entre sistemas informáticos, y es por esto que esta guía parte del vocabulario para la descripción de catálogos de datos denominado [DCAT, estándar definido por W3C.](http://www.w3.org/TR/vocab-dcat/) 


## Metadatos mínimos requeridos


<table border="1"> 
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>título</td>
      <td>Cadena de caracteres</td>
      <td>Nombre de la base de datos suficientemente descriptivo para facilitar su b&uacute;squeda e identificaci&oacute;n.</td>
   </tr>
   <tr>
      <td>descripci&oacute;n</td>
      <td>Cadena de caracteres</td>
      <td>Una explicaci&oacute;n de los datos, con suficiente detalle para que los usuarios puedan entender si es de su inter&eacute;s.</td>
   </tr>
   <tr>
      <td>etiquetas</td>
      <td>Lista de t&eacute;rminos separados por coma</td>
      <td>T&eacute;rminos clave que facilitar&aacute;n al usuario la b&uacute;squeda del documento. Es importante considerar el uso de t&eacute;rminos no t&eacute;cnicos.</td>
   </tr>
   <tr>
      <td>ultimaActualizaci&oacute;n</td>
      <td>Fecha y hora en formato <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601.</a></td>
      <td>Fecha y hora de la &uacute;ltima modificaci&oacute;n del documento.</td>
   </tr>
   <tr>
      <td>publicante</td>
      <td>Cadena de caracteres</td>
      <td>La entidad en responsabilidad de la publicaci&oacute;n de los datos.</td>
   </tr>
   <tr>
      <td>nombreDeContacto</td>
      <td>Cadena de caracteres</td>
      <td>Nombre de la persona de contacto para la base de datos.</td>
   </tr>
   <tr>
      <td>correoDeContacto</td>
      <td>Correo electr&oacute;nico</td>
      <td>Correo electr&oacute;nico de contacto para responder dudas, comentarios y sugerencias sobre los datos publicados.</td>
   </tr>
   <tr>
       <td>identificador</td>
       <td>Cadena de caracteres</td>
       <td>Identificador &uacute;nico del documento en el cat&aacute;logo de la entidad. Puede contener cualquier combinaci&oacute;n de caracteres alfanum&eacute;ricos.</td>
   </tr>
   <tr>
      <td>nivelDeAcceso</td>
      <td>Cadena de caracteres</td>
      <td>El grado de publicidad de la base de datos. Las opciones son: “p&uacute;blico”, “restringido” o “privado”. Para mayor informaci&oacute;n, ver la subsecci&oacute;n “Niveles de acceso a datos de gobierno” m&aacute;s adelante.</td>
   </tr>
 </table> 


Se puede descargar una plantilla de ejemplo en formato [JSON](http://tools.ietf.org/html/rfc4627) en [https://gist.github.com/wilhelmbot/7350161.](https://gist.github.com/wilhelmbot/7350161) 




### Niveles de acceso a datos de gobierno

Las categorías definidas bajo el campo “nivelDeAcceso” y “comentariosDelNivelDeAcceso” tienen el propósito de servir como referencia interna para la entidad y reflejar las decisiones tomadas sobre si es conveniente o no hacer pública una base de datos. Cabe recalcar, que la simple categorización de “público” no exime la obligación de los publicadores de datos de seguir las prácticas de privacidad, confidencialidad y seguridad definidas en este documento y en la ley (Ver sección [“¿Cómo identificamos que no son públicos?”](/como/#no-pub) ).

 * Público: los datos pueden hacerse públicos a toda la población sin ninguna restricción. 

 * Restringido: los datos son disponibles bajo ciertas restricciones. Un ejemplo podría ser el caso en que la base de datos sólo pueden entregarse a centros de investigación bajo términos de cuidado de la información, ya que los datos podrían contener suficiente granularidad para re-identificar individuos; a pesar de que no cuenten con información personal. Otro caso podrían ser datos que contienen información personal y son compartidos entre entidades de gobierno para fines internos. El campo “comentariosDelNivelDeAcceso” deberá contener una explicación de este caso, y los detalles para solicitar acceso. 

 * Privado: los datos no están disponibles al público. Esta categoría incluye datos protegidos por la (“Ley Federal de Transparencia y Acceso a la Información Pública”), como aquellos de seguridad nacional o que contienen información personal. El campo “comentariosDelNivelDeAcceso” deberá contener una explicación de la razón por la cual no se hizo pública esta base de datos. 


### Metadatos requeridos en los casos que aplique
{:#metadatos-requeridos}

 <table border="1">
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>comentariosDelNivelDeAcceso</td>
      <td>Cadena de caracteres</td>
      <td>Comentarios sobre la raz&oacute;n por la cual se seleccion&oacute; el “nivelDeAcceso” para esta base de datos.</td>
   </tr>
   <tr>
      <td>urlDeAcceso</td>
      <td><a href="http://es.wikipedia.org/wiki/Localizador_uniforme_de_recursos">URL</a></td>
      <td>Dirección electr&oacute;nica para descargar el recurso.</td>
   </tr>
   <tr>
      <td>servicioWeb</td>
      <td>URL</td>
      <td>Punto de acceso del <a href="http://es.wikipedia.org/wiki/Servicio_web">servicio Web para los datos.</a></td>
   </tr>
   <tr>
      <td>formato</td>
      <td>Cadena de caracteres</td>
      <td>El formato de archivo del recurso o el tipo de API para consumir los datos.</td>
   </tr>
   <tr>
      <td>licencia</td>
      <td>URL</td>
      <td>Licencia con la cual se publican los datos. Ver secci&oacute;n de “Licencia” m&aacute;s adelante.</td>
   </tr>
   <tr>
      <td>regi&oacute;n</td>
      <td>Cadena de caracteres o listado de coordenadas geogr&aacute;ficas (pareja de latitud y longitud) separadas por coma.</td>
      <td>El rango espacial del contexto de la base de datos. Puede ser una regi&oacute;n, el nombre de un lugar, o un cuadro delimitador de coordenadas geogr&aacute;ficas <a href="http://en.wikipedia.org/wiki/Minimum_bounding_box">(bounding box). P.ej. “Baja California”, “estatal”, o “32.71,-112.32,27.99, -118.45”.</a></td>
   </tr>
   <tr>
      <td>tiempo</td>
      <td>Rango de fecha y hora en formato <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601.</a></td>
      <td>El rango temporal del contexto de los datos. Debe contener una fecha de inicio y una de fin.</td>
   </tr>
</table>


### Metadatos adicionales

Se invita a las entidades de la APF a extender las descripciones de sus metadatos utilizando elementos de la siguiente lista o de cualquier otro vocabulario reconocido por la comunidad internacional (p. ej. Dublin Core):


<table border="1">
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>categor&iacute;a</td>
      <td>Cadena de caracteres</td>
      <td>Categor&iacute;a tem&aacute;tica principal de la base de datos.</td>
   </tr>
   <tr>
      <td>diccionarioDeDatos</td>
      <td>URL</td>
      <td>Dirección electr&oacute;nica para descargar el diccionario de datos. Este documento sirve como gu&iacute;a adicional para que el usuario entienda con mayor detalle los datos.</td>
   </tr>
   <tr>
      <td>periodicidad</td>
      <td>Cadena de caracteres</td>
      <td>Frecuencia con la cual la base de datos es publicada o actualizada, p. ej. “mensualmente”.</td>
   </tr>
   <tr>
      <td>lenguaje</td>
      <td>Lenguaje siguiendo el formato <a href="http://tools.ietf.org/html/rfc5646"><RFC-5646</a></td>
      <td>El lenguaje de la base de datos, p. ej. “fr”.</td>
   </tr>
</table>


### Publicar el plan de acción de datos abiertos

A la par será necesario establecer el proceso de avance y mantenimiento del inventario de datos de la entidad, que deberá ser publicado en su sitio oficial bajo la ruta “/plan-de-datos”, p. ej. www.[entidad].gob.mx/plan-de-datos.

Este documento también contendrá secciones sobre el proceso contínuo de publicación de datos abiertos, que se define en la sección [“¿Cuál es el plan para abrir los datos?”.](/cuando)

