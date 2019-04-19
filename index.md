---
published: true
permalink: /
layout: hero
filename: index.md
title: Project Company Data
---

## 1. Background

Data is a valuable resource and a strategic asset to a company, its partners, and the public.  Managing this data as an asset and making it available, discoverable, and usable not only promotes efficiency and effectiveness in business, but also has the potential to create economic opportunity and improve quality of life.

This project is based on the work of [Project Open Data](https://project-open-data.cio.gov/).

----------------

## 2. Definitions

This section is a list of definitions and principles used to guide the project.

2-1 [Open Data Glossary](glossary/) - The glossary of open data terms.

2-2 [Project Open Data Metadata Schema](v1.1/schema/) - The schema used to describe datasets, APIs, and published data at agency.gov/data.

----------------

## 3. Implementation Guidance

Implementation guidance for open data practices.

3-1 [Documenting APIs](v1.1/api/) - The specific guidance for documenting APIs in the data catalogs.   

----------------

## 4. Tools

This section is a list of ready-to-use solutions or tools that will help agencies jump-start their open efforts.  These are real, implementable, coded solutions that were developed to significantly reduce the barrier to implementing open data at your agency.  Many of these tools are hosted at [Labs.Data.gov](http://labs.data.gov) and developers are encouraged to contribute improvements to them and contribute other tools which help us implement the spirit of Project Open Data.

#### Data Catalog Tools

4-1 [Project Open Data Dashboard](http://labs.data.gov/dashboard/) - A dashboard to check the status of /data and /data.json at each agency. This also includes a validator.

4-2 [Data.json validator](http://labs.data.gov/dashboard/validate) - This validator can help you check compliance with the Project Open Data schema.

4-3 [Data.json File Merger](http://data.json.file.merger.ongithub.com/) - Allows the easy combination of multiple data.json files from component agencies or bureaus into one combined file.

4-4 [ckanext-datajson](https://github.com/HHS/ckanext-datajson) - A CKAN extension to generate agency.gov/data.json catalog files.

4-5 [Inventory.data.gov](https://inventory.data.gov/) - A data management tool to generate and maintain and merge Enterprise Data Inventory and Public Data Listing JSON files. - *[How to Guide](https://www.digitalgov.gov/resources/inventory-data-gov-guide/)*

4-6 [DKAN](http://drupal.org/project/dkan) - An open data portal modeled on [CKAN](http://ckan.org/). DKAN is a stand alone Drupal distribution that allows anyone to spin up an open data portal in minutes as well as two modules, [DKAN Dataset](http://drupal.org/project/dkan_dataset) and [DKAN Datastore](http://drupal.org/project/dkan_datastore), that can be added to existing Drupal sites to add data portal functionality to an exist Drupal site.

4-7 [Datahub.io](http://datahub.io/) - A service offered by the Open Knowledge Foundation that allows  civic bodies to host data publicly for free. 

4-8 [Esri Geoportal Server](https://github.com/Esri/geoportal-server/) - Open source catalog supporting ISO/FGDC/DC/... metadata with mapping to DCAT to support agency.gov/data.json listings in addition to providing [OGC CSW](http://www.opengeospatial.org/standards/cat), [OAI-PMH](http://www.openarchives.org/pmh/) and [OpenSearch](http://www.opensearch.org). Supports automated harvesting from other open catalog sources.

4-9 [pycsw](http://pycsw.org) - Lightweight and flexible open source catalog supporting ISO/FGDC/DC/DIF providing discovery via [OGC CSW](http://www.opengeospatial.org/standards/cat), [OpenSearch](http://www.opensearch.org)/[OGC Geo and Time Extensions](http://www.opengeospatial.org/standards/opensearchgeo), [OAI-PMH](http://www.openarchives.org/pmh/), [SRU](http://www.loc.gov/standards/sru/).  Supports automated harvesting of remote metadata, WAFs and OGC Web Services.

4-10 [GeoNode](http://geonode.org/) - An open source spatial data infrastructure (SDI) that enables federal agencies and other organizations to publish open geographic data in [standard open formats](http://geonode.readthedocs.org/en/latest/tutorials/devel/api/ogc.html).  GeoNode uses [pycsw](http://pycsw.org/) to publish [standard ISO metadata](https://www.fgdc.gov/metadata/geospatial-metadata-standards) and to support search/harvest functionality, including automated harvesting from CKAN.  Users can easily visualize data online or download data via the web user interface or programmatically.

4-11 [US Open Data Institute's Let Me Get That Data For You](http://lmgtdfy.usopendata.org/) - A simple search interface that shows you what public machine-readable data is already live on your website. This tool is useful for ensuring your Public Data Listing is complete. 

#### Converter Tools 

4-11 [Database to API](https://github.com/project-open-data/db-to-api) - Dynamically generate RESTful APIs from the contents of a database table. Provides JSON, XML, and HTML. Supports most popular databases. -&nbsp;*[Hosted](http://labs.data.gov/db-to-api/readme.md)*

4-12 [CSV to API](https://github.com/project-open-data/csv-to-api) - Dynamically generate RESTful APIs from static CSVs. Provides JSON, XML, and HTML. -&nbsp;*[Hosted](http://labs.data.gov/csv-to-api/)*

4-13 [JSON-to-CSV Converter](http://konklone.io/json/) - A handy means of converting data.json files to a spreadsheet-friendly format. [CSVkit](http://csvkit.readthedocs.org/en/latest/scripts/in2csv.html) is a command line suite of utilities for converting to and working with CSV. A [similar tool](http://shancarter.github.io/mr-data-converter/) can provide basic CSV-to-JSON functionality.

4-14 [Libre Information Batch Restructuring Engine](https://github.com/commonwealth-of-puerto-rico/libre) - Open data conversion and API tool, created by the Office of the Chief Information Officer of the Commonwealth of Puerto Rico.

4-15 [ESRI2Open](http://github.com/project-open-data/esri2open) - A tool which converts spatial and non-spatial data form ESRI only formats to the Open Data formats, CSV, JSON, or GeoJSON, making them more a part of the WWW ecology.

#### Engagement Tools 

4-16 [Kickstart](https://github.com/project-open-data/kickstart) - A WordPress plugin to help agencies kickstart their open data efforts by allowing citizens to browse existing datasets and vote for suggested priorities.

#### Data Tools (Miscellaneous) 

4-17 [Spatial Search](https://github.com/project-open-data/SpatialSearch) - A RESTful API that allows the user to query geographic entities by latitude and longitude, and extract data.

4-18 [PDF Filler](https://github.com/project-open-data/pdf-filler) - PDF Filler is a RESTful service (API) to aid in the completion of existing PDF-based forms and empower web developers to use browser-based forms and modern web standards to facilitate the collection of information. -&nbsp;*[Hosted](http://labs.data.gov/pdf-filler)*

4-19 [API Sandbox](http://project-open-data.github.com/api-sandbox) - Interactive API documentation systems.

4-20 [CFPB Project Qu](https://github.com/cfpb/qu) - The CFPB's in-progress data publishing platform, created to serve public data sets.

4-21 [HMDA Tools](https://github.com/cfpb/hmda-tools) - Lightweight tools to make importing and analyzing [Home Mortgage Disclosure Act](http://en.wikipedia.org/wiki/Home_Mortgage_Disclosure_Act) data easier.

4-22 [DataVizWiz](https://drupal.org/project/datavizwiz) - A [Drupal](http://drupal.org) module that provides a fast way to get data vizualizations online.

4-23 [Tabula](http://tabula.technology/) - Tabula is a tool for liberating data tables locked inside PDF files. researchers use Tabula to turn PDF reports into Excel spreadsheets, CSVs, and JSON files for use in analysis and database applications.

----------------

## 5. Resources

This section contains programmatic tools, resources, and/or checklists to help programs determine open data requirements.

5-1 [Metadata Resources](v1.1/metadata-resources/) -
Resources to provide guidance and assistance for each aspect of creating and maintaining agency.gov/data catalog files.

5-2 [API Basics](api-basics/) - Introductory resources for understanding application programming interfaces (APIs).

----------------

**For Developers: [View all appendices](https://github.com/vwt-digital/project-company-data.github.io) (and source)**

----------------

