---
published: true
layout: default
title: Frequently Asked Questions
permalink: /faq/
filename: faq.md

---

This section is a growing list of common questions and answers to support agencies when implementing the Open Data Policy.  

## Project Open Data

### What problem does this solve?

Technology moves much faster than policy ever could. Often when writing policy for technology, agencies are stuck with outdated methods as soon as they publish new policies.

### How does it solve that problem?

This project is meant to be a living document, so that collaboration in the open data ecosystem is fostered, and the continual update of technology pieces that affect update can happen at a more rapid pace.

### Where do I come in?

Help the United States Government make its Open Data Policy better by collaborating. Please suggest enhancements by editing the content here, or add tools that help anyone open data (See "How can I contribute?" below). 

### How can I contribute?

This project constitutes a collaborative work ("open source"). Federal employees and members of the public are encouraged to improve the project by contributing. This can be done in two ways:

#### Easy

1. Click the "Improve this content" button in the top right corner of any page.
2. Make changes as you would normally.
3. Click "Submit."
4. Your change should appear, once approved.

*Note: You will need to [create a free GitHub account](https://github.com/signup/free) if you do not already have one.*

#### Advanced

1. Configure Git by using this [basic tutorial](https://help.github.com/articles/set-up-git) or by downloading the [GitHub for Mac](http://mac.github.com/)/[GitHub for Windows](http://windows.github.com/) and optionally, a [Markdown](http://daringfireball.net/projects/markdown/) editor like [Markdownpad](http://markdownpad.com) (for Windows) or [Mou](http://mouapp.com/) (for Mac).
2. [Fork](https://help.github.com/articles/fork-a-repo) the project.
3. Make changes as you would normally using the tools installed in step #1.
4. Push the changes back to your fork.
5. Submit a pull request to this repository.
6. Your change should appear once it's approved.

*Note: All contributors retain the original copyright to their contribution, but by contributing to this project, you grant a world-wide, royalty-free, perpetual, irrevocable, non-exclusive, transferable license to all users under the terms of the license(s) under which this project is distributed.*

### Can I use the project's content or source code elsewhere?

The project [as originally published](http://www.github.com/project-open-data) constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. Subsequent contributions by members of the public, however, retain their original copyright.

In order to better facilitate collaboration, the content of this project is licensed under the [Creative Commons 3.0 License](http://creativecommons.org/licenses/by/3.0/us/deed.en_US), and the underlying source code used to format and display that content is licensed under the [MIT License](http://opensource.org/licenses/mit-license.php). 

### Who can participate in Project Open Data?  

Anyone – Federal employees, contractors, developers, the general public – can view and contribute to Project Open Data.

### Are my interactions to this project subject to any special privacy considerations?

Comments, pull requests, and any other messages received through this repository may be subject to the [Presidential Records Act](http://www.archives.gov/about/laws/presidential-records.html), and may be archived. Learn more at [http://whitehouse.gov/privacy](http://whitehouse.gov/privacy).

### Who is in charge of Project Open Data?  

Ultimately? You. While the White House founded and continues to oversee the project, Project Open Data is a collaborative work — commonly known as "open source" — and is supported by the efforts of an entire community. See the "how to contribute" section above to learn more.

At the onset, the General Services Administration is here to provide daily oversight and support, but over time, it is our vision that contributors both inside and outside of government can be empowered to take on additional leadership roles.

### Can I create a new page?

Yes! Simply follow the "advanced" instructions above to submit a pull request.

### How long will I have to wait to get a response to my suggested change (i.e., pull request)?

Release cycles vary from repo to repo. See the README file within the repo where you submitted a pull request to see how often code pushes and updates are done.
 
## IRM Strategic Plans
 
### What is an IRM Strategic Plan?

Agencies' Information Resource Management (IRM) plans are comprehensive strategic documents for information management that are intended to align with the agency’s Strategic Plan. IRM plans should provide a description of how information resource management activities help accomplish agency missions, and ensure that related management decisions are integrated with organizational planning, budget, procurement, financial management, human resources management, and program decisions.  

### How do the IRM plans relate to the open data policy?

In 2012, OMB established PortfolioStat accountability sessions to engage directly with agency leadership to assess the maturity and effectiveness of current IT management practices and address management opportunities and challenges. As part of the annual PortfolioStat process, agencies must update their IRM Strategic Plans to describe how they are meeting new and existing information life cycle management requirements.  Specifically, agencies must describe how they have institutionalized and operationalized the interoperability and openness requirements in this Memorandum into their core processes across all applicable agency programs and stakeholders.  The [FY13 OMB PortfolioStat Guidance](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-09.pdf) was issued on March 27, 2013. 

## Machine Readable and Open Formats

### Does PDF meet the “machine readable and open format” requirement?

While ISO 32000 is an open standard, the Portable Document Format (PDF) does not achieve the same level of openness as CSV, XML, JSON, and other generic formats.

## Metadata

### What is the relationship of the metadata standard (specifically) to NIEM, ISE, FGDC, and other existing (especially official) government data standards?

The [common core metadata schema](/schema/) is based on existing vocabularies and easily mapped to NIEM, Information Sharing Environment, and FGDC.

### What is a "persistent identifier"?

A persistent identifier is a unique label assigned to digital objects or data files that is managed and kept up to date over a defined time period (e.g., Unique Investment Identifiers).

### Who established the common core metadata schema?

The core metadata schema was the result of recommendations from a government-wide Metadata Working Group at Data.gov combined with research of existing public schemas for data catalogs.  Most of the elements trace their roots to the Dublin Core Library.
 
### How can I recommend changes and improvements to the metadata schema?

Submit a pull request for the [metadata schema](/schema/). 

### Can I extend the metadata schema beyond the terms specified in the [common core metadata schema](/schema/)?

Yes, if your data management process includes rich metadata specific to the mission of your agency or the Line of Business in which your agency participates, publishing additional metadata that makes your data more useful to the public is welcomed and encouraged.  Note that Data.gov will be harvesting only the metadata in this published schema unless specific arrangements are in place (e.g. geospatial FGDC/ISO).
 

## Security, Privacy and Data Quality

### Who is responsible for ensuring that datasets published in the agency.gov/data page (and subsequently Data.gov) meet each agency's requirements for security and privacy and quality?

Each agency is responsible for *all* data made public.
 
### How can I contact the Data.gov staff for assistance in conducting mosaic effect reviews?

For general questions about Data.gov, please contact http://www.data.gov/contact-us. For specific information about the mosaic effect, please contact the Data.gov PMO at GSA.

## Public Data Listing

### What is the value to the government in placing metadata at agency.gov/data?

Having the metadata available at the agency level provides agencies with a self-managed publishing capability. In addition, having the metadata in a machine-readable format opens the possibility that major search engines will index these metadata in a manner similar to site maps and allow the public to discover public data across the government using a search tool of their choice.

### How will agency.gov/open, /developer, and /data pages work together?

The agency.gov/open page contains information regarding an agency's contributions to Open Government, while the /developer and /data pages pertain to APIs and Open Data, respectively. All three pages contribute to an open and transparent government in the United States.

### What is the relationship of the /data page and public data listing to Data.gov, and how will this impact current Data.gov processes?

In the near term, Data.gov will continue its current dataset publishing process.  As agencies deploy agency.gov/data pages, the publishing process will become a harvesting of metadata from these agency data hubs.

### Are redirects allowed for /data pages?

No, the file should be located at the agency.gov/data web space.  Each agency should publish their Public Data Listing at agency.gov/data.json.
 
### What options exist for hosting the /data.json file specifically at agency.gov/data.json?  

1. For websites that are composed of static HTML, simply host the data.json file at the designated location.  
2. If needed, one may also host the file by using /data.json/index.html to provide the same functionality.  
3. Sites that utilize WordPress may modify and employ the open-sourced [Datafiles WordPress Plugin](https://github.com/GSA/datafiles-wordpress-plugin).  
4. Sites that utilize Drupal may modify and employ the open-sourced [Digital Strategy Drupal Module](https://github.com/FCC/digital_strategy).  

 
### How do I get started building this data.json file?

Data.gov will (when possible) help agencies get started by creating a data.json file for each agency containing the metadata in the correct syntax.  The agency will then begin to manage that file for future publishing of datasets.
  
### How should I manage this data.json file?

A wide variety of tools are available to manage a data catalog, whether public-facing or for internal data managements. The records of metadata in the file can be managed by databases, spreadsheets, or even text editors. Data management systems should be able to export the metadata either in the desired format or in one which may be simply mapped with [tools](http://labs.data.gov).
 
### What formats are required/optional for the agency.gov/data file?

JSON is required though there are several optional syntaxes that can also be used when publishing the data file. The syntax that is required to make the data readily available to developers is JSON (JavaScript Object Notation). Agencies should also create a data.html file for the human-browsable data homepage and may use RDFa Lite (Resource Description Framework) to mark-up each dataset's metadata using the [common core metadata schema](/schema/). Agencies may also choose to populate a metadata file using XML (eXtensible Markup Language). These alternate metadata files are optional but agencies must maintain the JSON version at agency.gov/data.json. [Tools](http://labs.data.gov) are available to transform any instance of the file into the alternative formats.

## Agency participation with Open Data

### What are some of the ways that agencies can become more involved with Open Data?

Having a contact point at the agency who can answer questions and receive comments about published data is extremely important to making your data more open and valuable to the public. This contact point can be centralized at the agency level, but it's extremely value to have someone close to the source of the data who understands it well enough to help the public take full advantage of it..

## Scope 

### How should agencies prioritize making improvements to existing systems and data?

Agencies should regularly add to and improve the entries in their data catalog, as well as ensure continuity of access to the data by involving primary users in the changes.

### Which agencies are required to implement this policy?

All executive agencies.  

## Timeline

### How long do agencies have to implement the policy?

Agencies are required to implement the Open Data Policy within six months.

## National Information Exchange Model (NIEM) 

### What is the relationship between NIEM and the efforts underway for the Digital Government Strategy, The Open Data Policy, and Data.gov?

Each of these initiatives has a discreet, targeted focus, but all are aimed at increasing access and use of government data.  Data.gov has provided a central place to find data and applications for publicly releasable information.   New applications and services to better serve citizens have been produced as a result in the increase of information made available through Data.gov.  The DGS/ODP policy establishes a framework to help institutionalize the principles of effective information management at each stage of the information's life cycle.  The framework can help agencies build information systems and processes in a way that increases information and system interoperability, openness, and safeguarding – mutually reinforcing activities that help to promote data discoverability and usability.  NIEM, as a government-wide program provides tools to enhance the way many communities build standardized exchanges to increase mission performance.  NIEM fully aligns to the DGS/ODP policy and can be seen one of the tools for implementation.

### What is NIEM?

NIEM provides a commonly understood way for various organizations to connect data that improves government decision making for the greater good. By making it possible for organizations to share critical data, NIEM empowers people to make informed decisions that improve efficiency and advance and fulfill organizational missions.

NIEM is not a standard, database, software, or the actual exchange of information. Rather, NIEM provides the community of users, tools, common terminology, governance, methodologies, and support that enables the creation of standards. As a result, organizations can “speak the same language” to quickly and efficiently exchange meaningful data.

There are 14 domains or communities established within NIEM.  These are the Biometrics, CBRN (Chemical, Biological, Radiological, Nuclear), Children, Youth, and Family Services, Cyber, Emergency Management, Health, Human Services, Immigration, Infrastructure Protection, Intelligence, International Trade, Justice, Maritime, and Screening Communities.

Additional tools and toolkits can be found at NIEM.gov.  Any tools relevant to the NIEM community may also be registered in the NIEM Tools catalog to ensure reuse across the NIEM community at NIEM.gov.

### Has the NIEM community embraced the DGS/ODP direction?

Treating information as a national asset is core to the Open Data Policy and the National Strategy for Information Sharing and Safeguarding. Departments and agencies will need an end-to-end Data Strategy that accommodates both codified in IT governance. Both are aimed at liberating data from the bounds of the application into exposure for unintentional users and uses (as permitted by law and policy). NIEM has become a best-practice implementation of the new National Information Sharing and Safeguarding Strategy, and is fully supportive of the implementation of the Open Data Policy and is positioned to become an early adopter. NIEM provides a common data model, governance, training, tools, technical support services, and an active community. 

### Does NIEM conform to the DGS/ODP requirements?

NIEM adheres to the DGS/ODP Policy.  NIEM Communities use open standards such as XML / XSD, and UML to assist in the development of standardized ways of exchanging information across and between government agencies.  NIEM is vendor and product neutral.  The adoption of the UML profile will allow additional open standards implementations of NIEM based exchanges as supported by community requirements. Additionally, some NIEM Communities submit their NIEM based information exchanges to external standards development organizations to increase industry adoption such as the NIEM Biometrics and NIST, NIEM Radiological / Nuclear and IEC.
