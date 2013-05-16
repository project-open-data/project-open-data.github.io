---
layout: default
title: Metadata Resources
permalink: /metadata-resources/
filename: metadata-resources.md
---

This section provides further background and resources to assist agencies in implementing the [common core metadata schema](schema/).  

### Template Data Files

<table width="60%">
<b><tr><td><ul>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template.json">JSON</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template.html">RDFa Lite</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template.csv">CSV</a></li>
</ul></td>
<td><ul>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template-extended.json">JSON (Extended)</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template-extended.html">RDFa Lite (Extended)</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-template-extended.csv">CSV (Extended)</a></li>
</ul></td></tr></b>
</table>

### Sample Data Files

<table width="60%">
<b><tr><td><ul>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample.json">JSON</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample.html">RDFa Lite</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample.csv">CSV</a></li>
</ul></td>
<td><ul>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample-extended.json">JSON (Extended)</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample-extended.html">RDFa Lite (Extended)</a></li>
<li><a href="https://raw.github.com/project-open-data/project-open-data.github.io/gh-pages/examples/catalog-sample-extended.csv">CSV (Extended)</a></li>
</ul></td></tr></b>
</table>


### Use Cases  
  
A) Starting from a spreadsheet

Some agencies may initially build or maintain data catalogs through large spreadsheets.  In order to then generate a data.json file from this, simply import the spreadsheet (in the form of a CSV file) into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/), translate the metadata as needed, and then generate an appropriately formatted JSON file.

B) Translating a data file from another schema

If your agency has a JSON catalog with a different metadata schema and need to convert it to the prescribed schema needed for the data.json file, one can import the file into [Catalog Generator](http://project-open-data.github.com/catalog-generator/), adjust the metadata as needed and export the results again as the appropriately formatted JSON file.

C) Utilizing CKAN 

[CKAN](http://www.CKAN.org) is a popular, open-source data catalog.  Even if an agency hasn't begun a data catalog, adopting CKAN can provide a robust and feature-rich solution with which to begin maintaining an internal or external catalog.  In addition to providing an effective means of organizing the agency's data catalog, CKAN provides several opportunities for generating the needed data.json file.  CKAN provides a convenient CSV export that can then be imported into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/) for conversion into an appropriately formatted JSON file.  Alternatively, CKAN provides a JSON API of the data catalog which can then be altered to provide an automatic update for the appropriately formatted JSON file.  

D) Manual translating a data file from another system

Agencies may also manage their data catalogs through various database solutions such as Access, an asset management sytem, document management system, geoportal, or assorted proprietary systems.  Regardless of which system an agency employs, it should include a fundamental export option which allows the catalog to be exported as a CSV file, which can then be imported into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/) for conversation to an appropriately formatted JSON file.  Depending on the solutions' varied further functionality, some of them may also provide APIs which can then be configured to maintain the data.json file.  If not, they may instead support XML and JSON exports, which can then be converted to the proper format.

E) Convert from CSV or JSON to XML or RDFa lite.  

In order to generate appropriately formatted XML or RDFa Lite files, simply import an appropriately formatted CSV or JSON file into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/), ensure that the metadata fields line up, and re-export the file.



"Common Core" Required Fields Equivalents
-----------------------------

{.table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1*  | *Schema.org*
-------             | -------                 | -------           | ------- | ------- 
Title               | *Title*                 | *title*           | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:distribution_title)    | *sdo:name*
Description         | *Description*           | *notes*                | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:distribution_description) | *sdo:description*
Tags                | *Keywords*              | *tags*                | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#Property:dataset_keyword)    | *sdo:keywords*
Last Update         | *Date updated*          | *revision_timestamp*                | [dct:modified](http://www.w3.org/TR/vocab-dcat/#Property:distribution_update_date) | *sdo:dateModified* 
Publisher           | *Agency Name*           | *owner_org*                | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher) | *sdo:publisher*
Contact Name        | *Contact Name*          | *maintainer*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/) | *sdo:Person*
Contact Email       | *Contact Email Address* | *maintainer_email*                | [foaf:mbox](http://xmlns.com/foaf/spec/#term_mbox) | *n/a*
Unique Identifier   | *User Generated ID*     | *id*                | [dct:identifier](http://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier) | *n/a*
Public Access Level | *n/a*                   | *n/a*             | *n/a* | *n/a*

"Common Core" Required if Applicable Fields
-------------------------------------------

{.table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | ------- 
Data Dictionary     | *Data Dictionary*       | *data_dict*                | *ex:dataDictionary* | *n/a*
Download URL        | *Access Point*          | *res_url*                | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | *sdo:contentUrl*
Endpoint            | *Access Point*          | *res_url*                | *ex:webService* \*  | *n/a*
Format              | *Media Format*          | *res_format*                | [dct:format](http://www.w3.org/TR/vocab-dcat/#Property:distribution_format)      | *sdo:encodingFormat*
License             | *Dataset license agreement URL* | *license_id*        | [dct:license](http://www.w3.org/TR/vocab-dcat/#Property:catalog_license) | *n/a*
Spatial             | *Geographic scope*      | *spatial*                | [dct:spatial](http://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial) | *ds:spatialCoverage*
Temporal            | *Period of Coverage*    | *n/a*                | [dct:temporal](http://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal) | *ds:temporalCoverage*

Expanded Fields
---------------

{.table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | ------- 
Release Date        | *Date Released*         | *n/a*                | [dct:issued](http://www.w3.org/TR/vocab-dcat/#Property:distribution_release_date) | *sdo:datePublished*
Frequency           | *Frequency*             | *n/a*                | [dct:accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency)    | *n/a*
Language            | *n/a*                   | *n/a*                | [dct:language](http://www.w3.org/TR/vocab-dcat/#Property:catalog_language)     | *sdo:inLanguage*
Granularity         | *Geographic Granularity* | *n/a*                | *ex:granularity* | *n/a*
Data Quality        | *Data Quality*          | *n/a*                | *ex:dataQuality*  | *n/a*
Category            | *Subject Area*          | *groups*                | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#Property:dataset_theme)   | *sdo:about*
Related Documents   | *Reference for Technical Documentation* | *n/a*                | [dct:references](http://dublincore.org/documents/dcmi-terms/#terms-references) | *n/a*
Size                | *File Size*             | *n/a*                | [dcat:byteSize](http://www.w3.org/TR/vocab-dcat/#Property:_size) | *sdo:contentSize*
Homepage URL        | *n/a*                  | *url*                | [dcat:landingPage](http://www.w3.org/ns/dcat#Property:dataset_landingpage)  | *sdo:url*
RSS Feed            | *Access Point*          | *n/a*                | *ex:feed* \*  | *n/a*
System of Records   | *n/a*                  | *n/a*                | *n/a*  | *n/a*

\*When combined with _accessURL_, _format_, and _byteSize_.
