---
published: true
permalink: /como/
layout: navegable
filename: como.md
title: Guía para la Publicación de Datos Abiertos
doc-name: guia
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

# 4 ¿Cómo abrir los datos?

Como lo define la “Política Nacional de Datos Abiertos” en su sección 5.1, para ser considerados datos abiertos, las bases de datos de
las entidades de la APF deberán cumplir con las siguientes características:

 * __Completos__: que reflejen la totalidad del tema y descritos con detalle.
 
 * __Públicos__: de interés general y carácter público, protegiendo la privacidad.
 
 * __Primarios__: que provienen de la fuente original y tienen el máximo nivel de desagregación posible.
 
 * __En tiempo__: siendo oportunos y actualizados tan pronto sea posible.
 
 * __De libre acceso__: disponibles de manera conveniente, sin restricciones de acceso ni discriminación.
 
 * __Procesable por máquina__: estructurados de tal forma que permita el procesamiento automático.
 
 * __En formatos abiertos__: que utilicen estándares abiertos, procesables por máquinas y pueden ser descargables y operados con los
   requerimientos tecnológicos mínimos.
   
 * __Con licencia de libre uso__: que define claramente la libertad y certeza de ser utilizados como insumo para cualquier fin, requiriendo
   a lo mucho, atribución.
   
 * __Permanentes__: para habilitar la capacidad de encontrar la información publicada a perpetuidad; y para que toda información hecha
   pública, permanezcan así, siempre con identificadores adecuados respecto a versiones y archivado en el tiempo.
   
 * __Costos de utilización__: que deberán ser justos -preferentemente nulos-, para evitar barreras al uso por parte de los ciudadanos.
 
 
 
## 4.1  Preparación de las bases de datos

Liberar datos que cumplan las características mencionadas en el punto anterior, permite asegurar su libre y máximo provecho por la
comunidad. A continuación, sentamos las mejores prácticas en los diferentes rubros de este proceso.


