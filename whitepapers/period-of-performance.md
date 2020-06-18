---
published: true
permalink: /whitepapers/period-of-performance/
layout: article
filename: period-of-performance.md
title: Period of Performance
---

# Element: Action Date, Period of Performance Start Date, Period of Performance Current End Date, Period of Performance Potential End Date, Ordering Period End Date


<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Action Date</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Period of Performance Start Date</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Period of Performance Current End Date</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Period of Performance Potential End Date</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Ordering Period End Date</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  </table>

## Response to Public Feedback (August 2015)

Period of Performance is a data element of interest to many stakeholder groups, within and outside of the Federal Government. During the three week feedback period, 4 individuals and organizations contributed 6 posts through the GitHub issue [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/71). This feedback has provided valuable insight into how stakeholders use these data elements. However, after reviewing this feedback, no changes to the below paper or definitions were deemed necessary. The final data element definitions can be found [here](https://max.gov/datastandards).


## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that the USASpending.gov website include federal award data from Fiscal Year (FY) 2007, and each fiscal year thereafter.  Although section 2(b)(1) of FFATA does not specifically require the period of performance under a Federal award to be posted on USAspending.gov for transparency, period of performance dates provide important information concerning utilization of the funding provided.   This paper provides the current definitions of the period of performance and the final definitions related to period of performance for the future.

## Context

Accurate identification of the period of performance of Federal awards and associated dates is essential to providing taxpayers with a better understanding of the time period in which government supported work is being accomplished, and when their tax dollars are being used. Currently, the definition of the term “period of performance” as a concept is distinctly different between financial assistance and procurement.

## Analysis of Current Definitions

<b>Concept within Procurement:</b>
Although “period of performance” is not specifically defined in the Federal Acquisition Regulations (FAR), within procurement it is more broadly considered the time span between the effective date of a contract (when the contracted effort begins) and the last day under the contract in which deliveries of goods are made or services are performed.  Administrative actions (such as invoicing, audits, and return of government furnished property) and modifications (for example, to deobligate excess funding) may continue to occur after the period of performance has ended prior to close-out of a contract.  

<b>Concept within Financial Assistance:</b> 
For financial assistance, 2 C.F.R. §200.77 defines the term “period of performance” as meaning “the time during which the non-Federal entity may incur new obligations to carry out the work authorized under the Federal award.”   Additionally, 2 C.F.R. §200.77 instructs that the “Federal awarding agency or pass-through entity must include start and end dates of the period of performance in the Federal award.”

## Considerations
The goal is to harmonize these two definitions for the purposes of standardizing the reporting of distinct data elements.  Three main considerations were included in developing the proposed definitions. 

1.  The difference between the definitions should be considered for how the concept itself is communicated to the public. Communication to the public needs to be clear on USAspending.gov or any successor website.  
2.  Over time, the government may need to change the period of performance on an award that has already been reported. While there is a standard procedure for this process in procurements, the process for financial assistance varies across agencies. This paper recommends that the financial assistance community work to establish a standard process across the agencies and update reporting policies accordingly.
3.  Initial implementation of FFATA within the procurement and financial assistance communities requires only that subawardees and subrecipients report the date that corresponds to the Action Date for subawards when they report to the FFATA Subaward Reporting System (FSRS).  The procurement reporting requirements for subcontracts are contained in 48 C.F.R. § 52.204-10.  Any changes to this subcontract reporting requirement could necessitate notice and comment rulemaking.

## Final Definitions for Transparency Reporting
The following data elements are proposed as those necessary to communicate the Period of Performance of a federal award to the public:
<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Action Date</td>
    <td>The date the action being reported was issued / signed by the government or a binding agreement was reached.</td>
  </tr>
  <tr>
    <td>Period of Performance Start Date</td>
    <td>The date on which, for the award referred to by the action being reported, awardee effort begins or the award is otherwise effective.
    </td>
  </tr>
  <tr>
    <td>Period of Performance Current End Date</td>
    <td>The current date on which, for the award referred to by the action being reported, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
  </tr>
  <tr>
    <td>Period of Performance Potential End Date</td>
    <td>For procurement, the date on which, for the award referred to by the action being reported if all potential pre-determined or pre-negotiated options were exercised, awardee effort is completed or the award is otherwise ended. Administrative actions related to this award may continue to occur after this date. This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
  </tr>
  <tr>
    <td>Ordering Period End Date</td>
    <td>For procurement, the date on which, for the award referred to by the action being reported, no additional orders referring to it may be placed.  This date applies only to procurement indefinite delivery vehicles (such as indefinite delivery contracts or blanket purchase agreements).  Administrative actions related to this award may continue to occur after this date.  The period of performance end dates for procurement orders issued under the indefinite delivery vehicle may extend beyond this date.</td>
  </tr>
  </table>

## References

Federal Acquisition Regulation (FAR) Subpart 2.1 – Definitions, includes the definition of assisted acquisition.

[https://www.acquisition.gov/?q=browsefar](https://www.acquisition.gov/?q=browsefar)

Title 2 Code of Federal Regulations (CFR) §200.77: 

[http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl](http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2tab_02.tpl 
)
