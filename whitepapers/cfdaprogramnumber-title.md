---
published: true
permalink: /whitepapers/cfdaprogramnumber-title/
layout: article
filename: cfdaprogramnumber-title.md
title: CFDA Program Number_Title
---

# Element: Catalogue of Federal Domestic Assistance Number and Catalogue of Federal Domestic Assistance Title

<table class='table-bordered'>
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

## Response to Public Feedback (August 2015)

The Catalog of Federal Domestic Assistance (CFDA) is a resource for stakeholders within and outside of the federal government. The CFDA Number and CFDA Title reported on USAspending.gov help to more transparently associate the CFDA entries with awards and obligations that are made, providing greater transparency about Federal financial assistance. During the three week feedback period, 4 individuals and organizations contributed 4 posts through the GitHub issue [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/67), and OMB and Treasury received feedback from the Government Accountability Office (GAO). This feedback has provided valuable insight into how stakeholders use these data elements. However, after reviewing this feedback, no changes to this paper or definitions were deemed necessary because most of the points relate to operation or policy issues that OMB and Treasury will continue to examine moving forward. The final data element definitions can be found [here](https://max.gov/datastandards).


## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that the USASpending.gov website include federal award data from Fiscal Year (FY) 2007, and each fiscal year thereafter. This paper provides a brief explanation of Catalog of Federal Domestic Assistance (CFDA) reporting in the financial assistance community today, followed by considerations and recommendations for future reporting.

## Context

FFATA requires data reporting on the CFDA number of the federal financial assistance program under which an award is made.  For the grants community, OMB Circular A-133 long has required federal agencies to include in award documentation, the title and number listed in the CFDA for the program under which the award is made, to inform the recipient and make that information available to the auditor conducting the audit of the recipient that the Single Audit Act requires.  With the issuance of the Uniform Guidance, that requirement now is in 2 CFR 200.210.   OMB Circular A-133 also required (now in the Uniform Guidance at 2 CFR 200.331) each recipient to provide the CFDA program title and number to its subrecipients, for the same reason, by including it in each subaward.  

All CFDA entries are updated annually and must be completed by September 1st for the following fiscal year.  To ensure compliance, an estimate based on appropriations, or the President’s budget is included with each entry and an estimate for the following fiscal year is also provided to allow for extensive planning by existing and potential grantees.

## Analysis of Current Definitions

In 1983, Public Law 98-169 amended the Federal Program Information Act to transfer to the Administrator of GSA the responsibilities previously assigned to the Director of OMB for maintaining the CFDA as a computerized information system.  31 U.S.C. § 6102.  The system is to provide public access to the information the Act requires the Director of OMB to collect from agencies, review, and provide to the Administrator.  The transfer for maintaining the CFDA took place in July 1984. The Uniform Grants Guidance (2 CFR 200.202) states: 

a)  The federal awarding agency must notify the public of federal programs in the Catalog of Federal Domestic Assistance (CFDA), maintained by the General Services Administration (GSA)

  1.  The CFDA, or any OMB-designated replacement, is the single, authoritative, government wide comprehensive source of federal financial assistance program information produced by the executive branch of the federal government.
  2.  The information that the federal awarding agency must submit to GSA for approval by OMB is listed in paragraph (b) of this section. GSA must prescribe the format for the submission.
  3.  The federal awarding agency may not award federal financial assistance without assigning it to a listing that has been included in the CFDA as required in this section unless there are exigent circumstances requiring otherwise, such as timing requirements imposed by statute.

