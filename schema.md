---
published: true
layout: default
title: Common Core Metadata Schema
permalink: /schema/
filename: schema.md
id: schema
---

This section contains guidance to support the use of the common core metadata to list agency datasets and application programming interfaces (APIs) as hosted at agency.gov/data.

Updates to the metadata schema can be found in the [changelog](/metadata-changelog). Current metadata version: 1.0 FINAL as of 9/20/13.

Standard Metadata Vocabulary
----------------------------
Metadata is structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use, or manage an information resource (NISO 2004, ISBN: 1-880124-62-9).  The challenge is to define and name standard metadata fields so that a data consumer has sufficient information to process and understand the described data. The more information that can be conveyed in a standardized regular format, the more valuable data becomes. Metadata can range from basic to advanced, from allowing one to discover the mere fact that a certain data asset exists and is about a general subject all the way to providing detailed information documenting the structure, processing history, quality, relationships, and other properties of a dataset. Making metadata machine readable greatly increases its utility, but requires more detailed standardization, defining not only field names, but how information is encoded in the metadata fields.

Establishing a common vocabulary is the key to communication. The **common core metadata** specified in this memorandum is based on [DCAT](http://www.w3.org/TR/vocab-dcat/), a hierarchical vocabulary specific to datasets. This specification defines three levels of metadata elements: Required, Required-if (conditionally required), and Expanded fields.  These elements were selected to represent information that is most often looked for on the web. To assist users of other metadata standards, [mappings](http://project-open-data.github.io/metadata-resources/#common_core_required_fields_equivalents) to equivalent elements in other standards are provided.  

What to Document -- Datasets and Web APIs
-------------------------------------

A dataset is an identifiable collection of structured data objects unified by some criteria (authorship, subject, scope, spatial or temporal extent...). A catalog is a collection of descriptions of datasets; each description is a metadata record. The intention of a data catalog is to facilitate data access by users who are first interested in a particular kind of data, and upon finding a fit-for-purpose dataset, will next want to know how to get the data.

A Web API (**A**pplication **P**rogramming **I**nterface) allows computer programs to dynamically query a dataset using the World Wide Web. For example, a dataset [of farmers markets](https://explore.data.gov/Agriculture/Farmers-Markets-Geographic-Data/wfna-38ey) may be made available for download as a single file (e.g., a CSV), or may be made available to developers through a Web API, such that a computer program could use a ZIP Code to retrieve a list of farmers markets in the ZIP Code area.

The catalog file for each agency should list all of the agency's datasets that can be made public, regardless of whether they are distributed by a file download or through a Web API.  The **Endpoint** data element is used to indicate which datasets offer Web APIs (see below for more information on Common Core and Extended metadata elements).


Metadata File Format --  JSON
---------------------------------------

The [Implementation Guidance](/implementation-guide/) available as a part of Project Open Data describes Agency requirements for the development of metadata as per the Open Data Policy.  A quick primer on the file format involved:

[JSON](http://www.json.org) is a lightweight data-exchange format that is very easy to read, parse and generate.  Based on a subset of the JavaScript programming language, JSON is a text format that is optimized for data interchange.  JSON is built on two structures: (1) a collection of name/value pairs; and (2) an ordered list of values.  

Where optional fields are included in a catalog file but are unpopulated, they may be represented by a `null` value.  They should not be represented by an empty string (`""`).  

Links to downloadable examples of metadata files developed in this and other formats in [the metadata resources](/metadata-resources/).  Tools to help agencies produce and maintain their data inventories are [available on GitHub](http://www.github.com/project-open-data) and hosted at [Labs.Data.gov](http://labs.data.gov).


"Common Core" Required Fields
-----------------------------
The following "common core" fields are required, to be used to describe each entry:

*(Consult the 'Further Metadata Field Guidance' section lower in the page to learn more about the use of each element, including the range of valid entries where appropriate. Consult the [schema maps](/metadata-resources#common-core-required-fields-equivalents) to find the equivalent DCAT, Schema.org, and CKAN fields.)*

{: .table .table-striped}
Field                   | Label               | Definition
--------------          | --------------      | --------------
title			        | Title               | Human-readable name of the asset.  Should be in plain English and include sufficient detail to facilitate search and discovery.                
description		        | Description         | Human-readable description (e.g., an abstract) with sufficient detail to enable a user to quickly understand whether the asset is of interest. 
keyword			        | Tags                | Tags (or keywords) help users discover your dataset; please include terms that would be used by technical and non-technical users.             
modified		        | Last Update         | Most recent date on which the dataset was changed, updated or modified.                                                                        
publisher		        | Publisher           | The publishing entity.                                                                                                                         
contactPoint	        | Contact Name        | Contact person's name for the asset.                                                                                                           
mbox			        | Contact Email       | Contact person's email address. 			           	                                                                                       
identifier		        | Unique Identifier   | A unique identifier for the dataset or API as maintained within an Agency catalog or database.                                                 
accessLevelComment | Public Access Level      | The degree to which this dataset **could** be made publicly-available, *regardless of whether it has been made available*. Choices: public (Data asset is or could be made publicly available to all without restrictions), restricted public (Data asset is available under certain use restrictions), or non-public (Data asset is not available to members of the public)

"Common Core" Required-if-Applicable Fields
-------------------------------------------
The following fields must be used to describe each dataset if they are applicable. U.S. Federal agencies must fill out BureauCode and ProgramCode.

{: .table .table-striped}
Field                   | Label                 | Definition
--------------          | --------------        | --------------                                                                                                                       
bureauCode				| Bureau Code			| Federal agencies, combined agency and bureau code from [OMB Circular A-11, Appendix C](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf) in the format of `015:11`.  
programCode				| Program Code			| Federal agencies, list the primary program related to this data asset, from the [Federal Program Inventory](http://goals.performance.gov/sites/default/files/images/FederalProgramInventory_FY13_MachineReadable_091613.xls). Use the format of `015:001`  
accessLevelComment		| Access Level Comment 	| An explanation for the selected “accessLevel” including instructions for how to access a restricted file, if applicable, or explanation for why a “non-public” or “restricted public” data asset is not “public,” if applicable. Text, 255 characters.  
accessURL				| Download URL        	| URL providing direct access to the downloadable distribution of a dataset.                                                                     
webService				| Endpoint            	| Endpoint of web service to access dataset.                                                                                                     
format					| Format              	| The file format or API type of the distribution.                                                                                               
license					| License             	| The license with which the dataset or API is published.  See [Open Licenses](/open-licenses/) for more information. 
spatial					| Spatial				| The range of spatial applicability of a dataset.  Could include a spatial region like a bounding box or a named place.                         
temporal				| Temporal				| The range of temporal applicability of a dataset (i.e., a start and end date of applicability for the data).                                   

Beyond Common Core -- Extending the Schema
------------------------------------------
"Extensional" and/or domain specific metadata can easily be added using other vocabularies even if it is not a term (entity/property) that will get indexed by the major search engines - it could still be indexed by other custom search engines and by Data.gov.  Agencies are encouraged to extend their metadata descriptions using elements from the "Expanded Fields" list shown below, or from any well-known vocabulary (including Dublin Core, FGDC, ISO 19115, NIEM, and a growing number of vocabularies published at [Vocab.Data.gov](http://vocab.data.gov)) as long as they are properly assigned.

Expanded Fields
---------------
Agencies are encouraged to use the following expanded fields when appropriate. Agencies may freely augment these fields with their own.

{: .table .table-striped}
Field                   | Label               | Definition
--------------          | --------------      | --------------                                                                                                                                       
theme					| Category            | Main thematic category of the dataset.                                                                                                        
dataDictionary			| Data Dictionary     | URL to the data dictionary for the dataset or API.  Note that documentation other than a data dictionary can be referenced using Related Documents as shown in the expanded fields.              
dataQuality				| Data Quality        | Whether the dataset meets the agency's Information Quality Guidelines (true/false).                                                                                                             
distribution			| Distribution        | Holds multiple download URLs for datasets composed of multiple files and/or file types 
accrualPeriodicity		| Frequency           | Frequency with which dataset is published.                                                                                                    
landingPage				| Homepage URL        | Alternative landing page used to redirect user to a contextual, Agency-hosted "homepage" for the Dataset or API when selecting this resource from the Data.gov user interface.
language				| Language            | The language of the dataset.                                                                                                                  
PrimaryITInvestmentUII	| Primary IT Investment UII | For linking a dataset with an IT Unique Investment Identifier (UII) 
references				| Related Documents   | Related documents such as technical information about a dataset, developer documentation, etc.                                                                                            
issued					| Release Date        | Date of formal issuance.                                                                                                                      
systemOfRecords			| System of Records   | If the systems is designated as a system of records under the Privacy Act of 1974, provide the URL to the System of Records Notice related to this dataset. 


Further Metadata Field Guidance (alphabetical by field)
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
**Field** | **accessLevelComment**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if accessLevel is "restricted public" or "non-public"
**Accepted Values** | String
**Usage Notes** | An explanation for the selected “accessLevel” including instructions for how to access a restricted file, if applicable, or explanation for why a “non-public” or “restricted public” data asset is not “public,” if applicable. 
**Example** | `{"accessLevelComment":"This dataset contains Personally Identifiable Information and could not be released for public access. A statistical analysis of the data contained herein, stripped of all personal identifiers, is available at http://another.website.gov/dataset."}`

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
**Example** |  `{"accrualPeriodicity":"Annual"}`

{: .table .table-striped}
**Field** | **bureauCode**
----- | -----
**Cardinality** | (0,n)
**Required** | Yes, for United States Federal Government agencies
**Accepted Values** | Array of Strings
**Usage Notes** | Represent each bureau responsible for the dataset according to the codes found in [OMB Circular A-11, Appendix C](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf). Start with the agency code, then a colon, then the bureau code.
**Example** |  The Office of the Solicitor (86) at the Department of the Interior (010) would be: `{"bureauCode":["010:86"]}`.  If a second bureau was also responsible, the format like this: `{"bureauCode":["010:86","010:04"]}`.

{: .table .table-striped}
**Field** | **contactPoint**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | -
**Example** | `{"contactPoint":"John Brown"}`

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
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | See Usage Notes
**Usage Notes** | Distribution is a concatenation, as appropriate, of the following elements: **accessURL** and **format**.  If an entry has only one dataset, enter details for that one; if it has multiple datasets (such as a bulk download and an API), separate entries as seen below:  
  
    "distribution": [
            {
                "accessURL":"https://explore.data.gov/views/ykv5-fn9t/rows.csv?accessType=DOWNLOAD", 
                "format":"text/csv"
            }, 
            {
                "accessURL":"https://explore.data.gov/views/ykv5-fn9t/rows.json?accessType=DOWNLOAD", 
                "format":"application/json"
            }, 
            {
                "accessURL":"https://explore.data.gov/views/ykv5-fn9t/rows.xml?accessType=DOWNLOAD", 
                "format":"text/xml"
            }
        ]
        
{: .table .table-striped}
**Field** | **format**
----- | -----
**Cardinality** | (0,1)
**Required** | Yes, if the file is available for public download.
**Accepted Values** | String
**Usage Notes** | This must describe the exact files available at **accessURL** using [MIME Types](http://en.wikipedia.org/wiki/Internet_media_type).  _[Also note [Office Open XML MIME types](http://blogs.msdn.com/b/vsofficedeveloper/archive/2008/05/08/office-2007-open-xml-mime-types.aspx)]_
**Example** | `{"format":"application/json"}`

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
**Usage Notes** | Dates should be [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. 
**Example** |  `{"issued":"2001-01-15"}`

{: .table .table-striped}
**Field** | **keyword**
----- | -----
**Cardinality** | (1,n)
**Required** | Yes, always
**Accepted Values** | Array of strings
**Usage Notes** | Surround each keyword with quotes. Separate keywords with commas.
**Example** | `{"keyword":["vegetables","veggies","greens","leafy","spinach","kale","nutrition"]}`

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
**Usage Notes** | This should adhere to the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard. This [language subtag lookup](http://rishida.net/utils/subtags/) provides a good tool for checking and verifying language codes. A language tag is comprised of either one or two parts, the language subtag (such as en for English, sp for Spanish, wo for Wolof) and the regional subtag (such as US for United States, GB for Great Britain, MX for Mexico), separated by a hyphen. Regional subtags should only be provided when needed to distinguish a language tag from another one (such as American vs. British English).
**Example** |  `{"language":["en-US"]}` or if multiple languages, `{"language":["es-MX","wo","nv","en-US"]}` 

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
**Usage Notes** | Dates should be [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) of least resolution. In other words, as much of YYYY-MM-DDThh:mm:ss.sTZD as is relevant to this dataset. If this file is brand-new, enter the **issued** date here as well.  
  
If there is a need to reflect that the dataset is continually updated, ISO 8601 formatting can account for this by [giving the duration](http://en.wikipedia.org/wiki/ISO_8601#Durations).  For instance, `P1D` for daily, `P2W` for every two weeks, and `PT5M` for every five minutes.  
**Example** |  `{"modified":"2012-01-15"}` or `{"modified":"P1D"}`

{: .table .table-striped}
**Field** | **PrimaryITInvestmentUII**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | Use to link a given dataset with its related IT Unique Investment Identifier, which can often be found in Exhibit 53 documents.
**Example** |  `{"PrimaryITInvestmentUII":"123456"}`

{: .table .table-striped}
**Field** | **programCode**
----- | -----
**Cardinality** | (0,n)
**Required** | Yes, for United States Federal Government Agencies
**Accepted Values** | Array of strings
**Usage Notes** | Provide an array of programs related to this data asset, from the [Federal Program Inventory](http://goals.performance.gov/sites/default/files/images/FederalProgramInventory_FY13_MachineReadable_091613.xls).
**Example** |  `{"programCode":["015:001"]}` or if multiple programs, `{"programCode":["015:001","015:002"]}`

{: .table .table-striped}
**Field** | **publisher**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | The plaintext name of the entity publishing this dataset.
**Example** |  `{"publisher":"U.S. Department of Education"}`

{: .table .table-striped}
**Field** | **references**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings (URLs)
**Usage Notes** | Enclose each URL within strings. Separate multiple URLs with a comma.
**Example** |  `{"references":["http://www.agency.gov/legumes/legumes_data_documentation.html"]}` or if multiple URLs, `{"references":["http://www.agency.gov/legumes/legumes_data_documentation.html","http://www.agency.gov/fruits/fruit_data_documentation.html"]}`

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
**Accepted Values** | ISO 8601 Date
**Usage Notes** | This field should contain an interval of time defined by start and end dates.  Dates should be formatted as pairs of {start datetime/end datetime} in the [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. ISO 8601 specifies that datetimes can be formatted in a number of ways, including a simple four-digit year (eg. 2013) to a much more specific YYYY-MM-DDTHH:MM:SSZ, where the T specifies a seperator between the date and time and time is expressed in 24 hour notation in the UTC (Zulu) time zone. (e.g., 2011-02-14T12:00:00Z/2013-07-04T19:34:00Z). Use a solidus ("/") to separate start and end times.  
  
If there is a need to reflect that the dataset is continually updated, ISO 8601 formatting can account for this [with repeating intervals](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals).  For instance, updated monthly starting in January 2010 and continuing through the present would be represented as: `R/2010-01/P1M`.

Updated every 5 minutes beginning on February 15, 2010 would be represented as: `R/2010-02-15/PT5M`.  
**Example** |  `{"temporal":"2000-01-15T00:45:00Z/2010-01-15T00:06:00Z"}`  or `{"temporal":"R/2000-01-15T00:45:00Z/P1W"}`  

{: .table .table-striped}
**Field** | **theme**
----- | -----
**Cardinality** | (0,n)
**Required** | No
**Accepted Values** | Array of strings
**Usage Notes** | Separate multiple categories with a comma. Could include [ISO Topic Categories](http://www.isotopicmaps.org/).  
**Examples** |  `{"theme":["vegetables"]}` or if multiple categories, `{"theme":["vegetables","produce"]}`

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

We added the new **programCode** field to ensure that when applicable, every dataset is connected in a standard way with an agency program office.

We added the new **dataQuality** to indicate whether or not the data meets an agency’s Information Quality Guidelines.


Additional Information
----------------------
* [Schema.org](http://schema.org)
* [DCAT](http://www.w3.org/TR/vocab-dcat/)
* [Vocab.Data.gov](http://vocab.data.gov)
* [Template and Sample Files (CSV and JSON format)](/metadata-resources/)
