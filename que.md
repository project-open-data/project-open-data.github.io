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

# 2 ¿Qué datos tenemos?

Las entidades de la APF están obligadas a crear y mantener un inventario que incorpore todas las bases de datos que producen y
recolectan, incluyendo de manera no limitativa, datos utilizados en sus sistemas de información derivados de actividades financieras,
estadísticas, administrativas y de investigación.

Los objetivos de este proceso son:

 * Construir **gradualmente** un inventario de todas las bases de datos utilizadas en los sistemas de información que tienen en su
   responsabilidad.
   
 * Incluir (de manera no limitativa) todas aquellas bases de datos generadas o recolectadas en actividades financieras, estadísticas,
   administrativas y de investigación, sin dejar fuera aquellas producidas a través de contratos y acuerdos de cooperación o bajo algún
   financiamiento.
   
 * Indicar si las bases de datos pueden ser publicadas y si ya están disponibles.
 
 * Describir las bases de datos con los metadatos mínimos requeridos en esta guía.
 
 
**Requerimientos mínimos para crear y mantener un inventario de datos**

A 120 días después de la publicación oficial de la PNDA:

1. Crear la primera versión del inventario de datos de la entidad:
 
   * Asegurar que el inventario registra al menos el 10% de las bases de datos de la entidad.
   
   * Incluir todos los metadatos requeridos y definidos en esta guía.
   
   * Generar y poblar el inventario dentro del sistema ADELA.
   
2. Publicar el “Plan de acción de datos abiertos” de la entidad a través del sistema ADELA, el cual quedará en una ruta única de
    ADELA por cada entidad, p. ej. www.datos.gob.mx/[ADELA]/[entidad]/plan. En dicho sistema se requiere completar los formularios
    y cronogramas del plan de acción de la entidad, donde entre otros puntos, se describe la estrategia para la creación y mantenimiento
    del inventario de datos cumpliendo con los siguientes puntos:

   * Describir cómo la entidad se asegurará de identificar y registrar en el inventario todas las bases de datos en su responsabilidad
     a un año de la publicación oficial de la PNDA.
     
   * Describir como la entidad planea expandir y enriquecer su inventario cada 6 meses, incluyendo hitos y fechas clave en la sección
     del “Cronograma de implementación”.  

De manera contínua a partir de los primeros 120 días después de la publicación de la PNDA:  

3. Mantener, actualizar, y expandir el inventario de datos, conforme a lo definido en el “Plan de acción de datos abiertos” de la
    entidad.
    


## 2.1 Realizar un inventario de las bases de datos

El inventario de datos será gradual pero exhaustivo, es decir, incorporará un listado de todas las bases de datos que tenga la
organización, incluyendo aquellas que por razones de ley no se puedan publicar.

