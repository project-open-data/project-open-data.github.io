---
published: true
permalink: /
layout: hero
filename: index.md
title: Project Open Data
---

##1. Background

Data is a valuable national resource and a strategic asset to the U.S. Government, its partners, and the public.  Managing this data as an asset and making it available, discoverable, and usable – [in a word, open](principles/) – not only strengthens our democracy and promotes efficiency and effectiveness in government, but also has the potential to create economic opportunity and improve citizens’ quality of life.

For example, when the U.S. Government released weather and GPS data to the public, it fueled an industry that today is valued at tens of billions of dollars per year. Now, weather and mapping tools are ubiquitous and help everyday Americans [navigate their lives](business-case/).

The ultimate value of data can often not be predicted. That’s why the U.S. Government released a [policy](policy-memo/) that instructs agencies to manage their data, and information more generally, as an asset from the start and, wherever possible, release it to the public in a way that makes it open, discoverable, and usable.

The White House developed Project Open Data – this collection of code, tools, and case studies – to help agencies adopt the Open Data Policy and unlock the potential of government data. Project Open Data will evolve over time as a community resource to facilitate broader adoption of open data practices in government. Anyone – government employees, contractors, developers, the general public – can view and contribute. Learn more about [Project Open Data Governance](governance/) and dive right in and help to build a better world through the power of open data.

----------------

##2. Definitions

This section is a list of definitions and principles used to guide the project.

2-1 [Open Data Principles](principles.md) - The set of open data principles.

2-2 [Standards, Specifications, and Formats](standards.md) - Standards, specifications, and formats supporting open data objectives.

2-3 [Open Data Glossary](glossary.md) - The glossary of open data terms.

2-4 [Open Licenses](licenses.md) - The definition for open licenses.

2-5 [Common Core Metadata](schema/) - The schema used to describe datasets, APIs, and published data at agency.gov/data.

----------------

##3. Implementation Guidance

Implementation guidance for open data practices.

3-1 [U.S. Government Policy on Open Data](policy-memo.md) - Full text of the memorandum.

3-2 [Implementation Guide](implementation-guide.md) - Official OMB implementation guidance for each step of implementing the policy.

3-3 [Public Data Listing](catalog.md) - The specific guidance for publishing the Open Data Catalog at the agency.gov/data page.

3-4 [Frequently Asked Questions](faq.md) - A growing list of common questions and answers to facilitate adoption of open data projects.

