---
published: true
permalink: /whitepapers/approp-agency-tas/
layout: article
filename: approp-agency-tas.md
title: Treasury Account Symbol, Appropriations Account, and Agency
---

# Elements: Appropriations Account, Agency, Treasury Account Symbol (excluding sub-account)


Thank you for contributing your feedback on this data element—your input and insight was helpful as we worked to finalize the standards. Please go [here](https://max.gov/maxportal/assets/public/offm/DataStandardsFinal.htm "Federal Spending Transparency Standards") to see the data definitions for these elements in their final form.

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope ="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Appropriations Account</td>
    <td>Account Level Information</td>
    <td>DATA Act</td>
  </tr>
  <tr>
    <td>Agency</td>
    <td>Account Level Information</td>
    <td>DATA Act</td>
  </tr>
  <tr>
    <td>Treasury Account Symbol (excluding sub-account)</td>
    <td>Award Characteristic Information</td>
    <td>FFATA</td>
  </tr>
</table>



## Response to Public Feedback (August 2015)

This paper has been edited based on feedback provided for the Funding Agency white paper [here]({{ site.baseurl }}/whitepapers/fundingagency/), which received 8 posts from 7 individuals [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/68), and OMB and Treasury received feedback from the Government Accountability Office (GAO). The majority of the posts brought up concerns about the clarity and specificity of these papers and the definitions; and concerns that using different code lists in different communities would create data quality issues. 

To address the feedback posted, context has been added to this paper and the paper for [Funding Agency Name and Code]({{ site.baseurl }}/whitepapers/fundingagency/), which now also contains the data elements Awarding Agency Name and Code. In addition, to address data quality concerns, OMB and Treasury will be working with agencies to develop validation rules. Additional details about proposed management of agency hierarchy can be found in the paper for Sub Tier Agency and Office [here]({{ site.baseurl }}/whitepapers/sub-tier-agency/). For award level DATA Act reporting, agencies will report both the agency that provided the preponderance of the fund for the award ([Funding Agency]({{ site.baseurl }}/whitepapers/fundingagency/)) and the agency that interacts with the recipient to make the award ([Awarding Agency]({{ site.baseurl }}/whitepapers/fundingagency/)), using the CGAC standard described in the paper below. For the first time, the financial, procurement, and financial assistance communities will be using the same names and codes to describe federal agencies, which will improve data quality, consistency, and transparency. 

## Background

Executive branch agencies carry out programs financed through approximately 7,500 appropriations accounts.  Each appropriations account is established by Congress and includes an agency, account name, and specific time frame in which to incur [obligations]({{ site.baseurl }}/whitepapers/obligation/) and [outlays]({{ site.baseurl }}/whitepapers/outlay/).  While statutory language does not include numeric codes for agencies and accounts, the Treasury Department in consultation with the Office of Management Budget establishes a Treasury Account Symbol (TAS) for each and every appropriations account Congress creates.  Using numeric codes facilitates tracking and reporting across the government.

## Context

The government has several kinds of accounts.  These include appropriations accounts, which incur obligations and outlays; receipt accounts, which collect payments to the government; and, deposit funds, which are non-federal monies held by the government.  The DATA Act requires reporting only for appropriations accounts in the _unexpired_ or _expired_ phases; these phases relate to the time frame when an account can incur obligations and outlays.

* _Unexpired_: during the unexpired phase, the account can incur new obligations and outlays;
* _Expired_: during the expired phase, the account cannot incur obligations but it can incur outlays (for obligations incurred during the unexpired phase);
* _Cancelled_: during the cancelled phase, the account cannot incur obligations or outlays.

## Analysis of Current Definitions

### Appropriations Account, Treasury Appropriation Fund Symbol, and Treasury Account Symbol

An appropriations account is represented by the Treasury Appropriation Fund Symbol (TAFS):  Per [OMB Circular A-11 Section 20](https://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf), “…TAFS refers to the separate Treasury accounts for each appropriation title based on the availability of the resources in the account. The TAFS is a combination of federal account symbol and availability code (e.g., annual, multi-year, or no-year).”  TAFS and appropriations accounts are exactly the same.

[OMB Circular A-11 Section 20](https://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf) also defines Treasury Account Symbol (TAS):  “The account identification code assigned by the Department of the Treasury to individual appropriation, receipt, or other fund accounts.  All financial transactions of the federal government are classified by TAS for reporting to the Department of the Treasury and the Office of Management and Budget.”  The TAS includes an additional component – sub-account – that is not part of the appropriations account or TAFS.

The table below shows the component pieces of TAFS and TAS:

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Component</th>
      <th scope="col">Definition</th>
      <th scope="col">TAFS</th>
      <th scope="col">TAS</th>
    </tr>
  </thead>
  <tr>
    <td>Allocation Transfer Agency Identifier</td>
    <td>Identifies the department or agency that is receiving funds through an allocation (non-expenditure) transfer.</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Agency Identifier</td>
    <td>Identifies the department or agency that is responsible for the account.</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Beginning Period of Availability</td>
    <td>In annual and multi-year funds, identifies the first year of availability under law that an appropriation account may incur new obligations.</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Ending Period of Availability</td>
    <td>In annual and multi-year funds, identifies the last year of funds availability under law that an appropriation account may incur new obligations.</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Availability Type Code</td>
    <td>In appropriations accounts, identifies an unlimited period to incur new obligations; this is denoted by the letter "X"</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Main Account Code</td>
    <td>Identifies the account in statute.</td>
    <td>&#10003;</td>
    <td>&#10003;</td>
  </tr>
  <tr>
    <td>Sub Account Code</td>
    <td>Identifies a Treasury-defined sub-division of the main account.</td>
    <td></td>
    <td>&#10003;</td>
  </tr>
</table>

At a minimum, the agency identifier, availability type code, and main account code will appear.  Other components are blank depending on their individual applicability.  Treasury publishes the main account codes in the [Federal Account Symbols and Titles (FAST) Book](http://www.fiscal.treasury.gov/fsreports/ref/fastBook/fastbook_home.htm).  Main account codes are unique when used in combination with the agency identifier.

### Agency

[OMB Circular A-11 Section 20](https://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf) defines agency as “a department or establishment of the Government.”

The agency identifier used for financial reporting is a 3-character code published in [OMB Circular A-11 Appendix C, Listing of OMB Agency / Bureau and Treasury Codes](https://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/app_c.pdf), in the column labeled _CGAC Agency Code_.

There are other agency identifiers used by other communities.  The Treasury CGAC Code will be used in DATA Act reporting for two reasons.

First, the purpose of the DATA Act is to shine a spotlight on federal spending, which starts with appropriations, and is embodied in appropriations accounts.  Treasury in consultation with OMB creates the codes used by Treasury and agencies in all financial and budget reporting.  The President’s Budget, Treasury Combined Statement, and the government’s SF 133 budget execution reports all present financial information to non-federal stakeholders including Congress using this standard.

Second, funding in the federal government ties back to appropriations accounts, which in turn are owned by agencies.  Every agency has at least one appropriations account, which is codified in its financial system using conventions for TAS and TAFS established by Treasury in conjunction with OMB.  The vast majority of agencies have dozens or scores of appropriations accounts and larger departments have hundreds of appropriations accounts.

OMB Circular A-11 Appendix C is the authoritative source for a list of agency identifiers.  The CGAC Agency Code column should be used.  The FAST Book is the authoritative source for the list of main account codes.

## Final Definitions for Transparency Reporting

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Appropriations Account</td>
    <td>The basic unit of an appropriation generally reflecting each unnumbered paragraph in an appropriation act.  An appropriation account typically encompasses a number of activities or projects and may be subject to restrictions or conditions applicable to only the account, the appropriation act, titles within an appropriation act, other appropriation acts, or the government as a whole.
    <br>
    An appropriations account is represented by a TAFS. 
</td>
  </tr>
  <tr>
    <td>Treasury Account Symbol (excluding sub-account)</td>
    <td><strong>Agency:</strong> A department or establishment of the Government.(defined in OMB Circular A-11)
    <br>
    <strong>Treasury Account Symbol:</strong> The account identification codes assigned by the Department of the Treasury to individual appropriation, receipt, or other fund accounts. All financial transactions of the federal government are classified by TAS for reporting to the Department of the Treasury and the Office of Management and Budget.(defined in OMB Circular A-11)
    <br>
    <strong>Treasury Appropriation Fund Symbol:</strong> The components of a Treasury Account Symbol – allocation agency, agency, main account, period of availability and availability type – that directly correspond to an appropriations account established by Congress.(defined in OMB Circular A-11)
</td>
  </tr>
</table>

## References

[OMB Circular A-11, Section 20, Terms and Concepts for definition of agency and TAS.](https://www.whitehouse.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf)

[Treasury Federal Account Symbols and Titles:  The FAST Book.](http://www.fiscal.treasury.gov/fsreports/ref/fastBook/fastbook_home.htm)
