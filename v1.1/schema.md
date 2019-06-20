---
published: true
layout: default
title: Project Company Data Metadata Schema v1.1
permalink: v1.1/schema/
filename: schema.md
id: schema v1.1
---


---------------------------

This section contains guidance to support the use of the Project Company Data metadata to list company datasets and application programming interfaces (APIs).

Standard Metadata Vocabulary
----------------------------
Metadata is structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use, or manage an information resource (NISO 2004, ISBN: 1-880124-62-9).  The challenge is to define and name standard metadata fields so that a data consumer has sufficient information to process and understand the described data. The more information that can be conveyed in a standardized regular format, the more valuable data becomes. Metadata can range from basic to advanced, from allowing one to discover the mere fact that a certain data asset exists and is about a general subject all the way to providing detailed information documenting the structure, processing history, quality, relationships, and other properties of a dataset. Making metadata machine readable greatly increases its utility, but requires more detailed standardization, defining not only field names, but also how information is encoded in the metadata fields.

Establishing a common vocabulary is the key to communication. The **metadata schema** specified in this memorandum is based on [DCAT](http://www.w3.org/TR/vocab-dcat/), a hierarchical vocabulary specific to datasets. This specification defines three types of metadata elements: Required, Required-if (conditionally required), and Expanded fields.  

What to Document -- Datasets and Web APIs
-------------------------------------

A dataset is an identifiable collection of structured data objects unified by some criteria (authorship, subject, scope, spatial or temporal extent...). A catalog is a collection of descriptions of datasets; each description is a metadata record. The intention of a data catalog is to facilitate data access by users who are first interested in a particular kind of data, and upon finding a fit-for-purpose dataset, will next want to know how to get the data.

A Web API (**A**pplication **P**rogramming **I**nterface) allows computer programs to dynamically query a dataset using the World Wide Web. For example, a dataset of [farmers markets](http://catalog.data.gov/dataset/farmers-markets-geographic-data) may be made available for download as a single file (e.g., a CSV), or may be made available to developers through a Web API, such that a computer program could use a ZIP Code to retrieve a list of farmers markets in the ZIP Code area.

The catalog file for each agency should list all of the agency's datasets that can be made public, regardless of whether they are distributed by a file download or a Web API. Please also see the extended guidance on [documenting Web APIs in your data.json files](../api/).  


Metadata File Format --  JSON
---------------------------------------

A quick primer on the file format involved:

[JSON](http://www.json.org) is a lightweight data-exchange format that is very easy to read, parse and generate.  Based on a subset of the JavaScript programming language, JSON is a text format that is optimized for data interchange.  JSON is built on two structures: (1) a collection of name/value pairs and (2) an ordered list of values.  

Where optional fields are included in a catalog file but are unpopulated, they may be represented by a `null` value.  They should not be represented by an empty string (`""`).  

When a record has an **accessURL** or **downloadURL**, they should be contained as objects within a **distribution**. Any object may be described by **title**, **description**, **format**, or **mediaType**, though when an object contains **downloadURL**, it must be accompanied by **mediaType**.  

The Project Company Data schema is case sensitive. The schema uses a camel case convention where the first letter of some words within a field are capitalized (usually all words but the first one). While it may seem subtle which characters are uppercase and lowercase, it is necessary to follow the exact same casing as defined in the schema documented here.  For example: 

> Correct: `contactPoint`  
> Incorrect: `ContactPoint`  
> Incorrect: `contactpoint`  
> incorrect: `CONTACTPOINT`  

Links to downloadable examples of metadata files developed in this and other formats are in the [metadata resources](../metadata-resources/).  Tools to help agencies produce and maintain their data inventories are [available on GitHub](http://www.github.com/project-open-data) and hosted at [Labs.Data.gov](http://labs.data.gov).


Catalog Fields
-------------------------------------------------
These fields describe the entire Public Data Listing catalog file. Publishers can also use the `describedBy` field to reference the default [JSON Schema](http://json-schema.org/) file used to define the schema (*v1.1/schema/catalog.json*) or they may refer to their own JSON Schema file if they have extended the schema with additional schema definitions. Similarly, `@context` can be used to reference the default [JSON-LD](http://www.w3.org/TR/json-ld) Context used to define the schema (*v1.1/schema/catalog.jsonld*) or publishers can refer to their own if they have extended the schema with additional linked data vocabularies. See the [Catalog section](#Catalog) under *Further Metadata Field Guidance* for more details. 

{: .table .table-striped}
Field                           | Label                 | Definition    | Required
--------------                  | --------------        | --------------| --------------
[@context](#context)            | Metadata Context      | URL or JSON object for the [JSON-LD Context](http://www.w3.org/TR/json-ld/#the-context) that defines the schema used. | No 
[@id](#id)                      | Metadata Catalog ID   | IRI for the [JSON-LD Node Identifier](http://www.w3.org/TR/json-ld/#node-identifiers) of the Catalog. This should be the URL of the data.json file itself. | No 
[@type](#type)                  | Metadata Type         | IRI for the [JSON-LD data type](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Catalog` for the Catalog. | No 
[conformsTo](#conformsTo)       | Schema Version        | URI that identifies the version of the Project Company Data schema being used. | Always 
[describedBy](#describedBy)     | Data Dictionary       | URL for the [JSON Schema](http://json-schema.org/) file that defines the schema used.  | No
[dataset](#dataset)             | Dataset               | A container for the array of Dataset objects. See [Dataset Fields](#Dataset) below for details.  | Always


Dataset Fields
-----------------------------
See the *[Further Metadata Field Guidance](#further-metadata-field-guidance)* section to learn more about the use of each element, including the range of valid entries where appropriate. 

{: .table .table-striped}
Field                                                      | Label                     | Definition      | Required
--------------                                             | --------------            | --------------  | --------------
[@type](#dataset-type)                                     | Metadata Type             | IRI for the [JSON-LD data type](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Dataset` for each Dataset. | No
[title](#title)                                            | Title                     | Human-readable name of the asset.  Should be in plain English and include sufficient detail to facilitate search and discovery. | Always                
[description](#description)                                | Description               | Human-readable description (e.g., an abstract) with sufficient detail to enable a user to quickly understand whether the asset is of interest. | Always 
[keyword](#keyword)                                        | Tags                      | Tags (or keywords) help users discover your dataset; please include terms that would be used by technical and non-technical users. | Always              
[modified](#modified)                                      | Last Update               | Most recent date on which the dataset was changed, updated or modified. | Always                                                                        
[publisher](#publisher)                                    | Publisher                 | The publishing entity and optionally their parent organization(s). | Always                                                                                                                     
[contactPoint](#contactPoint)                              | Contact Name and Email    | Contact person's name and email for the asset. | Always                                                                                                           
[identifier](#identifier)                                  | Unique Identifier         | A unique identifier for the dataset or API as maintained within an Agency catalog or database. | Always                                                 
[accessLevel](#accessLevel)                                | Public Access Level       | The degree to which this dataset **could** be made publicly-available, *regardless of whether it has been made available*. Choices: public (Data asset is or could be made publicly available to all without restrictions), internal (Data asset is or could be made available internally only), restricted (Data asset is available under certain use restrictions), or confidential (Data asset contains confidential data and is only available to specific people). | Always 
[license](#license)                                        | License                   | The license or non-license (i.e. Public Domain) status with which the dataset or API has been published.  See [Open Licenses](/open-licenses/) for more information. | If-Applicable 
[rights](#rights)                                          | Rights                    | This may include information regarding access or restrictions based on privacy, security, or other policies. This should also serve as an explanation for the selected “accessLevel” including instructions for how to access a restricted file, if applicable. Text, 255 characters. | Always 
[spatial](#spatial)                                        | Spatial                   | The range of spatial applicability of a dataset.  Could include a spatial region like a bounding box or a named place. | If-Applicable                        
[temporal](#temporal)                                      | Temporal                  | The range of temporal applicability of a dataset (i.e., a start and end date of applicability for the data).  | If-Applicable                                  
[distribution](#distribution)                              | Distribution              | A container for the array of Distribution objects. See [Dataset Distribution Fields](#dataset-distribution-fields) below for details. | If-Applicable
[accrualPeriodicity](#accrualPeriodicity)                  | Frequency                 | The frequency with which dataset is published.   | No                                                                                                  
[conformsTo](#dataset-conformsTo)                          | Data Standard             | URI used to identify a standardized specification the dataset conforms to. | No
[describedBy](#dataset-describedBy)                        | Data Dictionary           | URL to the data dictionary for the dataset.  Note that documentation other than a data dictionary can be referenced using Related Documents (`references`). | No              
[describedByType](#dataset-describedByType)                | Data Dictionary Type      | The machine-readable file format ([IANA Media Type](http://www.iana.org/assignments/media-types) also known as [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)) of the dataset's Data Dictionary (`describedBy`). | No
[isPartOf](#isPartOf)                                      | Collection                | The collection of which the dataset is a subset.  | No
[issued](#issued)                                          | Release Date              | Date of formal issuance. | No                                                                                                                      
[language](#language)                                      | Language                  | The language of the dataset. | No                                                                                                                  
[landingPage](#landingPage)                                | Homepage URL              | This field is not intended for an company's homepage (e.g. www.mycompany.com), but rather if a dataset has a human-friendly hub or landing page that users can be directed to for all resources tied to the dataset. | No 
[references](#references)                                  | Related Documents         | Related documents such as technical information about a dataset, developer documentation, etc. | No                                                                                           
[theme](#theme)                                            | Category                  | Main thematic category of the dataset.  | No
[odrlPolicy](@odrlPolicy)                                  | Digital rights policy     | Specifies additional access rights on the dataset that are not covered by the default accessLevel permissions  | No

Dataset Distribution Fields
-------------------------------------------
Within a dataset, **distribution** is used to aggregate the metadata specific to a dataset's resources (**accessURL** and **downloadURL**), which may be described using the following fields.  Each distribution should contain one **accessURL** or **downloadURL**.  A **downloadURL** should always be accompanied by **mediaType**.  

{: .table .table-striped}
Field                                           | Label                 | Definition     | Required
--------------                                  | --------------        | -------------- | --------------                                                                                                                      
[@type](#distribution-type)                     | Metadata Type         | IRI for the [JSON-LD data type](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Distribution` for each Distribution. | No
[accessURL](#distribution-accessURL)            | Access URL            | URL providing indirect access to a dataset, for example via API or a graphical interface. | If-Applicable
[conformsTo](#distribution-conformsTo)          | Data Standard         | URI used to identify a standardized specification the distribution conforms to. | No
[describedBy](#distribution-describedBy)        | Data Dictionary       | URL to the data dictionary for the distribution found at the `downloadURL`.  Note that documentation other than a data dictionary can be referenced using Related Documents as shown in the expanded fields. | No             
[describedByType](#distribution-describedByType)| Data Dictionary Type  | The machine-readable file format ([IANA Media Type](http://www.iana.org/assignments/media-types) or [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)) of the distribution's `describedBy` URL. | No
[description](#distribution-description)        | Description           | Human-readable description of the distribution. | No
[downloadURL](#distribution-downloadURL)        | Download URL          | URL providing direct access to a downloadable file of a dataset. | If-Applicable
[format](#distribution-format)                  | Format                | A human-readable description of the file format of a distributioni, also used to determine type of resource for [GCP deployment](../gcp-templates). | No
[deploymentZone](#distribution-deploymentZone)  | Deployment zone       | The compute zone where this distribution is deployed | No
[deploymentProperties](#distribution-deploymentProperties)  | Deployment properties       | Additional platform specific properties to specify deployment details (e.g. instance details like sizing and location on a database) | No
[mediaType](#distribution-mediaType)            | Media Type            | The machine-readable file format ([IANA Media Type](http://www.iana.org/assignments/media-types) or [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)) of the distribution's `downloadURL`. | If-Applicable   
[title](#distribution-title)                    | Title                 | Human-readable name of the distribution, also defines name of resource for [GCP deployment](../gcp-templates). | No
                                                                                                                      

odlrPolicy Fields
-------------------------------------------
Within a dataset, **odrlPolicy** is used to specify additional permissions on the dataset that are not covered by the default permissions implied from [accessLevel](#accessLevel). The additional permissions are expressed using the Open Digital Rights Language (ODRL) Information Model](https://www.w3.org/TR/odrl-model/).

{: .table .table-striped}
Field                                           | Label                 | Definition     | Required
--------------                                  | --------------        | -------------- | --------------                                                                                                                      
[uid](#odrlPolicy-uid)                     | URI of this policy         | URI of this ODRL policy, see [Policy class](https://www.w3.org/TR/odrl-model/#policy) | Yes
[permission](#odrlPolicy-permission)       | List of permissions        | List of permission rules in this policy | Yes
[permission.target](#odrlPolicy-permission-target)  | Target            | The target object that this permission is about | Yes
[permission.assignee](#odrlPolicy-permission-assignee) | Assignee       | Identifies who is assigned to perform the action on the target | Yes
[permission.action](#odrlPolicy-permission-action)  | Action            | Action that is allowed on the target by this rule | Yes

Extending the Schema
------------------------------------------
"Extensional" and/or domain specific metadata can easily be added using other vocabularies even if it is not a term (entity/property) that will get indexed by the major search engines - it could still be indexed by other custom search engines and by Data.gov.  Publishers are encouraged to extend their metadata descriptions using elements from the "Expanded Fields" list shown below, or from any well-known vocabulary (including Dublin Core, Schema.org, FGDC, ISO 19115, and NIEM) as long as they are properly assigned. It's also recommended that these extensions be defined through the `describedBy` and `@context` fields at the top of the [Catalog metadata](#catalog-fields).


Further Metadata Field Guidance
-------------------------------
Additional details for each field are provided here broken down into sections for the overarching [Catalog](#Catalog), each [dataset](#dataset), and each dataset's [distribution](#distribution). 


{: .schema-fields .requirements-key}
* Key
    * {: .field-required} Required
    * {: .field-required-if-applicable} Required if Applicable
    * {: .field-optional} Expanded (optional)


{: .schema-fields}
* Catalog
    * {: .field-optional}[@context](#context)
    * {: .field-optional}[@id](#id)
    * {: .field-optional}[@type](#type)
    * {: .field-required}[conformsTo](#conformsTo)
    * {: .field-optional}[describedBy](#describedBy)
    * {: .field-required}[dataset](#dataset)
        * {: .field-optional}[@type](#dataset-type)
        * {: .field-required}[accessLevel](#accessLevel)
        * {: .field-optional}[accrualPeriodicity](#accrualPeriodicity)
        * {: .field-optional}[conformsTo](#dataset-conformsTo)
        * {: .field-required}[contactPoint](#contactPoint)
            * {: .field-optional}[@type](#contactPoint-type)    
            * {: .field-required}[fn](#contactPoint-fn)
            * {: .field-required}[hasEmail](#contactPoint-hasEmail)
        * {: .field-optional}[describedBy](#dataset-describedBy)
        * {: .field-optional}[describedByType](#dataset-describedByType)
        * {: .field-required}[description](#description)
        * {: .field-required-if-applicable}[distribution](#distribution)
            * {: .field-optional}[@type](#distribution-type)    
            * {: .field-optional}[accessURL](#distribution-accessURL)
            * {: .field-optional}[conformsTo](#distribution-conformsTo)
            * {: .field-required-if-applicable}[downloadURL](#distribution-downloadURL)
            * {: .field-optional}[describedBy](#distribution-describedBy)
            * {: .field-optional}[describedByType](#distribution-describedByType)
            * {: .field-optional}[description](#distribution-description)
            * {: .field-required}[format](#distribution-format)
            * {: .field-optional}[deploymentZone](#distribution-deploymentZone)
            * {: .field-optional}[deploymentProperties](#distribution-deploymentProperties)
            * {: .field-required-if-applicable}[mediaType](#distribution-mediaType)
            * {: .field-optional}[title](#distribution-title)
        * {: .field-required}[identifier](#identifier)
        * {: .field-optional}[isPartOf](#isPartOf)
        * {: .field-optional}[issued](#issued)
        * {: .field-required}[keyword](#keyword)
        * {: .field-optional}[landingPage](#landingPage)
        * {: .field-optional}[language](#language)
        * {: .field-required-if-applicable}[license](#license)
        * {: .field-required}[modified](#modified)
        * {: .field-required}[publisher](#publisher)
            * {: .field-optional}[@type](#publisher-type) 
            * {: .field-required}[name](#publisher-name)
            * {: .field-optional}[subOrganizationOf](#publisher-subOrganizationOf)
        * {: .field-optional}[references](#references)
        * {: .field-required}[rights](#rights)
        * {: .field-required-if-applicable}[spatial](#spatial)
        * {: .field-required-if-applicable}[temporal](#temporal)
        * {: .field-optional}[theme](#theme)
        * {: .field-required}[title](#title)


Catalog Fields {#Catalog}
-------------------------------

{: .table .table-striped #context}
**Field [#](#context){: .permalink}** | **@context**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | The URL or JSON object for the [JSON-LD Context](http://www.w3.org/TR/json-ld/#the-context) that defines the schema used. The URL for version 1.1 of the schema is `https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld`
**Example** | `{"@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld"}`

{: .table .table-striped #id}
**Field [#](#id){: .permalink}** | **@id**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | A unique identifier for the Catalog as defined by [JSON-LD Node Identifiers](http://www.w3.org/TR/json-ld/#node-identifiers). This should be the URL of the data.json file itself
**Example** | `{"@id": "https://www.agency.gov/data.json"}`

{: .table .table-striped #type}
**Field [#](#type){: .permalink}** | **@type**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | The metadata type as defined by [JSON-LD data types](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Catalog` for the Catalog
**Example** | `{"@type": "dcat:Catalog"}`

{: .table .table-striped #conformsTo}
**Field [#](#conformsTo){: .permalink}** | **conformsTo**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String (URI)
**Usage Notes** | This is used to identify the schema version using a URI. The URI for version 1.1 of the schema is `https://project-open-data.cio.gov/v1.1/schema`
**Example** | `{"conformsTo": "https://project-open-data.cio.gov/v1.1/schema"}`

{: .table .table-striped #describedBy}
**Field [#](#describedBy){: .permalink}** | **describedBy**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | This is used to specify a [JSON Schema](http://json-schema.org/) file that defines all fields. By default, it is recommended that the canonical JSON Schema file is referenced (https://project-open-data.cio.gov/v1.1/schema/catalog.json) but if the schema had been extended, publishers may reference a file that defines those extensions. 
**Example** | `{"describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json"}`

{: .table .table-striped #dataset}
**Field [#](#dataset){: .permalink}** | **dataset**
----- | -----
**Cardinality** | (1,n)
**Required** | Yes, always
**Accepted Values** | Array of Objects
**Usage Notes** | This field is a container for an array of Dataset objects. See [Dataset Fields](#Dataset) below for details
**Example** | `{"dataset": [...]}`


Dataset Fields {#Dataset}
-------------------------------

{: .table .table-striped #dataset-type}
**Field [#](#dataset-type){: .permalink}** | **@type**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | The metadata type as defined by [JSON-LD data types](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Dataset` for the Dataset
**Example** | `{"@type": "dcat:Dataset"}`

{: .table .table-striped #accessLevel}
**Field [#](#accessLevel){: .permalink}** | **accessLevel**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | Must be one of the following: "public", "internal", "restricted", "confidential"
**Usage Notes** | This field refers to the degree to which this dataset *could be made available* to the public, regardless of whether it is currently available to the public. For example, if a member of the public can walk into your agency and obtain a dataset, that entry is **public** even if there are no files online. An internal dataset could be made available to anyone working in the company. A *restricted* dataset is one only available under certain conditions or to certain audiences (such as researchers who sign a waiver). A *confidential* dataset is one that can only be made available to specific people.
**Example** | `{"accessLevel":"public"}`

{: .table .table-striped #accrualPeriodicity}
**Field [#](#accrualPeriodicity){: .permalink}** | **accrualPeriodicity**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | ISO 8601 Repeating Duration (or `irregular`)
**Usage Notes** | Must be an ISO 8601 repeating duration unless this is not possible because the accrual periodicity is completely irregular, in which case the value should simply be `irregular`.  The value should not include a start or end date but rather simply express the duration of time between data publishing.  For example, a dataset which is published on an annual basis would be `R/P1Y`; every three months would be `R/P3M`; weekly would be `R/P1W`; and daily would be `R/P1D`.  Further examples and documentation [can be found here](../iso8601_guidance#accrualperiodicity).  
**Example** |  `{"accrualPeriodicity":"R/P1Y"}`

{: .table .table-striped #dataset-conformsTo}
**Field [#](#dataset-conformsTo){: .permalink}** | **conformsTo**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URI)
**Usage Notes** | This is used to identify a standardized specification the dataset conforms to. If this is a technical specification associated with a particular serialization of a distribution, this should be specified with [conformsTo](#distribution-conformsTo) at the distribution level. It's recommended that this be a URI that serves as a unique identifier for the standard. The URI may or may not also be a URL that provides documentation of the specification.
**Example** | `{"conformsTo": "http://www.agency.gov/common-vegetable-analysis-model/"}`

{: .table .table-striped #contactPoint}
**Field [#](#contactPoint){: .permalink}** | **contactPoint**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | vCard object
**Usage Notes** | This is a container for two fields that together make up the contact information for the dataset.  `contactPoint` should always contain both the person's appropriately formatted full name (`fn`) and email (`hasEmail`).  
**Example** | See below

~~~
            "contactPoint": {
                "@type": "vcard:Contact",
                "fn": "Jane Doe",
                "hasEmail": "mailto:jane.doe@agency.gov"
            }
~~~


{: .table .table-striped .child-field #contactPoint-type}
**Field [#](#contactPoint-type){: .permalink}** | **contactPoint &rarr; @type**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | The metadata type as defined by [JSON-LD data types](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `vcard:Contact` for contactPoint
**Example** | `{"@type": "vcard:Contact"}`

{: .table .table-striped .child-field #contactPoint-fn}
**Field [#](#contactPoint-fn){: .permalink}** | **contactPoint &rarr; fn**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This should include included with `hasEmail` as part of a record's `contactPoint` (see above example).  
**Example** |  `{"fn": "Jane Doe"}`

{: .table .table-striped .child-field #contactPoint-hasEmail}
**Field [#](#contactPoint-hasEmail){: .permalink}** | **contactPoint &rarr; hasEmail**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This should be formatted per vCard specifications (see example below) and included with `fn` as part of a record's `contactPoint` (see above example).    
**Example** |  `{"hasEmail": "mailto:jane.doe@agency.gov"}`

{: .table .table-striped #dataset-describedBy}
**Field [#](#dataset-describedBy){: .permalink}** | **describedBy**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | This is used to specify a data dictionary or schema that defines fields or column headings in the dataset. If this is a machine readable file, it's recommended to be specified with [describedBy](#distribution-describedBy) at the distribution level along with the associated `describedByType`. At the dataset level it's assumed to be a human readable HTML webpage or PDF document. Documentation that is not specifically a data dictionary belongs in "references"
**Example** | `{"describedBy": "http://www.agency.gov/vegetables/definitions.pdf"}`

{: .table .table-striped #dataset-describedByType}
**Field [#](#dataset-describedByType){: .permalink}** | **describedByType**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IANA Media Type](http://www.iana.org/assignments/media-types))
**Usage Notes** | This is used to identify the media type ([IANA Media Type](http://www.iana.org/assignments/media-types) also known as [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)) of the URL used for the dataset's `describedBy` field. This should be specified if `describedBy` is not an HTML webpage.
**Example** | `{"describedByType": "application/pdf"}`

{: .table .table-striped #description}
**Field [#](#description){: .permalink}** | **description**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This should be human-readable and understandable to an average person.
**Example** | `{"description":"This dataset contains a list of vegetables, including nutrition information and seasonality. Includes details on tomatoes, which are really fruit but considered a vegetable in this dataset."}`

{: .table .table-striped #distribution}
**Field [#](#distribution){: .permalink}** | **distribution**
----- | -----
**Cardinality** | (0,n)
**Required** | Yes, if the dataset has an `accessURL` or `downloadURL`.  
**Accepted Values** | Array of Objects 
**Usage Notes** | This is a container for one or multiple `distribution` objects which group together the fields: `accessURL`, `conformsTo`, `downloadURL`, `describedBy`, `describedByType`, `description`, `format`, `mediaType`, and `title`.  
**Example** | See below
 
~~~
"distribution": [
                 {
                     "@type": "dcat:Distribution",
                     "description": "Vegetable data as a CSV file",
                     "downloadURL": "http://www.agency.gov/vegetables/listofvegetables.csv",
                     "format": "CSV",
                     "mediaType": "text/csv",
                     "title": "listofvegetables.csv"
                 }, 
                 {
                     "@type": "dcat:Distribution",
                     "conformsTo": "http://www.agency.gov/vegetables-data-standard/",
                     "describedBy": "http://www.agency.gov/vegetables/schema.xsd",
                     "describedByType": "text/xml",
                     "description": "Vegetable data as an XML file",
                     "downloadURL": "http://www.agency.gov/vegetables/listofvegetables.xml",
                     "format": "XML",
                     "mediaType": "text/xml",
                     "title": "listofvegetables.xml"
                 },
                 {
                     "@type": "dcat:Distribution",
                     "description": "Vegetable data as a zipped CSV file with attached data dictionary",
                     "downloadURL": "http://www.agency.gov/vegetables/vegetables-all.zip",
                     "format": "Zipped CSV",
                     "mediaType": "application/zip",
                     "title": "vegetables-all.zip"
                 },
                 {
                     "@type": "dcat:Distribution",
                     "accessURL": "http://www.agency.gov/api/vegetables/",
                     "description": "A fully queryable REST API with JSON and XML output",
                     "format": "API",
                     "title": "Vegetables REST API"
                 }
                ]
~~~

{: .table .table-striped .child-field #distribution-type}
**Field [#](#distribution-type){: .permalink}** | **distribution &rarr; @type**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | The metadata type as defined by [JSON-LD data types](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `dcat:Distribution` for each distribution
**Example** | `{"@type": "dcat:Distribution"}`

{: .table .table-striped .child-field #distribution-accessURL}
**Field [#](#distribution-accessURL){: .permalink}** | **distribution &rarr; accessURL**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is accessible indirectly, through means other than direct download.
**Accepted Values** | String (URL)
**Usage Notes** | This should be the URL for an indirect means of accessing the data, such as [API documentation](../api/), a 'wizard' or other graphical interface which is used to generate a download, feed, or a request form for the data. When accessLevel is "restricted" but the dataset is available online indirectly, this field should be the URL that provides indirect access. This should not be a **direct** download URL.  It is usually assumed that accessURL is an HTML webpage.  
**Example** |  `{"accessURL":"http://www.agency.gov/api/vegetables/"}`

{: .table .table-striped .child-field #distribution-conformsTo}
**Field [#](#distribution-conformsTo){: .permalink}** | **distribution &rarr; conformsTo**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URI)
**Usage Notes** | This is used to identify a standardized specification the distribution conforms to. It's recommended that this be a URI that serves as a unique identifier for the standard. The URI may or may not also be a URL that provides documentation of the specification.
**Example** | `{"conformsTo": "http://www.agency.gov/vegetables-data-standard/"}`

{: .table .table-striped .child-field #distribution-downloadURL}
**Field [#](#distribution-downloadURL){: .permalink}** | **distribution &rarr; downloadURL**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is available for public download.
**Accepted Values** | String (URL)
**Usage Notes** | This must be the **direct** download URL. Other means of accessing the dataset should be expressed using `accessURL`.  This should always be accompanied by `mediaType`.  
**Example** |  `{"downloadURL":"http://www.agency.gov/vegetables/listofvegetables.csv"}`

{: .table .table-striped .child-field #distribution-describedBy}
**Field [#](#distribution-describedBy){: .permalink}** | **distribution &rarr; describedBy**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | This is used to specify a data dictionary or schema that defines fields or column headings in the distribution. If this is a machine readable file the media type should be specified with `describedByType` - otherwise it's assumed to be a human readable HTML webpage. 
**Example** | `{"describedBy": "http://www.agency.gov/vegetables/schema.json"}`

{: .table .table-striped .child-field #distribution-describedByType}
**Field [#](#distribution-describedByType){: .permalink}** | **distribution &rarr; describedByType**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IANA Media Type](http://www.iana.org/assignments/media-types))
**Usage Notes** | This is used to identify the media type ([IANA Media Type](http://www.iana.org/assignments/media-types) also known as [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)) of the URL used for the distribution's `describedBy` field. This is especially important if `describedBy` is a machine readable file. 
**Example** | `{"describedByType": "application/schema+json"}`

{: .table .table-striped .child-field #distribution-description}
**Field [#](#distribution-description){: .permalink}** | **distribution &rarr; description**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | This should be a human-readable description of the distribution. 
**Example** | `{"description":"Vegetable data as a zipped CSV file with attached data dictionary"}`

{: .table .table-striped .child-field #distribution-format}
**Field [#](#distribution-format){: .permalink}** | **distribution &rarr; format**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | This should be a human-readable description of the file format of the dataset, that provides useful information that might not be apparent from `mediaType`.  Note that `API` should always be used to distinguish web APIs. Furthermore, this value is used to determine the type of resource to deploy in when using [GCP templates](../../gcp-templates/).   
**Example** | `{"format":"CSV"}`

{: .table .table-striped .child-field #distribution-deploymentZone}
**Field [#](#distribution-deploymentZone){: .permalink}** | **distribution &rarr; deploymentZone**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | This specifies the compute zone where this distribution is deployed, used for [GCP templates](../../gcp-templates/).   
**Example** | `{"deploymentZone":"europe-west1"}`

{: .table .table-striped .child-field #distribution-deploymentProperties}
**Field [#](#distribution-deploymentProperties){: .permalink}** | **distribution &rarr; deploymentProperties**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | Object
**Usage Notes** | Additional platform specific properties to specify deployment details (e.g. instance details like sizing and location on a database).
**Example** | `{"deploymentZone":{"location":"europe-west1","tier":"db-f1-micro"}}`

{: .table .table-striped .child-field #distribution-mediaType}
**Field [#](#distribution-mediaType){: .permalink}** | **distribution &rarr; mediaType**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is available for public download.
**Accepted Values** | String ([IANA Media Type](http://www.iana.org/assignments/media-types))
**Usage Notes** | This must describe the exact files available at `downloadURL` using a media type ([IANA Media Type](http://www.iana.org/assignments/media-types) also known as [MIME Type](http://en.wikipedia.org/wiki/Internet_media_type)). For common Microsoft Office files, see [Office Open XML MIME types](http://blogs.msdn.com/b/vsofficedeveloper/archive/2008/05/08/office-2007-open-xml-mime-types.aspx)
**Example** | `{"mediaType":"text/csv"}`

{: .table .table-striped .child-field #distribution-title}
**Field [#](#distribution-title){: .permalink}** | **distribution &rarr; title**
-----           | -----
**Cardinality** | (0,1)
**Required**    | No
**Accepted Values** | String
**Usage Notes** | This should be a useful title for the distribution.  Acronyms should be avoided. This field is used to determine the name of the resource when using [GCP templates](../../gcp-templates/).
**Example**     | `{"title":"listofvegetables.csv"}`


{: .table .table-striped #identifier}
**Field [#](#identifier){: .permalink}** | **identifier**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This field allows third parties to maintain a consistent record for datasets even if title or URLs are updated. Agencies may integrate an existing system for maintaining unique identifiers. Each identifier **must** be unique across the agency's catalog and remain fixed. It is **highly recommended** that a [URI (preferably an HTTP URL)](http://tools.ietf.org/html/rfc3986#section-1.1.3) be used to provide a globally unique identifier. Identifier URLs should be designed and maintained to persist indefinitely regardless of whether the URL of the resource itself changes.
**Example** |  `{"identifier":"http://dx.doi.org/10.7927/H4PZ56R2"}`

{: .table .table-striped #isPartOf}
**Field [#](#isPartOf){: .permalink}** | **isPartOf**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | This field allows the grouping of multiple datasets into a "collection".  This field should be employed by the individual datasets that together make up a collection.  The value for this field should match the `identifier` of the parent dataset.  
**Example** |  `{"isPartOf":"http://dx.doi.org/10.7927/H4PZ56R2"}`

{: .table .table-striped #issued}
**Field [#](#issued){: .permalink}** | **issued**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | ISO 8601 Date
**Usage Notes** | Dates should be [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. 
**Example** |  `{"issued":"2001-01-15"}`

{: .table .table-striped #keyword}
**Field [#](#keyword){: .permalink}** | **keyword**
----- | -----
**Cardinality** | (1,n)
**Required** | Yes, always
**Accepted Values** | Array of strings
**Usage Notes** | Surround each keyword with quotes. Separate keywords with commas.  Avoid duplicate keywords in the same record.  
**Example** | `{"keyword":["vegetables","veggies","greens","leafy","spinach","kale","nutrition"]}`

{: .table .table-striped #landingPage}
**Field [#](#landingPage){: .permalink}** | **landingPage**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | This field is not intended for an agency's homepage (e.g. www.agency.gov), but rather if a dataset has a human-friendly hub or landing page that users can be directed to for all resources tied to the dataset.  
**Example** |  `{"landingPage":"http://www.agency.gov/vegetables"}`

{: .table .table-striped #language}
**Field [#](#language){: .permalink}** | **language**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings
**Usage Notes** | This should adhere to the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard. This [language subtag lookup](http://rishida.net/utils/subtags/) provides a good tool for checking and verifying language codes. A language tag is comprised of either one or two parts, the language subtag (such as en for English, sp for Spanish, wo for Wolof) and the regional subtag (such as US for United States, GB for Great Britain, MX for Mexico), separated by a hyphen. Regional subtags should only be provided when needed to distinguish a language tag from another one (such as American vs. British English).
**Example** |  `{"language":["en-US"]}` or if multiple languages, `{"language":["es-MX","wo","nv","en-US"]}` 

{: .table .table-striped #license}
**Field [#](#license){: .permalink}** | **license**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if applicable
**Accepted Values** | String (URL)
**Usage Notes** | See [list of license-free declarations and licenses](/open-licenses/).
**Example** |  `{"license":"http://creativecommons.org/publicdomain/zero/1.0/"}`

{: .table .table-striped #modified}
**Field [#](#modified){: .permalink}** | **modified**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | ISO 8601 Date
**Usage Notes** | Dates should be [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) of highest resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. If there is a need to reflect that the dataset is continually updated, ISO 8601 formatting can account for this [with repeating intervals](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals). For instance, `R/P1D` for daily, `R/P2W` for every two weeks, and `R/PT5M` for every five minutes.
+**Example** | `{"modified":"2012-01-15"}` or `{"modified":"R/P1D"}`

{: .table .table-striped #odrlPolicy-permission}
**Field [#](#odrlPolicy-permission){: .permalink}** | **odrlPolicy &rarr; permission**
-----           | -----
**Cardinality** | (1,n)
**Required**    | Yes, always
**Accepted Values** | List
**Usage Notes** | Specify permissions that are referring to distributions in this dataset. See [Permission class](https://www.w3.org/TR/odrl-vocab/#permissions)
**Example**     | `{"permission": [{"target": "http://link.to.document", "assignee": "me@mycompany.com", "action": "write"}]}

{: .table .table-striped #odrlPolicy-permission-target}
**Field [#](#odrlPolicy-permission-target){: .permalink}** | **odrlPolicy &rarr; permission &rarr; target**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | Specifies the target of this permission rule, refer to a distribution of the dataset containing this policy. See [Target](https://www.w3.org/TR/odrl-vocab/#term-target).
**Example**     | `{"target": "http://link.to.document"}

{: .table .table-striped #odrlPolicy-permission-assignee}
**Field [#](#odrlPolicy-permission-assignee){: .permalink}** | **odrlPolicy &rarr; permission &rarr; assignee**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | Specifies the assignee of this permission rule, should be a unique identifier of a person or group. See [Assignee](https://www.w3.org/TR/odrl-vocab/#term-assignee).
**Example**     | `{"assignee": "me@mycompany.com"}

{: .table .table-striped #odrlPolicy-permission-action}
**Field [#](#odrlPolicy-permission-action){: .permalink}** | **odrlPolicy &rarr; permission &rarr; action**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | Specifies the action allowed by this permission rule, should be an instance of [Action class](https://www.w3.org/TR/odrl-vocab/#term-Action)
**Example**     | `{"assignee": "me@mycompany.com"}

{: .table .table-striped #primaryITInvestmentUII}
**Field [#](#primaryITInvestmentUII){: .permalink}** | **primaryITInvestmentUII**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | Use to link a given dataset with its related IT Unique Investment Identifier, which can often be found in Exhibit 53 documents.
**Example** |  `{"primaryITInvestmentUII":"023-000000001"}`

{: .table .table-striped #publisher}
**Field [#](#publisher){: .permalink}** | **publisher**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | Object
**Usage Notes** | This is a container for a `publisher` object which groups together the fields: `name` and `subOrganization`. The `subOrganization` field can also contain a `publisher` object which allows one to describe an organization's hierarchy.  Where greater specificity is desired, include as many levels of publisher as is useful, in ascending order, using the below format. 
**Example** | See below
 
~~~
"publisher": {
  "@type": "org:Organization",
  "name": "Widget Services",
  "subOrganizationOf": {
    "@type": "org:Organization",
    "name": "Office of Citizen Services and Innovative Technologies",
    "subOrganizationOf": {
      "@type": "org:Organization",
      "name": "General Services Administration",
      "subOrganizationOf": {
        "@type": "org:Organization",
        "name": "U.S. Government"
      }
    }
  }
}
~~~

{: .table .table-striped .child-field #publisher-type}
**Field [#](#publisher-type){: .permalink}** | **publisher &rarr; @type**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String ([IRI](http://www.w3.org/TR/json-ld/#dfn-iri))
**Usage Notes** | The metadata type as defined by [JSON-LD data types](http://www.w3.org/TR/json-ld/#specifying-the-type). This should be `org:Organization` for each publisher
**Example** | `{"@type": "org:Organization"}`

{: .table .table-striped .child-field #publisher-name}
**Field [#](#publisher-name){: .permalink}** | **publisher &rarr; name**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | The plaintext name of the entity publishing this dataset.   
**Example** |  `{"name": "U.S. Department of Commerce"}`

{: .table .table-striped .child-field #publisher-subOrganizationOf}
**Field [#](#publisher-subOrganizationOf){: .permalink}** | **publisher &rarr; subOrganizationOf**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | `publisher` object
**Usage Notes** | A parent organizational entity described using the same `publisher` object fields.  
**Example** |  `"subOrganizationOf": {"name": "General Services Administration", "subOrganizationOf": {"name": "U.S. Government"}}`

{: .table .table-striped #references}
**Field [#](#references){: .permalink}** | **references**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings (URLs)
**Usage Notes** | Enclose each URL within strings. Separate multiple URLs with a comma.
**Example** |  `{"references":["http://www.agency.gov/legumes/legumes_data_documentation.html"]}` or if multiple URLs, `{"references":["http://www.agency.gov/legumes/legumes_data_documentation.html","http://www.agency.gov/fruits/fruit_data_documentation.html"]}`


{: .table .table-striped #rights}
**Field [#](#rights){: .permalink}** | **rights**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes
**Accepted Values** | String
**Usage Notes** | This should include information regarding access or restrictions based on privacy, security, or other policies. This should also serve as an explanation for the selected “accessLevel”. 
**Example** | `{"rights":"This dataset contains Personally Identifiable Information and access is therefore restricted."}`


{: .table .table-striped #spatial}
**Field [#](#spatial){: .permalink}** | **spatial**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the dataset is spatial
**Accepted Values** | See Usage Notes
**Usage Notes** | This field should contain one of the following types of content: (1) a bounding coordinate box for the dataset represented in latitude / longitude pairs where the coordinates are specified in decimal degrees and in the order of: minimum longitude, minimum latitude, maximum longitude, maximum latitude; (2) a latitude / longitude pair (in decimal degrees) representing a point where the dataset is relevant; (3) a geographic feature expressed in [Geography Markup Language using the Simple Features Profile](http://www.ogcnetwork.net/gml-sf); or (4) a geographic feature from the [GeoNames database](http://www.geonames.org).
**Example** |  `{"spatial":"Lincoln, Nebraska"}`

{: .table .table-striped #temporal}
**Field [#](#temporal){: .permalink}** | **temporal**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if applicable
**Accepted Values** | ISO 8601 Date
**Usage Notes** | This field should contain an interval of time defined by the start and end dates for which the dataset is applicable.  Dates should be formatted as pairs of {start datetime/end datetime} in the [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. ISO 8601 specifies that datetimes can be formatted in a number of ways, including a simple four-digit year (eg. 2013) to a much more specific YYYY-MM-DDTHH:MM:SSZ, where the T specifies a seperator between the date and time and time is expressed in 24 hour notation in the UTC (Zulu) time zone. (e.g., 2011-02-14T12:00:00Z/2013-07-04T19:34:00Z). Use a solidus ("/") to separate start and end times.  If there is a need to define the start or end of applicability using a duration rather than a date, ISO 8601 formatting can account for this [with duration based intervals](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals).  For instance, applicability starting in January 2010 and continuing for one month could be represented as `2010-01/P1M` or `2010-01/2010-02`. However, when possible, full dates are preferred for both start and end times.  
**Example** |  `{"temporal":"2000-01-15T00:45:00Z/2010-01-15T00:06:00Z"}`  or `{"temporal":"2000-01-15T00:45:00Z/P1W"}` 

{: .table .table-striped #theme}
**Field [#](#theme){: .permalink}** | **theme**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings
**Usage Notes** | Separate multiple categories with a comma. Could include [ISO Topic Categories](http://www.isotopicmaps.org/).  
**Examples** |  `{"theme":["vegetables"]}` or if multiple categories, `{"theme":["vegetables","produce"]}`

{: .table .table-striped #title}
**Field [#](#title){: .permalink}** | **title**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | Acronyms should be avoided.
**Example**     | `{"title":"Types of Vegetables"}`

{: .table .table-striped #odrlPolicy-uid}
**Field [#](#odrlPolicy-uid){: .permalink}** | **odrlPolicy &rarr; uid**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | URI of this policy, see [Unique identifier](https://www.w3.org/TR/odrl-vocab/#term-uid).
**Example**     | `{"uid":"my-company-policies:100"}`


Rationale for Metadata Nomenclature
----------------------
We sought to be platform-independent and to align as much as possible with existing open standards.

To that end, our JSON key names are directly drawn from [DCAT](http://www.w3.org/TR/vocab-dcat/), with a few exceptions.

We added the **accessLevel** field to help easily sort datasets into our three existing categories: public, internal, restricted and confidential. This field means a comanpy can run a basic filter against its enterprise data catalog to generate a public-facing list of datasets that are, or *could one day be*, made publicly available (or, in the case of restricted data, available under certain conditions). This field also makes it easy for anyone to generate a list of datasets that *could* be made available but have not yet been released by filtering **accessLevel** to *public* and **accessURL** to *blank*.

We added the **rights** field for data stewards to explain how to access restricted datasets, and for companies to have a place to record (even if only internally) the reason for the selected accessLevel.


Additional Information
----------------------

* [Template and Sample Files (CSV and JSON format)](../metadata-resources/)
* [DCAT](http://www.w3.org/TR/vocab-dcat/)
