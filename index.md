---
published: true
permalink: /
layout: hero
filename: index.md
title: Project Open Data
---

## 1. Background

Data is a valuable national resource and a strategic asset to the U.S. Government, its partners, and the public.  Managing this data as an asset and making it available, discoverable, and usable – [in a word, open](principles/) – not only strengthens our democracy and promotes efficiency and effectiveness in government, but also has the potential to create economic opportunity and improve citizens’ quality of life.

For example, when the U.S. Government released weather and GPS data to the public, it fueled an industry that today is valued at tens of billions of dollars per year. Now, weather and mapping tools are ubiquitous and help everyday Americans [navigate their lives](business-case/).

The ultimate value of data can often not be predicted. That’s why the U.S. Government released a [policy](policy-memo/) that instructs agencies to manage their data, and information more generally, as an asset from the start and, wherever possible, release it to the public in a way that makes it open, discoverable, and usable.

The White House developed Project Open Data – this collection of code, tools, and case studies – to help agencies adopt the Open Data Policy and unlock the potential of government data. Project Open Data will evolve over time as a community resource to facilitate broader adoption of open data practices in government. Anyone – government employees, contractors, developers, the general public – can view and contribute. Learn more about [Project Open Data Governance](governance/) and dive right in and help to build a better world through the power of open data.

----------------

## 2. Definitions

This section is a list of definitions and principles used to guide the project.

2-1 [Open Data Principles](principles/) - The set of open data principles.

2-2 [Standards, Specifications, and Formats](open-standards/) - Standards, specifications, and formats supporting open data objectives.

2-3 [Open Data Glossary](glossary/) - The glossary of open data terms.

2-4 [Project Open Data Metadata Schema](/v1.1/schema/) - The schema used to describe datasets, APIs, and published data at agency.gov/data.

----------------

## 3. Implementation Guidance

Implementation guidance for open data practices.

3-1 [U.S. Government Policy on Open Data](/policy-memo/) - Full text of the memorandum.

3-2 [Implementation Guide](/implementation-guide/) - Official OMB implementation guidance for each step of implementing the policy.

3-3 [Public Data Listing](/catalog/) - The specific guidance for publishing the Open Data Catalog at the agency.gov/data page.

3-4 [Documenting APIs](/v1.1/api/) - The specific guidance for documenting APIs in the data catalogs.   

3-5 [Open Licenses](open-licenses/) - Open license guidance and examples. 

3-6 [Frequently Asked Questions](/faq/) - A growing list of common questions and answers to facilitate adoption of open data projects.

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

5-2 [Business Case for Open Data](business-case/) - Overview of the benefits associated with open data.

5-3 [General Workflows for Open Data Projects](future-case-study/) - A comprehensive overview of the steps involved in open data projects and their associated benefits.

5-4 [API Basics](api-basics/) - Introductory resources for understanding application programming interfaces (APIs).

