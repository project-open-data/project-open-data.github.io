---
published: true
permalink: /whitepapers/entity-address/
layout: article
filename: entity-address
title: Legal Entity Address
---

# Elements: Legal Entity Address, Legal Entity Congressional District, Legal Entity Country Code, and Legal Entity Country Name

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
    <td>Legal Entity Address</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Legal Entity Congressional District</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Legal Entity Country Code</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Legal Entity Country Name</td>
    <td>Awardee and Recipient Entity Information</td>
    <td>FFATA</td>
  </tr>
</table>

##Background

The Federal Funding Accountability and Transparency Act (FFATA), 2006, established requirements for Federal agencies to report Federal award actions to a central, publicly accessible website (USAspending.gov) and identified data that must be reported. FFATA was amended in 2008 to require additional data reporting. FFATA was further amended in 2014 by the Digital Accountability and Transparency Act (DATA) to, among other items, require summary financial data be reported by Federal agencies in addition to federal award data.
Section 2(b)(1) of FFATA requires that the location of the entity receiving the award, including the city, state, congressional district, and country, be included when reporting Federal award actions.  

##Context

Accurate and timely identification of responsible Federal award partners is essential to ensuring the integrity of the Federal awarding processes.  The entity’s address and congressional district complements this information, allows for additional specification related to the entity, and provides taxpayers a better understanding as to where their tax dollars are being spent. The address references that of the entity’s principal place of business, which may be different from the place of activity.

##Analysis of Current Definitions

_Delineation of states in the United States._  The only existing definitions in the Federal Acquisition Regulations (FAR) or in 2 CFR related to address are those defining what consists of the “United States.”  In both cases, the primary description is that it includes the 50 states and the District of Columbia.  2 CFR 25.350 also specifically includes the Commonwealths of Puerto Rico and Northern Mariana Islands; Guam, American Samoa, and the U.S. Virgin Islands.  It also considers “a territory or possession of the United States” inclusive of the definition.  In most cases in the FAR, the five above named territories and commonwealths are specifically included, as well as “minor outlying islands,” either specifically named or named as this group.   The recommendation is to standardize this practice of the commonwealths, territories, and minor outlying islands being considered “states” for reporting purposes, rather than separate countries.

_Agency use of authoritative data._  Historically, although both the FAR and 2 CFR require that prime entities be registered in SAM with a unique entity identifier, neither of the regulations clearly state that Federal agencies are expected to use the data (such as the physical address data) that is in SAM.  This has caused opportunities for data issues, and accounts for some of the findings the GAO has made in audits of data reported to USAspending.gov.  The procurement community has initiated a FAR case to address this oversight and require SAM data be used as the authoritative source for use on awards. For the financial assistance community, OMB has determined that SAM will be the authoritative source for legal entity name and address. Agencies will need to ensure that this data is in their management systems and exactly matches with what is in SAM. Agencies will be responsible for reporting this data to USAspending.gov.

_Identification of country code._  Historically, the procurement and financial assistance communities reported country identification using the Federal Information Processing Standard (FIPS) publication 10-4, “Countries, Dependencies, Areas of Special Sovereignty, and Their Principle Administrative Divisions.”  However, this standard was withdrawn in September 2008 and has been replaced by the use of ISO 3166-1, “Codes for Countries and Their Subdivisions.”  The Alpha-3 version is applied, using the U.S. Geopolitical Entities, Names, and Codes (GENC) profile.  The recommendation is to standardize this practice across the communities.

_Components of address._  The use of awardee / recipient addresses and the reporting thereof have followed a general standard practice used by the United States Postal Service (USPS) to identify U.S. locations:  requiring a physical street address (at least one line), city, state code, and ZIP+4 code.   For reporting non-U.S. locations, the identification of a city and country is required; other subdivisions (provinces or states) and postal codes are optional.  The recommendation is to maintain these components of “address.”

_Identification of state code._  The grants/financial assistance community used the numeric state codes in FIPS 5-1 to report FAADS+ data; FIPS 5-1 was superseded by FIPS 5-2 (which uses alpha codes) but the FAADS+ guidance continues to reference it.  The contracting community has historically used FIPS 5-2, “Codes for the Identification of the States, the District of Columbia and the Outlying Areas of the United States,” for state codes.  It has been replaced by of International Committee for Information Technology Standards (INCITS) 38, “Codes for the Identification of the States and Equivalent Areas within the United States, Puerto Rice, and the Insular Areas.”  These two-letter codes are the same as those used by the USPS.  The recommendation is to standardize on INCITS 38 for state codes.

_Identification of city and county._  The contracting and grants/financial assistance communities also historically used the FIPS 55-3 standard to identify cities for reporting and FIPS 6-4 for county codes.  These standards were also withdrawn in September 2008.  The contracting community has since been using the actual city name associated with the entity’s SAM record, while the grants/financial assistance community is today still required to report the defunct code for both city and county.  The recommendation is to discontinue this city/location code and county code practice and require the actual city and county name be reported from both communities based on no known requirement for the agency systems other than to supply this information to USAspending.gov.

_Street address – third line._  While many street address formats include a third line, this data element is not collected or used in most contracting, financial assistance, or finance systems; nor the System for Award Management (SAM) or Federal Procurement Data System (FPDS).  Per USPS Publication 28, “Postal Addressing Standards,” additional items that can be included on a third line are ATTN to’s, mail drops, etc.  While this may aid in delivery, it is not necessary for physical address identification.  As such, the recommendation is to not include the third line of a street address in FFATA reporting.