3-5 [Open Data Cross Priority (CAP) Goal](http://goals.performance.gov/opendata) - Information on the development of the Open Data CAP goal as required in the [Open Data Executive Order](http://www.whitehouse.gov/the-press-office/2013/05/09/executive-order-making-open-and-machine-readable-new-default-government).

----------------

##4. Tools

This section is a list of ready-to-use solutions or tools that will help agencies jump-start their open efforts.  These are real, implementable, coded solutions that were developed to significantly reduce the barrier to implementing open data at your agency.  Many of these tools are hosted at [Labs.Data.gov](http://labs.data.gov) and developers are encouraged to contribute improvements to them and contribute other tools which help us implement the spirit of Project Open Data.

4-1 [Database to API](https://github.com/project-open-data/db-to-api) - Dynamically generate RESTful APIs from the contents of a database table. Provides JSON, XML, and HTML. Supports most popular databases. -&nbsp;*[Hosted](http://labs.data.gov/db-to-api/readme.md)*

4-2 [CSV to API](https://github.com/project-open-data/csv-to-api) - Dynamically generate RESTful APIs from static CSVs. Provides JSON, XML, and HTML. -&nbsp;*[Hosted](http://labs.data.gov/csv-to-api/)*

4-3 [Spatial Search](https://github.com/project-open-data/SpatialSearch) - A RESTful API that allows the user to query geographic entities by latitude and longitude, and extract data.

4-4 [Kickstart](https://github.com/project-open-data/kickstart) - A WordPress plugin to help agencies kickstart their open data efforts by allowing citizens to browse existing datasets and vote for suggested priorities.

4-5 [PDF Filler](https://github.com/project-open-data/pdf-filler) - PDF Filler is a RESTful service (API) to aid in the completion of existing PDF-based forms and empower web developers to use browser-based forms and modern web standards to facilitate the collection of information. -&nbsp;*[Hosted](http://labs.data.gov/pdf-filler)*

4-6 [Catalog Generator](https://github.com/project-open-data/catalog-generator) - Multi-format tool to generate and maintain agency.gov/data catalog files. - *[Hosted](http://data.civicagency.org/datagov/csv_to_json)* *[Alternative](http://project-open-data.github.com/catalog-generator/)*

4-7 A data.json validator can help you check compliance with the POD schema. - *[Hosted](http://data.civicagency.org/validate)*

4-8 [Project Open Data Dashboard](http://data.civicagency.org) - A dashboard to check the status of /data and /data.json at each agency. This also includes a validator.

4-9 [Data.json File Merger](http://data.json.file.merger.ongithub.com/) - Allows the easy combination of multiple data.json files from component agencies or bureaus into one combined file.

4-10 [API Sandbox](http://project-open-data.github.com/api-sandbox) - Interactive API documentation systems.

4-11 [CFPB Project Qu](https://github.com/cfpb/qu) - The CFPB's in-progress data publishing platform, created to serve public data sets.

4-12 [HMDA Tools](http://https://github.com/cfpb/hmda-tools) - Lightweight tools to make importing and analyzing [Home Mortgage Disclosure Act](http://en.wikipedia.org/wiki/Home_Mortgage_Disclosure_Act) data easier.

4-13 [ESRI2Open](http://github.com/project-open-data/esri2open) - A tool which converts spatial and non-spatial data form ESRI only formats to the Open Data formats, CSV, JSON, or GeoJSON, making them more a part of the WWW ecology.

4-14 [ckanext-datajson](https://github.com/HHS/ckanext-datajson) - A CKAN extension to generate agency.gov/data.json catalog files.

4-15 [DKAN](http://drupal.org/project/dkan) - An open data portal modeled on [CKAN](http://ckan.org/). DKAN is a stand alone Drupal distribution that allows anyone to spin up an open data portal in minutes as well as two modules, [DKAN Dataset](http://drupal.org/project/dkan_dataset) and [DKAN Datastore](http://drupal.org/project/dkan_datastore), that can be added to existing Drupal sites to add data portal functionality to an exist Drupal site.

4-16 [DataVizWiz](https://drupal.org/project/datavizwiz) - A [Drupal](http://drupal.org) module that provides a fast way to get data vizualizations online.

4-17 [Esri Geoportal Server](https://github.com/Esri/geoportal-server/) - Open source catalog supporting ISO/FGDC/DC/... metadata with mapping to DCAT to support agency.gov/data.json listings in addition to providing [OGC CSW](http://www.opengeospatial.org/standards/cat), [OAI-PMH](http://www.openarchives.org/pmh/) and [OpenSearch](http://www.opensearch.org). Supports automated harvesting from other open catalog sources.

4-18 [Libre Information Batch Restructuring Engine](https://github.com/commonwealth-of-puerto-rico/libre) - Open data conversion and API tool, created by the Office of the Chief Information Officer of the Commonwealth of Puerto Rico.

4-19 [JSON-to-CSV Converter](http://konklone.io/json/) - A handy means of converting data.json files to a spreadsheet-friendly format.  A [similar tool](http://shancarter.github.io/mr-data-converter/) can provide basic CSV-to-JSON functionality.

----------------

##5. Resources

This section contains programmatic tools, resources, and/or checklists to help programs determine open data requirements.

5-1 [Metadata Resources](metadata-resources.md) -
Resources to provide guidance and assistance for each aspect of creating and maintaining agency.gov/data catalog files.

5-2 [Business Case for Open Data](business-case.md) - Overview of the benefits associated with open data.

5-3 [General Workflows for Open Data Projects](future-case-study.md) - A comprehensive overview of the steps involved in open data projects and their associated benefits.

5-4 [Open License Examples](license-examples.md) - Potential licenses for data and content.

5-5 [API Basics](api-basics.md) - Introductory resources for understanding application programming interfaces (APIs).

5-6 [Data Release Safeguard Checklist](http://www.data.gov/sites/default/files/attachments/Privacy%20and%20Security%20Checklist.pdf) - Checklist to enable the safe and secure release of data.

5-7 [Digital PII Checklist](digital-pii-checklist.md) - Tool to assist agencies identify personally identifiable information in data.

5-8 [Applying the Open Data Policy to Federal Awards: FAQ](federal-awards-faq.md) - Frequently asked questions for contracting officers, grant professionals and the federal acquisitions community on applying the Open Data Policy to federal awards.

5-9 [Example Policy Documents](policy-docs.md) - Collection of memos, guidance and policy documents about open data for reference.

5-10 [Example Data Hubs](data-hubs.md) - Collection of department, agency, and program data sites across the federal government.

5-11 [Licensing policies, principles, and resources](licensing-resources.md) - Some examples of how government has addressed open licensing questions.

----------------

##6. Case Studies

Case studies of novel or best practices from agencies who are leading in open data help others understand the challenges and opportunities for success.

6-1 [Department of Labor API Program](labor-case-study.md) - A department perspective on developing APIs for general use and, in particular, building the case for an ecosystem of users by developing SDKs.

6-2 [Department of Transportation Enterprise Data Inventory](transportation-case-study.md) - A review of DOT's strategy and policy when creating a robust data inventory program.

6-3 [Disaster Assistance Program Coordination](fema-case-study.md) - The coordinated campaign led by FEMA has integrated a successful data exchange among 16 agencies to coordinate an important public service.

6-4 [Environmental Protection Agency Central Data Exchange](epa-case-study.md) - The agency's data exchange provides a model for programs that seek to coordinate the flow of data among industry, state, local, and tribal entities.

6-5 [FederalRegister.gov API](https://www.federalregister.gov/uploads/2012/11/FR2-API-Case-Study1.pdf) - A core government program update that has grown into an important public service.

6-6 [National Broadband Map](http://www.scribd.com/doc/109998799/The-National-Broadband-Map-A-Case-Study-on-Open-Innovation-for-National-Policy) - The National Broadband Map, a case study on open innovation for national policy.  Produced by the [Wilson Center](http://www.wilsoncenter.org/).

6-7 [National Renewable Energy Laboratory API program](http://developer.nrel.gov/api-case-study/) - An agency perspective on developing APIs for general use and in particular building the case for the internal re-use of the resources.

6-8 [USAID Crowdsourcing to Open Data](http://transition.usaid.gov/our_work/economic_growth_and_trade/development_credit/pdfs/2012/USAIDCrowdsourcingCaseStudy.pdf) - A case study that shows how USAID invited the "crowd" to clean and geocode a USAID dataset in order to open and map the data.

6-9 [Centers for Medicare & Medicaid Services (CMS) Data and Information Products](http://www.cms.gov/Research-Statistics-Data-and-Systems/Research/ResearchGenInfo/Downloads/CMS-Data-and-Information-Products.pdf) - a case study of how CMS is transitioning to a data-driven culture, including the creation of a new office for information products and data analytics, the release of open data summarizing provider utilization and payment information, and the responsible disclosure of restricted use data to qualified parties.  

**For Developers: [View all appendices](http://github.com/project-open-data/) (and source)**

##7. Open Data Engagement

So you’re opening up government data and making it easier to find and use – to inspire new ideas, spur economic growth, and ultimately make your agency more effective in achieving its mission. But you realize that your agency can’t just supply data – it’s also about getting and acting upon feedback, and catalyzing use of the data from a wide variety of stakeholders.  A community event is a great way to hear ideas and feedback from passionate people, offer your expertise to people with thoughtful questions and evangelize your data assets. This document gives an overview of the main types of open data community events the U.S. Government holds.

### Data Jam

A closed-press, day-long ideation event with developers, designers, and subject matter experts focused on one topic and top related open data sets. Several are held in succession, leading up to a datapalooza three months later. *Ex: Health Data jam (HHS), 21st Century Jobs Jam (OVP, Commerce, OSTP), Mitigating Campus Sexual Assault (Department of Education, Department of Justice)*

**Goal:** To connect tech and policy communities and get commitments to make things with open data, in support of agency mission and priorities.

### Datapalooza
An open press celebration, demo day, and platform to announce government open data releases or improvements. *Ex: Safety Datapalooza (DOT, CPSC, FDA.)*

**Goal:** To celebrate open data tools, companies and commitments and build momentum for projects.

### Hackathon
An event where developers, designers, and strategists work in teams to solve problems with software and/or hardware and demo the resulting work at the end of the day.
*Ex: White House “We The People” API Hackathon, The American Art API Hackathon*

**Goal:** To build relationships with the tech community and to see immediate tools and prototypes.

### Online Community
A website, social networking group and/or email mailing list where people who use open data congregate to offer feedback, tips, new uses or reuses, data requests or case studies.
*Ex: Data.gov communities, NICAR/IRE, Code for America and Sunlight Foundation email listserv, Open Government Facebook and Google+ groups*

**Goal:** To build and sustain ongoing relationships with media, nonprofits, good government advocates and civic technologists

### FOIA Officers and Ombudsman
Federal agency staff dedicated to handling Freedom of Information Act (FOIA) requests from industry and media. 
*[The Office of Government Information Services (OGIS)](https://ogis.archives.gov/) at the National Archives and FOIA staff at agencies*

**Goal:** To monitor and measure the incoming demand for data and proactively release data in response to that signal.

###[Templates and instructions](engagement/)

