---
published: true
layout: default
title: Implementation Guide
permalink: "/implementation-guide/"
filename: "implementation-guide.md"
---

## 1) Create and maintain an enterprise data inventory
*\[Due by 11/9/13\]*

Maintain a complete listing of all datasets owned, managed, collected, and/or created by your agency, described in a common format.

### A) Minimum Required for Compliance

Produce a single catalog or list of data managed in a single table, workspace, or other relevant location. Describe each dataset according to the [common core metadata](/schema/).

This listing can be maintained in Data Management Systems (DMS) such as the open-source [CKAN](http://www.ckan.org) platform or Software as a Service offerings like [Socrata](http://www.socrata.com/open-data-portal); a single spreadsheet, with each metadata field as its own column; or a DMS of your choosing.

### B) Best Practices and Examples

* Conduct a zero-based review effort of all existing data. Give this effort a very short timeframe and the very specific goal of producing a simple list of all data assets within the agency. Stop at the due date rather than stopping at the 100 percent marker, which is very difficult to reach in a single pass. Repeat at regular intervals.
* Develop and communicate a clear path for listing newly created or acquired datasets into the enterprise data inventory.
* The more employees who can contribute to the enterprise data inventory, whether by submitting feedback or by actually being able to log in and update listings in the agency DMS, the more accurate and complete your metadata will be.
* While it may initially seem that maintaining your agency data inventory in a single spreadsheet is the simplest solution, this is often not the case. A central spreadsheet is difficult for more than one person to maintain, easily leading to errors and omissions.
* In addition to the required [common core metadata](/schema/), work with your agency and topical experts to develop an expanded set of metadata fields that make sense for your vertical. Many already exist; explore [Schema.org](http://www.schema.org) as a starting point.
* Your agency can and should use this central inventory listing as an internal search tool to increase awareness of data collections already in existence and to prevent duplicative research efforts. For example, a search of this inventory may reveal that the combination of two existing datasets could produce the results sought by a proposed new collection.

  
## 2) Create and maintain a public data catalogue
*\[Due by 11/9/13\]*

Maintain a publicly accessible listing of all datasets maintained by your agency for harvesting by a central Data.gov search engine and the public at large.

While agencies are only required to list datasets with an "Access Level" value of "public," agencies are free to include metadata for other datasets at their discretion. (For example, if the agency intends to also use the catalog as an internal search tool.)

### A) Minimum Required for Compliance

Document any datasets or metadata in your enterprise data inventory that your agency does not believe can be made publicly available, in consultation with your Office of General Counsel or its equivalent.

Publish your agency’s enterprise data inventory, with the aforementioned information removed, to a file located at \[agency\].gov/data.json and described using (at minimum) the [common core metadata](/schema/). This file itself must be listed as a dataset within itself (see [an example of format](/examples/catalog-sample-extended.json) ); if you have multiple data.json files across your agency, include all of them in the top-level data.json at agency.gov/data.json.

While you could manually create this file in a text editor, it is recommended that you use one of the tools provided to generate this file automatically from your existing DMS or enterprise inventory file.

### B) Tools

* **Don’t have a DMS?** Use the hosted Catalog Generator to create your data.json file via basic data entry.
* **Is your data inventory stored in a CSV (Excel file)?** Use the [CSV-to-API generator](http://labs.data.gov/csv-to-api/) to automatically convert it into a compliant data.json file.
* **Is your data inventory stored in Socrata?** Socrata has native support for data.json, so any datasets stored are automatically exposed appropriately.  In addition, any of the extended properties specified in the [common core metadata](http://project-open-data.github.io/schema/) can be set on a per-dataset basis using the built-in metadata facilities.
* **Is your data inventory stored in CKAN?** Use the Data.gov extension (coming soon).
* **Not sure if your data.json file meets the requirements?** Paste your file into the [JSON Validator](https://github.com/project-open-data/json-validator) to receive real-time feedback.

### C) Best Practices and Examples

* Using the [common core metadata](/schema/) to describe your enterprise data inventory makes it very simple to use that inventory for your public inventory.

* A detailed and descriptive title, description, and set of keywords for each dataset is the difference between customers finding your data and no one finding your data. Since agency data catalogs are harvested and searchable on Data.gov, accurate and thorough metadata is the best way to connect customers with your data.
* Consider including restricted and non-public datasets in your public data inventory listing. Remember that this file contains metadata about the data and not the data themselves.
* When you include restricted datasets in your public data inventory, include specific information on how customers can request and qualify for access to those data.
* Integrate your public data inventory with a tool for soliciting feedback from customers to avoid duplicative effort. For example, the [Kickstart WordPress plugin](https://github.com/project-open-data/kickstart) can automatically generate a voting and commenting mechanism from your data.json file.
* Data consumers should not need to know an Agency's org chart in order to find data.  While it is helpful to include metadata about which part of the organization is providing the data, consider that secondary users will likely be searching for data using topical and thematic keywords as opposed to agency structure.
* In describing data, avoid use of agency acronyms wherever possible.

### D) Resources

* [Common Core Metadata](/schema/)

  
## 3) Engage with customers to help facilitate and prioritize data release
*\[Due by 11/9/13\]*

### Minimum Required for Compliance

Create a process to solicit feedback from customers about existing and potential future dataset releases, including (but not limited to):
* Suggestions about additional formats in which to release a particular dataset, such as via an API
* Suggestions as to which datasets to release next  

### A) Tools

* **Have WordPress?** Use the [Data Kickstart plugin](https://github.com/project-open-data/kickstart) to provide an instant voting interface based on your existing data.json file, allowing customers to vote up or down datasets and to leave comments on specific datasets.
* **Using Socrata?** Ask to have the "Suggest a Dataset" feature turned on, and the opened data portal will allow the public to make dataset suggestions.
* **Using CKAN?** Ask to have the DISQUS plugin installed and integrated into appropriate section templates.

### B) Best Practices and Examples

* The required set of [common core metadata](/schema/) includes fields for a contact name (“person”) and an email address (“mbox”). Listing specific, accurate information in these fields for each dataset ensures that customers can give direct feedback on a dataset to the person who is most likely to be able to act on that feedback.
* If you enable customers to leave comments on datasets, ensure someone at your agency monitors these comments and responds in a timely manner. When new visitors see outdated, unanswered comments, they are less likely to provide feedback.
* Consider a feedback mechanism and structure whereby data quality issues identified by data consumers can be submitted and vetted and integrated back into source data systems.
* Consider use cases for how data is likely to be accessed by API, whether by specific queries and subsets, or by entire tables, and consider building API infrastructure that is optimized to meet those needs.

## 4) Clarify Roles and Responsibilities
*\[Due by 11/9/13\]*

### A) Minimum Required for Compliance

Ensure your agency CIO is positioned and authorized to implement the requirements of this Memorandum, as per the Clinger-Cohen Act of 1996, in coordination with the agency's Chief Acquisition Officer, Chief Financial Officer, Chief Technology Officer, Senior Agency Official for Geospatial Information, Senior Agency Official for Privacy (SAOP), Chief Information Security Officer (CISO), Senior Agency Official for Records Management, and Chief Freedom of Information Act (FOIA) Officer.

Ensure there is also someone in your agency who is, more specifically, responsible for the promotion of efficient and effective data release practices across the agency. 

Ensure your privacy and security officials are positioned with the authority to identify information that may require additional protection and agency activities that may require additional safeguards.

Update your Senior Agency Official for Privacy (SAOP) responsibilities to include incorporating a full analysis of privacy, confidentiality, and security issues into every step of the agency information system planning process.

If your Senior Agency Official for Privacy is not positioned within the office of the CIO, designate an official within the office of the CIO to liaise with the privacy office.

### B) Resources

* [The Clinger-Cohen Act of 1996](http://govinfo.library.unt.edu/npr/library/misc/itref.html)
* [OMB Memorandum M-05-08](http://www.whitehouse.gov/sites/default/files/omb/assets/omb/memoranda/fy2005/m05-08.pdf)

  
## 5) Update IRM Strategic Plan

### A) Minimum Required for Compliance

Review and update your existing IRM Strategic Plan to describe how your agency has institutionalized and operationalized the requirements of this Memorandum. In your IRM Strategic Plans under the *Managing Information as an Asset* section, you should describe your approach to managing information as an asset, including how your agency will promote interoperability and openness throughout the information life cycle and properly safeguard information that may require additional protection. Agencies should specifically address how information collection and creation efforts, information system design, and data management and release practices will support interoperability and openness. This may involve describing updates to policies and processes, and offering employee trainings. 

Additionally, you should include information on:
* Use of open licenses
* Use of open standards
* Collecting data in a machine-readable, standards-compliant way
* Publishing data in open formats
* Privacy analysis, with a presumption of openness

### B) Resources

* [44 USC 3506 (b)(2)](http://www.gpo.gov/fdsys/granule/USCODE-2011-title44/USCODE-2011-title44-chap35-subchapI-sec3506/content-detail.html)
* [OMB Circular A-11](http://www.whitehouse.gov/omb/circulars_a11_current_year_a11_toc)
* [OMB FY 13 PortfolioStat Guidance](http://www.whitehouse.gov/blog/2013/03/27/portfoliostat-20-driving-better-management-and-efficiency-federal-it)

<center><h2><u>Ongoing</u></h2></center>  

  
## 6) Start a New Data Creation or Collection as Open Data

Collect or create information (data) in a way that supports downstream information processing and dissemination activities.

### A) Minimum Required for Compliance

* Collect data electronically whenever possible.
* Choose or build data collections tool that:  
    - Export data in machine-readable formats. Consult [this list](/faq/) for suggested machine-readable formats.  
    - Use existing open data standards, if available.  
* Apply an open license, in consultation with best practices, to information as it is collected or created so that if data are made public there are no restrictions on the use or re-use of these data.
* Collect the minimum amount of data needed to achieve your stated goals, in order to avoid having to remove additional personally-identifiable information later in the collection or release process.
* Review information for privacy, confidentiality pledge, security, and other restrictions to release.
* Post the data files in an Internet-accessible location, listing this location in the dataset’s data inventory entry.
* Where appropriate, provide access to the data via an API.

### B) Tools

* **Is your data file a CSV?** Use the [CSV-to-API generator](http://labs.data.gov/csv-to-api/) to automatically create a basic read-only REST API for your CSV data.
* **Is your data stored in a database?** Use the [Database-to-API generator](http://labs.data.gov/db-to-api/readme.md) to automatically create a basic read-only REST API for accessing the database data.
* **Do you have spatial data?** Use the [Spatial Search tool](https://github.com/project-open-data/SpatialSearch) to improve the searchability of your data.

### C) Best Practices and Examples

* Make sure your machine-readable data is also human-readable. This may mean providing two separate files, but more likely means including a human-readable key and a detailed description.
* It is much easier to collect data in the way you will eventually distribute and publish it, rather than having to manipulate the data midway through to comply with later requirements.


### D) Resources
* [Open Government Directive](http://www.whitehouse.gov/sites/default/files/omb/assets/memoranda_2010/m10-06.pdf)
* [NIST FIPS Publication 199](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf)
* [Controlled Unclassified Information requirements](http://www.archives.gov/cui/)
* [Mosaic Effect](http://www.computerworld.com/s/article/91109/Sidebar_The_Mosaic_Effect)
* [W3C Cookbook for Open Government Linked Data](http://www.w3.org/2011/gld/wiki/Linked_Data_Cookbook)

  
## 7) Release an Existing Data Collection as Open Data

### A) Minimum Required for Compliance

* Review information for privacy, confidentiality pledge, security, and other restrictions to release.
* Make the data available in a machine-readable format. See [this list](/faq/) of commonly accepted machine-readable formats. Where appropriate, provide access to the data via an API.

* Post the data files in an Internet-accessible location, listing this location the dataset’s entry in your agency inventory listing.

### B) Tools

* **Is your data file a CSV?** Use the [CSV-to-API generator](http://labs.data.gov/csv-to-api/) to automatically create a basic read-only REST API for your CSV data.
* **Is your data stored in a database?** Use the [Database-to-API generator](http://labs.data.gov/db-to-api/readme.md) to automatically create a basic read-only REST API for accessing the database data.
* **Do you have spatial data?** Use the [Spatial Search tool](https://github.com/project-open-data/SpatialSearch) to improve the searchability of your data.

### C) Best Practices and Examples

* Let us know about your machine-readable, API-accessible data so we can highlight it here.

  
## 8) Create a New (or Significantly Modify an Existing) Information System

New, or significantly modified, information systems need to support interoperability and information accessibility.

### A) Minimum Required for Compliance

* Ensure the system can export data in a machine-readable format.
* Ensure data is separated from the application layer of the system to maximize future export and/or reuse of the data.
* Store and export data using open data standards whenever possible, including the [common core metadata](/schema/) required by this Memorandum.
* Document all data schemas and dictionaries used by the system.

### B) Best Practices and Examples

* Consider downstream and secondary uses of the data as referenced in [M-13-13 — Memorandum for the Heads of Executive Departments and Agencies](http://project-open-data.github.io/policy-memo/) and brainstorm both the known and potential future uses of the data when designing an information system.
* Consider the use of applicable data standards and codesets that exist for common data elements, such as ANSI/INCITS, ISO and others.
* Consider implementing a front-end automated data QA system that can provide lookup services and/or validate many core data elements a.) on data entry, for example by API call which prepopulates picklists and autocomplete values to simplify and streamline data entry while also ensuring consistent entry of data.  Another example would be use of a geocoding service to validate street addresses and provide lat/long values and map previews for visual feedback of entered information.
* Consider implementing a back-end data QA framework that can automate many data QA functions, along with providing a data stewardship tool
* Consider developing a robust data stewardship community and governance structure for curating and maintaining high-quality data.
* The more open and flexible a system is now, the less likely it is that it will need to be replaced or significantly modified in the future. Your agency should weigh upfront system design costs with the long-term potential cost savings and benefits.

### C) Resources

* [Common Approach to Federal Enterprise Architecture](http://www.whitehouse.gov/sites/default/files/omb/assets/egov_docs/common_approach_to_federal_ea.pdf)