b)  For each CFDA unit that awards discretionary federal awards, non-discretionary federal awards, loans, insurance, or any other type of federal financial assistance, the federal awarding agency must submit the following information to GSA:

  1.  Description, Purpose, Goals and Measurement. A brief summary of the statutory or regulatory requirements of the program and its intended outcome. Where appropriate, the Program Description, Purpose, Goals, and Measurement should align with the strategic goals and objectives within the federal awarding agency's performance plan and should support the federal awarding agency's performance measurement, management, and reporting as required by Part 6 of OMB Circular A-11;
  2.  Identification of whether the CFDA number makes federal awards on a discretionary basis or the federal awards are prescribed by federal statute, such as in the case of formula grants;
  3.  Projected total amount of funds available associated with the CFDA number. Estimates based on previous year funding are acceptable if current appropriations are not available at the time of the submission;
  4.  Anticipated Source of Available Funds: The statutory authority for funding associated with the CFDA number and, to the extent possible, agency, sub-agency, or, if known, the specific program unit that will issue the federal awards, and associated funding identifier (e.g., Treasury Account Symbol(s));
  5.  General Eligibility Requirements: The statutory, regulatory or other eligibility factors or considerations that determine the applicant's qualification for federal awards under the program (e.g., type of non-Federal entity); and
  6.  Applicability of Single Audit Requirements required by Subpart F—Audit of this part.

## Method of Collection

Federal agencies are required to submit to OMB on a timely basis and in accordance with instructions provided by GSA, information on all domestic assistance programs and activities that are federally funded and that are administered by such agency.  This information is submitted into the CFDA.gov by agencies annually for review and as required throughout the year to capture necessary supplements and changes.

## Unique Considerations

The use of CFDA in its current format and practice poses several challenges that will impact the use of the data element and associated information collection in the context of the DATA Act. These challenges include:

-   *Types of Assistance:*

Currently, programs in the CFDA are being classified by GSA into 15 types of assistance.  Benefits and services of the programs are provided through seven financial types of assistance and eight non-financial types of assistance.  

While intended to reflect discrete programs under the header of federal assistance (including grants, cooperative agreements, loans and loan guarantees, subsidies, insurance, etc.), current practice has moved away from this discrete focus.  Today, a CFDA entry can reflect information on a program, funding source or high-visibility area of focus.   Additionally, as noted in 2 CFR Part 200.202, each CFDA entry includes a projected total amount of available funds for the program under the specific entry.  Practically speaking, as with the Treasury Account Symbol, the data reported in USAspending.gov reflects only the primary, or predominant, CFDA and attributes, currently, obligations.

-  *Use of CFDA as a “flag” for appropriations funding:*

Sometimes, the CFDA is used as a “flag” for appropriations funding rather than the original designation.  For example, per OMB guidance, any award funded in whole or in part with “recovery funds,” as defined in section 1512 of the American Recovery and Reinvestment Act of 2009 (Pub. L. 111-5) will be reflected as Recovery Act program funds and not the program the funding supports. Unique CFDA numbers were also utilized to designate funding associated with the Affordable Care Act and the Disaster Relief Appropriations Act, 2013 which was enacted in response to Superstorm Sandy..

-  *Alignment with USAspending.gov:*

The CFDA and USAspending.gov contain financial data based on different reporting requirements.  The CFDA is required to contain only the projected total amount of funds available in the specified year.  USAspending.gov provides all transactions that occurred within the specified year including obligations and deobligations.  This reporting difference results in different dollar totals for the two systems.  


In addition to the recommended standard data definitions for CFDA for transparency reporting below, additional policy determinations may need to be made about CFDA.

## Final Definitions for Transparency Reporting
The following data elements are determined to be necessary to communicate the CFDA of a federal award to the public:

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Number</td>
    <td>The number assigned to a federal area of work in the Catalog of Federal Domestic Assistance. </td>
  </tr>
  <tr>
    <td>Catalogue of Federal Domestic Assistance (CFDA) Title</td>
    <td>The title of the area of work under which the federal award was funded in the Catalogue of Federal Domestic Assistance.</td>
  </tr>
</table>

## References

Title 2 Code of Federal Regulations (CFR) §200.77:

[http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl](http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl)

Circular A-133:

[https://www.whitehouse.gov/sites/default/files/omb/assets/omb/circulars/a133/a133.pdf](https://www.whitehouse.gov/sites/default/files/omb/assets/omb/circulars/a133/a133.pdf)