_Address for area without a detailed physical address._  It is current procurement and financial assistance practice to allow entities located within the United States geographical area, but in areas without detailed U.S. physical addresses specific enough to comply with these data elements (example:  entities on some Indian reservations), to use the nearest detailed physical address (example:  tribal council building) as their physical address.  The recommendation is to continue this practice.

_Prohibition on using post office box._ It is current procurement and financial assistance practice to not allow post office boxes, other commercial mailbox providers, or short term (less than one year lease) virtual office locations to be recognized as an entity’s physical address.  Entities without a long-term physical address (mostly sole proprietors) are required to identify the location their business documents (including tax documents) are held as their physical address.  The recommendation is to continue this practice.
Address for area without ZIP+4 code.  It is current procurement and financial assistance practice to allow entities located in remote U.S. regions (e.g., areas in Alaska) or other locales that have not been mapped by the USPS for a ZIP+4 code (e.g., National Parks, large military bases, large business complexes) to identify the closest +4 identifier for their location.  The recommendation is to continue this practice.

_Congressional district._ A congressional district is the geographic region that elects a single representative to the House of Representatives.  The congressional district is derived using a commercial mapping tool based on the ZIP+4 code provided, either when contract actions are reported to FPDS-NG or at the time financial assistance awards are submitted.  The recommendation is to include the congressional district in SAM so that SAM can supply it to procurement and financial assistance awards.  The boundaries of a congressional district may change based on decennial census, legislation, or court order.  The current procurement practice is that the congressional district does not change during the life of the award unless the physical address is updated by contract modification.  The current financial assistance practice is to determine the congressional district each time an action is reported.  It remains to be determined whether the procurement and financial assistance practices can be standardized regarding whether the congressional district remains the same throughout the life of the award or is updated at specific times during the life of the award.

##Recommended Definitions for Transparency Reporting

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Recommended Data Element Name</th>
      <th scope="col">Recommended Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Legal Entity Address</td>
    <td>The awardee or recipient’s legal business address where the office represented by the Unique Entity Identifier (as registered in SAM) is located.  In most cases, this should match what the entity has filed with the state in its organizational documents, if required. The address is made up of five components: Address Lines 1 and 2, City, State Code, and ZIP+4 or Postal Code.</td>
  </tr>
  <tr>
    <td>Legal Entity Address Line 1</td>
    <td>First line of awardee or recipient’s legal business address.</td>
  </tr>
  <tr>
    <td>Legal Entity Address Line 2</td>
    <td>Second line of awardee or recipient’s legal business address.</td>
  </tr>
  <tr>
    <td>Legal Entity City</td>
    <td>Name of the city in which the awardee or recipient’s legal business address is located.</td>
  </tr>
  <tr>
    <td>Legal Entity State</td>
    <td>United States Postal Service (USPS) two-letter abbreviation for the state or territory in which the awardee or recipient’s legal business address is located. Identify States, the District of Columbia, territories (i.e., American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Virgin Islands) and associated states (i.e., Republic of the Marshall Islands, the Federated States of Micronesia, and Palau) by their USPS two-letter abbreviation for the purposes of reporting. Report legal business address located in the Puerto Rico, Northern Mariana Islands, American Samoa, Guam, and U.S. Virgin Islands using USPS assigned state codes.</td>
  </tr>
  <tr>
    <td>Legal Entity ZIP+4 Code</td>
    <td>USPS zoning code associated with the awardee or recipient’s legal business address. This is not a required data element for non-US addresses.</td>
  </tr>
  <tr>
    <td>Legal Entity Postal Code</td>
    <td>Postal service code for awardee or recipient not located in the United States.  This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
  </tr>
  <tr>
    <td>Legal Entity Congressional District</td>
    <td>The congressional district in which the awardee or recipient is located. This is not a required data element for non-US addresses.</td>
  </tr>
  <tr>
    <td>Legal Entity Country Code</td>
    <td>Code for the country in which the awardee or recipient is located, using the ISO 3166-1 Alpha-3 GENC Profile, less the codes listed for those territories and possessions of the United States already identified as “states.”</td>
  </tr>
  <tr>
    <td>Legal Entity Country Name</td>
    <td>The name corresponding to the Country Code.</td>
  </tr>
</table>

##References

2 CFR 25.350 definition of State.  [http://www.ecfr.gov/cgi-bin/text-idx?SID=9e74120ca775d5d22ca2dd183297440b&mc=true&node=se2.1.25_1350&rgn=div8](http://www.ecfr.gov/cgi-bin/text-idx?SID=9e74120ca775d5d22ca2dd183297440b&mc=true&node=se2.1.25_1350&rgn=div8)

International Organization for Standardization (ISO) 3166, Codes for Countries and Their Subdivisions.  [http://www.iso.org/iso/country_codes.htm](http://www.iso.org/iso/country_codes.htm)

United States Postal Service Publication 28, Postal Addressing Standards.  [http://pe.usps.com/text/pub28/welcome.htm](http://pe.usps.com/text/pub28/welcome.htm)

National Institute of Standards and Technology (NIST) Federal Information Processing Standards (FIPS) – Withdrawn FIPS publications and replacement standards for withdrawn FIPS on geographic codes.  [http://www.nist.gov/itl/fips.cfm](http://www.nist.gov/itl/fips.cfm)

International Committee for Information Technology Standards (INCITS) list of adopted standards.  [http://incits.org/dotAsset/20089da0-bb02-427e-9bb0-5f34129821d3.pdf.](http://incits.org/dotAsset/20089da0-bb02-427e-9bb0-5f34129821d3.pdf)  INCITS 38 is available for purchase from the American National Standards Institute - [ANSI](http://webstore.ansi.org/default.aspx) or through the INCITS store via [Techstreet](http://www.techstreet.com/incits).