5-5 [Data Release Safeguard Checklist](http://www.data.gov/sites/default/files/attachments/Privacy%20and%20Security%20Checklist.pdf) - Checklist to enable the safe and secure release of data.

5-6 [Digital PII Checklist](digital-pii-checklist/) - Tool to assist agencies identify personally identifiable information in data.

5-7 [Applying the Open Data Policy to Federal Awards: FAQ](federal-awards-faq/) - Frequently asked questions for contracting officers, grant professionals and the federal acquisitions community on applying the Open Data Policy to federal awards.

5-8 [Example Policy Documents](policy-docs/) - Collection of memos, guidance and policy documents about open data for reference.

5-9 [Example Data Hubs](/data-hubs) - Collection of department, agency, and program data sites across the federal government.

5-10 [Videos](/videos) - Online tutorials walking agencies through important aspects of the Open Data Policy.   

5-11 [CIO Council Open Data Prioritization Toolkit](https://cio.gov/cio-council-releases-open-data-prioritization-toolkit/) -  A toolkit to assist agencies with evaluating and prioritizing datasets for release consisting of [guidance](https://cio.gov/wp-content/uploads/filebase/cio_document_library/Open%20Data%20Prioritization%20Toolkit%20Summary.html) and [workbooks](https://cio.gov/wp-content/uploads/filebase/cio_document_library/Open%20Data%20Prioritization%20Toolkit_Workbook.xlsx) to help agencies evaluate datasets on the criteria of value, cost, and risk.

5-12 [Example Public Engagement and Prioritization Schemes](prioritization/) - Collection of resources and tools about creating a process to engage with the public to help facilitate and prioritize data release for reference.

5-12 CIO Council Chief Data Role Survey - Research on the data science and analytic teams across the Federal government, conducted in September 2015. (Download the [Response Data, xlsx](https://github.com/project-open-data/project-open-data.github.io/blob/9eee7b5a1a34ed416765acc0969f11e19566dc89/Chief%20Data%20Roles%20Survey%20Raw%20Data_092815.xlsx))

----------------

## 6. Case Studies

Case studies of novel or best practices from agencies who are leading in open data help others understand the challenges and opportunities for success.

6-1 [Department of Labor API Program](labor-case-study/) - A department perspective on developing APIs for general use and, in particular, building the case for an ecosystem of users by developing SDKs.

6-2 [Department of Transportation Enterprise Data Inventory](transportation-case-study/) - A review of DOT's strategy and policy when creating a robust data inventory program.

6-3 [Disaster Assistance Program Coordination](fema-case-study/) - The coordinated campaign led by FEMA has integrated a successful data exchange among 16 agencies to coordinate an important public service.

6-4 [Environmental Protection Agency Central Data Exchange](epa-case-study/) - The agency's data exchange provides a model for programs that seek to coordinate the flow of data among industry, state, local, and tribal entities.

6-5 [FederalRegister.gov API](https://www.federalregister.gov/uploads/2012/11/FR2-API-Case-Study1.pdf) - A core government program update that has grown into an important public service.

6-6 [National Broadband Map](http://www.scribd.com/doc/109998799/The-National-Broadband-Map-A-Case-Study-on-Open-Innovation-for-National-Policy) - The National Broadband Map, a case study on open innovation for national policy.  Produced by the [Wilson Center](http://www.wilsoncenter.org/).

6-7 [National Renewable Energy Laboratory API program](http://developer.nrel.gov/api-case-study/) - An agency perspective on developing APIs for general use and in particular building the case for the internal re-use of the resources.

6-8 [USAID Crowdsourcing to Open Data](http://transition.usaid.gov/our_work/economic_growth_and_trade/development_credit/pdfs/2012/USAIDCrowdsourcingCaseStudy.pdf) - A case study that shows how USAID invited the "crowd" to clean and geocode a USAID dataset in order to open and map the data.

6-9 [Centers for Medicare & Medicaid Services (CMS) Data and Information Products](http://www.cms.gov/Research-Statistics-Data-and-Systems/Research/ResearchGenInfo/Downloads/CMS-Data-and-Information-Products.pdf) - a case study of how CMS is transitioning to a data-driven culture, including the creation of a new office for information products and data analytics, the release of open data summarizing provider utilization and payment information, and the responsible disclosure of restricted use data to qualified parties.

6-10 [Licensing policies, principles, and resources](/licensing-resources) - Some examples of how government has addressed open licensing questions.

**For Developers: [View all appendices](http://github.com/project-open-data/) (and source)**

----------------

## 7. Open Data Engagement

So you’re opening up government data and making it easier to find and use – to inspire new ideas, spur economic growth, and ultimately make your agency more effective in achieving its mission. But you realize that your agency can’t just supply data – it’s also about getting and acting upon feedback, and catalyzing use of the data from a wide variety of stakeholders.  

## Open Data Online Engagement 

In addition to comprehensive Enterprise Data Inventories and comprehensive metadata, there are many ways you can make your open data more discoverable and engage in a democratic diagloue online. 

#### [Press Release Guidance](press/) 

Include any relevant data in your Agency Press Releases as open data hyperlinked to Data.gov. 

**Goal:** To communicate open by default is the new standard for government data and to engage with the community as soon as possible on timely relevant data that affects your agency mission. 

## Open Data Community Events 

A community event is a great way to hear ideas and feedback from passionate people, offer your expertise to people with thoughtful questions and evangelize your data assets. This document gives an overview of the main types of open data community events the U.S. Government holds.

#### Data Jam

A closed-press, day-long ideation event with developers, designers, and subject matter experts focused on one topic and top related open data sets. Several are held in succession, leading up to a datapalooza three months later. *Ex: Health Data jam (HHS), 21st Century Jobs Jam (OVP, Commerce, OSTP), Mitigating Campus Sexual Assault (Department of Education, Department of Justice)*

**Goal:** To connect tech and policy communities and get commitments to make things with open data, in support of agency mission and priorities.

#### Datapalooza
An open press celebration, demo day, and platform to announce government open data releases or improvements. *Ex: Safety Datapalooza (DOT, CPSC, FDA.)*

**Goal:** To celebrate open data tools, companies and commitments and build momentum for projects.

#### Hackathon
An event where developers, designers, and strategists work in teams to solve problems with software and/or hardware and demo the resulting work at the end of the day.
*Ex: White House “We The People” API Hackathon, The American Art API Hackathon*

**Goal:** To build relationships with the tech community and to see immediate tools and prototypes.

#### Event Guides
 - [Open Data Community Event Templates and Instructions](engagement/)
 - [How to add your open data event to Data.gov/Events](events/)

## Open Data Engagement Guidance

On any given month, there are multiple events listed on [Data.gov/events](https://www.data.gov/events/) in which federal agencies engage with the public, the private sector, non-profits, academia and others on open data issues. From the numerous open data events held by federal agencies in the last several years, there are a number of lessons learned and best practices in engaging with the public on open data and holding events.

### Articulate the purpose of the event

Agencies that have held open data events have found that emphasizing the purpose of the event is critical to success. It can be essential in gaining agency leadership support and approvals for the public engagement or event. 

For example, the annual [USDA Open Data Summer Camp](https://www.data.gov/event/2018-usda-open-data-summer-camp/), aimed at high school students, is designed to increase awareness and understanding of the Department of Agriculture’s mission and activities. As members of America’s agricultural community age, it is important for USDA to connect with young people and inform them of agriculture’s role in the economy and American culture. USDA hopes this awareness will spur young people’s interest in agriculture as they reach higher education and the workforce.

Other purposes of public participation in open data include:

 - Expanding public awareness of agency mission or project
 - Recruitment strategy for agency hiring

 Agencies have also followed the practice of making sure that the purpose of the event is at the top of agendas and other written materials, stating the purpose verbally at the beginning of an event, having it visible on a screen during an event, and mentioning it throughout the planning process for open data events, including in internal meetings.

### Confirm capability to hold events

 The initial steps in planning an open data event generally pertain to determining the agency’s ability to hold the event. Factors to determine include

Location - whether agency facilities for the type and size of event are available or another location is required

Partners - whether the event needs to be co-sponsored with an outside organization for funding or other reasons, and what each partner may contribute to the event in terms of funding, donations in kind, staffing, etc.


Leadership support - gaining agency leadership support for the event, and having the support of senior agency officials who can be the “champions” for the event 
  - Getting leadership support may sometimes require presentation to multiple internal audiences to get approvals. 
  - One method that can help gain leadership approval is if the advocacy for the event is from not just agency staff, but other partners such as industry or non-government organizations that support open data. 
  - It is also important to keep the leadership informed throughout the development of the event, with regular updates on new commitments from participants for the event.


Legal authorities - legal questions that can arise that require working with agency general counsel’s offices include:
  - Legal authorities to hold the event or partner with outside organizations
  - What agencies can and cannot do in interaction with industry participants
  - Drafting necessary agreements such as Memoranda of Understanding with non-government co-sponsors
  - Procurement issues in obtaining services such as outside space, event planners, audio/visual support, etc.


Logistics issues - events in federal spaces raise issues such as:
  - Security/clearance for non-federal attendees
  - Rules regarding providing food or drinks at the event
  - Web page for the event

### Identify specific and measurable goals

Agencies benefit from setting measurable goals for the public engagement or event. They contribute to the quality of the activity and can help in making comparisons to previous events.


Examples of quantitative goals include:
  - Number of participants 
  - Diversity of participants (by role, agency, sector)
  - Number of challenges identified
  - Number of solutions developed


Insight from goals include:
  - Year over year growth in participants for annual events
  - Number of solutions that received funding, created economic impact

In some cases, it can be difficult to create quantitative goals from an open data event. If measurable, quantitative goals are not possible, event organizers should at least define tangible next steps from an event. They can include commitments to launch a pilot project or create a public-private partnership to do additional work on the subject matter of the open data event.    

### Align goals with agency mission

Aligning the goals for the open data event with the agency mission is an important factor in success, particularly with gaining agency leadership support for a public engagement or open data event.

Examples of goals include:
  - Contribution to an agency’s IT modernization
  - Improve efficiency in data sharing with the public, other agencies
  - Use of open data event to further a core mission of an agency, such as transportation safety or supporting education

### Document roles and responsibilities for those involved in the initiative

Agencies that have held events have found it a best practice to clearly document roles and responsibilities for those working on planning the event, especially for events that involve working with outside organizations as co-sponsors. Some agencies have used a detailed “tick tock” document with daily action items that show what each individual team member must complete.

### Hold regular check-ins with those involved in the implementation

Planning of most open data events begins with ad hoc meetings at the early stages, then monthly, weekly, or other intervals with increasing frequency as the date of the event nears.

A best practice is to make sure that for each task or line of effort such as press, logistics, IT, etc., that there is a primary contact and also a backup for each line of effort.

### Use multiple outlets to reach participants such as website, social media

Many agencies have found it useful to develop a core set of materials for an event and then share with all the partners, so that each partner can disseminate through its own channels such as email lists, websites, and social media accounts

Agencies have used a number of different methods to reach participants and publicize their open data events:

 - Website. Agencies have used their own and partner organization websites to promote the events in news and event sections
 - Social Media. Agencies have used their own and partner organization social media accounts to promote events
 - Interagency meetings. Agencies have used interagency meetings, such as the open data working group meeting, to promote events, as well as interagency listservs and the [Data.gov/events](https://www.data.gov/events/) page

Agencies have found it to be a best practice to make sure there is consistent design across print and digital materials promoting the events

Agencies have also tried to be as inclusive as possible in the language for the event, to make sure that ideas are welcome not just from technologists, but from other types of participants, whether they work on the relevant policies or are from the communities affected by the subject matter of the event.

Agencies and other organizations that have held open data events have dedicated resources to make sure to monitor support email addresses and social media accounts to respond to participant questions and requests. Typically, event organizers have created a central email address for questions/requests for assistance, and assigned a team of people with access to the email.

### Motivate people to participate and address the interests of potential participants

One way that agencies have used to ensure that the event meets the interest of participants is to get the participants to choose agenda topics. In some cases agencies have crowdsourced ideas for specific challenges to take on during the event. Where possible, open data event organizers have conducted brief surveys or interviews of potential participants to make sure that planning for the event stays focused on participant interests.

### Assess data collected after the event to determine whether the initiative met its goals

Agencies have collected data about the open data events to determine whether the event met the agency goals. Most often, agencies have conducted surveys of the participants to assess their satisfaction with the event. In instances where agencies partnered with outside organizations, agencies found it useful to have the partner take responsibility for surveying participants. Agencies have also examined media and social media coverage of the event and reported the results to agency leadership.

Another best practice learned from those who have held multiple events is to do the feedback collection at the event itself, in person, on a physical card, with a few minutes set aside in the schedule for providing feedback, as it results in a much higher response rate than an online survey following the event.

A best practice is to create a spreadsheet after the event, that shows the geographic region, industry sector of participants, the number of media mentions, social media analytics, number of online participants, and number of blog posts beyond those that were planned or requested by the event organizers.

### Analyze the feedback from partners and participants and report publicly on achievements and lessons learned

Agencies generally analyze the success of the event and the feedback they received from participants to record lessons learned. When possible, agencies create a final report of the event that can be shared publicly. In some cases, having a non-government partner taking the lead for publication of achievements and lessons learned has made it easier to quickly publish a report.

Most agencies conduct internal post-event sessions to get perspective from those who organized the event to find what was successful and what could be changed in subsequent events and prepare internal documentation.

In many cases agencies have worked on blog posts for publication on agency websites and partner websites to report on the achievements of the event, as well as disseminating links for additional information.

### Acknowledge and reward efforts achievements of partners and participants

The recognition of the achievements of participants is an important step at the conclusion of an event. For example, the annual USDA Open Data Summer Camp has a graduation ceremony for the student participants. The students get to present their projects and what they have learned about USDA open data to the audience. Graduates have had the opportunity to present in other settings as well, such as the interagency Open Data working group.

### Seek ways to maintain communication with members of the community

Maintaining communication with the community that is created from an open data event has been among the most challenging aspects of agency public engagement in open data. In most cases, the communication post event is concentrated in the blog posts, media coverage, and social media activity immediately following the event. The events that have been most successful in continuing communication with the community result in some type of clearly identified post event activity, such as a new website focused on the open data issue that was the topic of the event. A dedicated website for sharing new content or communication within the community, however, can succeed only with dedicated resources for maintaining the website and taking responsibility for keeping it current and maintaining the level of community communication. In other cases, identifying a tangible goal at the beginning of the open data event such as a subsequent pilot project or other next steps with commitments from participants to contribute on a specific effort after the open data event can ensure that the interaction from the open data event continues.


## Open Data Stakeholder Contacts

#### Agency Open Data Policy Points of Contact
Federal agency staff dedicated to implementing the Open Data Policy requirements as reported to the Office of Management and Budget. 

#### Chief Data Officers  
Federal agency Chief Data Officers. The Chief Data Officer’s role is part data strategist and adviser, part steward for improving data quality, part evangelist for data sharing, part technologist, and part developer of new data products.

**Goal:** To engage sister agencies in open data community events. 

#### FOIA Officers and Ombudsman
Federal agency staff dedicated to handling Freedom of Information Act (FOIA) requests from industry and media. 
*[The Office of Government Information Services (OGIS)](https://ogis.archives.gov/) at the National Archives and FOIA staff at agencies.*

**Goal:** To monitor and measure the incoming demand for data and proactively release data in response to that signal.

#### Interagency Open Data Working Group
A Federal Government working group open to all federal employees interested in open data. 
*[Join the Interagency Open Data Working Group](working-group/)*

**Goal:** To discuss solutions to common pain points and share best practices and case studies across Federal agencies.

#### Online Civil Society Community
A website, social networking group and/or listserv where people who use open data congregate to offer feedback, tips, new uses or reuses, data requests or case studies.
*Ex: Listservs for [NICAR](http://www.ire.org/resource-center/listservs/subscribe-nicar-l/), [Code for America Brigade](https://groups.google.com/a/codeforamerica.org/forum/#!forum/brigade), [Sunlight Labs](https://groups.google.com/forum/#!forum/sunlightlabs), the Open Government Facebook and Google+ groups.*

**Goal:** To build and sustain ongoing relationships with media, nonprofits, good government advocates and civic technologists.

