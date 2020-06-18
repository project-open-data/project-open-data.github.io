---
published: true
permalink: /whitepapers/amount/
layout: article
filename: amount.md
title: Amount
---

# Element: Amount of Award, Federal Action Obligation, Non-Federal Funding Amount, Current Total Value of Award, and Potential Total Value of Award


<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Amount of Award</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Federal Action Obligation</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Non-Federal Funding Amount</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Current Total Value of Award</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Potential Total Value of Award</td>
    <td>FFATA</td>
  </tr>
  </table>

## Response to Public Feedback (August 2015)

Data elements related to amount are crucial to federal spending transparency and are important to many stakeholder groups, within and outside of the federal government. During the three week feedback period, 3 individuals and organizations provided feedback through GitHub, which is available [here](https://max.gov/datastandards), and OMB and Treasury received feedback from the Government Accountability Office (GAO). The majority of this input brought up questions about the context of these amounts (including which data elements are cumulative), the applicability of these data elements to procurement and financial assistance, and the sources of this information.

In response to the feedback posted, the data element names and definitions have been revised to show more clearly which data elements are cumulative, which are only procurement or financial assistance, and how they are related. Through this process, some of the data element names have been adjusted. ‘Funding Obligation Amount on Award’ has been renamed ‘Federal Action Obligation’ and ‘Funding Action Obligation’ has been renamed ‘Amount of Award.’ The final data elements and definitions are posted [here](https://max.gov/datastandards). In addition to these data elements, [obligations]({{ site.baseurl }}/whitepapers/obligation/) for awards will also be reported by agencies from agency financial systems. This data element was previously standardized in May of this year and the final standard is [here](https://max.gov/datastandards).  


## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires reporting the amount of the award for each federal award.  This paper defines amounts that agencies are reporting for financial assistance awards (including grants, subgrants, loans, awards, cooperative agreements, and other forms of financial assistance) and contract awards (including contracts, subcontracts, purchase orders, task orders, and delivery orders).

## Context

To meet FFATA requirements, agencies used two established data sources (further described below) to report awards to USAspending.gov.  Since the information for financial assistance awards and contract awards are different, USAspending.gov is set up to report financial assistance and contract information separately.  In addition, each established data source included more than one “amount” element, with the result that agencies have been reporting multiple “amount” elements to USAspending.gov.  

Now, to clarify and standardize the award amount, this paper defines the “award amount” and how it relates to the other amounts reported.

## Analysis of Current Definitions

The original source for *financial assistance awards* was the Federal Assistance Award Data System (FAADS) maintained by the Census Bureau, Department of Commerce. FAADS included the following amount-related data elements.  

* Federal Funding Amount – amount of federal government’s obligation or contingent liability, in dollars.
* Non-Federal Funding Amount – amount of non-federal funding, in dollars.
* Total Funding Amount – federal funding amount plus non-federal funding amount in dollars.

<b>Federal Funding Amount</b> is the amount of the award that agencies report to USAspending.gov for grants, subgrants, awards, cooperative agreements, and other forms of financial assistance except loans.

Dollar amounts for *loan/loan guarantee* transactions are reported differently from other types of assistance transactions.  OMB added data elements to FAADS (called FAADS PLUS) for FFATA reporting.  

Loan/loan guarantee records do not use the Federal Funding Amount, Non-Federal Funding Amount and Total Funding Amount fields; instead they use the following elements:

* Original Subsidy Cost of the Direct Loan / Loan Guarantee – the estimated long-term cost to the Government of a direct loan or loan guarantee, or modification thereof, calculated on a net present value basis, excluding administrative costs.
* Face Value of Direct Loan / Loan Guarantee – the full amount of the loan/loan guarantee award to the recipient.

<b>Original Subsidy Cost</b> is the amount of the award that agencies report to USAspending.gov for loans and loan guarantees.

The original source for *contract awards* was the Federal Procurement Data System – Next Generation (FPDS-NG).  FPDS-NG reports all actions on a contract (e.g., the original award as well as modifications), so there are multiple entries for each contract.  FPDS-NG includes the following amount-related data element definitions.

* Action Obligation – the amount that is obligated or de-obligated by this transaction.
* Base and Exercised Options Value – the contract value for the base contract and any options that have been exercised.  
* Base and All Options Value – the mutually agreed upon total contract or order value including the base contract and all options (if any).  For Indefinite Delivery Vehicles, the estimated value for all orders expected to be placed against the vehicle. For modifications, the change (positive or negative, if any) in the mutually agreed upon total contract value.

<b>Action Obligation</b> is the amount of the award that agencies report to USAspending.gov for contracts.

## Considerations

1.  <b>Use of authoritative data.</b>  he FAR requires federal agencies to annually verify and validate data reported to the FPDS-NG.  Summary results of this validation and verification are made publicly available via USAspending.gov.  Award amounts for federal procurement awards will continue to use FPDS-NG as the authoritative source for public display of procurement obligations.  Data for financial assistance is currently submitted by agencies using the FFADS+ file format to the Award Submission Portal (ASP). Current reporting requirements are stipulated in M-15-12 and the ASP User Guide.  Treasury and OMB are working with agencies to develop the architecture for future reporting. Once the award identification number (Award ID) is carried in agency financial systems and there is a linkage between financial data and award data, further policy and business process determinations will need to be made about sourcing obligation amounts from agency financial systems. 

2.  These definitions apply to reporting on federal awards that has taken place since enactment of FFATA.  OMB guidance issued in May 2015 directed agencies to include Award ID in agency financial systems as the way to associated award data and financial data without duplicating efforts or data.  As agencies implement these changes in FY 2017, a further review of the definition and standard for award amounts may be required.    

## Final Definitions for Transparency Reporting
<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Amount of Award</td>
    <td>The cumulative amount obligated by the federal government for an award, calculated by USAspending.gov or a successor site.
    <br> 
    For procurement and financial assistance awards except loans, this is the sum of Federal Action Obligations.
    <br>
    For loans or loan guarantees, this is the Original Subsidy Cost.

</td>
  </tr>
  <tr>
    <td>Federal Action Obligation</td>
    <td>Amount of federal government’s obligation, de-obligation, or liability, in dollars, for an award transaction.</td>
  </tr>
  <tr>
    <td>Non-Federal Funding Amount</td>
    <td>For financial assistance, the amount of the award funded by non-federal source(s), in dollars. Program Income (as defined in 2 CFR § 200.80) is not included until such time that Program Income is generated and credited to the agreement.</td>
  </tr>
  <tr>
    <td>Total Funding Amount</td>
    <td>For financial assistance, the sum of the Amount of Award and the Non-Federal Funding Amount<sup>1</sup></td>
  </tr>
  <tr>
    <td>Funding Obligation Amount on Award</td>
    <td>Amount that is obligated or de-obligated by a contract transaction.</td>
  </tr>
  <tr>
    <td>Current Total Value of Award</td>
    <td>For procurement, the total amount obligated to date on a contract, including the base and exercised options.</td>
  </tr>
  <tr>
    <td>Potential Total Value of Award</td>
    <td>For procurement, the total amount that could be obligated on a contract, if the base and all options are exercised.</td>
  </tr>
</table>

## References

Federal Assistance Award Data System (FAADS) Users’ Guide for Federal Fiscal Year 2010, revised August 2011. Amount-related fields are on page 10.
[https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf](https://catalog.archives.gov/OpaAPI/media/6113175/content/electronic-records/rg-029/faads/guide2010.pdf)

GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, February 27, 2015. Elements 3A, 3B, and 3C, pages 40-43.
[https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf )


<sup>1</sup>This data element is not reported by agencies. It is computed based on adding the Funding Action Obligation and the Non-Federal Funding Amount if applicable.

