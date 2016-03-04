---
published: true
permalink: /whitepapers/unique-id-business-name/
layout: article
filename: unique-id-business-name.md
title: Unique Identifier and Legal Entity Name
---

# Elements: Awardee/Recipient Unique Identifier, Awardee/Recipient Legal Entity Name, Ultimate Parent Unique Identifier Number, Ultimate Parent Legal Entity Name 


Updated 7/13/2015: 

Thank you for contributing your feedback on this data element—-your input and insight was helpful as we worked to finalize the standards. Please go [here](https://max.omb.gov/datastandards) to see the data definitions for these elements in their final form.

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Awardee/Recipient Unique Identifier</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Awardee/Recipient Legal Entity Name</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Ultimate Parent Unique Identifier</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Ultimate Parent Legal Entity Name</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
</table>


July 2015 – Accurate and timely identification of responsible Federal awardees is essential to ensuring the integrity of the Federal procurement and financial assistance processes and the best use of taxpayer funds.  Consistent with efforts to increase competition while maintaining standards for entities receiving taxpayer dollars, the Federal governance communities and managing partners for shared information technology infrastructure will continue to explore options to meet the requirements for standard identification of entities receiving awards.  Changes to standards require significant resources (time and funding) and ongoing analyses will include consideration of these issues.  Efforts to further reduce risk and increase competition are ongoing such as the removal of proprietary references to standard identifiers in the FAR and 2 CFR.


## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) established requirements for Federal agencies to report Federal award actions to a single searchable, publicly accessible website (USAspending.gov) and identified data that must be reported.  FFATA was amended in 2008 to require additional data reporting.  FFATA was further amended in 2014 by the Digital Accountability and Transparency Act of 2014 (DATA Act) to require, among other items, that  summary financial data be reported by Federal agencies in addition to federal award data, and to establish standards for the data reported on USAspending.gov or any successor site. The DATA Act requirements specifically state that the data standards shall, to the extent reasonable and practicable, “incorporate a widely accepted, nonproprietary, searchable, platform-independent computer-readable format” and “include unique identifiers for Federal awards and entities receiving Federal awards that can be consistently applied Government-wide”. 

Section 2(b)(1) of FFATA requires, among other things, that (1) the name of the entity receiving the award, (2) a unique identifier of the entity receiving the award, and (3) a unique identifier of the parent entity of the recipient if the recipient is owned by another entity, be included when reporting federal award actions on USAspending.gov or any successor website.  
FFATA defines “entity” broadly as including any legal Entity organization, such as a profit or nonprofit corporation, association, partnership; limited liability company, limited liability partnership, or a sole proprietorship; any other grantee or contractor that is not an individual recipient of Federal assistance or a Federal employee; and any State or locality.  For an organization with subsidiaries, the ultimate parent is the top tier of the organization.  

## Context

Accurate and timely identification of responsible Federal award partners is essential to ensuring the integrity of Federal awarding processes and the best use of taxpayer dollars.  A unique entity identifier is required to, among other things, verify entity information, location, past performance, integrity data, incorporation information, provide payment, and create transparency.   Since 1995<sup>1</sup>, the Federal government has identified the Dun and Bradstreet (D&B) Data Universal Numbering System (DUNS®) as the unique identifier used to standardize identification of Federal contractors.  This decision was the result of a task force recommendations developed in support of the requirements of President Clinton’s October 1993 memo on Streamlining Procurement through Electronic Commerce.  The task force recommended the use of the DUNS® number as it was recognized domestically and internationally for identifying businesses conducting electronic commerce.  The task force recommendations did not preclude use of different identifiers as circumstances changed.

To standardize implementation of FFATA, the Office of Management and Budget (OMB) issued memorandum M-08-04, dated November 9, 2007, which established the use of the DUNS® number as the unique identifier for transparency reporting.  The Federal Acquisition Regulation (FAR) and Code of Federal Regulations (2 CFR) include requirements for a unique identifier for Federal prime and subawardees.  

Over the past 20 years, however, information technology capabilities, open data policies and new transparency requirements have changed and the process for protecting the integrity of the Federal award process has been strengthened.  Federal legislation has been enacted that requires expanded identification of entities working with the Federal government and the development of, to the extent reasonable and practicable, nonproprietary standards, processes, and policies to increase transparency and better trace Federal dollars from appropriation to final outcomes or results.  While key information needed to verify legal Entityes may currently reside in a few providers, options for uniquely identifying those working with the Federal government have expanded.   As a result, the Federal government is changing the FAR, and has changed 2 CFR, to remove the proprietary references to DUNS® numbers and instead refer to a “unique entity identifier”.  

Additionally, the DUNS® number is the primary identifier with which entities register in the System for Award Management (SAM).  The DUNS® number is tied in SAM to the legal Entity name, ‘doing business as’ name, and the physical address that corresponds to it, as recorded by D&B.  The DUNS® number and name fields are not editable in SAM by the entity registering; to change the data, the entity must update their information with D&B first, and then update their SAM record.  Entities awarded Federal procurement and grants actions, with limited exceptions, are required by FAR Subpart 4.11 and 2 CFR to register in SAM and this registration also includes a requirement for a Commercial and Government Entity (CAGE) code.  

An entity’s ultimate parent organization is maintained by D&B (referred to as the global parent by D&B).  When an entity registers in SAM, the parent’s DUNS® number is provided, along with the parent’s legal Entity name.

While the proprietary references are being removed from the FAR, the requirement for standardized and unique identification of entities remains in order to protect taxpayers.  There are significant risks to removing a single standard and changing identifiers on a regular basis and these include loss in data integrity, inability to identify responsible parties, consideration of appropriate past performance, and costs to change financial, grants, and procurements systems government-wide.   

The Federal government is mitigating these risks for taxpayers by using a data standard for a unique identifier that is governed by the interagency Award Committee for E-Government (ACE) and managed by the General Services Administration’s Integrated Award Environment (IAE).  Governing the changes through the ACE will ensure Federal-wide stakeholders are engaged.  Managing through the IAE will ensure consistency in application for all Federal awardees.


<sup>1</sup>Office of Management and Budget Office of Federal Procurement Policy Memorandum of August 8, 1995.

## Analysis of Current Definitions

The definitions and protocol currently used in the Federal government to uniquely identify entities for Federal award purposes are as follows:

* _**Awardee/Recipient Unique Identifier**_: the Data Universal Numbering System (DUNS®) Number – The 9-digit number assigned by Dun & Bradstreet, Inc. (D&B) to identify unique business entities, which is used as the unique entity identifier for Federal Awardees/Recipients.
* _**Awardee/Recipient Legal Entity Name**_:  The name of the awardee/recipient that relates to the Awardee DUNS® Number.  For U.S. based companies, this name is what the business ordinarily files in its formation documents with the individual states (when this is required).
* _**Ultimate Parent Unique Identifier**_: Awardee/Recipient Parent DUNS® Number – The 9-digit number assigned by Dun & Bradstreet, Inc. (D&B) that uniquely identifies the ultimate parent (as determined by D&B) related to the Awardee/Recipient DUNS® Number; used as the unique parent entity identifier for Federal Awardees/Recipients.
* _**Ultimate Parent Legal Entity Name**_: The name of the ultimate parent of the awardee/recipient that relates to the Awardee/Recipient Parent DUNS® Number.

The “Data Universal Numbering System (DUNS®) number” is currently defined in the FAR as “the 9-digit number assigned by Dun and Bradstreet, Inc. (D&B) to identify unique business entities, which is used as the identification number for Federal Contractors.”  The DUNS® number was, until recently, defined in 2 CFR Part 25 as “the nine-digit number established and assigned by Dun and Bradstreet, Inc. (D&B) to uniquely identify business entities.”  

Note that legal Entity name, parent DUNS® number, and parent legal Entity name are not specifically defined in the FAR or 2 CFR, but are necessary to comply with FFATA.  Legal Entity name is used to distinguish from the use of various ‘tradestyle’ or ‘doing business as’ names. Any changes to the use of the existing number for these processes will require resources to change agencies’ financial, grants, and procurement systems as well as systems supporting government-wide systems used for analysis or display of data.  This could be a significant and lengthy effort to review and implement any suggested changes.

Going forward, the Federal government will establish a transparent process for exploring potential alternatives to existing entity identifiers.  OMB and Treasury, in collaboration with the General Services Administration and the Award Committee for E-Government will establish a process for considering options, including soliciting information about viable alternatives from and reaching out about  nonproprietary alternatives to all sectors, including private companies, nonprofits, and Federal government providers. This process will result in an analysis of alternatives for the unique identification of entities working with the Federal government while maintaining the statutory and regulatory integrity protections for the needs of the various awarding communities (loans, financial assistance, procurement, etc.) as well as transparency communities. The analysis of alternatives will include consideration of costs, implementation considerations, and protections for Federal taxpayers.  The analysis of alternatives is anticipated to be complete in FY2017. 


## Recommended Definitions for Transparency Reporting

For the data standardization effort, there are no changes recommended at this time to the existing standard for unique entity identifier.  This mitigates costs to taxpayers as well as risks to the integrity of the Federal awarding process by continuing the use of existing standards while exploring alternatives for both the identifier and other aspects of the award process associated with a unique entity identifier.

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Recommended Data Element Name</th>
      <th scope="col">Recommended Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Awardee/Recipient Unique Identifier</td>
    <td>The unique identification number for an awardee or recipient.  Currently the identifier is the 9-digit number assigned by D&B referred to as the DUNS® number.</td>
  </tr>
  <tr>
    <td>Awardee/Recipient Legal Entity Name </td>
    <td>The name of the awardee or recipient that relates to the unique identifier.  For U.S. based companies, this name is what the business ordinarily files in formation documents with individual states (when required). </td>
  </tr>
  <tr>
    <td>Ultimate Parent Unique Identifier</td>
    <td>The unique identification number for the ultimate parent of an awardee or recipient.  Currently the identifier is the 9-digit number maintained by D&B as the global parent DUNS® number..</td>
  </tr>
  <tr>
    <td>Ultimate Parent Legal Entity Name</td>
    <td>The name of the ultimate parent of the awardee or recipient.  Currently the name is from the global parent DUNS® number.  </td>
  </tr>
</table>

## References

OMB Memorandum M-08-04, OMB Guidance on Data Submission under the Federal Funding Accountability and Transparency Act (Transparency Act), which established use of the DUNS&#174; number as the unique identifier for transparency reporting.  
[https://www.whitehouse.gov/sites/default/files/omb/assets/omb/memoranda/fy2008/m08-04.pdf](https://www.whitehouse.gov/sites/default/files/omb/assets/omb/memoranda/fy2008/m08-04.pdf)

Federal Acquisition Regulation  
 [https://acquisition.gov/far/loadmainre.html](https://acquisition.gov/far/loadmainre.html)  
 Subparts 2.1, 4.6, 4.11, 4.17, 4.18, 9.4, 12.3, 19.7,
