---
published: true
layout: default
title: Metadata Resources
permalink: "/v1.1/metadata-resources/"
filename: "metadata-resources.md"
---

This section provides further background and resources to assist agencies in implementing the [Project Open Data metadata schema](/schema/).

In addition to template and sample files we also produce Project Open Data Metadata schema in JSON schema format. [JSON schema](http://json-schema.org/) describes a JSON data format. It can be used to automatically validate Data.json files and to generate forms for creating JSON.

### Terms and Abbreviations ###
* **POD** - [Project Open Data](/schema)
* **JSON** - [JavaScript Object Notation](http://json.org/)
* **DCAT** - [Data Catalog Vocabulary](http://www.w3.org/TR/vocab-dcat/)
* **CKAN** - [CKAN software](http://ckan.org/)
* **Schema.org** - [schema.org](http://schema.org/)
* **JSON Schema** - [JSON Schema docs](http://json-schema.org/) and [specification](http://json-schema.org/latest/json-schema-core.html)
* **JSON-LD** - [JSON-LD docs](http://json-ld.org/) and [specification](http://www.w3.org/TR/json-ld/)

### JSON Schema Files ###

* 1.1 Schema (Draft): [Dataset](/v1.1/schema/dataset.json) and [Catalog](/v1.1/schema/catalog.json)

### JSON-LD Context ###

* [1.1 Schema](/v1.1/schema/catalog.jsonld) (Draft)


### Sample Data Files

- [JSON - Minimum Requirements](/v1.1/examples/catalog-sample.json)
- [JSON - With Extended Fields](/v1.1/examples/catalog-sample-extended.json)
- [CSV - Minimum Requirements](/v1.1/examples/catalog-sample.csv) *(limited to one distribution per dataset)*
- [CSV - With Extended Fields](/v1.1/examples/catalog-sample-extended.csv) *(limited to one distribution per dataset)*


### Use Cases  
  
#### Starting from a spreadsheet
Some agencies may initially build or maintain data catalogs through large spreadsheets.  In order to then generate a data.json file from this, simply import the spreadsheet (in the form of a CSV file) into the [CSV Converter](http://labs.data.gov/dashboard/datagov/csv_to_json), translate the metadata as needed, and then generate an appropriately formatted JSON file.

#### Utilizing CKAN
[CKAN](http://www.CKAN.org) is a popular, open-source data catalog that can be installed independently or run as a service.  Even if an agency hasn't begun a data catalog, adopting CKAN can provide a robust and feature-rich solution with which to begin maintaining an internal or external catalog.  In addition to providing an effective means of organizing the agency's data catalog, CKAN provides several opportunities for generating the needed data.json file. See the [ckanext-datajson](https://github.com/GSA/ckanext-datajson) and [USMetadata](https://github.com/GSA/USMetadata/) extensions.

#### Using Socrata
[Socrata](http://www.socrata.com/open-data-portal/) is a popular, open data catalog that is run as a service.  Agencies that have not adapted a data catalog yet, can use Socrata without having to install or setup any servers or software.  In addition to providing rich visualizations and data management features, Socrata **natively supports data.json** so any datasets managed through Socrata will be automatically exposed correctly.  Socrata also supports all the extended metadata fields through it's extensible metadata features.

#### Manual translating a data file from another system
Agencies may also manage their data catalogs through various database solutions such as Access, an asset management system, document management system, geoportal, or assorted proprietary systems.  Regardless of which system an agency employs, it should include a fundamental export option which allows the catalog to be exported as a CSV file, which can then be imported into the [CSV Converter](http://labs.data.gov/dashboard/datagov/csv_to_json) for conversation to an appropriately formatted JSON file.  Depending on the solutions' varied further functionality, some of them may also provide APIs which can then be configured to maintain the data.json file.  If not, they may instead support XML and JSON exports, which can then be converted to the proper format.

#### Convert from CSV to JSON
In order to generate appropriately formatted JSON, simply import an appropriately formatted CSV into the [CSV Converter](http://labs.data.gov/dashboard/datagov/csv_to_json), ensure that the metadata fields line up, and re-export the file.

Schema Object Model Diagram
-----------------------------
![Schema Diagram](/v1.1/schema-diagram.svg)


### Field Mappings ###

Catalog Fields
-----------------------------

{: .table .table-striped}
Label               | *POD v1.1*                    | *POD v1.0*   | *CKAN API*  | *DCAT*         | *Schema.org*
-------             | -------                       | -------      | -------     | -------        | -------
Metadata Context    | *@context*                    | *n/a*        | *n/a*       | *n/a*          |  *n/a* 
Metadata Catalog ID | *@id*                         | *n/a*        | *n/a*       | *n/a*          |  *n/a*
Metadata Type       | *@type*                       | *n/a*        | *n/a*       | *n/a*          |  *itemtype attribute*  
Schema Version      | *conformsTo*                  | *n/a*        | *n/a*       | *n/a*          |  *n/a*
Schema URL          | *describedBy*                 | *n/a*        | *n/a*       | *n/a*          |  *n/a*
Dataset             | *dataset*                     | *n/a*        | *results*       | [dct:dataset](http://www.w3.org/TR/vocab-dcat/#Property:catalog_dataset) | [dataset](http://schema.org/dataset)


Dataset Fields
-----------------------------
Note the mapping for `license` and `rights` from Project Open Data to DCAT applies the fields from the Dataset object in Project Open Data to each of the Distribution objects in DCAT. 

{: .table .table-striped}
Label                          | *POD v1.1*                             | *POD v1.0*   | *CKAN API* | *DCAT*  | *Schema.org*
-------                        | -------                                | -------      | -------| ------- | -------
Metadata Type                  | *@type*                                | *n/a*        | *n/a*       | *n/a*          |  *itemtype attribute* 
Title                          | *title*                                | *title*                 | *title*           | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:dataset_title)                  | [name](http://schema.org/name)
Description                    | *description*                          | *description*           | *notes*                | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:dataset_description) | [description](http://schema.org/description)
Tags                           | *keyword*                              | *keyword*              | *tags*                | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#Property:dataset_keyword)    | [keywords](http://schema.org/keywords)
Last Update                    | *modified*                             | *modified*          | *n/a*                 | [dct:modified](http://www.w3.org/TR/vocab-dcat/#Property:dataset_update_date) | [dateModified](http://schema.org/dateModified)
Publisher                      | *publisher &rarr; name*                | *publisher*           | *organization* &rarr; *title*              | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher)  &rarr; [foaf:name](http://xmlns.com/foaf/spec/#term_name)| [publisher](http://schema.org/publisher) &rarr; [Organization](http://schema.org/Organization):[name](http://schema.org/name)
Publisher Parent Organization  | *publisher &rarr; subOrganizationOf*   | *n/a*           | *n/a*              | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher) &rarr; [org:subOrganizationOf](http://www.w3.org/TR/vocab-org/#org:subOrganizationOf) | [publisher](http://schema.org/publisher) &rarr; [Organization](http://schema.org/Organization):[memberOf](http://schema.org/memberOf)
Contact Name                   | *contactPoint &rarr; fn*               | *contactPoint*          | *maintainer*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint)  &rarr; [vcard:fn](http://www.w3.org/TR/vcard-rdf/#d4e199) | [provider](http://schema.org/publisher) &rarr; [Person](http://schema.org/Person):[name](http://schema.org/name)
Contact Email                  | *contactPoint &rarr; hasEmail*         | *mbox* | *maintainer_email*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint) &rarr; [vcard:hasEmail](http://www.w3.org/TR/vcard-rdf/#d4e183) | [provider](http://schema.org/publisher) &rarr; [Person](http://schema.org/Person):[email](http://schema.org/email)
Unique Identifier              | *identifier*                           | *identifier*     | *id*                | [dct:identifier](http://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier) | *n/a*
Public Access Level            | *accessLevel*                          | *accessLevel*                   | *n/a*             | *n/a* | *n/a*
Bureau Code                    | *bureauCode*                           | *bureauCode*                   | *n/a*             | *n/a* | *n/a*
Program Code                   | *programCode*                          | *programCode*                   | *n/a*             | *n/a* | *n/a*
Distribution                   | *distribution*                         | *distribution*  | *resources*              | [dcat:distribution](http://www.w3.org/TR/vocab-dcat/#Property:dataset_distribution)| [distribution](http://schema.org/distribution)
License                        | *license*                              | *license* | *license_title*        | [dct:license](http://www.w3.org/TR/vocab-dcat/#Property:distribution_license) | [license](http://schema.org/license)
Rights                         | *rights*                               | *accessLevelComment*                   | *n/a*             | [dct:rights](http://www.w3.org/TR/vocab-dcat/#Property:distribution_rights)| *n/a*
Endpoint                       | **Removed**                            | *webService*          | *resources*  &rarr; *url*             | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | *n/a*
Spatial                        | *spatial*                              | *spatial*      | *n/a*                | [dct:spatial](http://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial) | [spatial](http://schema.org/spatial)
Temporal                       | *temporal*                             | *temporal*    | *n/a*                | [dct:temporal](http://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal) | [temporal](http://schema.org/temporal)
Release Date                   | *issued*                               | *issued*         | *n/a*                | [dct:issued](http://www.w3.org/TR/vocab-dcat/#Property:dataset_release_date) | [datePublished](http://schema.org/datePublished)
Frequency                      | *accrualPeriodicity*                   | *accrualPeriodicity*             | *n/a*                | [dct:accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency)    | *n/a*
Language                       | *language*                             | *language*                   | *n/a*                | [dct:language](http://www.w3.org/TR/vocab-dcat/#Property:dataset_language)     | [inLanguage](http://schema.org/inLanguage)
Data Quality                   | *dataQuality*                          | *dataQuality*          | *n/a*                | *n/a*  | *n/a*
Category                       | *theme*                                | *theme*          | *groups*                | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#Property:dataset_theme)   | [about](http://schema.org/about)
Related Documents              | *references*                           | *references* | *n/a*                | [dct:references](http://dublincore.org/documents/dcmi-terms/#terms-references) | *n/a*
Homepage URL                   | *landingPage*                          | *landingPage*                  | *n/a*                | [dcat:landingPage](http://www.w3.org/ns/dcat#Property:dataset_landingpage)  | [url](http://schema.org/url)
Collection                     | *isPartOf*                             | *n/a*             |                                   | *n/a*   | [isPartOf](http://schema.org/isPartOf)
System of Records              | *systemOfRecords*                      | *systemOfRecords*                  | *n/a*                | *n/a*  | *n/a*
Primary IT Investment          | *primaryITInvestmentUII*               | *primaryITInvestmentUII*             |                                   | *n/a*   | *n/a*  
Data Dictionary                | *describedBy*                          | *dataDictionary*       | *n/a*                | *n/a* | *n/a*
Data Dictionary Type           | *describedByType*                      | *n/a*             |                                   | *n/a*   | *n/a*     
Data Standard                  | *conformsTo*                           | *n/a*             |                                   | *n/a*   | *n/a*  


Dataset Distribution Fields
-------------------------------------------

{: .table .table-striped}
Label                   | *POD v1.1*        | *POD v1.0*        | *CKAN API*                        | *DCAT*  | *Schema.org*
-------                 | -------           | -------           | -------                           | ------- | -------
Metadata Type           | *@type*           | *n/a*             | *n/a*                             | *n/a*   |  *itemtype attribute* 
Download URL            | *downloadURL*     | *accessURL*       | *resources*  &rarr; *url*         | [dcat:downloadURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_downloadurl) | [contentUrl](http://schema.org/contentUrl)
Access URL              | *accessURL*       | *n/a*             | *resources*  &rarr; *url*         | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | [contentUrl](http://schema.org/contentUrl)
Media Type              | *mediaType*       | *format*          | *resources*  &rarr; *mimetype*    | [dcat:mediaType](http://www.w3.org/TR/vocab-dcat/#Property:distribution_media_type)       | *n/a*
Format                  | *format*          | *n/a*             | *resources*  &rarr; *format*      | [dct:format](http://www.w3.org/TR/vocab-dcat/#Property:distribution_format)       | [encodingFormat](http://schema.org/encodingFormat)
Title                   | *title*           | *n/a*             | *resources*  &rarr; *name*        | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:distribution_title)         | [name](http://schema.org/name)
Description             | *description*     | *n/a*             | *resources*  &rarr; *description* | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:distribution_description)   | [description](http://schema.org/description)
Data Dictionary         | *describedBy*     | *n/a*             |                                   | *n/a*   | *n/a*  
Data Dictionary Type    | *describedByType* | *n/a*             |                                   | *n/a*   | *n/a*     
Data Standard           | *conformsTo*      | *n/a*             |                                   | *n/a*   | *n/a*           





