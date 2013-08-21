---
layout: default
title: Future Case Study
permalink: /future-case-study/
filename: future-case-study.md
---

*October 16, 2012    
Primary Author - Waldo Jaquith*  

## Executive Summary
Agency’s compliance with previous open data mandates resulted in the provision of dozens of schema-less CSV files on their website in addition to several existing datasets, stored in an DB2 database, with a custom web application providing access to them. They were tasked with providing access to those datasets via a RESTful API, to provide machine-readable, atomic-level access to those records, with no additional funding to support the mandate.

Agency used the Project Open Data toolkit to accomplish this goal in a single day. The link to each CSV file was duplicated, a prefix added to pass the file through the GSA-hosted “CSV to API” URL, and the resulting link served as a fully functioning RESTful API. The “DB to API” program was copied onto the web server, it was configured to connect to each of the web app DB2 databases, and likewise immediately provided a RESTful API for accessing the contents of those databases.

Making this data accessible via an API allowed one of Agency’s databases and several of their CSV files to be integrated into the workflow for two other agencies. The data from another database, no longer constrained by a web app, became a primary data source for a privately developed iPhone app. In addition, several of these APIs are being used experimentally within Agency.

## Challenge
Under a presidentially mandated deadline, Agency was tasked with providing the contents of nearly 60 CSV files via RESTful APIs. None of the CSVs had schemas, some served as the only known source of that data, and nearly all used different column headers. They were also tasked with providing API-based access to the data backing their six-year-old, bespoke, web-based application, which was stored in a trio of DB2 databases. Agency had no staff in-house prepared to create an API interface and map it to dozens of CSV column schemas and three different database schemas, nor the ability to support such an interface.

## Approach
The Project Open Data toolkit provided a pair of turnkey tools that made it trivial to accomplish the goals of the project. The “CSV to API” tool, available both for download and as a GSA-hosted web service, acted as a proxy through which any of the CSV files could be requested and automatically converted into JSON, XML, or HTML. By choosing the GSA-hosted version, no installation or configuration was required. The link to each CSV file was duplicated and prepended with the request to the GSA’s server, and the resulting URL advertised as the API endpoint.

Providing API-based access to the databases was a likewise straightforward process. The toolkit’s “DB to API” program was copied onto the web server (consisting of just a few files), and the configuration file was edited to be given access to each of the three databases. Because two of the databases contained columns that contained personally identifiable information (PII), the configuration file was instructed to prohibit access to those columns. Each database’s resulting API endpoint was listed on the website, with query parameters providing the data as JSON, XML, and HTML, depending on the requester’s preference.

## Results
Providing their data as an API allowed it to be shared in new and interesting ways that Agency had not foreseen. Developers within Agency found that the data could be useful elsewhere on their website and within their internal workflow, and are using it experimentally for those purposes. Two other agencies are making calls from their websites to four of the CSV-based APIs and one of the database APIs, in order to provide an improved experience for their customers. One of the database APIs is being used by a private developer, who has created an iPhone app to make Agency’s data available to mobile users, prompting the agency to evaluate which other datasets might have commercial value.

## Lessons Learned
* Providing an API for existing bulk download data and databases no longer presents a technical challenge.
* Inter-agency collaboration is facilitated by adherence to common data exchange formats, and JSON and XML fill that role nicely.
* The provision of an API allowed Agency to have improved access to their own data, enhancing internal data sharing practices and their overall workflow.
* The private sector can meet demand that agencies cannot when given access to agencies’ APIs.

## Disclaimer
References to the product and/or service names of the hardware and/or software products used in this case study do not constitute an endorsement of such hardware and/or software products.
