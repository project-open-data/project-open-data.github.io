---
published: true
layout: default
title: Metadata Resources
permalink: "/metadata-resources/"
filename: "metadata-resources.md"
---

This section provides further background and resources to assist agencies in implementing the [common core metadata schema](/schema/).

In addition to template and sample files we also produce Common Core Metadata schema in JSON schema format. [JSON schema](http://json-schema.org/) describes a JSON data format. It can be used to automatically validate Data.json files and to generate forms for creating JSON.

### JSON Schema Files ###

* 1.0 Final Schema: [Single Entry](/schema/1_0_final/single_entry.json) and [Catalog](/schema/1_0_final/catalog.json)


### Template Data Files

<table width="60%">
<b><tr><td><ul>
<li><a href="/examples/catalog-template.json">JSON</a></li>
<li><a href="/examples/catalog-template.csv">CSV</a></li>
</ul></td>
<td><ul>
<li><a href="/examples/catalog-template-extended.json">JSON (Extended)</a></li>
<li><a href="/examples/catalog-template-extended.csv">CSV (Extended)</a></li>
</ul></td></tr></b>
</table>

### Sample Data Files

<table width="60%">
<b><tr><td><ul>
<li><a href="/examples/catalog-sample.json">JSON</a></li>
<li><a href="/examples/catalog-sample.csv">CSV</a></li>
</ul></td>
<td><ul>
<li><a href="/examples/catalog-sample-extended.json">JSON (Extended)</a></li>
<li><a href="/examples/catalog-sample-extended.csv">CSV (Extended)</a></li>
</ul></td></tr></b>
</table>


### Use Cases  
  
A) Starting from a spreadsheet

Some agencies may initially build or maintain data catalogs through large spreadsheets.  In order to then generate a data.json file from this, simply import the spreadsheet (in the form of a CSV file) into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/), translate the metadata as needed, and then generate an appropriately formatted JSON file.

B) Translating a data file from another schema

If your agency has a JSON catalog with a different metadata schema and need to convert it to the prescribed schema needed for the data.json file, one can import the file into [Catalog Generator](http://project-open-data.github.com/catalog-generator/), adjust the metadata as needed and export the results again as the appropriately formatted JSON file.

C) Utilizing CKAN

[CKAN](http://www.CKAN.org) is a popular, open-source data catalog that can be installed independently or run as a service.  Even if an agency hasn't begun a data catalog, adopting CKAN can provide a robust and feature-rich solution with which to begin maintaining an internal or external catalog.  In addition to providing an effective means of organizing the agency's data catalog, CKAN provides several opportunities for generating the needed data.json file.  CKAN provides a convenient CSV export that can then be imported into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/) for conversion into an appropriately formatted JSON file.  Alternatively, CKAN provides a JSON API of the data catalog which can then be altered to provide an automatic update for the appropriately formatted JSON file.  

D) Using Socrata

[Socrata](http://www.socrata.com/open-data-portal/) is a popular, open data catalog that is run as a service.  Agencies that have not adapted a data catalog yet, can use Socrata without having to install or setup any servers or software.  In addition to providing rich visualizations and data management features, Socrata **natively supports data.json** so any datasets managed through Socrata will be automatically exposed correctly.  Socrata also supports all the extended metadata fields through it's extensible metadata features.

E) Manual translating a data file from another system

Agencies may also manage their data catalogs through various database solutions such as Access, an asset management system, document management system, geoportal, or assorted proprietary systems.  Regardless of which system an agency employs, it should include a fundamental export option which allows the catalog to be exported as a CSV file, which can then be imported into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/) for conversation to an appropriately formatted JSON file.  Depending on the solutions' varied further functionality, some of them may also provide APIs which can then be configured to maintain the data.json file.  If not, they may instead support XML and JSON exports, which can then be converted to the proper format.

F) Convert from CSV to JSON.  

