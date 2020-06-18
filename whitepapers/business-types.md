---
published: true
permalink: /whitepapers/business-types/
layout: article
filename: business-types.md
title: Business Types
---

# Element: Business Types

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Business Types</td>
    <td>FFATA</td>
  </tr>
  </table>

## Response to Public Feedback (August 2015)

Business Types are important ways to describe awards that aid in transparency. During the three week feedback period, 3 individuals contributed through the GitHub issue here, and OMB and Treasury received feedback from the Government Accountability Office (GAO).  To address this feedback, the name of this data element has been changed from “Business Type” to “Business Types,” and the definition has been altered as well to show that this data element is really a collection of flags for business types, rather than a single element. The final data element definitions can be found here.


## Background

There is no specific requirement in either the Federal Funding Accountability and Transparency Act of 2006 (FFATA) or the Digital Accountability and Transparency Act of 2014 (DATA Act) that requires reporting of Business Type.  However, the reporting of socio-economic and other organizational / business indicators relating to federal contractors and financial assistance recipients is a requirement of other statutes and has been a long-standing Federal transparency practice, so this paper provides the definition.

## Context

Agencies used two established data sources (further described below) to report awards to USAspending.gov.  There were two concepts in the established data sources related to reporting business type.  

## Analysis of Current Definitions

There are currently 89 different “business types” that may be included when reporting a federal award to USAspending (87 are used in procurement reporting; 14 of the 87 are also used in financial assistance reporting; remaining 2 are only used in financial assistance reporting). The “business types” used for financial assistance reporting are a subset of those used for procurement reporting. Twenty (20) of the currently used business types have explicit definitions in the Federal Acquisition Regulations (FAR) and / or Title 2 Code of Federal Regulations (CFR).  Several more are used elsewhere in the FAR, but are not specifically defined. Examples include:

* Corporate Entity, Not Tax Exempt
* Sole Proprietorship
* 8(a) Program Participant
* Historically Underutilized Business Zone (HUBZone) Firm
* Small Disadvantaged Business
* Historically Black College or University
* Tribal College
* Educational Institution


An organization could have multiple business types.  For example, a company could be both a HUBZone Firm and a Small Disadvantaged Business.  To accommodate this, in FPDS-NG each of the business types is a separate field, and it includes “yes” or “no” to indicate whether the organization is this business type.

While some of the business types have specific definitions, the overall concept Business Type is not defined.  The proposed definition is:

* Business Type – an indicator of different types of recipients based on socio-economic status and organization / business areas.

The original source for financial assistance awards was the Federal Assistance Award Data System (FAADS) maintained by the Census Bureau, Department of Commerce.  FAADS includes the following data element:  

* Type of Recipient – two-position numeric code which depicts the type of recipient or borrower.

There are 13 types listed.  Only one value is reported, the type that best represents the entity.  Going forward, an option would be to have financial assistance awards use separate fields for each type with a “yes” or “no” indicator as is done in FPDS-NG. The financial assistance and procurement communities will continue to look at additional opportunities to standardize Business Types and how they are reported by agencies to USAspending.gov. 

## Final Definitions for Transparency Reporting
<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Recommended Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Business Types</td>
    <td>A collection of indicators of different types of recipients based on socio-economic status and organization / business areas.</td>
  </tr>
</table>

## References
GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, May 1, 2015.  Elements listed under 13 Contractor Data, pages 139-217.

[https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf)

Federal Assistance Award Data System (FAADS) Users’ Guide for Federal Fiscal Year 2010, revised August 2011.Type of Recipient field #10 on page 9.

[https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf](https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf)

