---
published: true
permalink: /addendum/
layout: navegable
filename: addendum.md
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

# Anexos

## Guía de usuario para datos.gob.mx
{:#guia}

El portal [datos.gob.mx](http://datos.gob.mx) está desarrollado bajo la plataforma de código abierto [CKAN.](http://ckan.org/) Una
herramienta para publicar portales de datos abiertos que permite administrar y publicar colecciones de datos. CKAN es utilizado por
gobiernos locales y nacionales, institutos de investigación y otras organizaciones que recopilan datos, a lo largo de todo el mundo.

Para mayor información acerca del uso de la plataforma, favor de visitar la guía de CKAN traducida al español en la dirección
[https://github.com/okfn/ckan/wiki/Guía-de-usuario.](https://github.com/okfn/ckan/wiki/Guía-de-usuario)

## Herramientas
{:#herramientas}

**ADELA (Administrador de la apertura)**

ADELA es una aplicación Web de código abierto desarrollada por la CEDN para administrar el proceso de liberación de datos abiertos,
con los siguientes objetivos:

 * Para las entidades:
 
   * Guiar paso a paso a los administradores de datos abiertos en la implementación de la PNDA.
   
   * Facilitar y estandarizar el registro del plan de acción.
   
   * Generar y publicar automáticamente en un clic los catálogos de datos abiertos.
   
 * Para la ciudadanía:
 
   * Hacer público el plan de acción de cada entidad de la APF.
   
   * Transparentar el avance de las entidades.
   
   * Monitorear el estado y calidad de los datos abiertos por entidad.
   
 * Para la CEDN:
 
   * Centralizar y almacenar los inventarios de datos.
   
   * Identificar áreas de oportunidad y de atención en el proceso.
   
   * Alimentar de manera automática datos.gob.mx.
   

La primera versión estará disponible en Febrero de 2014.


**Conversión de formato de ESRI shapefiles a KML**

Cuando la herramienta cartográfica no lo permita, se puede recurrir a las siguientes herramientas para realizar la conversión del formato
SHP a KML:

 * La utilería [ogr2ogr](http://www.gdal.org/ogr2ogr.html) de la librería [GDAL](http://www.gdal.org/), permite la conversión entre
   diferentes formatos. Ver la siguiente referencia para mayor información: [http://gis.stackexchange.com/questions/1498/how-can-i-convert-shapefiles-shp-to-kml](http://gis.stackexchange.com/questions/1498/how-can-i-convert-shapefiles-shp-to-kml)

 * Shp2KML es una herramienta Web para realizar conversiones entre SHP y KML. Ver:
   [http://wiki.openstreetmap.org/wiki/Shp2kml](http://wiki.openstreetmap.org/wiki/Shp2kml) 


**Catálogo ejemplo de datos abiertos**

En la dirección [https://gist.github.com/wilhelmbot/7350161](https://gist.github.com/wilhelmbot/7350161) se puede descargar un catálogo de ejemplo con dos bases de datos ficticias.


## 5.3 Glosario

**API**: Interfaz de programación de aplicaciones (IPA) o API (del inglés Application Programming Interface) es un canal estándar de
comunicación entre diferentes componentes o sistemas de software. Referencia:
[http://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones.](http://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones)

**CKAN**: Una herramienta para publicar portales de datos abiertos que permite administrar y publicar colecciones de datos. CKAN es
utilizado por gobiernos locales y nacionales, institutos de investigación y otras organizaciones que recopilan datos, a lo largo de
todo el mundo. El portal datos.gob.mx está desarrollado bajo esta plataforma de código abierto.

**Creative Commons**: Licencia que define el espacio entre la protección absoluta de los derechos de autor y el dominio público. Las
licencias te ayudan a conservar tus derechos autorales invitando a usar tu obra bajo el esquema “Algunos derechos reservados”.
Referencia: [http://www.creativecommons.mx/que/.](http://www.creativecommons.mx/que/)

**CSV**: Formato sencillo y abierto para representar datos en forma de tabla, en las que las columnas se separan por comas. En los casos
en los que un valor contenga coma (como el separador decimal en algunos países), se recomienda encerrar entre comillas los valores o
utilizar otro separador como “punto y coma” o “tabulador”. Referencia:
[http://es.wikipedia.org/wiki/Comma-separated_values.](http://es.wikipedia.org/wiki/Comma-separated_values)

**DCAT**: Vocabulario diseñado por la W3C para facilitar la interoperabilidad entre catálogos de datos publicados en la Web. Al usar DCAT
para describir conjunto de datos en catálogos, los publicantes incrementan la facilidad de descubrimiento y manipulación de estos
catálogos. [http://www.w3.org/TR/vocab-dcat/.](http://www.w3.org/TR/vocab-dcat/)

**GeoJSON**: Formato nuevo basado en JSON para codificar una variedad de estructuras de datos geográficos. Bajo este formato se pueden
representar objetos geométricos, una cualidad o una colección de éstas. Los tipos geométricos soportados son puntos, líneas, polígonos,
multipunto, entre otros. Referencia: [http://geojson.org.](http://geojson.org)

**ISO 8601**: La norma ISO 8601 especifica la notación estándar utilizada para representar instantes, intervalos e intervalos recurrentes
de tiempo evitando ambigüedades. Se sigue el criterio de especificar en orden primeramente los períodos de tiempo más largos y
posteriormente los más cortos. Por ejemplo, para especificar la fecha 30 de mayo de 2008, escribiremos en esta notación: 2008-05-30.
[http://es.wikipedia.org/wiki/ISO_8601](http://es.wikipedia.org/wiki/ISO_8601)

**ISO 8859-1 (latin-1)**: Norma ISO que define la codificación de caracteres, cubriendo los caracteres especiales del español
( [http://es.wikipedia.org/wiki/ISO_8859-1](http://es.wikipedia.org/wiki/ISO_8859-1) ). Esta guía recomienda el estándar
[UTF-8](http://es.wikipedia.org/wiki/UTF-8) ya que, además de incluirlo los caracteres de esta norma
( [http://es.wikipedia.org/wiki/ISO_8859-1](http://es.wikipedia.org/wiki/ISO_8859-1) ),
extiende a un mayor rango y se ha convertido en el estándar de mayor utilización en la Web
( [http://googleblog.blogspot.ca/2012/02/unicode-over-60-percent-of-web.html](http://googleblog.blogspot.ca/2012/02/unicode-over-60-percent-of-web.html) ).

**JSON**: Formato ligero (y legible) para el intercambio de datos. Dada su simplicidad de estructura, se ha generalizado su uso en la Web.
Referencia: [http://es.wikipedia.org/wiki/JSON.](http://es.wikipedia.org/wiki/JSON)

**KML**: Lenguaje de marcado basado en XML para representar datos geográficos en tres dimensiones, característico de la herramienta Google
Earth. Un archivo KML describe elementos, como lugares, imágenes, o polígonos, que además contienen título, descripción, coordenadas
geográficas y alguna otra información. Desde 2008 es un estándar en la industria y es aprobado por la OGC.
Referencias: [http://es.wikipedia.org/wiki/Keyhole_Markup_Language](http://es.wikipedia.org/wiki/Keyhole_Markup_Language),
[https://developers.google.com/kml/documentation/kml_tut](https://developers.google.com/kml/documentation/kml_tut),
[http://www.opengeospatial.org/standards/kml.](http://www.opengeospatial.org/standards/kml)

**KMZ**: Los KML a menudo suelen distribuirse comprimidos como archivos KMZ.

**Lenguaje de marcado**: Un lenguaje de marcado o lenguaje de marcas es una forma de codificar un documento que, junto con el texto,
incorpora etiquetas o marcas que contienen información adicional acerca de la estructura del texto o su presentación. El lenguaje de
marcas más extendido es el HTML ("HyperText Markup Language", Lenguaje de marcado de hipertexto), fundamento del World Wide Web
(entramado de comunicación de alcance mundial). [http://es.wikipedia.org/wiki/Lenguaje_de_marcado.](http://es.wikipedia.org/wiki/Lenguaje_de_marcado)

**Metadatos**: (del griego μετα, meta, 'después de, más allá de' y latín datum, 'lo que se da', «dato» ), literalmente «sobre datos»,
son datos que describen otros datos. En general, un grupo de metadatos se refiere a un grupo de datos, llamado recurso. El concepto de
metadatos es análogo al uso de índices para localizar objetos en vez de datos. Por ejemplo, en una biblioteca se usan fichas que
especifican autores, títulos, casas editoriales y lugares para buscar libros. Así, los metadatos ayudan a ubicar datos.
[http://es.wikipedia.org/wiki/Metadata.](http://es.wikipedia.org/wiki/Metadata)

**ODbL (Open Database License)**: Licencia orientada a bases de datos, la cual permite copiar, distribuir, remezclar, modificar y crear
a partir de dicha obra, incluso con fines comerciales, siempre y cuando se dé crédito a la fuente creadora y se mantenga la misma licencia
para cualquier obra derivada. [http://opendatacommons.org/licenses/odbl.](http://opendatacommons.org/licenses/odbl)

**ODI**: El Open Data Institute es una compañía independiente, sin fines de lucro, fundada por Sir Tim Berners-Lee y el Profesor Nigel
Shadbolt con el objetivo de catalizar la cultura de datos abiertos para crear valor económico y social.
[http://theodi.org/about.](http://theodi.org/about)

**Office Open XML**: También llamado OOXML, es un formato de archivo abierto y estándar, cuyas extensiones más comunes son
.docx, .xlsx, y .pptx. Se le utiliza para representar y almacenar hojas de cálculo, gráficas, presentaciones y documentos de texto.
Un archivo Office Open XML contiene principalmente datos basados en el lenguaje de marcado XML, comprimidos en un contenedor .zip
específico. [http://es.wikipedia.org/wiki/Office_Open_XML.](http://es.wikipedia.org/wiki/Office_Open_XML)

**OGC**: El Open Geospatial Consortium es un consorcio internacional, con más de 400 compañías, agencias de gobierno y universidades,
participando en los procesos para desarrollar estándares públicos, particularmente enfocados en la información geoespacial.
[http://www.opengeospatial.org/ogc.](http://www.opengeospatial.org/ogc)

**PDF**: El formato de documento portátil, inventado por Adobe Systems, es un estándar abierto para el intercambio de documentos
electrónicos que mantiene la Organización Internacional de Normalización (ISO).
[http://www.adobe.com/es/products/acrobat/adobepdf.html.](http://www.adobe.com/es/products/acrobat/adobepdf.html)

**RDF**: Formato de la W3C diseñado para generar un modelo de datos que describa la información de un recurso web. Este mecanismo es un
componente clave de la Web Semántica.
[http://es.wikipedia.org/wiki/Resource_Description_Framework.](http://es.wikipedia.org/wiki/Resource_Description_Framework)

**REST**: Conjunto de principios de arquitectura de software para sistemas distribuidos como la World Wide Web. En la actualidad se
utiliza el término para describir cualquier interfaz web simple sin las abstracciones adicionales de los protocolos basados en patrones
de intercambio de mensajes, como el protocolo de servicios web “SOAP”.
[http://es.wikipedia.org/wiki/Representational_State_Transfer.](http://es.wikipedia.org/wiki/Representational_State_Transfer)

**Servicio web**: Un servicio web (en inglés, Web Service o Web services) es una tecnología que utiliza un conjunto de protocolos y
estándares que sirven para intercambiar datos entre aplicaciones.
[http://es.wikipedia.org/wiki/Servicio_web.](http://es.wikipedia.org/wiki/Servicio_web)

**SHP**: Formato de datos geoespaciales propietario de la empresa ESRI. Dada su popularidad, su especificación técnica es pública y
hasta cierto punto abierta. Un shapefile (como se denominan a los archivos de este formato) es un formato vectorial que guarda la
localización de elementos geográficos y los atributos asociados a ellos. El formato es multiarchivo, es decir, se genera en conjunto
con archivos .shx y .dbf, los cuales definen (respectivamente) el índice de las entidades geométricas y la base de datos de los atributos
de los objetos. [http://es.wikipedia.org/wiki/Shapefile.](http://es.wikipedia.org/wiki/Shapefile)

**SOAP**: SOAP (siglas de Simple Object Access Protocol) es un protocolo estándar que define cómo dos objetos en diferentes procesos
pueden comunicarse por medio de intercambio de datos XML. Es uno de los protocolos utilizados en los servicios Web.
[http://es.wikipedia.org/wiki/Simple_Object_Access_Protocol.](http://es.wikipedia.org/wiki/Simple_Object_Access_Protocol)

**URL**: Un localizador de recursos uniforme, más comúnmente denominado URL (sigla en inglés de uniform resource locator), es una
secuencia de caracteres, de acuerdo a un formato modélico y estándar, que se usa para nombrar recursos en Internet para su localización
o identificación, como por ejemplo documentos textuales, imágenes, vídeos, presentaciones digitales, etc.
[http://es.wikipedia.org/wiki/Localizador_uniforme_de_recursos.](http://es.wikipedia.org/wiki/Localizador_uniforme_de_recursos)

**UTF-8**: UTF-8 (8-bit Unicode Transformation Format) es un formato de codificación de caracteres Unicode e ISO 10646
( [http://es.wikipedia.org/wiki/UTF-8](http://es.wikipedia.org/wiki/UTF-8) ). Este formato es el más utilizado en la Web
( [http://w3techs.com/technologies/overview/character_encoding/all](http://w3techs.com/technologies/overview/character_encoding/all) ).

**W3C**: El World Wide Web Consortium, abreviado W3C, es un consorcio internacional que produce recomendaciones para la World Wide Web.
Dirigido por Tim Berners-Lee, conocido como el padre de la Web. Referencia:
[http://es.wikipedia.org/wiki/World_Wide_Web_Consortium.](http://es.wikipedia.org/wiki/World_Wide_Web_Consortium)

**XML**: Lenguaje de marcado desarrollado por la W3C para almacenar datos en forma legible y estructurada, que propone un estándar para
el intercambio de información entre diferentes plataformas. Referencia: [http://es.wikipedia.org/wiki/XML.](http://es.wikipedia.org/wiki/XML)

























