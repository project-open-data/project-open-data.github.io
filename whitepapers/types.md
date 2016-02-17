---
published: true
permalink: /whitepapers/types/
layout: article
filename: types.md
title: Types
---

# Element: Award Type, Action Type, Record Type

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Award Type</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Action Type</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Record Type</td>
    <td>FFATA</td>
  </tr>
</table>

## Response to Public Feedback (August 2015)

The three data elements in this paper provide additional information about awards and modifications. During the three week feedback period, 5 individuals and organizations contributed 5 posts through the GitHub issue [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/73), and OMB and Treasury received feedback from the Government Accountability Office (GAO). This feedback has provided valuable insight into how stakeholders use these data elements. As we move through implementation, these are issues we will continue to address through updated to the schema, ongoing policy discussions, and potential further clarification. However, after reviewing this feedback, no changes to the below paper or definitions were deemed necessary. The final data element definitions can be found [here](https://max.gov/datastandards).


##Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that the transaction type be reported for each federal award.  There is no specific requirement in either FFATA or the Digital Accountability and Transparency Act of 2014 (DATA Act) that requires reporting of Record Type or Type of Action.  However, these additional elements are important to understanding the data that is required to be reported, and so this paper provides the definitions.

##Context

Agencies used two established data sources (further described below) to report awards to USAspending.gov.  There were several fields in the established data sources that characterize the award information reported.  

##Analysis of Current Definitions and Considerations

The original source for _financial assistance awards_ was the Federal Assistance Award Data System (FAADS) maintained by the U.S. Census Bureau, Department of Commerce. Currently, agencies submit their financial assistance awards data to USAspending.gov using the Award Submission Portal (ASP). The ASP adopted the Aggregate Reporting and Type of Action definitions of the FAADS.

The original source for _contract awards_ was the Federal Procurement Data System – Next Generation (FPDS-NG).  

### Federal prime award -the award being reported 

This is the method chosen by the federal government to provide funding in support of programmatic outcomes. This is the highest level of award for which funding will be summarized and for which more detailed information will be made available.   The required FFATA award types related to financial assistance and contracts are defined as follows:  

* Grant
* Loan
* Cooperative agreement
* Other form of financial assistance
* Contract

Some data users are only interested in these general types.  Currently, there is no single element that corresponds to these general types.  This categorization is determined to be procurement if the award is reported through Federal Procurement Data System-Next Generation (FPDS-NG). If the award is reported through the ASP using the FAADS PLUS format, the Type of Assistance field below is used.  This paper does not propose a new data element required to identify a federal contract, loan, grant, or other award type, but rather recommends a stratification for display purposes. OMB and Treasury are currently working with agencies to design the future reporting architecture which will adhere to this practice and not require a new data element.      

###Award Type – this level provides more information about the specific type of award used (for financial assistance: “Type of Assistance”; for procurement: “Transaction Information” and “Type of Procurement Instrument”) 
federal awards are categorized in accordance with the objectives of the program, and the structure of the award.  The required FFATA award types are related to financial assistance and contracts and are defined as:  


<b>(1) Federal Contract –  transaction information</b>

Each procurement action is identified with an Indefinite Delivery Vehicle (IDV) Type value or an Award Type value; they are mutually exclusive.  They are collected as separate data elements in FPDS using the codes and descriptions shown below:

Indefinite Delivery Vehicle (IDV) Type – IDVs represent different types of ordering instruments under which federal agencies may place delivery/task orders or blanket purchase agreement (BPA) call orders

<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>A</td>
    <td>GWAC – Government-Wide Agency Contract approved by OMB</td>
  </tr>
  <tr>
    <td>B</td>
    <td>IDC – Indefinite delivery contract</td>
  </tr>
  <tr>
    <td>C</td>
    <td>FSS – GSA or VA Federal Supply Schedule</td>
  </tr>
  <tr>
    <td>D</td>
    <td>BOA – Basic Ordering Agreement</td>
  </tr>
  <tr>
    <td>E</td>
    <td>BPA – Blanket Purchase Agreement</td>
  </tr>
</table>

Award Type – Awards represent different types of definitive delivery procurement instruments (i.e., the immediate requirement is known and awarded with all the attendant terms and conditions).  

<table>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>A</td>
    <td>BPA Call – call against a blanket purchase agreement</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Purchase order</td>
  </tr>
  <tr>
    <td>C</td>
    <td>Delivery Order – delivery order or task order under an Indefinite Delivery Vehicle</td>
  </tr>
  <tr>
    <td>D</td>
    <td>Definitive contract</td>
  </tr>
</table>

Additionally, each procurement transaction identifies the predominant Type of Contract (Pricing).  The value identified in the Type of Contract data element is based on the predominant type used on the procurement award (determined by the amount of funding).  Each of the values shown below relate to contract types identified in the Federal Acquisition Regulation Part 16.

Type of Contract (Pricing)

<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>A</td>
    <td>Fixed Price Redetermination</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Fixed Price Level of Effort</td>
  </tr>
  <tr>
    <td>J</td>
    <td>Firm Fixed Price</td>
  </tr>
  <tr>
    <td>K</td>
    <td>Fixed Price with Economic Price Adjustment</td>
  </tr>
  <tr>
    <td>L</td>
    <td>Fixed Price Incentive</td>
  </tr>
  <tr>
    <td>M</td>
    <td>Fixed Price Award Fee</td>
  </tr>
  <tr>
    <td>R</td>
    <td>Cost Plus Award Fee</td>
  </tr>
  <tr>
    <td>S</td>
    <td>Cost No Fee</td>
  </tr>
  <tr>
    <td>T</td>
    <td>Cost Sharing</td>
  </tr>
  <tr>
    <td>U</td>
    <td>Cost Plus Fixed Fee</td>
  </tr>
  <tr>
    <td>V</td>
    <td>Cost Plus Incentive Fee</td>
  </tr>
  <tr>
    <td>Y</td>
    <td>Time and Materials</td>
  </tr>
  <tr>
    <td>Z</td>
    <td>Labor Hours</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Order Dependent (this applies to IDVs only.  IDV allows pricing arrangements to be determined separately for each order)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Combination – (this applies to awards only.  Applies to awards where two or more of the above apply.)  Note:  this value is not valid for awards after September 30, 2009.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Other (This applies to Awards only.  Applies to Awards where none of the above apply).  Note:  this value is not valid for awards after Sept 30, 2009.</td>
  </tr>
</table>

<b>(2) Federal Financial Assistance  - transaction information</b>

Each financial assistance action is identified with a Type of Assistance value in the FAADS+ data format as shown below.

Type of Assistance
<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>02</td>
    <td>Block Grant</td>
  </tr>
  <tr>
    <td>03</td>
    <td>Formula Grant</td>
  </tr>
  <tr>
    <td>04</td>
    <td>Project Grant</td>
  </tr>
  <tr>
    <td>05</td>
    <td>Cooperative Agreement</td>
  </tr>
  <tr>
    <td>06</td>
    <td>Direct payment for specified use, such as a subsidy or other non-reimbursable direct financial assistance</td>
  </tr>
  <tr>
    <td>07</td>
    <td>Direct loan</td>
  </tr>
  <tr>
    <td>08</td>
    <td>Guaranteed/insured loan</td>
  </tr>
  <tr>
    <td>09</td>
    <td>Insurance</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Direct payment with unrestricted use (retirement pension, veterans’ benefits, etc.)</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Other reimbursable, contingent, intangible, or indirect financial assistance</td>
  </tr>
</table>

###Action Type 
(“Type of Action” for financial assistance and “Reason for Modification” for procurement) 

Associated with each award type are action types that result in changes to funding, reflect changes in administrative information (for the federal government or the awardee), or in some other way reflect changes to the agreement.  Action types differ across federal awarding communities and are called “type of action” for financial assistance and “reason for modification” for procurement.  Regardless of the terminology or the code, these types indicate the specific subsequent change to the initial award.   

(1) For Federal financial assistance, the “type of action code” data element identifies whether the action is a new agreement or a modification.  Values for the Type of Action are the following:
<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>A</td>
    <td>New assistance award</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Continuation (funding in succeeding budget period that stemmed from a prior agreement to fund amount of the current action)</td>
  </tr>
  <tr>
    <td>C</td>
    <td>Revision (any change in federal government’s financial obligation or contingent liability in existing assistance transaction amount of the change in funding; or any change in Recipient Name, Recipient Address, Project Period, or Project Scope)</td>
  </tr>
  <tr>
    <td>D</td>
    <td>Funding adjustment to completed project</td>
  </tr>
</table>

(2) For Federal procurement, the “Reason for Modification” data element captures the reason for a modification to a contract and are defined as shown below.  Note, the absence of a “Reason for Modification” code indicates that the action is a new procurement award.  

<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>A</td>
    <td>Additional Work (new agreement, FAR part 6 applies)</td>
  </tr>
  <tr>
    <td>B</td>
    <td>Supplemental Agreement for work within scope</td>
  </tr>
  <tr>
    <td>C</td>
    <td>Funding Only Action</td>
  </tr>
  <tr>
    <td>D</td>
    <td>Change Order</td>
  </tr>
  <tr>
    <td>E</td>
    <td>Terminate for Default (complete or partial)</td>
  </tr>
  <tr>
    <td>F</td>
    <td>Terminate for Convenience (complete or partial)</td>
  </tr>
  <tr>
    <td>G</td>
    <td>Exercise an Option</td>
  </tr>
  <tr>
    <td>H</td>
    <td>Definitize Letter Contract</td>
  </tr>
  <tr>
    <td>J</td>
    <td>Novation Agreement</td>
  </tr>
  <tr>
    <td>K</td>
    <td>Close Out</td>
  </tr>
  <tr>
    <td>L</td>
    <td>Definitize Change Order</td>
  </tr>
  <tr>
    <td>M</td>
    <td>Other Administrative Action</td>
  </tr>
  <tr>
    <td>N</td>
    <td>Legal Contract Cancellation</td>
  </tr>
  <tr>
    <td>P</td>
    <td>Re-representation of Non-Novated Merger/Acquisition</td>
  </tr>
  <tr>
    <td>R</td>
    <td>Re-representation</td>
  </tr>
  <tr>
    <td>S</td>
    <td>Change PIID</td>
  </tr>
  <tr>
    <td>T</td>
    <td>Transfer Action</td>
  </tr>
  <tr>
    <td>V</td>
    <td>Vendor DUNS Change</td>
  </tr>
  <tr>
    <td>W</td>
    <td>Vendor Address Change</td>
  </tr>
  <tr>
    <td>X</td>
    <td>Terminate for Cause</td>
  </tr>
</table>

###Record Type

Record Type is used to distinguish between aggregate or non-aggregate financial assistance records. 

For financial assistance awards under $25,000 and awards to individuals, agencies are required to report them as aggregates.  An aggregate record is created by taking a group of similar records and tallying the dollars based on a specific set of data fields in order to create one summary (or aggregate) record.

For financial assistance awards under $25,000, agencies submit as much information as possible at an action-by-action level, to provide maximum transparency to the public.  If reporting awards under $25,000 poses a significant administrative burden on the agency, the agency may report these amounts as aggregates at the county level.

For payments to individuals, agencies should not report at an action-by-action level.  All payments to individuals are reported as aggregates.  Examples are social insurance payments made directly to individuals and large volume programs such as individual home ownership loans and flood insurance.

The FAADS field where a user can designate aggregate reporting is Record Type.  Values for Record Type are as follows:

<table class='table-bordered'>
  <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description</th>
      </tr>
  </thead>
  <tr>
    <td>1</td>
    <td>Aggregate reporting</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Action-by-action reporting.  Non-aggregate records.</td>
  </tr>
</table>

## Final Definitions for Transparency Reporting
<table>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Award Type</td>
    <td>Description (and corresponding code) that provides information to distinguish type of contract, grant, or loan and providers the user with more granularity into the method of delivery of the outcomes.</td>
  </tr>
  <tr>
    <td>Action Type</td>
    <td>Action Type – description (and corresponding code) that provides information on any changes made to the federal prime award.   There are typically multiple actions for each award.<br/>  
    (Note: This includes encompasses current data elements ‘Type of Action’ for financial assistance and ‘Reason for Modification’ for procurement)</td>
  </tr>
  <tr>
    <td>Record Type</td>
    <td>Code indicating whether an action is an individual transaction or aggregated.</td>
  </tr>
</table>

##References

Federal Acquisition Regulation 4.606(a)(3), Reporting Data.

[https://www.acquisition.gov/?q=/browse/far/4](https://www.acquisition.gov/?q=/browse/far/4)

Procedures, Guidance, and Information (PGI) 204.606, Reporting Data, section (1)(iii), Express Reporting.

[http://www.acq.osd.mil/dpap/dars/pgi/pgi_htm/PGI204_6.htm](http://www.acq.osd.mil/dpap/dars/pgi/pgi_htm/PGI204_6.htm)

GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, May 1, 2015.  Elements 6Q Number of Actions, page 76 and 12C Reason for Modification, page 138.

[https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf)

U.S. Department of the Treasury, Award Submission Portal User Guide (July 2015).  

[https://submissions.usaspending.gov/content/documents/UserGuide.pdf](https://submissions.usaspending.gov/content/documents/UserGuide.pdf)

Federal Procurement Data System – Next Generation Grants Data Dictionary, Version 1.0, January 10, 2013. Elements 2A Type of Action on page 6, and 2F Record Type on page 8.

[https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf](<https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf>)

Federal Acquisition Regulation Part 16 identifies contract types.

[https://www.acquisition.gov/?q=/browse/far/16](https://www.acquisition.gov/?q=/browse/far/16)


