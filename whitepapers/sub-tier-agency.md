---
published: true
permalink: /whitepapers/sub-tier-agency/
layout: article
filename: sub-tier-agency.md
title: Sub Tier Agency
---

# Element: Sub Tier Agency and Office Information


<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Funding Sub Tier Agency Name</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Funding Sub Tier Agency Code</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Funding Office Name</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Funding Office Code</td>
    <td>FFATA</td>
  </tr>
    <tr>
    <td>Awarding Sub Tier Agency Name</td>
    <td>FFATA</td>
  </tr>
    <tr>
    <td>Awarding Sub Tier Agency Code</td>
    <td>FFATA</td>
  </tr>
    <tr>
    <td>Awarding Office Name</td>
    <td>FFATA</td>
  </tr>
    <tr>
    <td>Awarding Office Code</td>
    <td>FFATA</td>
  </tr>
  </table>

## Response to Public Feedback (August 2015)

The data elements in this paper will provide additional transparency into organizational structures of federal agencies and how this structure relates to federal award spending. During the three week feedback period, 2 individuals and organizations contributed through the GitHub issues [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/70) and [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/75), and OMB and Treasury received feedback from the Government Accountability Office (GAO).This input commended the efforts to provide additional information and raised a concern about this information only being for the predominant funding or awarding organizational unit. As we move through implementation, these are issues we will continue to address through updated to the schema, ongoing policy discussions, and potential further clarification. After reviewing this feedback, no changes to the below paper or definitions were deemed necessary. The final data element definitions can be found [here](https://max.gov/datastandards).


## Background

This paper addresses the set of data elements that identify a sub tier agency or “level 2” within a federal department or independent agency, and an office or “level n.”  The focus is in two key areas for transparency and data-driven decision making, (1) the ability to identify from where the funds on an award originate and (2) the ability to identify what organization awarded those funds.

The Digital Accountability and Transparency Act of 2014 (DATA Act) refers to section 105 of title 5, United States Code, for the definition of a “federal agency”.  It means an Executive department (one of the 15 “Department of” organizations), government corporation (a corporation owned or controlled by the Government of the United States), or an independent establishment (an establishment in the executive branch not included above).  A federal agency can be thought of as a “level 1” organization within the Executive Branch.  The definition for federal agency is provided in a separate paper [(Treasury Account Symbol (excluding Sub-Account), Appropriations Account, and Agency)]({{ site.baseurl }}/whitepapers/approp-agency-tas/).  

There are no explicit requirements for publicly reporting obligations or expenditures of federal organizations at “level 2” or below.  The federal Funding Accountability and Transparency Act (FFATA) of 2006 requires agencies to report the funding agency for each award, but not organizational units below that agency. Increased transparency as well as reaching data-driven management decisions necessitates availability of data at lower levels than the top level of the Department or independent agency.   This will allow the public and other agencies to see the agency making the award as well as the source of funding used. 

In federal contracting, the organization awarding a contract can be different from the organization(s) providing the funds.  Federal Acquisition Regulation defines “assisted acquisition” as a type of interagency acquisition where a servicing agency performs acquisition activities on a requesting agency’s behalf, such as awarding and administering a contract, task order, or delivery order.  In this paper, the servicing organization that is performing the acquisition activities is referred to as the “awarding” organization, and the organization that has the requirement and provides the predominance of the funding is referred to as the “funding” organization.  If there is only one organization involved, the “awarding” elements are the same as the “funding” elements.  Similar arrangements can also occur in federal financial assistance. For some financial assistance awards, there may be multiple “funding” and “awarding” organizations. This paper recommends that agencies report the predominant “funding” and “awarding” organizations for federal awards. 

## Context

Data reported for federal awards come from two established data sources and are made available on USASpending.gov (further described below).  There are several federal organization-related fields in these established data sources.   
Analysis of Current Definitions
The original source for contract awards was the Federal Procurement Data System – Next Generation (FPDS-NG).  While these data elements are not required under FFATA or the DATA Act, they have historically been reported by agencies for federal procurement.  FPDS-NG includes the following federal organization-related data element definitions.

* Contracting Agency Code – the code for the agency of the contracting office that executed or is otherwise responsible for the transaction.
* Contracting Office Code – the agency-supplied code of the contracting office that executes the transaction.
* Program / Funding Agency Code – the code for the agency that provided the preponderance of the funds obligated by this transaction.
* Program / Funding Office Code – the funding agency-provided code that identifies the office (or other organization entity) that provided the preponderance of funds. 

As the organization that manages FPDS-NG, the General Services Administration (GSA) Integrated Award Environment (IAE) maintains a table of codes and organizational hierarchy as identified by agencies for use in federal procurement (and in some cases adopted for federal grants).  In general, the first two characters of the code are at the Department or independent agency level (referred to here as Level 1) and the last two characters are the next level in the organization (referred to here as level 2 or sub-tier agency).    

For procurement, the Level 1 designation is the legacy Treasury Account Symbol (2 character) and the sub-tier and office structures roll up into the Level 1 organization.  

In procurement, Departments and agencies also report the office (level n) that awards or funds a contract (or action).  The FAR was amended in 2014 to require the use of Activity Address Codes (AACs) as the authoritative identification of offices.  The AAC is a component in the unique and uniform procurement instrument identifier (PIID) and federal Departments and agencies are in the process of verifying or modifying the existing organizational constructs in the IAE hierarchy (FPDS is the baseline for this hierarchy) to implement the AAC by the required deadline.

Note that the code set used for the first two characters of the FPDS-NG code is different from the code set used for financial reporting.  The agency identifier used for financial reporting is a 3-character code published in OMB Circular A-11 Appendix C, Listing of OMB Agency / Bureau and Treasury Codes, in the column labeled CGAC Agency Code.  In effect, the FPDS-NG codes roll up to the CGAC Agency Code.

The original source for financial assistance awards was the Federal Assistance Award Data System (FAADS) maintained by the Census Bureau, Department of Commerce.  FAADS includes the following federal organization-related data elements.  

* Federal Agency / Organizational Unit Code – four-position FIPS-95<sup>1</sup> agency-bureau sequencing numeric code.  
* Federal Agency Name – the name of the agency making the award of financial assistance.

The original source for Department and agency identification for both FPDS and FAADS was the National Institute of Standards and Technology (NIST) Federal Information Processing Standards (FIPS 95-2) that was eliminated in 2008.  A second publication, NIST Special Publication 800-87, Codes for Identification of Federal and Federally-Assisted Organizations, provides similar codes but has not been updated since 2008.  Organizations established after 2008 (such as the Consumer Financial Protection Bureau) are not in SP 800-87.  The FIPS 95-2 and SP 800-87 codes provided the basis of the FPDS-NG table of agency codes, which is updated by GSA and so includes new agencies.

While not required by FFATA or the DATA Act, financial assistance awards also report level 2 of the organization. No information on organizational units below this level are reported on USAspending.gov.  However, financial assistance areas of work are reported at the office level in the Catalog of Federal Domestic Assistance (CFDA). The financial assistance community recently adopted the use of the AAC as the authoritative identifier for office and is taking steps towards implementation.

In the past, financial assistance awards only reported “level 2” of the organization; they did not include “level n” or Office.  They also only reported the awarding organization; they did not include the funding organization.  Going forward, financial assistance awards will include all of these elements.

Recommended Business Process

1.  A hierarchy of organizational units for federal agencies be centrally maintained, using the AAC standard for office. 
2.  Sub Tier Agency (level 2) for “funding” and “awarding” organization be defined and managed by each federal agency, be centrally maintained, and be reported for each federal award.  
3.   Policy be updated to include reporting of office codes for financial assistance.
4.  Agencies use the following criteria to identify an office:
* It is the smallest organizational unit that has responsibility, either funding or awarding as defined above and in the attached, over the award. 
* The Funding Office should be below the Funding Sub-Tier Agency which should be below the Funding Agency in that agency’s hierarchy, and in the central hierarchy. 
* The Awarding Office should be below the Awarding Sub-Tier Agency which should be below the Awarding Agency in that agency’s hierarchy, and in the central hierarchy.
* Each office only has 1 code. If the office awards/funds both procurements and financial assistance, the code will be the same. 

<sup>1</sup>The National Institute of Standards and Technology (NIST) withdrew the Federal Information Processing Standards (FIPS) codes referenced above (FIPS 95-2, Codes for the Identification of Federal and Federally Assisted Organizations) in 2008.  A second publication, NIST Special Publication 800-87, Codes for Identification of Federal and Federally-Assisted Organizations, provides similar codes but has not been updated since 2008.  Organizations established after 2008 (such as the Consumer Financial Protection Bureau) are not in SP 800-87.  The FIPS 95-2 and SP 800-87 codes provided the basis of the FPDS-NG table of agency codes, which is updated by GSA and so includes new agencies.

## Final Definitions for Transparency Reporting
<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Funding Sub Tier Agency Name</td>
    <td>Name of the level 2 organization that provided the preponderance of the funds obligated by this transaction.</td>
  </tr>
  <tr>
    <td>Funding Sub Tier Agency Code</td>
    <td>Identifier of the level 2 organization that provided the preponderance of the funds obligated by this transaction.</td>
  </tr>
  <tr>
    <td>Funding Office Name</td>
    <td>Name of the level n organization that provided the preponderance of the funds obligated by this transaction.</td>
  </tr>
  <tr>
    <td>Funding Office Code</td>
    <td>Identifier of the level n organization that provided the preponderance of the funds obligated by this transaction.</td>
  </tr>
  <tr>
    <td>Awarding Sub Tier Agency Name </td>
    <td>Name of the level 2 organization that awarded, executed or is otherwise responsible for the transaction.</td>
  </tr>
  <tr>
    <td>Awarding Sub Tier Agency Code</td>
    <td>Identifier of the level 2 organization that awarded, executed or is otherwise responsible for the transaction.</td>
  </tr>
  <tr>
    <td>Awarding Office Name</td>
    <td>Name of the level n organization that awarded, executed or is otherwise responsible for the transaction. </td>
  </tr>
  <tr>
    <td>Awarding Office Code </td>
    <td>Identifier of the level n organization that awarded, executed or is otherwise responsible for the transaction.</td>
  </tr>
</table>


## References

Federal Acquisition Regulation (FAR) Subpart 2.1 - Definitions includes the definition of assisted acquisition.

[https://www.acquisition.gov/?q=browsefar](https://www.acquisition.gov/?q=browsefar)

GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, May 1, 2015.  Elements 4A, 4B, 4C, and 4D, pages 47-50.

[https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf)

GSA maintains a table of agency codes and office codes for FPDS-NG. 

[https://www.fpds.gov/downloads/top_requests/FPDSNG_Contracting_Offices.xls](https://www.fpds.gov/downloads/top_requests/FPDSNG_Contracting_Offices.xls)

Federal Assistance Award Data System (FAADS) Users’ Guide for Federal Fiscal Year 2010, revised August 2011.  Federal organization fields #13 on page 9 and #31 on page 12.

[https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf](https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf)

Federal Procurement Data System – Next Generation Grants Data Dictionary, Version 1.0, January 10, 2013.  Elements 5A and 5B on pages 12-13.

[https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf](<https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf>)

