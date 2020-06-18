---
published: true
permalink: /whitepapers/award-id-description/
layout: article
filename: award-id-description
title: Award Identification (ID) Number and Description
---

# Element: Award Description, Award Identification (ID) Number, Award Modification/Amendment Number, and Parent Award Identification (ID) Number

Thank you for contributing your feedback on this data element—your input and insight was helpful as we worked to finalize the standards. Please go [here](https://max.omb.gov/datastandards) to see the data definitions for these elements in their final form.

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope ="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Award Description</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Award Identification (ID) Number</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Award Modification / Amendment Number</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Parent Award Identification (ID) Number</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
</table>

## Background

The Federal Funding Accountability and Transparency Act (FFATA), 2006, established requirements for federal agencies to report federal award actions to a central, publicly accessible website (USAspending.gov) and identified data that must be reported. FFATA was amended in 2008 to require additional data reporting. FFATA was further amended in 2014 by the Digital Accountability and Transparency Act (DATA) to, among other items, require summary financial data be reported by federal agencies in addition to federal award data.

Section 2(b)(1) of FFATA requires that an award title descriptive of the purpose of each funding action be included when reporting federal award actions.  FFATA itself is silent on the need to report any award identifiers (e.g., contract number, financial assistance number).  However, the Office of Management and Budget (OMB) issued memorandum M-08-04, dated November 9, 2007, which instructed agencies that contract data (including contract identifiers) would be taken from the information reported by them to the Federal Procurement Data System – Next Generation (FPDS-NG); and that the Federal Award Identifier Number (FAIN) would be submitted by agencies for financial assistance awards.  USAspending.gov then implemented use of these identifiers as the keys for identifying “awards” in the system; it uses the identifiers to group multiple actions against an award for the public to view.  As such, OMB determined that although FFATA was silent, award identifiers are required for transparency reporting.

## Context

Award identifiers are common in both the federal procurement and financial assistance processes.  They are used to distinguish individual contracts or grants, and to group individual actions under one contract or grant.  “Actions” include the initial award and subsequent modifications.

Within the procurement process, FAR Part 4.6 requires a unique procurement instrument identifier (PIID).  FAR Part 4.16 identifies the specific contract actions that require identifiers and referenced identifiers to be included.  In November 2014, Part 4.16 was updated to include a specific process and schema for assigning PIIDs and supplementary PIIDs that will be applicable to all agencies issuing procurements not later than October 1, 2017.  

If an award is a delivery order or task order under a parent contract (e.g., indefinite delivery indefinite quantity (IDIQ) contract, multi-agency contract (MAC), Governmentwide acquisition contract (GWAC), or Multiple Award Schedule (MAS) contract), both the deliver order PIID and the parent contract PIID may be needed to identify the award.  After complete implementation of the PIID schema defined in FAR Part 4.16, the award identifier alone will be sufficient to uniquely identify an award.

2 CFR Part 200 requires that a unique Federal Award Identifier Number (FAIN) be included in each federal award; no additional requirements for the process of assignment or a specific schema are included.  An OMB memorandum (not numbered) dated June 12, 2013, titled “Improving Data Quality for USAspending.gov,” emphasized the requirement for a unique FAIN.  It stated that beginning in October 2013, each federal agency must assign a FAIN, unique within the federal agency, to each financial assistance award, and cannot modify the FAIN during the life of the award.

The award identifier is included on all reported subcontracts and subawards.

## Analysis of Current Definitions

Although referenced in the FAR and 2 CFR several times, no specific definitions in the regulations exist for award identifiers.  For the FFATA data standardization effort, the following definitions are proposed for both procurement and financial assistance as basic elements of award identification:

* Award Description – A brief description of the purpose of the award.

* Award Identification (ID) Number – The unique identifier of the specific award being reported. (The PIID for procurement and the FAIN for financial assistance)

* Award Modification / Amendment Number – The identifier of the action being reported that indicates a change to the initial award.  For procurement, a modification / amendment number of zero (“0”) indicates the initial award.  For financial assistance, initial awards are indicated by the Type of Action.

* Parent Award Identification (ID) Number – For procurement, if the award is a delivery order or task order under a parent contract, the identifier of the parent award.

Long term implementation of the DATA Act is expected to require expenditures and/or outlays be tracked to individual awards.  In order to accomplish this, financial systems will need to record the award identifiers.  This consideration does not change the recommended definitions here.

## Recommended Definitions for Transparency Reporting

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Recommended Data Element Name</th>
      <th scope="col">Recommended Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Award Description </td>
    <td>A brief description of the purpose of the award.</td>
  </tr>
  <tr>
    <td>Award Identification (ID) Number</td>
    <td>The unique identifier of the specific award being reported.</td>
  </tr>
  <tr>
    <td>Award Modification / Amendment Number</td>
    <td>The identifier of an action being reported that indicates the specific subsequent change to the initial award.</td>
  </tr>
  <tr>
    <td>Parent Award Identification (ID) Number</td>
    <td>The identifier of the procurement award under which the specific award is issued (such as a Federal Supply Schedule).  Term currently applies to procurement actions only.</td>
  </tr>
</table>

## References

OMB Memorandum M-08-04, “OMB Guidance on Data Submission under the Federal Funding Accountability and Transparency Act (Transparency Act),” November 9, 2007.  [https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2008/m08-04.pdf](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2008/m08-04.pdf)

Federal Acquisition Regulation Part 4.16 identifies contract actions that require identifiers.  [https://www.acquisition.gov/sites/default/files/current/far/html/Subpart%204_16.html#wp1075529](https://www.acquisition.gov/sites/default/files/current/far/html/Subpart%204_16.html#wp1075529)

2 CFR Part 200.210 requires a unique Federal Award Identification Number (FAIN) be included in each federal award.[http://www.ecfr.gov/cgi-bin/text-idx?SID=66ce6d089a6de97f797463856fb205de&mc=true&node=pt2.1.200&rgn=div5#se2.1.200_1210](http://www.ecfr.gov/cgi-bin/text-idx?SID=66ce6d089a6de97f797463856fb205de&mc=true&node=pt2.1.200&rgn=div5#se2.1.200_1210)

OMB Memorandum (unnumbered), “Improving Data Quality for USAspending.gov,” June 12, 2013.[https://obamawhitehouse.archives.gov/sites/default/files/omb/financial/memos/improving-data-quality-for-usaspending-gov.pdf](https://obamawhitehouse.archives.gov/sites/default/files/omb/financial/memos/improving-data-quality-for-usaspending-gov.pdf)