In order to generate appropriately formatted JSON, simply import an appropriately formatted CSV into the [Catalog Generator](http://project-open-data.github.com/catalog-generator/), ensure that the metadata fields line up, and re-export the file.



"Common Core" Required Fields Equivalents
-----------------------------

{: .table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1*  | *Schema.org*
-------             | -------                 | -------           | ------- | -------
Title               | *Title*                 | *title*           | [dcterms:title](http://www.w3.org/TR/vocab-dcat/#Property:distribution_title)    | [schema:name](http://schema.org/name)
Description         | *Description*           | *notes*                | [dcterms:description](http://www.w3.org/TR/vocab-dcat/#Property:distribution_description) | [schema:description](http://schema.org/description)
Tags                | *Keywords*              | *tags*                | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#Property:dataset_keyword)    | [schema:keywords](http://schema.org/keywords)
Last Update         | *Date updated*          | *revision_timestamp*                | [dcterms:modified](http://www.w3.org/TR/vocab-dcat/#Property:distribution_update_date) | [schema:dateModified](http://schema.org/dateModified)
Publisher           | *Agency Name*           | *owner_org*                | [dcterms:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher) | [schema:publisher](http://schema.org/publisher)
Contact Name        | *Contact Name*          | *maintainer*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint) | *n/a*
Contact Email       | *Contact Email Address* | *maintainer_email*                | [foaf:mbox](http://xmlns.com/foaf/spec/#term_mbox) | *n/a*
Unique Identifier   | *User Generated ID*     | *id*                | [dcterms:identifier](http://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier) | *n/a*
Public Access Level | *n/a*                   | *n/a*             | *n/a* | *n/a*

"Common Core" Required if Applicable Fields
-------------------------------------------

{: .table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | -------
Bureau Code			| *n/a*                   | *n/a*             | *n/a* | *n/a*
Program Code 		| *n/a*                   | *n/a*             | *n/a* | *n/a*
Access Level Comment| *n/a*                   | *n/a*             | *n/a* | *n/a*
Data Dictionary     | *Data Dictionary*       | *data_dict*                | *n/a* | *n/a*
Download URL        | *Access Point*          | *res_url*                | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | [schema:contentUrl](http://schema.org/contentUrl)
Endpoint            | *Access Point*          | *res_url*                | *n/a* | *n/a*
Format              | *Media Format*          | *res_format*                | [dcterms:format](http://www.w3.org/TR/vocab-dcat/#Property:distribution_format)      | [schema:encodingFormat](http://schema.org/encodingFormat)
License             | *Dataset license agreement URL* | *license_id*        | [dcterms:license](http://www.w3.org/TR/vocab-dcat/#Property:catalog_license) | *n/a*
Spatial             | *Geographic scope*      | *spatial*                | [dcterms:spatial](http://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial) | [schema:spatial](http://schema.org/spatial)
Temporal            | *Period of Coverage*    | *n/a*                | [dcterms:temporal](http://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal) | [schema:temporal](http://schema.org/temporal)

Expanded Fields
---------------

{: .table .table-striped}
Field               | *Data.gov*   | *CKAN* | *RDFa Lite 1.1* | *Schema.org*
-------             | -------                 | -------           | -------  | -------
Release Date        | *Date Released*         | *n/a*                | [dcterms:issued](http://www.w3.org/TR/vocab-dcat/#Property:distribution_release_date) | [schema:datePublished](http://schema.org/datePublished)
Frequency           | *Frequency*             | *n/a*                | [dcterms:accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency)    | *n/a*
Language            | *n/a*                   | *n/a*                | [dcterms:language](http://www.w3.org/TR/vocab-dcat/#Property:catalog_language)     | [schema:inLanguage](http://schema.org/inLanguage)
Data Quality        | *Data Quality*          | *n/a*                | *n/a*  | *n/a*
Category            | *Subject Area*          | *groups*                | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#Property:dataset_theme)   | [schema:about](http://schema.org/about)
Related Documents   | *Reference for Technical Documentation* | *n/a*                | [dcterms:references](http://dublincore.org/documents/dcmi-terms/#terms-references) | *n/a*
Homepage URL        | *n/a*                  | *url*                | [dcat:landingPage](http://www.w3.org/ns/dcat#Property:dataset_landingpage)  | [schema:url](http://schema.org/url)
System of Records   | *n/a*                  | *n/a*                | *n/a*  | *n/a*

Mapping DCAT to Other Metadata Specifications
---------------------------------------------

Below is a set of mappings that will help users of other common metadata schemas map their content to the defined DCAT fields.
The mapping is from the DCAT field to the XPATH(s) in the common metadata schema where the corresponding information may be found.

###FGDC CSDGM

Established by Office of Management and Budget Circular A-16, the Federal Geographic Data Committee ([FGDC](ttp://www.fgdc.gov)) promotes the coordinated development, use, sharing, and dissemination of geographic data. 
The [Content Standard for Digital Geospatial Metadata](http://www.fgdc.gov/metadata/csdgm) aims to provide a common set of terminology and definitions for the documentation of digital geospatial data.

{: .table .table-striped}
| DCAT Field         | *FGDC CSDGM*|
|-------             | ------- |
|Title               | /metadata/idinfo/citation/citeinfo/title |
|Description         | /metadata/idinfo/descript/abstract |
|Tags                | /metadata/idinfo/keywords/theme/themekey <br/> /metadata/idinfo/keywords/place/placekey <br/> /metadata/idinfo/keywords/temporal/tempkey |
|Last Update         | /metadata/idinfo/citation/citeinfo/pubdate |
|Publisher           | /metadata/idinfo/citation/citeinfo/pubinfo/publish <br/> /metadata/distinfo/distrib/cntinfo/cntperp/cntper <br/> /metadata/distinfo/distrib/cntinfo/cntorgp/cntorg |
|Contact Name        | /metadata/idinfo/ptcontac/cntinfo/cntorgp/cntper |
|Contact Email       | /metadata/idinfo/ptcontac/cntinfo/cntemail |
|Unique Identifier   | CSDGM does not include a unique identifier in the metadata itself. Common practice is to use a URL to the metadata document as unique identifier. |
|Public Access Level | /metadata/idinfo/accconst <br/> /metadata/idinfo/useconst <br/> /metadata/distinfo/distliab |
|Data Dictionary     | /metadata/idinfo/keywords/theme/themekt <br/> /metadata/eainfo/overview/eadetcit |
|Download URL        | /metadata/distinfo/stdorder/digform/digtopt/onlinopt/computer/networka/networkr |
|Endpoint            | /metadata/idinfo/citation/citeinfo/onlink <br/> /metadata/distinfo/stdorder/digform/digtopt/onlinopt/computer/networka/networkr |
|Format              | /metadata/distinfo/storder/digform/digtinfo/fname |
|License             | /metadata/distinfo/distliab |
|Spatial             | /metadata/idinfo/spdom/bounding |
|Temporal            | /metadata/idinfo/timeperd/timeinfo (might be one date or range. If range, separate start/end with comma) |


###ISO 19115:2003

[ISO 19115:2003](http://www.iso.org/iso/catalogue_detail.htm?csnumber=26020) defines the schema required for describing geographic information and services. It provides information about the identification, the extent, the quality, the spatial and temporal schema, spatial reference, and distribution of digital geographic data.

{: .table .table-striped}
| DCAT Field         | *ISO 19115:2003* |
|-------             | ------- |
|Title               | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString |
|Description         | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString |
|Tags                | //gmd:topicCategory/gmd:MD_TopicCategoryCode <br/> //gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gco:CharacterString |
|Last Update         | /gmd:MD_Metadata/gmd:dateStamp/gco:Date <br/> /gmd:MD_Metadata/gmd:dateStamp/gco:DateTime |
|Publisher           | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString[../../gmd:role/gmd:CI_RoleCode/@codeListValue='publisher'] <br/> //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString[../../gmd:role/gmd:CI_RoleCode/@codeListValue='publisher'] <br/> //gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorContact/gmd:CI_ResponsibleParty/gmd:organisationName |
|Contact Name        | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString <br/> //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString |
|Contact Email       | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString |
|Unique Identifier   | //gmd:fileIdentifier/gco:CharacterString |
|Public Access Level | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString |
|Data Dictionary     | //gmd:contentInfo/gmd:MD_FeatureCatalogueDescription/gmd:featureCatalogueCitation/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage |
|Download URL        | //gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL[../../gmd:function/gmd:CI_OnLineFunctionCode/@codeListValue='download'] |
|Format              | //gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:name/gco:CharacterString |
|License             |  |
|Spatial             | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox |
|Temporal            | //gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:begin/gml:TimeInstant/gml:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:begin/gml32:TimeInstant/gml32:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:beginPosition <br/><br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:end/gml:TimeInstant/gml:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:end/gml32:TimeInstant/gml32:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:endPosition |


### ISO 19119:2005

[ISO 19119:2005](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=39890) identifies and defines the architecture patterns for service interfaces used for geographic information, defines its relationship to the Open Systems Environment model, presents a geographic services taxonomy and a list of example geographic services placed in the services taxonomy. It also prescribes how to create a platform-neutral service specification, how to derive conformant platform-specific service specifications, and provides guidelines for the selection and specification of geographic services from both platform-neutral and platform-specific perspectives.

{: .table .table-striped}
| DCAT Field         | *ISO 19119:2005* |
|-------             | ------- |
|Title               | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString |
|Description         | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:abstract/gco:CharacterString |
|Tags                | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword/gco:CharacterString |
|Last Update         | /gmd:MD_Metadata/gmd:dateStamp/gco:Date <br/> /gmd:MD_Metadata/gmd:dateStamp/gco:DateTime |
|Publisher           | /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString |
|Contact Name        | /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString |
|Contact Email       | /gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString |
|Unique Identifier   | /gmd:MD_Metadata/gmd:fileIdentifier/gco:CharacterString |
|Public Access Level | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString |
|Data Dictionary     |  |
|Endpoint            | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:containsOperations/srv:SV_OperationMetadata/srv:connectPoint/gmd:CI_OnlineResource/gmd:linkage/gmd:URL |
|Format              | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:serviceType/gco:LocalName |
|License             |  |
|Spatial             | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox |
|Temporal            | /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:begin/gml:TimeInstant/gml:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:begin/gml32:TimeInstant/gml32:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:beginPosition <br/><br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:end/gml:TimeInstant/gml:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:end/gml32:TimeInstant/gml32:timePosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition <br/> /gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml32:TimePeriod/gml32:endPosition" |


### Namespaces

The above XPATHs assume the following namespaces:

{: .table .table-striped}
| Prefix | *URI*       |
|------- | ------- |
| gmd      | http://www.isotc211.org/2005/gmd |
| gco      | http://www.isotc211.org/2005/gco |
| gml      | http://www.opengis.net/gml |
| gml32    | http://www.opengis.net/gml/3.2 |
| srv      | http://www.isotc211.org/2005/srv |





