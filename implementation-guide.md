---
published: true
layout: default
title: Implementation Guide
permalink: "/implementation-guide/"
filename: "implementation-guide.md"
---

#Supplemental Guidance on the Implementation of M-13-13 "Open Data Policy – Managing Information as an Asset”
***NOTE: Due to the government shutdown, OMB has extended the previous Nov 1,2013 deadlines in this document to Nov 30, 2013***

## I. Introduction

The purpose of this guidance is to provide additional clarification and detailed requirements to assist agencies in carrying out the objectives of [Executive Order 13642](http://www.whitehouse.gov/the-press-office/2013/05/09/executive-order-making-open-and-machine-readable-new-default-government) of May 9, 2013, *Making Open and Machine Readable the New Default for Government Information* and [OMB Memorandum M-13-13](/policy-memo) *Open Data Policy-Managing Information as an Asset*.  Specifically, this document focuses on near-term efforts agencies must take to meet the following five initial requirements of M-13-13, which are due November 30, 2013 (six months from publication of M-13-13):

1. Create and maintain an Enterprise Data Inventory (Inventory)
2. Create and maintain a Public Data Listing
3. Create a process to engage with customers to help facilitate and prioritize data release
4. Document if data cannot be released
5. Clarify roles and responsibilities for promoting efficient and effective data release

Agencies will establish an open data infrastructure by implementing this guidance and Memorandum [M-13-13](/policy-memo) and taking advantage of the resources provided on [Project Open Data](http://project-open-data.github.io).    Once established, agencies will continue to evolve the infrastructure by identifying and adding new data assets<sup>[1](#footnote-1)</sup>,  enriching the description of those data assets through improved metadata, and increasing the amount of data shared with other agencies and the public.  

At a minimum, a successful open data infrastructure must:

* Provide a robust and usable Enterprise Data Inventory of an agency’s data assets, so that an agency can manage its data as strategic assets,
* Incorporate iterative and efficient processes for managing and opening data assets, and
* Create the Public Data Listing as a direct output or subset of the Enterprise Data Inventory.

The “access level” categories described in this document are intended to be used for organizational purposes within agencies and to reflect decisions already made in agencies about whether data assets can be made public; simply marking data assets “public” cannot substitute for the analysis necessary to ensure the data can be made public. Agencies are reminded that this underlying data from the inventory may only be released to the public after a full analysis of privacy, confidentiality, security, and other valid restrictions pertinent to law and policy.

This guidance seeks to balance the need to establish clear and meaningful expectations for agencies to meet, while allowing sufficient flexibility on the approach each agency may take to address their own unique needs.  This guidance also includes references to other OMB memoranda that relate to the management of information.  Agencies should refer to the definitions included in the attachment in [OMB Memorandum M-13-13](/policy-memo) *Open Data Policy-Managing Information as an Asset*.  

This guidance introduces an Enterprise Data Inventory framework to provide agencies with improved clarity on specific actions to be taken and minimum requirements to be met.  It also provides OMB with a rubric by which to evaluate compliance and progress toward the objectives laid out in the Open Data Policy.  Following the November 30, 2013 deadline, agencies shall report progress on a quarterly basis, and performance will be tracked through the Open Data Cross-Agency Priority (CAP) Goal. Meeting the requirements of this guidance will ensure agencies are putting in place a basic infrastructure for inventorying, managing, and opening up data to unlock the value created by opening up information resources.

## II. Policy Requirements

### A. Create and Maintain an Enterprise Data Inventory

#### Purpose
To develop a clear and comprehensive understanding of what data assets they possess, Federal Agencies are required to create an Enterprise Data Inventory (Inventory) that accounts for all data assets created or collected by the agency.  This includes, but is not limited to, data assets used in the agency’s information systems. The Inventory must be enterprise-wide, accounting for data assets across programs<sup>[2](#footnote-2)</sup>  and bureaus<sup>[3](#footnote-3)</sup>,  and must use the required [common core metadata](/schema) available on Project Open Data.   After creating the Inventory, agencies should continually improve the usefulness of the Inventory by expanding, enriching, and opening the Inventory (concepts described in the framework below).

The objectives of this activity are to:

* Build an internal inventory that accounts for data assets used in the agency' s information systems
* Include data assets produced through agency contracts and cooperative agreements, and in some cases agency-funded grants; include data assets associated with, but not limited to, research, program administration, statistical, and financial activities
* Indicate if the data may be made publicly available and if currently available
* Describe the data with [common core metadata](/schema) available on Project Open Data.

#### Framework to Create and Maintain the Enterprise Data Inventory: Expand, Enrich, Open
Since agencies have varying levels of visibility into their data assets, the size and maturity of agencies’ Enterprise Data Inventories will differ across agencies. OMB will assess agency progress toward overall maturity of the Enterprise Data Inventory through the maturity areas of “Expand,” “Enrich,” and “Open.”

**Expand**: Expanding the inventory refers to adding additional data assets to the Inventory.  Agencies should develop their own strategy to expand the inventory and break down the work according to agency-defined classes of data<sup>[4](#footnote-4)</sup>.  Agencies should communicate their plans for expanding the Inventory in the Inventory Schedule (described in the minimum requirements). As agencies develop an Inventory Schedule, they may find it helpful to group their data assets into classes of data.  The following list provides examples of classes agencies may use as they schedule the expansion of the Inventory:

* [Agency operating units](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf) (for example, bureaus or offices)
* [Federal Program Inventory](http://goals.performance.gov/federalprograminventory) on Performance.gov
* Common business areas or segments, such as those described in the [Business Reference Model](http://www.whitehouse.gov/omb/e-gov/fea) or the [Budget Function Codes](http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/s79.pdf) of budget accounts
* Agency strategic objectives on Performance.gov and the [Performance Reference Model](http://www.whitehouse.gov/omb/e-gov/fea)
* Types of data from [Data Reference Model](http://www.whitehouse.gov/omb/e-gov/fea)
* Existing listings of certain types of data assets, such as Information Collection Requests (ICR) submitted to OMB under the Paperwork Reduction Act (as listed on reginfo.gov<sup>[5](#footnote-5)</sup>) and/or files posted on the agency’s public website
* Data assets already prioritized by the agency in response to other Administration initiatives<sup>[6](#footnote-6)</sup>
* Primary related IT investments from the Federal IT Dashboard<sup>[7](#footnote-7)</sup>
* Agency-defined prioritizations of data assets
* Other classes or criteria

> Example ways to evaluate “Expand” maturity: How has the Inventory expanded over time to include additional data assets? What “classes” of data (for example, financial, performance, scientific, regulatory, etc.) have been added or are planned to be added? Are all bureaus and programs represented in the Inventory? If not, what percentage is?\*

**Enrich**: To improve the discoverability, management, and re-usability of data assets, agencies should enrich the Inventory over time by improving the quality of metadata describing each data asset.  For example, agencies may:

* increase the number of keyword tags,
* clarify descriptions of data, or
* add additional metadata fields consistent with existing communities of practice or use cases.

Project Open Data provides metadata requirements, additional optional metadata fields, and examples of metadata areas (see Appendix for examples).  To improve the management of IT systems through the Inventory, agencies are encouraged to include the Primary Related IT Investment Unique Investment Identifier (UII) as a metadata field.  As they work to enrich data assets, agencies should carefully weigh the potential value of efforts to improve data description or increase the number of metadata fields against the potential associated burden. Agencies should work to avoid the risk of duplicative metadata and work toward adopting uniform schema.  To that end, agencies should draw on the expertise of existing communities of practice<sup>[8](#footnote-8)</sup>,  review standard taxonomies<sup>[9](#footnote-9)</sup>,  and coordinate across the government to harmonize definitions when adopting additional metadata fields.

> Example ways to evaluate “Enrich” maturity: How has the agency improved the quality of metadata for each record? Are effective keywords and clear language used in data descriptions? Are additional metadata fields applying best practices from Project Open Data? Has the agency developed policies and procedures for populating these fields consistently? Has the agency linked the Inventory to federal IT management by including the Primary Related IT Investment Unique Investment Identifier (UII)?\*

**Open**: Agencies should implement tools and processes that will accelerate the opening of additional valuable data assets by making them public and machine-readable, while ensuring adequate policy, process, and technical safeguards are in place to prevent against the release of sensitive data.  Agencies are required to increase the number of public data assets included in the Public Data Listing (described in the next section) over time. Agencies should work toward increasing the ratio of data that are public and machine-readable to data that can be made public as measured in the Inventory.

> Example ways to evaluate “Open” maturity: How many releasable data assets have been released in the Public Data Listing? How have more data assets been released in accordance with the [“open data” principles](/principles) over time?\*

### Minimum Requirements to Create and Maintain an Enterprise Data Inventory

#### Develop and Submit to OMB an Inventory Schedule (by November 30, 2013)
* Describe how the agency will ensure that all data assets from each bureau and program in the agency have been identified and accounted for in the Inventory, to the extent practicable, no later than November 1, 2014.  
* Describe how the agency plans to expand, enrich, and open their Inventory each quarter through November 1, 2014 at a minimum; include a summary and milestones in the schedule.<sup>[10](#footnote-10)</sup>
* Publish Inventory Schedule on the www.\[agency\].gov/digitalstrategy page by November 30, 2013.<sup>[11](#footnote-11)</sup>

#### Create an Enterprise Data Inventory (by November 30, 2013)
* Include, at a minimum, all data assets which were posted on Data.gov before August 1, 2013 and additional representative data assets from programs and bureaus.
* Ensure the Inventory contains one metadata record for each data asset. A data asset can describe a collection of datasets (such as a CSV file for each state).
* Use common core “required” fields and “required-if-applicable” fields on Project Open Data (includes indicating whether data can be made publicly available).
* Submit to OMB via MAX Community<sup>[12](#footnote-12)</sup>  the inventory as a single JSON file using the defined schema from Project Open Data. OMB invites agency input on the option of replacing future submission with an API via a discussion on Project Open Data.

#### Maintain the Enterprise Data Inventory (ongoing after November 30, 2013)
* Continue to expand, enrich, and open the Inventory on an on-going basis.
* Update the Inventory Schedule submitted on November 30, 2013 on a quarterly basis on the www.\[agency].gov/digitalstrategy page.<sup>[13](#footnote-13)</sup>

#### Tools and Resources on Project Open Data
* Out-of-the-box Inventory Tool: OMB and GSA have provided a data inventory tool (CKAN) that is customized to be compliant with the Open Data Policy out of the box. Customization includes the ability to generate the compliant Public Data Listing directly from the Inventory, as well as integration of the required common core metadata schema. Agencies may choose to install CKAN on their servers or use the centrally hosted tool.
* Definitions and schema of “common core metadata fields” and selected “extensible metadata fields”
* The JSON schema for each Inventory’s “JSON Snapshot” as well as a schema generator and validator tools to facilitate agency efforts to create metadata
* Additional best practices, case studies, and tools

### B. Create and Maintain a Public Data Listing

#### Purpose
To improve the discoverability and usability of data assets, all federal agencies must develop a Public Data Listing, which contains a list of all data assets that are or could be made available to the public. This Public Data Listing, posted at www.\[agency].gov/data.json, would typically be a subset of the agency’s Inventory.  This will allow the public to view agencies’ open data assets and subsequent progress as additional data assets are published.

Agencies, at their discretion, may choose to include entries for non-public data assets in their Public Data Listings, taking into account guidance in section D. For example, an agency may choose to list data assets with an ‘accessLevel’ of ‘restricted public’ to make the public aware of their existence and the process by which these data may be obtained.

Agencies’ Public Data Listings will be used to dynamically populate the newly renovated Data.gov, the main website to find data assets generated and held by the U.S. Government.  Data.gov allows anyone from the public to find, download, and use government data.  The upcoming re-launch of Data.gov (currently in beta at next.data.gov) will automatically aggregate the agency-managed Public Data Listings into one centralized location, using the common core metadata standards and tagging to improve the user ability to find and use government data.  

The objectives of this activity are to:

* List any data assets in the agency's Enterprise Data Inventory that can be made publicly available
* Publish Public Data Listing at www.\[agency].gov/data.json
* Include data assets produced through agency-funded grants, contracts, and cooperative agreements

#### Minimum Requirements to Create and Maintain a Public Data Listing

**Publish a Public Data Listing (by November 30, 2013)**

* Include, at a minimum, all data assets where ‘accessLevel’ = ‘public’<sup>[14](#footnote-14)</sup>  in the Inventory. By design, an agency should be able to filter the Inventory to all entries where ‘accessLevel’ = ‘public’ to easily generate the Public Data Listing.
* Publish the Public Data Listing at www.\[agency].gov/data.json.
* Follow the schema available on Project Open Data.
* Include **accessURL**<sup>[15](#footnote-15)</sup>  link in the data asset’s metadata for all data assets in the Public Data Listing that are already publicly available<sup>[16](#footnote-16)</sup>.  (as opposed to those that *could be publicly available*).

**Tools and Resources on Project Open Data**

* Schema Generator
* CKAN
* JSON Validator

### C. Create a Process to Engage With Customers to Help Facilitate and Prioritize Data Release

#### Purpose
Identifying and engaging with key data customers to help determine the value of federal data assets can help agencies prioritize those of highest value for quickest release. Data customers include public as well as government stakeholders<sup>[17](#footnote-17)</sup>.  All Federal Agencies will be required to engage public input and reflect on how to incorporate customer feedback into their data management practices. Agencies may develop criteria at their discretion for prioritizing the opening of data assets, accounting for a range of factors, such as the quantity and quality of user demand, internal management priorities, and agency mission relevance. As customer feedback mechanisms and internal prioritization criteria will likely evolve over time and vary across agencies, agencies should share successful innovations in incorporating customer feedback through interagency working groups and Project Open Data to disseminate best practices. Agencies should regularly review the evolving customer feedback and public engagement strategy.  

The objectives of this activity are to:

* Create a process to engage with customers through www.\[agency].gov/data pages and other appropriate channels
* Make data available in multiple formats according to customer needs
* Help agencies prioritize data release through the Public Data Listing and management efforts to improve data discoverability and usability

#### Minimum Requirements to Create a Process to Engage With Customers to Help Facilitate and Prioritize Data Release

**Establish Customer Feedback Mechanism (by November 30, 2013)**

* Through the common core metadata requirements, agencies are already required to include a point of contact within each data asset’s metadata listed.
* Agencies should create a process to engage with customers on the www.\[agency].gov/data page or other appropriate mechanism. If the feedback tool is in an external location, it must be linked to the www.\[agency].gov/data page.
* Agencies should consider utilizing tools available on Project Open Data, such as the “Kickstart”
 plug-in, to organize feedback around individual data assets.
**Describe Customer Feedback Processes (by November 30, 2013)**
* Update www.\[agency].gov/digitalstrategy<sup>[18](#footnote-18)</sup>  page to describe the agency’s process to engage with customers.
* Moving forward, agencies should consider updating their customer feedback strategy and reflecting changes on www.\[agency].gov/digitalstrategy beyond November 30, 2013.

**Tools and Resources on Project Open Data**

* Data “Kickstart” Plug-in
* [GSA’s Innovation Center](http://gsablogs.gsa.gov/dsic/)  API Resources

### D. Document if Data Cannot be Released

#### Purpose
The Open Data Policy requires agencies to strengthen and develop policies and processes to ensure that only the appropriate data are made available publicly.  Agencies should work with their Senior Agency Official for Privacy and other relevant officials to ensure a complete analysis of issues that could preclude public disclosure of information collected or created.  If the agency determines the data should not be made publicly available because of law, regulation, or policy or because the data are subject to privacy, confidentiality, security, trade secret, contractual, or other valid restrictions to release, agencies must document the determination in consultation with their Office of General Counsel or equivalent. The agency should designate one of three “access levels” for each data asset listed in the inventory: public, restricted public, and non-public.  The descriptions of these categories can be found below and on Project Open Data.  

The objectives of this activity are to:

* Review information for valid restrictions to public release in order to ensure proper safeguarding of privacy, security, and confidentiality of government information
* Document reasons why a data asset or certain components of a data asset should not be made public at this time
* Consult with agency’s Senior Agency Official for Privacy and general counsel regarding the barriers identified
* Encourage dialogue regarding resources necessary to make more data assets public

As part of an agency’s analysis to assign a general access level to each data asset<sup>[19](#footnote-19)</sup>,  agencies should consult section ##III.4 of the [OMB Memorandum M-13-13](/policy-memo),  and Executive Order 13556.  Specifically, agencies are required to incorporate the National Institute of Standards and Technology (NIST) Federal Information Processing Standard (FIPS) Publication 199 "[Standards for Security Categorization of Federal Information and Information Systems](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf),"  which includes guidance and definitions for confidentiality, integrity, and availability. Agencies should also consult with the [Controlled Unclassified Information  (CUI)](http://www.whitehouse.gov/sites/default/files/docs/2012sharingstrategy_1.pdf) program to ensure compliance with CUI requirements, the National Strategy for Information Sharing and Safeguarding and the best practices found in Project Open Data.  In addition to complying with the Privacy Act of 1974, the Paperwork Reduction Act, the E-Government Act of 2002, the Federal Information Security Management Act (FISMA), and the Confidential Information Protection and Statistical Efficiency Act (CIPSEA), and other applicable laws, agencies should implement information policies based upon Fair Information Practice Principles, OMB guidance, and NIST guidance on Security and Privacy Controls for Federal Information Systems and Organizations.

* **Public**: Data asset is or could be made publicly available to all without restrictions.
*The accesLevelComment field may be used to provide information on technical or resource barriers to increasing access to that data asset.*

* **Restricted Public**: Data asset is available under certain use restrictions.
*One example, among many, is a data asset that can only be made available to select researchers under certain conditions, because the data asset contains sufficient granularity or linkages that make it possible to re-identify individuals, even though the data asset is stripped of Personally Identifiable Information (PII). Another example would be a data asset that contains PII and is made available to select researchers under strong legal protections. This category includes some but not all data assets designated as Controlled Unclassified Information (CUI), consistent with Executive Order 13556. The accessLevelComment field must be filled in with details on how one can obtain access.*

* **Non-Public**: Data asset is not available to members of the public.
*This category includes data assets that are only available for internal use by the Federal Government, such as by a single program, single agency, or across multiple agencies.  This category might include some but not all data assets designated as Controlled Unclassified Information (CUI), consistent with Executive Order 13556.  Some non-public data assets may still potentially be available to other intra-agency operating units and/or other government agencies, as discussed in [OMB Memorandum M-11-02: Sharing Data While Protecting Privacy](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2011/m11-02.pdf).  The accessLevelComment field for non-public datasets must contain an explanation for the reasoning behind why these data cannot be made public.*

#### Minimum Requirements to Document if Data Cannot be Released

**Describe Data Publication Process (by November 30, 2013)**

* Agencies must develop a new process, in consultation with their General Counsel or equivalent, to determine whether data assets have a valid restriction to release.
* Agencies must publish a general overview of this process on the www.\[agency].gov/digitalstrategy page. Overviews should include information on the actual process by which data is determined to have a valid restriction to release and examples of what kinds of characteristics a data asset has that leads to a determination to not release.

### E. Clarify Roles and Responsibilities for Promoting Efficient and Effective Data Release

#### Purpose
Agencies should identify points of contact for the following roles and responsibilities related to managing information as an asset:

* Communicating the strategic value of open data to internal stakeholders and the public;
* Ensuring that data released to the public are open, as appropriate, and a point of contact is designated to assist open data use and to respond to complaints about adherence to open data requirements;
* Engaging entrepreneurs and innovators in the private and nonprofit sectors to encourage and facilitate the use of agency data to build applications and services;
* Working with agency components to scale best practices from bureaus and offices that excel in open data practices across the enterprise;
* Working with the agency's Senior Agency Official for Privacy (SAOP) or other relevant officials to ensure that privacy and confidentiality are fully protected; and
* Working with the Chief Information Security Officer (CISO) and mission owners to assess overall organizational risk, based on the impact of releasing potentially sensitive data, and make a risk-based determination.

#### Minimum Requirements to Clarify Roles and Responsibilities for Promoting Efficient and Effective Data Release

**Report the point of contact for each of these roles and responsibilities via the E-Gov IDC<sup>[20](#footnote-20)</sup> by November 30, 2013**

#### Tools and Resources on Project Open Data

* Sample Chief Data Officer Job Descriptions
* Best practices such as Data Governance Board

## III.	Summary of Agency Actions and Reporting Requirements

This section includes a high-level summary of agency actions and reporting requirements which are described in detail in the Policy Requirements section. Some requirements are one-time requirements, and others shall be updated quarterly as a part of the E-Gov IDC. This guidance uses three reporting channels:

* MAX Collect<sup>[21](#footnote-21)</sup>
* MAX Community<sup>[22](#footnote-22)</sup>
* Agency www.\[agency].gov/digitalstrategy pages<sup>[23](#footnote-23)</sup>


| **Agency Actions and Reporting Requirements** | By Nov 30, 2013 | After Nov 30, 2013 | Page |
| :---------------------------------------- |:--------------:| :----------------:| ----:|
|**A. Create and maintain an Enterprise Data Inventory (Inventory)**| |||
|Develop an Inventory Schedule |	• | |	5 |
|Publish Inventory Schedule on the www.\[agency].gov/digitalstrategy page<sup>[24](#footnote-24)</sup> |•| |5|
|Create an Enterprise Data Inventory | •| | 5|
|Submit Inventory Snapshot in a JSON format to the MAX Community<sup>[25](#footnote-25)</sup>|•| |5|
|Maintain the Enterprise Data Inventory: Expand, Enrich, Open| |•|5|
|Update Inventory Snapshot quarterly in a JSON format in MAX Community<sup>[26](#footnote-26)</sup>| |•|5|
|Update the Inventory Schedule on the www.\[agency].gov/digitalstrategy<sup>[27](#footnote-27)</sup> page, revise plans and describe actual results as each quarter completes| |•|5|
|**B.Create and maintain a Public Data Listing** | | | |
|Create and publish Public Data Listing in JSON format at www.\[agency].gov/data.json |•||6|
|Maintain the Public Data Listing||•|6|
|**C. Create a process to engage with customers to help facilitate and prioritize data release** | | | |
|Establish Customer Feedback Mechanism|	•||7|
|Describe Customer Feedback Processes on www.\[agency].gov/digitalstrategy<sup>[28](#footnote-28)</sup> | •|| 8|
|Follow and update process as necessary	||•|8|
|**D.Document if data cannot be released**| | | |
|Develop Data Publication Process|•| |10|
|Publish an overview of Data Publication Process on the www.\[agency].gov/digitalstrategy<sup>[29](#footnote-29)</sup> page|•||10|
|Update process as necessary||•|10|
|**E. Clarify roles and responsibilities for promoting efficient and effective data release**| | | |
|Report Point Of Contact of roles and responsibilities, including contact information for each listed responsibility in MAX Collect<sup>[30](#footnote-30)</sup> |•||10|
|Update the Point Of Contact and contact information for each listed responsibility in MAX Collect as part of the quarterly E-Gov IDC<sup>[31](#footnote-31)</sup> ||•|10|


##Appendix

###Enterprise Data Inventory Enrichment Examples

| **Enrichment Area** | **Examples** |
| :------------------ |------------|
|**Tagging: Reference Models and Controlled Vocabulary**| These fields describe each data asset in terms which have been standardized government-wide. See Project Open Data for additional examples and best practices. *Some examples include: FEAv2 Data Reference Model, FEAv2 Business Reference Model, OMB Budget Function Codes, Related Data.gov Community, Schema.org* |
|**Cross-Inventory Identifier Mapping**|	These fields describe related entries in other “Inventory” lists. *Some examples include: Program (from OPPM’s Program Inventory), Related IT investment from FY2015 Exhibit 53 (UII), Related OIRA Information Collection Request, Related Performance.gov Agency Strategic Objective, Related Federal Data Center Consolidation Initiative data center ID* |
|**Information Quality**|	These fields describe any aspects of data quality evaluated by the agency, consistent with OMB’s Government-Wide Information Quality Guidelines (for example, the type of pre-dissemination review, use of existing standards, documents characterizing missing data in time, or spatial series). |
|**Data Value**|	These fields describe internal and external use, reuse, and demand by customers and users.|
|**Openness**|	These fields describe to what extent each data asset achieves the criteria for “open data” in [M-13-13](/policy-memo). |

##Footnotes

<sup><a id="footnote-1">1</a></sup> Data Asset: A collection of data elements or datasets that make sense to group together. Each community of interest identifies the Data Assets specific to supporting the needs of their respective mission or business functions. Notably, a Data Asset is a deliberately abstract concept. A given Data Asset may represent an entire database consisting of multiple distinct entity classes, or may represent a single entity class.

<sup><a id="footnote-2">2</a></sup> Programs from the Federal Program Inventory: http://goals.performance.gov/federalprograminventory

<sup><a id="footnote-3">3</a></sup> Bureaus from OMB Circular A-11 Appendix C: http://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf

<sup><a id="footnote-4">4</a></sup> For example, by applying the categorizations of “bureau” and “business,” an agency might create classes of “bureau and business,” and choose to tackle “Bureau A, B, & C’s education grants-related data” first.

<sup><a id="footnote-5">5</a></sup> Information collection requests (ICR): http://www.reginfo.gov/public/jsp/PRA/praDashboard.jsp

<sup><a id="footnote-6">6</a></sup> For example:

* OSTP Memorandum Increasing Access to Results of Federally Funded Scientific Research: http://www.whitehouse.gov/sites/default/files/microsites/ostp/ostp_public_access_memo_2013.pdf
* OMB Memorandum M-13-17 Next Steps in the Evidence and Innovation Agenda: http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-17.pdf
* OMB Memorandum M-12-14, Use of Evidence and Evaluation in the 2014 Budget: http://www.whitehouse.gov/sites/default/files/omb/memoranda/2012/m-12-14.pdf

<sup><a id="footnote-7">7</a></sup> IT Dashboard for Exhibit 53 and 300 reporting on IT investments: https://www.itdashboard.gov/

<sup><a id="footnote-8">8</a></sup> For example the statistical and geospatial communities have mature metadata standards

<sup><a id="footnote-9">9</a></sup> For example discipline specific

<sup><a id="footnote-10">10</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-11">11</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-12">12</a></sup> By following the instructions at: https://max.omb.gov/community/x/8YamK

<sup><a id="footnote-13">13</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-14">14</a></sup> The value of “public” in the **AccessLevel** metadata field should be used to refer to a data asset that is or could be made publicly available to all without restrictions.  This includes 1) data assets that have already been openly published online, and 2) data assets that have *not yet been made publicly available but could be*.

<sup><a id="footnote-15">15</a></sup> The presence of an **accessURL** value in a data asset’s metadata will indicate whether or not the data asset has been published or released. This avoids human error in manually updating the accessLevel field when there is an automatic, reliable means of determining the same thing.

<sup><a id="footnote-16">16</a></sup> Publicly available refers to data assets whose contents are downloadable from the Public Data Listing by the public via an accessURL.

<sup><a id="footnote-17">17</a></sup> Working with government stakeholders is encouraged through existing initiatives such as:
* OMB Memorandum M-13-17 Next Steps in the Evidence and Innovation Agenda: http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-17.pdf
* OMB Memorandum M-12-14, Use of Evidence and Evaluation in the 2014 Budget: http://www.whitehouse.gov/sites/default/files/omb/memoranda/2012/m-12-14.pdf
* OMB Memorandum M-11-02 Sharing Data While Protecting Privacy: http://www.whitehouse.gov/sites/default/files/omb/memoranda/2011/m11-02.pdf

<sup><a id="footnote-18">18</a></sup> Agency Digital Government Strategy page by following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-19">19</a></sup> The inventory’s “access levels” should be implemented consistent with Executive Order 13556, which sets out the framework for designating the Controlled Unclassified Information (CUI) categories and subcategories that will serve as exclusive designations for identifying unclassified information throughout the Executive branch that requires safeguarding or dissemination controls, pursuant to and consistent with applicable law, regulations, and Government-wide policies.

<sup><a id="footnote-20">20</a></sup> By following the instructions at: https://max.omb.gov/community/x/uIemK

<sup><a id="footnote-21">21</a></sup> By following the instructions at: https://max.omb.gov/community/x/uIemK

<sup><a id="footnote-22">22</a></sup> By following the instructions at: https://max.omb.gov/community/x/8YamK

<sup><a id="footnote-23">23</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-24">24</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-25">25</a></sup> By following the instructions at: https://max.omb.gov/community/x/8YamK

<sup><a id="footnote-26">26</a></sup> By following the instructions at: https://max.omb.gov/community/x/8YamK

<sup><a id="footnote-27">27</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-28">28</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-29">29</a></sup> By following the instructions at: https://max.omb.gov/community/x/kIamK

<sup><a id="footnote-30">30</a></sup> By following the instructions at: https://max.omb.gov/community/x/uIemK

<sup><a id="footnote-31">31</a></sup> By following the instructions at: https://max.omb.gov/community/x/uIemK