### 4.1.1 ¿Cómo identificamos que no son públicos?
{:#no-pub}

La PNDA en su sección 9 “Protección de datos”, establece que todas las entidades de la APF identificarán las bases de datos sujetas
a ser designadas como privadas o confidenciales, en conformidad con la (“Ley Federal de Acceso a la Información Pública Gubernamental”,
su reglamento y demás disposiciones relativas). Por ejemplo, el IFAI en sus “Lineamientos de Protección de Datos Personales” [1](#ref1) ,
establece que la información que posee una dependencia o entidad será considerada un dato personal cuando la misma sea concerniente
a una persona física, identificada o identificable; y en el tratamiento de estos datos, las dependencias y entidades deberán observar
los principios de licitud, calidad, acceso y corrección, de información, seguridad, custodia y consentimiento para su transmisión.

En estos casos, las entidades pueden solicitar apoyo a los “Escuadrones de Datos” (descritos más adelante en esta sección) para evaluar
e implementar técnicas para proteger, generalizar o anonimizar estas bases de datos. “La privacidad y la transparencia son compatibles
si las estructuras correctas de gobernanza están en su lugar” [2](#ref2).

**Agregación y anonimización**

El término “anonimización” hace referencia al proceso de remover datos personales de una base de datos, en apego a la legislación
vigente. Esta práctica, según la comisión europea, es segura para la publicación de datos para el reuso (datos abiertos) [4](#ref4).

Decidir el grado de agregación apropiado y las técnicas de anonimización específicas para utilizar es una tarea compleja, y de no
ser llevadas a cabo correctamente se corre riesgo de re-identificar individuos.

Para apoyar en esta tarea, la CEDN proporcionará apoyo a través de los “Escuadrones de Datos”. De igual manera, en la sección de
[Anexos.](/addendum/#herramientas) se recopilan una serie de buenas prácticas y herramientas.


**El efecto mosaico**

La liberación de grandes cantidades de datos anonimizados sacan a la luz complejos cuestionamientos sobre cómo garantizar
la privacidad, ya que el incremento de la publicación de datos anonimizados aumenta la posibilidad de identificar datos personales
a través del efecto mosaico [2](#ref2).

El efecto mosaico ocurre cuando la información de una base de datos por sí sola, no genera un riesgo para la identificación de
individuos, pero al combinarse con otra información disponible, puede generar tal riesgo. Antes de publicar cualquier información
que sea sensible, las entidades deberán considerar otras fuentes de información disponibles y evaluar si la combinación de éstas
pueden presentar algún riesgo [3](#ref3).


**Evaluación de impacto en la privacidad**

Las entidades deben entender que el efecto mosaico demanda la implementación de análisis de riesgos, generalmente a través de métodos
estadísticos cuyos parámetros pueden variar con el tiempo, ya que dependen de una variedad de factores que van desde la naturaleza
de la información hasta las técnicas actuales para realizar el proceso de identificación de datos personales [3](#ref3).

Dada la complejidad de este análisis, se invita a las entidades a solicitar apoyo de los “Escuadrones de Datos” de la CEDN que tienen
experiencia y habilidades en el tema. Sin embargo, es responsabilidad de cada entidad la realización del análisis necesario para cumplir
con las leyes, regulaciones y políticas aplicables. En el caso de que se demuestre una posible re-identificación de individuos en alguna
base de datos pública, la entidad responsable de ésta deberá detener su publicación, e informar a los usuarios acerca de la decisión.

Retomando lo descrito en la sección [“¿Qué datos tenemos?”](/que), estas decisiones sobre resguardar ciertas bases de datos deberán estar
documentadas en el inventario de datos de la entidad.



### Referencias:

 [1] Lineamientos de Protección de Datos Personales. Instituto Federal de Acceso a la Información Pública. Dof-30-sep-05.
{:#ref1}

 [2] Open Data White Paper: Unleashing the Potential. Presented to Parliament by the Minister of State for the Cabinet Office and Paymaster General by Command of Her Majesty. June 2012. [http://www.ico.org.uk/news/latest_news/2012/ico-consults-on-new-anonymisation-code-of-practice-31052012](http://www.ico.org.uk/news/latest_news/2012/ico-consults-on-new-anonymisation-code-of-practice-31052012)
{:#ref2}
 
 [3] Sylvia M. Burwell, Steven VanRoekel, Todd Park, Dominic J. Mancini. MEMORANDUM FOR THE HEADS OF EXECUTIVE DEPARTMENTS AND AGENCIES. Open Data Policy-Managing Information as an Asset. M-13-13. May 9, 2013. [http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf.](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf) 
{:#ref3}

 [4] Opinion 06/2013 on open data and public sector information ('PSI') reuse. ARTICLE 29 DATA PROTECTION WORKING PARTY. 1021/00/EN WP207. [http://ec.europa.eu/justice/data-protection/index_en.htm](http://ec.europa.eu/justice/data-protection/index_en.htm) 
{:#ref4}



### 4.1.2 ¿Cómo facilitar el procesamiento por máquinas?

Es importante tener en claro que los recursos y bases de datos a publicar tienen la intención de proveer un insumo en crudo para un sinfín
de actividades, como por ejemplo, el análisis, cruce, cálculo, y reinterpretación de la información. Es por esto, que dichos recursos
deben estar estructurados para el cómputo, no para la presentación de información para un tomador de decisión (esto último se debe ver
como un producto secundario del procesamiento de los datos). Es así que se deben evitar formatos no estructurados como PDFs, imágenes,
y hojas de cálculo con decoraciones como logotipos y encabezados.

Para facilitar el procesamiento por máquinas es importante tener en consideración los siguientes principios de estructuración de las
bases de datos a publicar:

 1. Los valores no deben presentar agregación estadística o preprocesamiento, de ser así, esto deberá indicarse en los metadatos
    apropiados.
    
 2. Los nombres de columnas o propiedades de cada registro deben ser altamente descriptivas, p. ej. “Fecha de solicitud”,
    “Monto entregado”, etc. En caso de no serlo, se deberá crear un diccionario de datos y agregar su URL de acceso en los metadatos
    adicionales de la base de datos (ver [“Definición de metadatos”](/que/#def-metadatos)).
    
 3. Cuando los valores representan magnitudes, es necesario que permanezcan como datos numéricos y que la unidad de medida se agregue
    a la descripción del título del campo, p. ej. “Distancia en KM”.
    
 4. Los campos numéricos, incluyendo los monetarios, deben permanecer en un formato numérico de tipo entero o flotante. En este último
    caso se debe evitar el uso de símbolos monetarios y mejor indicarlo en el título del campo, p. ej. “Monto en pesos mexicanos”,
    “Monto en USD”, o “Monto en €”.
    
 5. Cuando un campo no tenga valor se debe evitar registrar valores para indicar la ausencia de éste. Malos ejemplos son las comillas
    vacías, textos como “No disponible”, “N/A”, etc. La simple ausencia de un valor será el indicador de la falta de dicho dato.
    
 6. Procurar la consistencia de tipos de valores por campo, atributo o columna. En otras palabras, es considerado mala práctica tener
    valores de diferentes tipos (como texto y número) para una columna en diferentes registros.
    
 7. Los campos de tiempo, como fechas, horas, y rangos temporales, deben seguir el estándar ISO 8601, como se indicó en la sección de
    metadatos.
    
 8. Para permitir una amplio rango de caracteres (como los acentos), la **codificación** de los documentos debe ser UTF-8. A pesar de
    que la codificación [ISO 8859-1](http://es.wikipedia.org/wiki/ISO_8859-1) (latin-1) cubre los caracteres especiales del español,
    el estándar [UTF-8](http://es.wikipedia.org/wiki/UTF-8) además de incluirlos ([ISO 10646](http://es.wikipedia.org/wiki/ISO_10646) base
    de UTF-8 contiene los caracteres de Latin-1: [http://tools.ietf.org/html/rfc3629](http://tools.ietf.org/html/rfc3629)) extiende a un
    mayor rango de caracteres y se ha convertido en el estándar de mayor utilización en la Web. Como referencia ver:
    [http://w3techs.com/technologies/overview/character_encoding/all](http://w3techs.com/technologies/overview/character_encoding/all)
    y [http://googleblog.blogspot.ca/2012/02/unicode-over-60-percent-of-web.html](http://googleblog.blogspot.ca/2012/02/unicode-over-60-percent-of-web.html)

*Nota: a lo largo de esta sección se utilizan indistintamente los términos atributo, campo, columna, y propiedad para referirse a alguno
de los metadatos de un registro dentro de la base de datos, p. ej. hablando de una base de datos de centros de atención médica,
un registro podría contener un atributo/campo/columna/propiedad denominada “cupo de pacientes” con un valor de 250.*


### 4.1.3 ¿Cómo utilizar formatos abiertos?

“Los formatos abiertos tienden a promover una amplia gama de usos, compatibilidad retroactiva y a futuro, e independencia de intereses
comerciales de corto plazo” - Josh Tauberer, citado en
[http://sunlightfoundation.com/opendataguidelines/#open-formats.](http://sunlightfoundation.com/opendataguidelines/#open-formats)

Siguiendo las mejores prácticas de la comunidad internacional de datos abiertos, entre ellos el “Open Data Handbook”, los formatos
clasificados como estructurados son los óptimos para abrir datos. Entre los formatos abiertos y estructurados más conocidos están
[JSON](http://tools.ietf.org/html/rfc4627), [CSV](http://es.wikipedia.org/wiki/Comma-separated_values),
[RDF](http://es.wikipedia.org/wiki/Resource_Description_Framework), [XML](http://es.wikipedia.org/wiki/XML), y
[KML.](http://es.wikipedia.org/wiki/Keyhole_Markup_Language)


Los [administradores de datos abiertos] se asegurarán de que los datos publicados de la entidad cumplen con el requisito de estar en
múltiples formatos abiertos y estructurados, y de atender las peticiones de los usuarios para liberarlos en otros formatos.

A continuación categorizamos los formatos sugeridos por tipo de dato.

**Formatos recomendados para datos genéricos**

<table border="1">
   <tr>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>JSON</td>
      <td>
         <p>Formato ligero (y legible) para el intercambio de datos. Dada su simplicidad de estructura, se ha generalizado su uso en
            la Web.</p>
            Referencia: <a href="http://es.wikipedia.org/wiki/JSON">http://es.wikipedia.org/wiki/JSON.</a>
      </td>
   </tr>
   <tr>
      <td>CSV</td>
      <td>
         <p>Formato sencillo y abierto para representar datos en forma de tabla, en las que las columnas se separan por comas.
            En los casos en los que un valor contenga coma (como el separador decimal en algunos países), se recomienda encerrar entre
            comillas los valores o utilizar otro separador como “punto y coma” o “tabulador”.</p> 
            Referencia: <a href="http://es.wikipedia.org/wiki/Comma-separated_values">http://es.wikipedia.org/wiki/Comma-separated_values</a>
      </td>
   </tr>
   <tr>
      <td>RDF</td>
      <td>
         <p>Formato de la W3C dise&ntilde;ado para generar un modelo de datos que describa la informaci&oacute;n de un recurso web. Este
            mecanismo es un componente clave de la Web Sem&aacute;ntica.</p>
            Referencia: <a href="http://es.wikipedia.org/wiki/Resource_Description_Framework">http://es.wikipedia.org/wiki/Resource_Description_Framework</a></td>
   </tr>
   <tr>
      <td>XML</td>
      <td>
         <p>Lenguaje de marcado desarrollado por la W3C para almacenar datos en forma legible y estructurada, que propone un est&aacute;ndar para el intercambio de informaci&oacute;n entre diferentes plataformas.</p> 
            Referencia: <a href="http://es.wikipedia.org/wiki/XML">http://es.wikipedia.org/wiki/XML</a>
      </td>
   </tr>
</table>


**Formatos recomendados para datos geográficos** 


<table border="1">
   <tr>
      <th>Formato</th>
      <th>Descripci&oacute;n</th>
   </tr>
   <tr>
      <td>KML</td>
      <td><p><a href="http://es.wikipedia.org/wiki/Lenguaje_de_marcado">Lenguaje de marcado</a> basado en XML para representar datos geogr&aacute;ficos en tres dimensiones, caracter&iacute;stico de la herramienta <a href="http://es.wikipedia.org/wiki/Google_Earth">Google Earth</a>. Un archivo KML describe elementos, como lugares, im&aacute;genes, o pol&iacute;gonos, que adem&aacute;s contienen t&iacute;tulo, descripci&oacute;n, coordenadas geogr&aacute;ficas y alguna otra informaci&oacute;n. Desde 2008 es un est&aacute;ndar en la industria y es aprobado por la <a href="http://www.opengeospatial.org/">OGC.</a></p>
Referencias:
         <ul>
            <li><a href="http://es.wikipedia.org/wiki/Keyhole_Markup_Language">http://es.wikipedia.org/wiki/Keyhole_Markup_Language </a></li>
            <li><a href="https://developers.google.com/kml/documentation/kml_tut">https://developers.google.com/kml/documentation/kml_tut</a></li>
            <li><a href="http://www.opengeospatial.org/standards/kml">http://www.opengeospatial.org/standards/kml</a></li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>KMZ</td>
      <td>Los KML a menudo suelen distribuirse comprimidos como archivos KMZ.</td>
   </tr>
   <tr>
      <td>GeoJSON</td>
      <td>
         <p>Formato nuevo basado en JSON para codificar una variedad de estructuras de datos geogr&aacute;ficos. Bajo este formato se pueden representar objetos geom&eacute;tricos, una cualidad o una colecc&oacute;in de &eacute;stas. Los tipos geom&eacute;tricos soportados son puntos, l&iacute;neas, pol&iacute;gonos, multipunto, entre otros.</p> 
         Referencia: <a href="http://geojson.org">http://geojson.org.</a>
      </td>
   </tr>
   <tr>
      <td>SHP</td>
      <td>
         <p>Formato de datos geoespaciales propietario de la empresa ESRI. Dada su popularidad, su especificaci&oacute;n t&eacute;cnica es p&uacute;blica y hasta cierto punto abierta. Un shapefile (como se denominan a los archivos de este formato) es un formato vectorial que guarda la localizaci&oacute;n de elementos geogr&aacute;ficos y los atributos asociados a ellos.</p>

         <p>El formato es multiarchivo, es decir, se genera en conjunto con archivos .shx y .dbf, los cuales definen (respectivamente) el &iacute;ndice de las entidades geom&eacute;tricas y la base de datos de los atributos de los objetos.</p>

         <p>A pesar de ser un formato no propiamente abierto, se propone como un formato aceptable dada la proliferaci&oacute;n (en la industria y gobierno) del software cartogr&aacute;fico propietario (ArcGIS de ESRI) que lo genera.</p>

         <p>Se recomienda traducir estos archivos a formatos KML o GeoJSON. Ver la secci&oacute;n de <a href="/addendum/#herramientas">“Herramientas”</a> en la secci&oacute;n de Anexos.</p>

         <p>Referencia: <a href="http://es.wikipedia.org/wiki/Shapefile">http://es.wikipedia.org/wiki/Shapefile</a></p>
      </td>
   </tr>
</table>

**Sobre las hojas de cálculo**

A lo largo de la APF, uno de los formatos más recurrentes son las hojas de cálculo de Microsoft Excel, cuyos archivos contienen extensión
XLS y en versiones más recientes XLSX. Es importante notar que el formato original XLS no es del todo abierto, pero la versión XLSX
cumple el formato de [Office Open XML](http://es.wikipedia.org/wiki/Office_Open_XML), el cual es abierto.

La primera recomendación en estos casos es exportar el recurso a cualquiera de los formatos sugeridos en este documento, y en caso de que
no sea posible o conveniente, recurrir a formatos XLSX en lugar de XLS. Sin olvidar lo que se mencionó en la sección anterior; evitar el
uso de imágenes y celdas combinadas.

**Validación de formatos**

Será necesario procurar la validación del formato de las bases de datos antes de hacerlas públicas. Para esto existen herramientas en
línea y bajo descarga que revisan la calidad del documento, y que evitarán descontento entre los usuarios que descargan los datos.


A continuación se enumeran algunas herramientas para ciertos formatos: 

 * JSON: [http://jsonlint.com](http://jsonlint.com) 

 * KML: [http://earth.google.com/outreach/tutorials/jedit.html#strict_kml_validation](http://earth.google.com/outreach/tutorials/jedit.html#strict_kml_validation) 


### 4.1.4 ¿Cómo entregarlos en tiempo?

Gran riqueza se crea cuando los datos son oportunos y se entregan en tiempo. Casos notables podrían ser los datos metereológicos, de
atención a desastres, de abasto de medicamentos, entre otros.


Cuando la periodicidad de la generación de datos es contínua y la publicación de archivos se complica, se recomienda liberar Servicios
Web o un [API](http://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones), que entreguen directamente los datos más
actualizados.

Los API y Servicios Web con arquitectura [REST](http://es.wikipedia.org/wiki/Representational_State_Transfer) son preferibles a los
servicios que utilizan el protocolo [SOAP](http://es.wikipedia.org/wiki/Simple_Object_Access_Protocol), ya que el primero hace énfasis
en los recursos y los expone o representa a través de URLs que permiten accederlos directamente.

Como ejemplo podemos ver el siguiente servicio SOAP, el cual requiere que se envíe un documento XML con la descripción del recurso que
se quiere revisar para lograr accesar los datos del servicio:

![SOAP]( /assets/img/soap.png ){: .intextimage}

Ahora, como comparación, para accesar un recurso a través de una API con arquitectura REST basta con entrar a una liga como
[http://datos.gob.mx/votes.json.](http://datos.gob.mx/votes.json)


### 4.1.5 ¿Cómo licenciar para un libre uso?

Las licencias abiertas eliminan las restricciones para accesar, reutilizar y redistribuir libremente un documento. Bajo la definición
de “Project Open Data” [1](#open-licenses), una licencia será abierta siempre y cuando cumpla con las siguientes condiciones:

 * Permite la reutilización. La licencia debe permitir la reproducción, modificación o generación de trabajos derivados bajo los mismos
   términos del trabajo original.
   
 * Permite la redistribución.
 
   * La licencia no debe restringir a terceros la venta o entrega del trabajo por sí solo o bajo una colección de trabajos de diferentes
     fuentes, ni exigir cuotas o regalías por tal venta o distribución.
     
   * Puede establecer que los trabajos derivados lleven otro nombre o número de versión.
   
   * Los derechos del trabajo deben aplicar a todos aquellos redistribuidores sin la necesidad de una licencia adicional.
   
   * La licencia no debe imponer restricciones a otros trabajos distribuidos en conjunto con ésta. Por ejemplo, la licencia no debe
     insistir en que otros trabajos distribuidos bajo el mismo medio sean abiertos.
     
   * Si las adaptaciones del trabajo son publicadas, éstas deben estar bajo las mismas licencias del trabajo original.

 * No discrimina a personas, grupos ni a cualquier propósito u objetivo. La licencia no debe restringir a cualquier persona o grupo de
   hacer uso del trabajo para cualquier objetivo o propósito. Por ejemplo, no debe restringir usar el trabajo para fines de investigación
   o de negocio.


Según la guía para licenciar datos abiertos del [ODI](http://theodi.org/), existen tres niveles de licenciamiento abierto:

 1. Una licencia de dominio público que no tiene restricción alguna. Técnicamente uno reclama los derechos del contenido y los datos al
    utilizarlo. 

 2. Una licencia de atribución que establece que los reutilizadores deben dar atribución al autor original. 

 3. Una licencia de atribución y de distribución con la misma licencia original que establece que los reutilizadores deberán dar crédito
    al autor original y distribuir la obra o derivados bajo la misma licencia del recurso original.

Algunas licencias abiertas existentes y aceptadas internacionalmente son:

 * Creative Commons BY, BY-SA, y CC0. Estas licencias permiten la libre reutilización y redistribución para cualquier fin. En el caso de
   la licencia CC-BY-SA se pide al menos atribución de la fuente original. Más información en
   [http://creativecommons.org/choose.](http://creativecommons.org/choose) 

 * Open Database License (ODbL): Esta licencia es orientada a bases de datos, la cual permite copiar, distribuir, remezclar, modificar y
   crear a partir de dicha obra, incluso con fines comerciales, siempre y cuando se dé crédito a la fuente creadora y se mantenga la misma
   licencia para cualquier obra derivada. Más información en
   [http://opendatacommons.org/licenses/odbl.](http://opendatacommons.org/licenses/odbl)

En el caso de México contamos con dos licencias: 

 * Creative Commons “Atribución 2.5 México” (CC BY 2.5 MX): Esta licencia permite a otros distribuir, remezclar, retocar, y crear a
   partir de una obra, incluso con fines comerciales, siempre y cuando se de crédito al autor o licenciante del recurso original.
   Se recomienda para la máxima difusión y utilización de los materiales licenciados.
   Ver [http://creativecommons.org/licenses/by/2.5/mx/deed.es.](http://creativecommons.org/licenses/by/2.5/mx/deed.es) 

 * “Licencia de datos abiertos MX”: Actualmente se encuentra bajo revisión la primera versión de lo que será la licencia oficial del
   gobierno mexicano para datos abiertos, [creada por la CEDN].


Todas las entidades de la APF que publiquen datos abiertos deberán hacerlo bajo la “Licencia de datos abiertos MX”.

Referencias:

 [1] Open Licenses. Project Open Data: [http://project-open-data.github.io/open-licenses](http://project-open-data.github.io/open-licenses)
{:#open-licenses}

 [2] Publisher's Guide to Open Data Licensing. Open Data Institute: [http://theodi.org/guides/publishers-guide-open-data-licensing](http://theodi.org/guides/publishers-guide-open-data-licensing)


## 4.2 Publicación del catálogo de datos abiertos



Los datos generados y recolectados por la Administración Pública Federal son un activo valioso para la sociedad mexicana. Es así que
[la “Política Nacional de Datos Abiertos” obliga a las entidades de la APF a catalogar y clasificar sus datos] para hacerlos disponibles
y ubicables a cualquier ciudadano, utilizando estándares que faciliten el descubrimiento de datos del gobierno de manera programática.

Una vez finalizada la etapa de “Preparación de las bases de datos”, las entidades de la APF deberán publicar su “Catálogo de datos
abiertos”, que contenga todas aquellas bases de datos identificadas en su inventario y que pueden ser publicadas con los metadatos
definidos en la sección [“Definición de metadatos”.](/que/#def-metadatos) Como mínimo se deberá publicar todo lo identificado con nivel
de acceso público dentro del inventario.

La creación y publicación del catálogo de datos abiertos se realiza automáticamente dentro del sistema ADELA una vez que el inventario
tenga contenido (ver sección [“Realizar un inventario de todas las bases de datos”](#*) ). Al momento que el Administrador de Datos Abiertos
confirma la operación, el catálogo será publicado en el sistema ADELA, filtrando todas aquellas bases de datos catalogadas con nivel de
acceso “privado”. El catálogo estará disponible en el perfil de la entidad bajo la ruta “/catalogo-de-datos-abiertos.json”, p. ej.
www.datos.gob.mx/[ADELA]/[entidad]/catalogo-de-datos-abiertos.json, y la operación quedará registrada para futuras referencias.



## 4.3 El portal de datos abiertos

El portal [datos.gob.mx](http://datos.gob.mx) es el espacio central donde el ciudadano puede buscar datos abiertos de la Administración
Pública Federal. Con un enfoque orientado al usuario no a la institución, los datos abiertos podrán ser ubicados y utilizados sin
necesidad de conocer la estructura de la APF, ni realizar solicitudes o peticiones de información.

No es necesario registrarse para hacer uso del portal y sus datos. Sólo un número reducido de operaciones requerirán registrar una cuenta,
p. ej. dejar comentarios, calificar las bases de datos, recibir notificaciones y avisos, entre otros.

Los catálogos de datos abiertos de las entidades de la APF serán extraídos automáticamente de ADELA y utilizados para publicar y organizar
dinámicamente el catálogo central de [datos.gob.mx.](http://datos.gob.mx)

Para mayor información acerca del uso del portal de datos abiertos, ver la sección [“Guía de usuario para datos.gob.mx”](/addendum/#guia)
en los Anexos.


## 4.4 Los escuadrones de datos

Los escuadrones de datos son unidades especializadas en la implementación de la PNDA y coordinados por la CEDN. Estos equipos están
conformados por expertos en tecnología de la información, asuntos legales, y seguridad de la información, con la finalidad de capacitar,
guiar y dar asesoría a las entidades de la APF en etapas iniciales de la implementación de la política.








