---
published: true
layout: default
title: Common Core Metadata Schema
permalink: /schema/
filename: schema.md
id: schema

---

This section contains guidance to support the use of the common core metadata to list agency datasets and application programming interfaces (APIs) as hosted at agency.gov/data.

Updates to the metadata schema can be found in the [changelog](/metadata-changelog). Current metadata version: 1.0 FINAL as of 8/26/13.

Standard Metadata Vocabulary
----------------------------
Metadata are selected fields or elements which describe data. The challenge is to define the standard metadata fields and the names of those fields so that the consumer of the data has sufficient information to process and understand the data. The more information that can be conveyed in a standardized regular format, the more valuable data becomes. Metadata can range from basic to advanced, from allowing one to discover the mere fact that a certain data asset exists and is about a general subject all the way to providing detailed semantic information that enables a high degree of machine readability. Making the metadata machine readable greatly increases its openness and utility.

Establishing a common vocabulary is the key to any communication, including communication between machines.  [DCAT](http://www.w3.org/TR/vocab-dcat/) is a hierarchical vocabulary specific to datasets that serves as the basis for the **common core metadata** required in this memorandum. The standard consists of a number of schemas (hierarchical vocabulary terms) that represent things that are most often looked for on the web, with [mappings](http://project-open-data.github.io/metadata-resources/#common_core_required_fields_equivalents) to their equivalents in other standards.  

What to Document -- Datasets and APIs
-------------------------------------

APIs allow developers (both internal to the agency and the public) to dynamically query a dataset. For example, a dataset [of farmers markets](https://explore.data.gov/Agriculture/Farmers-Markets-Geographic-Data/wfna-38ey) may be made available for download as a single file (e.g., a CSV), or may be made available to developers as an API, such that a developer could provide the agency with a ZIP Code, and retrieve a list of farmers markets in that area.

The catalog file should list all of an agency's datasets that can be made public, regardless of form -- this includes raw datasets and APIs.  Use **Endpoint** to indicate which datasets offer dynamic APIs (see below for more information on Common Core and Extensional metadata elements).


Metadata File Format --  JSON
---------------------------------------

The [Implementation Guidance](/implementation-guide/) available as a part of Project Open Data describes Agency requirements for the development of metadata as per the Open Data Policy.  A quick primer on the file format involved:

[JSON](http://www.json.org) is a lightweight data-exchange format that is very easy to read, parse and generate.  Based on a subset of the JavaScript programming language, JSON is a text format that is optimized for data interchange.  JSON is built on two structures: (1) a collection of name/value pairs; and (2) an ordered list of values.  

Links to downloadable examples of metadata files developed in this and other formats in [the metadata resources](/metadata-resources/).  Tools to help agencies produce and maintain their data inventories are [available on GitHub](http://www.github.com/project-open-data) and hosted at [Labs.Data.gov](http://labs.data.gov).


"Common Core" Required Fields
-----------------------------
The following "common core" fields are required, to be used to describe each entry:

*(Consult the 'Further Metadata Field Guidance' section lower in the page to learn more about the use of each element, including the range of valid entries where appropriate. Consult the [schema maps](/metadata-resources/#common_core_required_fields_equivalents) to find the equivalent Data.gov, RDFa Lite, and CKAN fields.)*

{: .table .table-striped}
Field               | Definition                                                                                                                                     |JSON
-------             | ---------------                                                                                                                                | --------------  
Title               | Human-readable name of the asset.  Should be in plain English and include sufficient detail to facilitate search and discovery.                | title
Description         | Human-readable description (e.g., an abstract) with sufficient detail to enable a user to quickly understand whether the asset is of interest. | description
Tags                | Tags (or keywords) help users discover your dataset, please include terms that would be used by technical and non-technical users.             | keywords
Bureau Code         | Combined agency and bureau code from [OMB A-11, Appendix C](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf) | bureauCode
Last Update         | Most recent date on which the dataset was changed, updated or modified.                                                                        | modified
Publisher           | The publishing agency.                                                                                                                         | publisher
Contact Name        | Contact person's name for the asset.                                                                                                           | person
Contact Email        | Contact person's email address. 			           	                                                                                             | mbox
Unique Identifier   | A unique identifier for the dataset or API as maintained within an Agency catalog or database.                                                 | identifier
Public Access Level | The degree to which this dataset **could** be made publicly-available, *regardless of whether it has been made available*. Choices: public (is or *could be* made publicly available), restricted public (available under certain conditions), or non-public (never able to be made publicly available)  | accessLevel


"Common Core" Required-if-Applicable Fields
-------------------------------------------
The following fields must be used to describe each dataset if they are applicable:

{: .table .table-striped}
Field               | Definition                                                                                                                                     |JSON
-------             | ---------------                                                                                                                                | --------------  
Access Level Comment | Explanation of how to access a restricted public dataset, or why a private dataset cannot be released. | accessLevelComment
Download URL        | URL providing direct access to the downloadable distribution of a dataset.                                                                     | accessURL
Endpoint            | Endpoint of web service to access dataset.                                                                                                     | webService
Format              | The file format or API type of the distribution.                                                                                               | format
License             | The license dataset or API is published with.  See [Open Licenses](/open-licenses/) for more information.   | license
Program Office      | The program office responsible for the dataset | programOffice
Spatial  	          | The range of spatial applicability of a dataset.  Could include a spatial region like a bounding box or a named place.                         | spatial
Temporal	          | The range of temporal applicability of a dataset (i.e., a start and end date of applicability for the data).                                   | temporal

Beyond Common Core -- Extending the Schema
------------------------------------------
"Extensional" and/or domain specific metadata can easily be added using other vocabularies to embedded HTML or XML markup even if it is not a term (entity/property) that will get indexed by the major search engines - it could still be indexed by other custom search engines and by Data.gov.  Agencies are encouraged to extend their metadata descriptions using elements from the "Expanded Fields" list shown below, or from any well-known vocabulary (including Dublin Core, FGDC, ISO 19115, NIEM, and a growing number of vocabularies published at [Vocab.Data.gov](http://vocab.data.gov)) as long as they are properly assigned.

Expanded Fields
---------------
Agencies are encouraged to use the following expanded fields when appropriate. Agencies may freely augment these fields with their own.

{: .table .table-striped}
Field               | Definition                                                                                                                                    | JSON
------              | ------                                                                                                                                        | ----

Category            | Main thematic category of the dataset.                                                                                                        | theme
Data Dictionary     | URL to the data dictionary for the dataset or API.  Note that documentation other than a data dictionary can be referenced using Related Documents as shown in the expanded fields.              | dataDictionary
Data Quality        | Whether the dataset meets the agency's Information Quality Guidelines (true/false).                                                                                                             | dataQuality
Distribution        | Holds multiple download URLs for datasets composed of multiple files and/or file types | distribution
Frequency           | Frequency with which dataset is published.                                                                                                    | accrualPeriodicity
Homepage URL        | Alternative landing page used to redirect user to a contextual, Agency-hosted "homepage" for the Dataset or API when selecting this resource from the Data.gov user interface. | landingPage
Language            | The language of the dataset.                                                                                                                  | language
Primary IT Investment UII | For linking a dataset with an IT Unique Investment Identifier (UII) | PrimaryITInvestmentUII
Related Documents   | Related documents such as technical information about a dataset, developer documentation, etc.                                                                                            | references
Release Date        | Date of formal issuance.                                                                                                                      | issued
System of Records   | If the systems is designated as a system of records under the Privacy Act of 1974, provide the URL to the System of Records Notice related to this dataset. | systemOfRecords


Further Metadata Field Guidance
-------------------------------

{: .table .table-striped}
**Field** | **accessLevel**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | Must be one of the following: "public", "restricted public", "non-public"
**Usage Notes** | This field refers to degree to which this dataset *could be made available* to the public, regardless of whether it is currently available to the public. For example, if a member of the public can walk into your agency and obtain a dataset, that entry is **public** even if there are no files online. A *restricted public* dataset is one only available under certain conditions or to certain audiences (such as researchers who sign a waiver). A *non-public* dataset is one that could never be made available to the public for privacy, security, or other reasons as determined by your agency.
**Example** | `{"accessLevel":"public"}`

{: .table .table-striped}
**Field** | **accessURL**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is available for public download.
**Accepted Values** | String (URL)
**Usage Notes** | This must be the **direct** download URL. Use **homepage** for landing or disambiguation pages, or **references** for documentation pages. For multiple downloads, use **distribution** to include as many **accessURL** entries as you need.
**Example** |  `{"accessURL":"http://www.agency.gov/vegetables/listofvegetables.csv"}`

{: .table .table-striped}
**Field** | **accrualPeriodicity**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | See usage notes
**Usage Notes** | Must be a value from [DCCDAccrualPeriodicity](http://www.ukoln.ac.uk/metadata/dcmi/collection-DCCDAccrualPeriodicity/): "Annual","Bimonthly","Semiweekly","Daily","Biweekly","Semiannual","Biennial","Triennial","Three times a week","Three times a month","Continuously updated","Monthly","Quarterly","Semimonthly","Three times a year","Weekly","Completely irregular"
**Example** |  `{"accrualPeriodicity":"annual"}`

{: .table .table-striped}
**Field** | **bureauCode**
----- | -----
**Cardinality** | (1,n)
**Required** | Yes, always
**Accepted Values** | Array of strings
**Usage Notes** | Represent each bureau responsible for the dataset according to the codes found in [OMB Circular A-11, Appendix C](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf). Start with the agency code, then a colon, then the bureau code.
**Example** | The Office of the Solicitor (86) at the Department of the Interior (010) would be: `{"bureauCode":["010:86"]}`


{: .table .table-striped}
**Field** | **dataDictionary**
----- | -----
**Cardinality** | (0,1)
**Required** | No (Documentation that is not specifically a data dictionary belongs in "references")
**Accepted Values** | String (URL)
**Usage Notes** | -
**Example** |  `{"dataDictionary":"http://www.agency.gov/vegetables/dictionary.html"}`

{: .table .table-striped}
**Field** | **dataQuality**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | Must be a boolean value of `true` or `false` (not contained within quote marks)
**Usage Notes** | Indicates whether a dataset conforms to the agency's information quality guidelines.
**Example** |  `{"dataQuality":true}`

{: .table .table-striped}
**Field** | **description**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This should be human-readable and understandable to an average person.
**Example** | `{"description":"This dataset contains a list of vegetables, including nutrition information and seasonality. Includes details on tomatoes, which are really fruit but considered a vegetable in this dataset."}`

{: .table .table-striped}
**Field** | **distribution**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | See Usage Notes
**Usage Notes** | Distribution is a concatenation, as appropriate, of the following elements: **accessURL** and **format**.  If an entry has only one dataset, enter details for that one; if it has multiple datasets (such as a bulk download and an API), separate entries with a comma, as seen below:  
  
    "distribution": [
            {
                "accessURL": "https://explore.data.gov/views/ykv5-fn9t/rows.csv?accessType=DOWNLOAD", 
                "format": "csv"
            }, 
            {
                "accessURL": "https://explore.data.gov/views/ykv5-fn9t/rows.json?accessType=DOWNLOAD", 
                "format": "json"
            }, 
            {
                "accessURL": "https://explore.data.gov/views/ykv5-fn9t/rows.xml?accessType=DOWNLOAD", 
                "format": "xml"
            }
        ]
        
{: .table .table-striped}
**Field** | **format**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is available for public download.
**Accepted Values** | String
**Usage Notes** | This must describe the exact files available at **accessURL** using [MIME Types](http://en.wikipedia.org/wiki/Internet_media_type), represented as a list.  
**Example** | `{"format": ['application/json'] }` `{"format": ['application/json', 'application/pdf', application/zip']}

{: .table .table-striped}
**Field** | **identifier**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This field allows third parties to maintain a consistent record for datasets even if title or URLs are updated. Agencies may integrate an existing system for maintaining unique identifiers or enter arbitrary characters for this field. However, each identifier **must** be unique across the agency's catalog and remain fixed. Characters should be alphanumeric.
**Example** |  `{"identifier":"1344"}`

{: .table .table-striped}
**Field** | **issued**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | ISO 8601 Date
**Usage Notes** | Dates should be [ISO 8601](http://www.w3.org/TR/NOTE-datetime) of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. 
**Example** |  `{"issued":"2001-01-15"}`

{: .table .table-striped}
**Field** | **keywords**
----- | -----
**Cardinality** | (1,n)
**Required** | Yes, always
**Accepted Values** | Array of strings
**Usage Notes** | Surround each keyword with quotes. Separate keywords with commas.
**Example** | `{"keywords": ["squash","vegetables","veggies","greens","leafy","spinach","kale","nutrition","tomatoes","tomatos"]}`

{: .table .table-striped}
**Field** | **landingPage**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String (URL)
**Usage Notes** | This field is not intended for an agency's homepage (e.g. www.agency.gov), but rather if a dataset has a human-friendly hub or landing page that users should be directed to for all resources tied to the dataset.  This allows agencies to better specify what a visitor receives after selecting one of the agency's datasets on Data.gov or in third-party mashups.
**Example** |  `{"landingPage":"http://www.agency.gov/vegetables"}`

{: .table .table-striped}
**Field** | **language**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings
**Usage Notes** | This should adhere to the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard. http://rishida.net/utils/subtags/ provides a good tool for checking and verifying language codes. A language tag is comprised of either one or two parts, the language subtag (such as en for English, sp for Spanish, wo for Wolof) and the regional subtag (such as US for United States, GB for Great Britain, MX for Mexico), separated by a hyphen. Regional subtags should only be provided when needed to distinguish a language tag from another one (such as American vs. British English).
**Examples** |  `{"language":"en-US"}` `{"language":"en-GB"}` `{"language":"jp"}` `{"language":"es-MX, wo, nv, en-US"}` 

{: .table .table-striped}
**Field** | **license**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | -
**Usage Notes** | See list of licenses.
**Example** |  `{"license":""}`

{: .table .table-striped}
**Field** | **mbox**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | Email address
**Usage Notes** | -
**Example** |  `{"mbox":"joe@agency.gov"}`

{: .table .table-striped}
**Field** | **modified**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | ISO 8601 Date
**Usage Notes** | Dates should be [ISO 8601](http://www.w3.org/TR/NOTE-datetime) of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. If this file is brand-new, enter the **issued** date here as well.
**Example** |  `{"modified":"2012-01-15"}`

{: .table .table-striped}
**Field** | **person**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | Name should be formatted as Last, First
**Example** |  `{"person":"Brown, John"}`

{: .table .table-striped}
**Field** | **PrimaryITInvestmentUII**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | Use to link a given dataset with its related IT Unique Investment Identifier.
**Example** |  `{"PrimaryITInvestmentUII":"123456"}`

{: .table .table-striped}
**Field** | **programOffice**
----- | -----
**Cardinality** | (0,n)
**Required** | Yes, if a program office owns or co-owns this dataset.
**Accepted Values** | Array of strings
**Usage Notes** | Enter the name of the program office responsible for the dataset, as found in the [Federal Program Inventory](http://goals.performance.gov/federalprograminventory).
**Example** |  `{"programOffice":["2.31. Survivors’ and Dependents’ Educational Assistance"]}`

{: .table .table-striped}
**Field** | **publisher**
----- | -----is
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | Departments and multi-unit agencies may use this field to describe which subordinate agency published this dataset.
**Example** |  `{"publisher":"U.S. Department of Education"}`

{: .table .table-striped}
**Field** | **references**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings (URLs)
**Usage Notes** | Enclose each URL within strings. Separate multiple URLs with a comma.
**Example** |  `{"references":["http://www.agency.gov/fruits/fruits.csv,http://www.agency.gov/legumes/legumes_directions.html",""http://www.agency.gov/fruits/fruits.csv,http://www.agency.gov/fruits/fruits_directions.html""]}`


{: .table .table-striped}
**Field** | **spatial**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the dataset is spatial
**Accepted Values** | See Usage Notes
**Usage Notes** | This field should contain one of the following types of content: (1) a bounding coordinate box for the dataset represented in latitude / longitude pairs where the coordinates are specified in decimal degrees and in the order of: minimum longitude, minimum latitude, maximum longitude, maximum latitude; (2) a latitude / longitude pair (in decimal degrees) representing a point where the dataset is relevant; (3) a geographic feature expressed in [Geography Markup Language using the Simple Features Profile](http://www.ogcnetwork.net/gml-sf); or (4) a geographic feature from the [GeoNames database](http://www.geonames.org).
**Example** |  `{"spatial":"Lincoln, Nebraska"}`

{: .table .table-striped}
**Field** | **temporal**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if applicable
**Accepted Values** | See Usage Notes
**Usage Notes** | This field should contain an interval of time defined by start and end dates.  Dates should be formatted as pairs of {start datetime/end datetime} in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. ISO 8601 specifies that datetimes can be formatted in a number of ways, including a simple four-digit year (eg. 2013) to a much more specific YYYY-MM-DDTHH:MM:SSZ, where the T specifies a seperator between the date and time and time is expressed in 24 hour notation in the UTC (Zulu) time zone. (e.g., 2011-02-14T12:00:00Z/2013-07-04T19:34:00Z). Use a solidus ("/") to separate start and end times.
**Example** |  `{"temporal":"2000-01-15T00:45:00Z/2010-01-15T00:06:00Z"}`

{: .table .table-striped}
**Field** | **theme**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings
**Usage Notes** | Separate multiple categories with a comma. Could include [ISO Topic Categories](http://www.isotopicmaps.org/).  
**Example** |  `{"theme":["vegetables","produce"]}`

{: .table .table-striped}
**Field**       | **title**
-----           | -----
**Cardinality** | (1,1)
**Required**    | Yes, always
**Accepted Values** | String
**Usage Notes** | Acronyms should be avoided.
**Example**     | `{"title":"Types of Vegetables"}`

{: .table .table-striped}
**Field** | **webService**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the dataset has an API
**Accepted Values** | String (URL)
**Usage Notes** | This field will serve to delineate the web services offered by an agency and will be used to aggregate cross-government API catalogs.
**Example** | `{"webService":"http://www.agency.gov/vegetables/vegetables.json"}`


Rationale for Metadata Nomenclature
----------------------
We sought to be platform-independent and to align as much as possible with existing open standards.

To that end, our JSON key names are directly drawn from [DCAT](http://www.w3.org/TR/vocab-dcat/), with a few exceptions.

We added the new **accessLevel** field to help easily sort datasets into our three existing categories: public, restricted public, and non-public. This field means an agency can run a basic filter against its enterprise data catalog to generate a public-facing list of datasets that are, or *could one day be*, made publicly available (or, in the case of restricted data, available under certain conditions). This field also makes it easy for anyone to generate a list of datasets that *could* be made available but have not yet been released by filtering **accessLevel** to *public* and **accessURL** to *blank*.

We added the new **accessLevelComment** field for data stewards to explain how to access restricted public datasets, and for agencies to have a place to record (even if only internally) the reason for not releasing a non-public dataset.

We added the new **systemOfRecords** field for data stewards to optionally link to a relevant System of Records Notice URL. A System of Records is a group of any records under the control of any agency from which information is retrieved by the name of the individual or by some identifying number, symbol, or other identifier assigned to the individual.

We added the new **bureauCode** field to ensure every dataset is connected in a standard way with an agency bureau.

We added the new **programOffice** field to ensure that when applicable, every dataset is connected in a standard way with an agency program office.

With respect to [dcat:dataQuality](http://www.w3.org/TR/vocab-dcat/#property--data-quality), we intentionally did **not** use this field and instead chose a boolean. At the time of this memo's release, DCAT had no specific guidance on the use of this field, and we actually do: whether or not the data meets an agency’s Information Quality Guidelines.


Additional Information
----------------------
* [Schema.org](http://schema.org)
* [DCAT](http://www.w3.org/TR/vocab-dcat/)
* [Vocab.Data.gov](http://vocab.data.gov)


Examples
--------
* [JSON](/metadata-resources/)
* [RDFa Lite](/metadata-resources/)
* [XML](/metadata-resources/)
