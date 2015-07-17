---
published: true
permalink: /whitepapers/fundingagency/
layout: hero
filename: fundingagency.md
title: Funding Agency
---

# Element: Funding Agency Name and Funding Agency Code

<table>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope ="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Funding Agency Name</td>
    <td>Funding Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Funding Agency Code</td>
    <td>Funding Entity Information</td>
    <td>FFATA</td>
  </tr>
</table>

##Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that each Federal award include information on the Federal funding agency.  This paper provides the definition of the Federal funding agency name and Federal funding agency code.

Currently, different functional communities (e.g. financial assistance, budget, finance, procurement) use different coding schemes to represent agency.

In Federal contracting, sometimes one organization serves as the contracting office for another organization.  Federal Acquisition Regulation defines “assisted acquisition” as a type of interagency acquisition where one agency performs acquisition activities (“servicing agency”) on another agency’s behalf (“requesting agency”), such as awarding and administering a contract, task order, or delivery order.  In this paper, the servicing agency that is performing the acquisition activities is referred to as the “awarding” organization, and the agency that has the funding and authority to carry out a particular activity is referred to as the “funding” organization.  If there is only one agency involved, the “awarding” and “funding” elements are within the same agency.  

This practice also applies to financial assistance awards.


##Context

Agencies used two established data sources (further described below) to report awards to USAspending.gov.  There were several Federal organization-related fields in the established data sources which agencies have been reporting.  

##Analysis of Current Definitions

The original source for contract awards was the Federal Procurement Data System – Next Generation (FPDS-NG).  FPDS-NG includes the following agency-related data element definitions.

* Contracting Agency Code (4A) – the code for the agency of the contracting office that executed or is otherwise responsible for the transaction. 
* Program / Funding Agency Code (4C) – the code for the agency that provided the preponderance of the funds obligated by this transaction.
* Treasury Account Symbol Agency Identifier (6SC) – the department, agency or establishment of the U.S. Government that is responsible for the Treasury Account Symbol.

Ordinarily, the **Program / Funding Agency Code** and the **Treasury Account Symbol Agency Identifier** can identify the funding agency. 

The original source for *financial assistance awards* was the Federal Assistance Award Data System (FAADS) maintained by the Census Bureau, Department of Commerce.  OMB added data elements to FAADS (called FAADS PLUS) for FFATA reporting.  FAADS PLUS includes the following Federal organization-related data elements. Currently, agencies submit the same data using the same definitions to USAspending.gov using the Award Submission Portal (ASP). The ASP has replaced FAADS and FAADS PLUS. The two codes in the ASP that relates to Funding Agency follows:

* Federal Agency / Organizational Unit Code – four-position FIPS-95<sup>1</sup> agency-bureau sequencing numeric code.  
* Federal Agency Name – the name of the agency making the award of financial assistance.
* Program Source / Treasury Account Symbol: Agency Code – the agency providing the largest source of funding for the award.

The **Program Source / Treasury Account Symbol**: Agency Code identifies the funding agency.

In the past, financial assistance awards only reported one organization; they did not differentiate between funding agency and awarding agency.  Going forward, financial assistance awards must include both.

In the future, the Federal communities will examine the potential to provide additional detail on funding sources, beyond the source of the preponderance of funding.  

##Recommended Definitions for Transparency Reporting

<table>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Funding Agency Names</td>
    <td>Name of the Federal organization that provided the preponderance of the funds for an award and/or individual transactions related to an award.</td>
  </tr>
  <tr>
    <td>Funding Agency Code</td>
    <td>The 3-digit CGAC agency code of the Federal organization that provided the preponderance of the funds for an award and/or individual transactions related to an award.</td>
  </tr>
</table>

<sup>1</sup>The National Institute of Standards and Technology (NIST) withdrew the Federal Information Processing Standards (FIPS) codes referenced above (FIPS 95-2, *Codes for the Identification of Federal and Federally Assisted Organizations*) in 2008.  A second publication, NIST Special Publication 800-87, Codes for Identification of Federal and Federally-Assisted Organizations, provides similar codes but has not been updated since 2008.  Organizations established after 2008 (such as the Consumer Financial Protection Bureau) are not in SP 800-87.  The FIPS 95-2 and SP 800-87 codes provided the basis of the FPDS-NG table of agency codes, which is updated by GSA and so includes new agencies.

##References

Federal Acquisition Regulation (FAR) Subpart 2.1 – Definitions, includes the definition of assisted acquisition.
[https://www.acquisition.gov/?q=browsefar](https://www.acquisition.gov/?q=browsefar)

GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, May 1, 2015.  Elements 4A, 4C and 6SC, pages 47-49 and 79.
[https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf)

GSA maintains a table of agency codes and office codes for FPDS-NG. 
[https://www.fpds.gov/downloads/top_requests/FPDSNG_Contracting_Offices.xls](https://www.fpds.gov/downloads/top_requests/FPDSNG_Contracting_Offices.xls)

U.S. Department of the Treasury, Award Submission Portal User Guide (August 2015).  

Federal Procurement Data System – Next Generation Grants Data Dictionary, Version 1.0, January 10, 2013.  Elements 5A and 5B on pages 12-13.
[https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf](<https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf>)