Cada registro en el inventario deberá contener toda la información solicitada en los campos definidos como “Metadatos mínimos requeridos”
y en los casos que aplique, aquellos definidos como “Metadatos requeridos en los casos que aplique”
(Ver [“Definición de metadatos”](#def-metadatos) más adelante).

En la dirección [http://bit.ly/inventario-de-datos](http://bit.ly/inventario-de-datos) se puede descargar un inventario de ejemplo,
donde se registra un caso hipotético para dos bases de datos con diferentes características.

El inventario deberá ser registrado en el sistema ADELA, ya sea importando un archivo CSV al sistema, o utilizando los formularios
provistos por ADELA.

La primera versión del inventario (con el registro de al menos 10% de las bases de datos de la entidad) deberá ser entregado a ADELA
a más tardar 120 días después de la publicación oficial de la PNDA. El inventario completo de todas las bases de datos deberá estar
terminado a un año de la publicación oficial de la PNDA, registrando actualizaciones graduales en ADELA como se estipula en el “Plan
de acción de datos abiertos” de la entidad.


## Definición de metadatos
{:#def-metadatos}

Los metadatos son campos o elementos descriptivos que ofrecen al usuario información suficiente para procesar y entender los datos.
Estos campos pueden variar en detalle, desde descripciones muy básicas como explicar el tema general de la base de datos, hasta proveer
detalle semántico para permitir un alto grado de legibilidad para máquinas. Lograr esto último incrementa en gran manera la apertura
y utilidad de los datos.

Establecer un vocabulario común es imprescindible para la comunicación entre sistemas informáticos, y es por esto que esta guía parte
del vocabulario para la descripción de catálogos de datos denominado
[DCAT, estándar definido por W3C.](http://www.w3.org/TR/vocab-dcat/) En apego a dicho estándar, y con el fin de promover la
interoperabilidad y el uso de estándares internacionales, los títulos de los metadatos se generan en inglés, sin embargo para facilidad
de uso, la interfaz del sistema ADELA tiene la capacidad de mostrar los campos al usuario en español.


## Metadatos mínimos requeridos


<table border="1" class="green">
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>title</td>
      <td>Cadena de caracteres</td>
      <td><strong>T&iacute;tulo.</strong> Nombre de la base de datos suficientemente descriptivo para facilitar su b&uacute;squeda
      e identificaci&oacute;n.
      </td>
   </tr>
   <tr>
      <td>description</td>
      <td>Cadena de caracteres</td>
      <td><strong>Descripci&oacute;n.</strong> Una explicaci&oacute;n de los datos, con suficiente detalle para que los usuarios puedan
      entender si es de su inter&eacute;s.
      </td>
   </tr>
   <tr>
      <td>keyword</td>
      <td>Lista de t&eacute;rminos separados por coma</td>
      <td><strong>Etiquetas.</strong> T&eacute;rminos clave que facilitar&aacute;n al usuario la b&uacute;squeda del documento.
      Es importante considerar el uso de t&eacute;rminos no t&eacute;cnicos.
      p.ej. “salud,medicinas,compras”.
      </td>
   </tr>
   <tr>
      <td>modified</td>
      <td>Fecha y hora en formato <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601.</a></td>
      <td><strong>Fecha y hora</strong> de la &uacute;ltima modificaci&oacute;n del documento.</td>
   </tr>
   <tr>
      <td>publisher</td>
      <td>Cadena de caracteres</td>
      <td><strong>Publicante</strong> La entidad en responsabilidad de la publicaci&oacute;n de los datos.</td>
   </tr>
   <tr>
      <td>contactPoint</td>
      <td>Cadena de caracteres</td>
      <td><strong>Nombre de la persona de contacto</strong> para la base de datos.</td>
   </tr>
   <tr>
      <td>mbox</td>
      <td>Correo electr&oacute;nico</td>
      <td><strong>Correo electr&oacute;nico de contacto</strong> para responder dudas, comentarios y sugerencias sobre los datos publicados.</td>
   </tr>
   <tr>
       <td>identifier</td>
       <td>Cadena de caracteres</td>
       <td><strong>Identificador</strong> &uacute;nico del documento en el cat&aacute;logo de la entidad. Puede contener cualquier combinaci&oacute;n de caracteres alfanum&eacute;ricos.</td>
   </tr>
   <tr>
      <td>accessLevel</td>
      <td>Cadena de caracteres</td>
      <td><strong>Nivel de acceso</strong> El grado de publicidad de la base de datos. Las opciones son: “p&uacute;blico”, “restringido” o “privado”. Para mayor informaci&oacute;n, ver la subsecci&oacute;n “Niveles de acceso a datos de gobierno” m&aacute;s adelante.</td>
   </tr>
 </table> 


Se puede descargar una plantilla de ejemplo en formato [JSON](http://tools.ietf.org/html/rfc4627) en [https://gist.github.com/wilhelmbot/7350161.](https://gist.github.com/wilhelmbot/7350161) 




### Niveles de acceso a datos de gobierno


Las categorías definidas bajo el campo “Nivel de acceso” y “Comentarios sobre el nivel de acceso” tienen el propósito de servir como
referencia interna para la entidad y reflejar las decisiones tomadas sobre si es conveniente o no hacer pública una base de datos.
Cabe recalcar, que la simple categorización de “público” no exime la obligación de los publicadores de datos de seguir las prácticas
de privacidad, confidencialidad y seguridad definidas en este documento y en la ley (Ver sección
[“¿Cómo identificamos que no son públicos?”](/como/#no-pub) ).



 * __Público__: los datos pueden hacerse públicos a toda la población sin ninguna restricción.
 
 * __Restringido__: los datos son disponibles bajo ciertas restricciones. Un ejemplo podría ser el caso en que la base de datos sólo pueden
   entregarse a centros de investigación bajo términos de cuidado de la información, ya que los datos podrían contener suficiente
   granularidad para re-identificar individuos; a pesar de que no cuenten con información personal. Otro caso podrían ser datos
   que contienen información personal y son compartidos entre entidades de gobierno para fines internos. El campo “Comentarios sobre
   el nivel de acceso” deberá contener una explicación de este caso, y los detalles para solicitar acceso.

 * __Privado__: los datos no están disponibles al público. Esta categoría incluye datos protegidos por la
   [“Ley Federal de Transparencia y Acceso a la Información Pública”], como aquellos de seguridad nacional o que contienen información
   personal. El campo “Comentarios sobre el nivel de acceso” deberá contener una explicación de la razón por la cual no se hizo pública
   esta base de datos.




### Metadatos requeridos en los casos que aplique
{:#metadatos-requeridos}

 <table border="1" class="green">
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>accessLevelComment</td>
      <td>Cadena de caracteres</td>
      <td><strong>Comentarios sobre el nivel de acceso.</strong> Comentarios sobre la raz&oacute;n por la cual se seleccion&oacute;
      el “Nivel de acceso” para esta base de datos.</td>
   </tr>
   <tr>
      <td>accessURL</td>
      <td><a href="http://es.wikipedia.org/wiki/Localizador_uniforme_de_recursos">URL</a></td>
      <td><strong>URL para descarga.</strong> Dirección electr&oacute;nica para descargar el recurso.</td>
   </tr>
   <tr>
      <td>webService</td>
      <td>URL</td>
      <td><strong>Punto de acceso</strong> del <a href="http://es.wikipedia.org/wiki/Servicio_web">servicio Web para los datos.</a></td>
   </tr>
   <tr>
      <td>format</td>
      <td>Cadena de caracteres</td>
      <td><strong>Formato de archivo</strong> del recurso o el tipo de API para consumir los datos.</td>
   </tr>
   <tr>
      <td>license</td>
      <td>URL</td>
      <td><strong>Licencia</strong> con la cual se publican los datos. Ver secci&oacute;n de “Licencia” m&aacute;s adelante.</td>
   </tr>
   <tr>
      <td>spatial</td>
      <td>Cadena de caracteres o listado de coordenadas geogr&aacute;ficas (pareja de latitud y longitud) separadas por coma.</td>
      <td>El <strong>rango espacial</strong> del contexto de la base de datos. Puede ser una regi&oacute;n, el nombre de un lugar, o un cuadro delimitador
      de coordenadas geogr&aacute;ficas <a href="http://en.wikipedia.org/wiki/Minimum_bounding_box">(bounding box)</a>. P.ej.
      “Baja California”, “estatal”, o “32.71,-112.32,27.99, -118.45”.</td>
   </tr>
   <tr>
      <td>temporal</td>
      <td>Rango de fecha y hora en formato <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601.</a></td>
      <td>El <strong>rango temporal</strong> del contexto de los datos. Debe contener una fecha de inicio y una de fin.</td>
   </tr>
</table>


### Metadatos adicionales

Se invita a las entidades de la APF a extender las descripciones de sus metadatos utilizando elementos de la siguiente lista o de
cualquier otro vocabulario reconocido por la comunidad internacional (p. ej. Dublin Core):


<table border="1" class="green">
   <tr>
      <th>Llave</th>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>theme</td>
      <td>Cadena de caracteres</td>
      <td><strong>Categor&iacute;a tem&aacute;tica</strong> principal de la base de datos.</td>
   </tr>
   <tr>
      <td>dataDictionary</td>
      <td>URL</td>
      <td><strong>Diccionario de datos.</strong> Dirección electr&oacute;nica para descargar el diccionario de datos. Este documento sirve como gu&iacute;a adicional para que el usuario entienda con mayor detalle los datos.</td>
   </tr>
   <tr>
      <td>accrualPeriodicity</td>
      <td>Cadena de caracteres</td>
      <td><strong>Frecuencia</strong> con la cual la base de datos es publicada o actualizada, p. ej. “mensualmente”.</td>
   </tr>
   <tr>
      <td>language</td>
      <td>Lenguaje siguiendo el formato <a href="http://tools.ietf.org/html/rfc5646">RFC-5646</a></td>
      <td>El <strong>lenguaje</strong> de la base de datos, p. ej. “fr”.</td>
   </tr>
</table>

