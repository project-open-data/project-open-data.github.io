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
Title               | *Title*                 | *title*           | [dcterms:title](http://www.w3.org/TR/vocab-dcat/#property--title-1)    | *sdo:name*
Description         | *Description*           | *notes*                | [dcterms:description](http://www.w3.org/TR/vocab-dcat/#property--description-1) | *sdo:description*
Tags                | *Keywords*              | *tags*                | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#property--keyword-tag)    | *sdo:keywords*
Last Update         | *Date updated*          | *revision_timestamp*                | [dcterms:modified](http://www.w3.org/TR/vocab-dcat/#property--update-modification-date-1) | *sdo:dateModified* 
Publisher           | *Agency Name*           | *owner_org*                | [dcat:publisher](http://www.w3.org/TR/vocab-dcat/#property--publisher-1) | *sdo:publisher*
Contact Name        | *Contact Name*          | *maintainer*                | [foaf:Person](http://www.w3.org/TR/vocab-dcat/#class--organization-person) | *sdo:Person*
Contact Email       | *Contact Email Address* | *maintainer_email*                | [foaf:mbox](http://xmlns.com/foaf/spec/#term_mbox) | *n/a*
Unique Identifier   | *User Generated ID*     | *id*                | [dcterms:identifier](http://www.w3.org/TR/vocab-dcat/#property--identifier) | *n/a*
Public Access Level | *n/a*                   | *n/a*             | *n/a* | *n/a*

"Common Core" Required if Applicable Fields
-------------------------------------------

{.table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | ------- 
Data Dictionary     | *Data Dictionary*       | *data_dict*                | [dcat:dataDictionary](http://www.w3.org/TR/vocab-dcat/#property--data-dictionary) | *n/a*
Download URL        | *Access Point*          | *res_url*                | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#property--access-download) | *sdo:contentUrl*
Endpoint            | *Access Point*          | *res_url*                | [dcat:webService](http://www.w3.org/TR/vocab-dcat/#class--webservice) \*  | *n/a*
Format              | *Media Format*          | *res_format*                | [dcterms:format](http://www.w3.org/TR/vocab-dcat/#property--format)      | *sdo:encodingFormat*
License             | *Dataset license agreement URL* | *license_id*        | [dcterms:license](http://www.w3.org/TR/vocab-dcat/#property--license-1) | *n/a*
Spatial             | *Geographic scope*      | *spatial*                | [dcterms:spatial](http://www.w3.org/TR/vocab-dcat/#property--spatial-geographical-coverage) | *ds:spatialCoverage*
Temporal            | *Period of Coverage*    | *n/a*                | [dcterms:temporal](http://www.w3.org/TR/vocab-dcat/#property--temporal-coverage) | *ds:temporalCoverage*

Expanded Fields
---------------

{.table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | ------- 
Release Date        | *Date Released*         | *n/a*                | [dcterms:issued](http://www.w3.org/TR/vocab-dcat/#property--release-date) | *sdo:datePublished*
Frequency           | *Frequency*             | *n/a*                | [dcterms:accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#property--frequency)    | *n/a*
Language            | *n/a*                   | *n/a*                | [dcat:language](http://www.w3.org/TR/vocab-dcat/#property--language-1)     | *sdo:inLanguage*
Granularity         | *Geographic Granularity* | *n/a*                | [dcat:granularity](http://www.w3.org/TR/vocab-dcat/#property--granularity) | *n/a*
Data Quality        | *Data Quality*          | *n/a*                | [xsd:boolean](http://www.w3.org/TR/xmlschema-2/#boolean)  | *n/a*
Category            | *Subject Area*          | *groups*                | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#property--theme-category)   | *sdo:about*
Related Documents   | *Reference for Technical Documentation* | *n/a*                | [dcterms:references](http://www.w3.org/TR/vocab-dcat/#property--related-documents) | *n/a*
Size                | *File Size*             | *n/a*                | [dcat:size](http://www.w3.org/TR/vocab-dcat/#property--size) | *sdo:contentSize*
Homepage URL        | *n/a*                  | *url*                | [dcat:landingPage](http://www.w3.org/ns/dcat#landingPage)  | *sdo:url*
RSS Feed            | *Access Point*          | *n/a*                | [dcat:feed](http://www.w3.org/TR/vocab-dcat/#Class:_Feed) \*  | *n/a*
System of Records   | *n/a*                  | *n/a*                | *n/a*  | *n/a*

\*When combined with _accessURL_, _format_, and _size_.
