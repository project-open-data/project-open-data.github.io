---
layout: default
title: Slash Data Catalog Requirements
permalink: /catalog/
filename: catalog.md
---

This section provides further guidance and explanation for implementing the agency data catalog.    

/Data Requirements
------------------

The Open Data Policy requires agencies to list and describe all agency data that *can* be made publicly available (i.e. there are no valid restrictions to release) in a publicly available open data catalog using the [Project Open Data metadata schema](/v1.1/schema/).  It further requires the catalog to be human-readable and machine-readable.  This guidance describes to agencies steps for implementing this portion of the policy. 

Why this effort
---------------

The data that agencies collect and curate is a national treasure. Data from the National Weather Service and the Global Positioning System have each given rise to countless products and entire industries, yet much more government data exists, waiting to be tapped for its potential. 

To this end, the Digital Strategy action item 2.2 [requires](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government.html#existing-data) agencies to catalog and tag their data to make it more easily discoverable to private-sector developers and entrepreneurs.

Through this effort, agencies will begin to tag their data, using common standards, and in the process, build a comprehensive [folksonomy](http://en.wikipedia.org/wiki/Folksonomy) to make government data more easily discoverable. 

Each agency will describe their existing datasets as they see fit using the below described standard, and will make this metadata available at a consistent URL across agencies. Similar to existing practices already in use on the web, such as `sitemap.xml` or `robots.txt`, this will allow developers, both within the government and the public to programmatically discover government data in a machine-readable way.

Machine-Readable Format
-----------------------

All information deemed "machine-readable" required in this policy must be described in the JSON file format, with the option of RDFa Lite and XML as well.  See the [Project Open Data metadata schema](/v1.1/schema/) for the required schema.  Agencies must post their files at agency.gov/data.json (and optionally at /data.html or data.xml as well).  Additionally, the web page which reads and formats these files must be posted at /data/index.html (or /data.html).  The files should be updated a minimum of monthly.  It is our intent that future publications of Data.gov will simply crawl for all agency.gov/data.json to populate Data.gov.

Implementing
------------

To fulfill the requirements of this memorandum, agencies should begin to describe datasets as a catalog using the vocabulary of the [Project Open Data metadata schema](/v1.1/schema/). This catalog is to be published as a standalone JSON file at `agency.gov/data.json`.  Agencies may optionally also publish it with RDFa Lite, either embedded within a HTML page which include human readable markups (e.g., `agency.gov/data.html`) or as an XML file (e.g., `agency.gov/data.xml`). 

### JSON

JSON is a lightweight and simple way to represent machine-readable data. It is quickly becoming the *de facto* standard for shuttling data across the internet, fueled primarily by the rise of mobile and APIs. Modern programming languages can interpret and produce JSON out of the box. 

The JSON representation of the catalog should track directly with any other optional formats, with the exception that JSON keys should not contain the domain prefix (e.g., `dcterms:title` becomes `title` and `dcterms:description` becomes simply `description`). Catalogs should be composed of an array of JSON objects, and all fields other than keywords should be a string (where keywords is an array of strings).

Where optional fields are included in a catalog file but are unpopulated, they may be represented by a `null` value.  They should not be represented by an empty string (`""`).  

If a dataset has not yet been published or is not accessible, this may be indicated by the absence of `accessURL` or `downloadURL` (and thus `distribution`) in the record.  

The JSON catalog files should only use UTF-8 character encoding.  

### RDFa Lite

[RDFa Lite](http://www.w3.org/TR/rdfa-lite/) is a subset of RDFa (Resource Description Framework in Attribute) that provides a common syntax for expressing metadata on websites in a way that computers can understand and begin to formulate knowledge about those data about your organization. RDFa Lite embeds itself in existing, standard HTML pages. For example, if previously a dataset was described as `<h2>Name of Dataset</h2>`, RDFa would extend that markup as  `<h2 property="dcterms:title">Name of Dataset</h2>` (notice the additional of the property field). This additional metadata is not visible when the page is rendered, and does not affect the page layout or content. It simply provides an additional level of description for search engines, crawlers, and other programmatic consumers of your site's content.  It is acceptable for the RDFa Lite file to contain only the machine-readable metadata, but agencies may wish to add human readable content to display the metadata to the public if they so desire.


Generating Machine-Readable Reporting Files
-------------------------------------------

Agencies must follow the provided [Project Open Data metadata schema](/v1.1/schema/).  For tools and resources to generate these files, see [metadata resources](/v1.1/metadata-resources).


Inclusion of the Public Data Listing as a Record
------------------------------------------------

Each 'data.json' catalog file should include a record for the data asset that is the data catalog itself.  Contact Name and Contact Email can be used to provide a PoC for the 'data.json' efforts;  Data Standard (_conformsTo_) can be used to clarify which version of the Project Open Data metadata schema the agency is currently using; and Last Update can be used to indicate the date when the Public Data Listing was last modified.  


Including Non-Public Data and Redactions
----------------------------------------

While the Public Data Listing is primarily intended to list datasets thare are (or will be) available for public download, it can also serve as a way to publish information about non-public datasets and to provide information about accessing "restricted public" datasets. Data.gov provides a label to distinguish the `accessLevel` of datasets so that the public is aware that non-public dataset listings are only intended to provide metadata rather than access to the data itself. Metadata listings of non-public datasets on agency websites should also make this distinction clear. 

If an agency's FOIA office determines that any metadata provided for these non-public datasets needs to be redacted in order to be displayed publicly, agencies should consult the [Redaction Guidance](/redactions) page for more information. 

Presentation
------------

Agencies must have present a table/list of each dataset in the /data page.  The /data pages will serve as the authoritative source of publicly available agency data. The page must be populated with the list of datasets.  The presentation of this page must contain a table/list of the data in the agencies catalog with at least the following attributes:

* Dataset name (title)
* Dataset description (description)
* URL to the dataset (accessURL or webService)

The page must be populated from the machine-readable catalog file (e.g. data.xml or data.json) following the [Project Open Data metadata schema](/v1.1/schema/) described above.  Agencies are encouraged to add functionality to assist end-user discoverability.  Additional functions might be sorting, filtering or paging to help make a more digestible list.  Agencies are also encouraged to add more to the standard schema which might further assist end-user discoverability and usability (e.g. thumbnails).

Version 1.1 Update 
------------------

In the year since the release of the Open Data Policy, agencies and the public have suggested several updates to the metadata schema.  In the interest of stability, these updates have been tied together into a methodical update to a version 1.1 of the metadata schema.  Each issue has been rigorously discussed in its own issue thread and at the [July government-wide offsite session](https://github.com/project-open-data/project-open-data.github.io/issues/325) dedicated to this update.  

####Changes
* [Changelog for the version 1.1 schema](/metadata-changelog/).
*  These updates have been managed through [issues in a single milestone](https://github.com/project-open-data/project-open-data.github.io/milestones/Next%20Version%20of%20Common%20Core%20Metadata%20Schema%20(1.0%20-%3E%201.1.)).  Each issue within the milestone contains the related discussion and a link to the proposed edits.  
* The proposed edits can also be found bundled in [this combined pull request](https://github.com/project-open-data/project-open-data.github.io/pull/357).

####Resources
* [New updated metadata schema page](/v1.1/schema/). 
* [Field mapping from v1.0 to v1.1 schema](/v1.1/metadata-resources/#field-mappings).
* [Updated Metadata Schema v 1.1 Diagram](/v1.1/metadata-resources/#schema-object-model-diagram).
* [Sample data.json files with the version 1.1 schema](/v1.1/metadata-resources/#sample-data-files). 

####Guidance
 
* ["Project Open Data Metadata Updates v 1.1" presentation slides](https://gsa.github.io/datagov-presentations/metadata-v1.1/) and [video](http://www.youtube.com/watch?v=-kpEywSZPw8&feature=youtu.be&list=PLd9b-GuOJ3nFA8rIjFKllLSAJl61IBYKM) from the [October 15th webinar](https://www.digitalgov.gov/event/open-data-policy-common-core-metadata-v-1-1-updates/).

Supplemental Information
------------------------

Agencies are encouraged to supplement these requirements with other information, outreach and tools (e.g. blog posts, GitHub tools, customer engagement tools, etc.).  Components, bureaus, and programs are also encouraged to highlight their work implementing the Open Data Policy through their own channels.
