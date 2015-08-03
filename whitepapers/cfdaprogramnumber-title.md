---
published: true
permalink: /whitepapers/cfdaprogramnumber-title/
layout: hero
filename: cfdaprogramnumber-title.md
title: CFDA Program Number_Title
---

# Element: Catalogue of Federal Domestic Assistance Number and Catalogue of Federal Domestic Assistance Title

<table>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope ="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Number</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Title</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
</table>

## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that the USASpending.gov website include federal award data from Fiscal Year (FY) 2007, and each fiscal year thereafter. This paper provides a brief explanation of Catalog of Federal Domestic Assistance (CFDA) reporting in the financial assistance community today, followed by considerations and recommendations for future reporting.

## Context

FFATA requires data reporting on the CFDA number of the grants program under which an award is made.  For the grants community, OMB Circular A-133 long has required Federal agencies to include in award documentation, the title and number listed in the CFDA for the program under which the award is made, to inform the recipient and make that information available to the auditor conducting the audit of the recipient that the Single Audit Act requires.  With the issuance of the Uniform Guidance, that requirement now is in 2 CFR 200.210.   OMB Circular A-133 also required (now in the Uniform Guidance at 2 CFR 200.331) each recipient to provide the CFDA program title and number to its subrecipients, for the same reason, by including it in each subaward.

All CFDA entries are updated annually and must be completed by September 1st for the following fiscal year.  To ensure compliance, an estimate based on appropriations, or the President’s budget is included with each entry and an estimate for the following fiscal year is also provided to allow for extensive planning by existing and potential grantees.

## Analysis of Current Definitions

In 1983, Public Law 98-169 amended the Federal Program Information Act to transfer to the Administrator of GSA the responsibilities previously assigned to the Director of OMB for maintaining the CFDA as a computerized information system.  The system is to provide access to the information the Act requires the Director of OMB to collect from agencies, review, and provide to the Administrator.  The transfer for maintaining the CFDA took place in July 1984. The Uniform Grants Guidance (2 CFR 200.202) states:

a)  The Federal awarding agency must notify the public of Federal programs in the Catalog of Federal Domestic Assistance (CFDA), maintained by the General Services Administration (GSA)

  1.  The CFDA, or any OMB-designated replacement, is the single, authoritative, government wide comprehensive source of Federal financial assistance program information produced by the executive branch of the Federal Government.
  2.  The information that the Federal awarding agency must submit to GSA for approval by OMB is listed in paragraph (b) of this section. GSA must prescribe the format for the submission.

The Federal awarding agency may not award Federal financial assistance without assigning it to a CFDA number that has been included in the CFDA as required in this section unless there are exigent circumstances requiring otherwise, such as timing requirements imposed by statute.

b)  For each CFDA unit that awards discretionary Federal awards, non-discretionary Federal awards, loans, insurance, or any other type of Federal financial assistance, the Federal awarding agency must submit the following information to GSA:

  1.  Description, Purpose, Goals and Measurement. A brief summary of the statutory or regulatory requirements of the program and its intended outcome. Where appropriate, the Program Description, Purpose, Goals, and Measurement should align with the strategic goals and objectives within the Federal awarding agency's performance plan and should support the Federal awarding agency's performance measurement, management, and reporting as required by Part 6 of OMB Circular A-11;
  2.  Identification of whether the CFDA number makes Federal awards on a discretionary basis or the Federal awards are prescribed by Federal statute, such as in the case of formula grants;
  3.  Projected total amount of funds available associated with the CFDA number. Estimates based on previous year funding are acceptable if current appropriations are not available at the time of the submission;
  4.  Anticipated Source of Available Funds: The statutory authority for funding associated with the CFDA number and, to the extent possible, agency, sub-agency, or, if known, the specific program unit that will issue the Federal awards, and associated funding identifier (e.g., Treasury Account Symbol(s));
  5.  General Eligibility Requirements: The statutory, regulatory or other eligibility factors or considerations that determine the applicant's qualification for Federal awards under the program (e.g., type of non-Federal entity); and
  6.  Applicability of Single Audit Requirements required by Subpart F—Audit of this part.

## Method of Collection

Federal agencies are required to submit to OMB on a timely basis and in accordance with instructions provided by GSA, information on all domestic assistance programs and activities that are federally funded and that are administered by such agency.  This information is submitted into the CFDA.gov by agencies annually for review and as required throughout the year to capture necessary supplements and changes.

## Unique Considerations

The use of CFDA in its current format and practice poses several challenges that will impact the use of the data element and associated information collection in the context of the DATA Act. These challenges include:

-   *Types of Assistance:*

Currently, programs in the Catalog are being classified by GSA into 15 types of assistance.  Benefits and services of the programs are provided through seven financial types of assistance and eight non-financial types of assistance.

While intended to reflect discrete programs under the header of federal assistance (including grants, cooperative agreements, loans and loan guarantees, subsidies, insurance, etc.), current practice has moved away from this discrete focus.  Today, a CFDA entry can reflect information on a program, funding source or high-visibility area of focus.   Additionally, as noted in 2 CFR Part 200.202, each CFDA entry includes a projected total amount of available funds for the program under the specific entry.  Practically speaking, as with the Treasury Account Symbol, the data reported in USAspending.gov reflects only the primary, or predominant, CFDA and attributes, currently, obligations.

-  *Use of CFDA as a “flag” for appropriations funding:*

Sometimes, the CFDA is used as a “flag” for appropriations funding rather than the original program designation.  For example, per OMB guidance, any award funded in whole or in part with Recovery funds, as defined in section 1512 of the American Recovery and Reinvestment Act of 2009 (Pub. L. 111-5) will be reflected as recovery program funds and not the program the funding supports. Unique CFDA numbers were also utilized to designate funding associated with the Affordable Care Act and the Superstorm Sandy Supplemental.

-  *Alignment with USAspending.gov:*

CFDA and USAspending.gov report financial data based on different reporting requirements.  CFDA is required to provide only the amount of dollars obligated in the specified year.  USAspending.gov provides all transaction that occurred within the specified year including obligations and deobligations.  This reporting difference results in different obligation totals for the two systems.


In addition to the recommended standard data definitions for CFDA for transparency reporting below, additional policy determinations may need to be made about CFDA.

## Recommended Definitions for Transparency Reporting
The following data elements are proposed as those necessary to communicate the CFDA of a federal award to the public:

<table>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Recommended Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Number</td>
    <td>The number assigned to a Federal area of work in the Catalog of Federal Domestic Assistance. </td>
  </tr>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Title</td>
    <td>The title of the area of work under which the Federal award was funded in the Catalogue of Federal Domestic Assistance.</td>
  </tr>
</table>

## References

Title 2 Code of Federal Regulations (CFR) §200.77:

[http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl](http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl)

Circular A-133:

[https://www.whitehouse.gov/sites/default/files/omb/assets/omb/circulars/a133/a133.pdf](https://www.whitehouse.gov/sites/default/files/omb/assets/omb/circulars/a133/a133.pdf)

