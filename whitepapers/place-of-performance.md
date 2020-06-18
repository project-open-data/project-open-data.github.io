---
published: true
permalink: /whitepapers/place-of-performance/
layout: article
filename: place-of-performance.md
title: Place of Performance
---

# Element: Primary Place of Performance Address, Primary Place of Performance Congressional District, Primary Place of Performance Country Code, and Primary Place of Performance Country Name

<table class='table-bordered'>
  <thead>
    <tr>
      <th scope ="col">Data Element Name</th>
      <th scope="col">Category</th>
      <th scope="col">Legislation</th>
    </tr>
  </thead>
  <tr>
    <td>Primary Place of Performance Address</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Primary Place of Performance Congressional District</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Primary Place of Performance Country Code</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  <tr>
    <td>Primary Place of Performance Country Name</td>
    <td>Awarding Characteristic Information</td>
    <td>FFATA</td>
  </tr>
  </table>

## Response to Public Feedback (August 2015)

Place of Performance is a data element of interest to many stakeholder groups, within and outside of the Federal Government. During the three week feedback period, 9 individuals and organizations provided feedback through GitHub, which is available [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/72), and OMB and Treasury received feedback from the Government Accountability Office (GAO). The final data element definitions can be found [here](https://max.gov/datastandards).


There are numerous use cases and needs for location data points associated with an award. The specific use cases that OMB and Treasury have heard through past outreach and posts on GitHub [here](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/72) include seeing where the benefit of an award is felt and providing insight into the location or locations where work physically took place. In standardizing this data element for display on USAspending.gov, the Federal community recognized these discrete needs among others, and determined that not all of the needs could be addressed through a single data element. In the future, the Federal community will continue work to identify and standardize other location-related data elements to address further use cases and needs. 


This paper’s definition of “place of performance” represents data that federal agencies have captured as part of the oversight and management of federal grants and contracts, despite the fact that this term has not been defined in government-wide regulations.  Agencies are dependent on awardees and recipients reporting this data during different points in the award lifecycle. In contracting reporting instructions for many years, the “place of performance” was the location of the principal plant or place of business where the supply items will be manufactured; where finished products will be taken from inventory; or, for services, the principal location where the service will be performed.  For purposes of federal grants management, “place of performance” data, as defined in this white paper, would represent the address of the awardee or subawardee or the location(s) at which the project or program supported by the award will be carried out. If a place of performance is not reported, agencies will use the location of the awardee or recipient (Note: this is usually not the same as the legal entity address). 

Through the feedback posted on GitHub, OMB and Treasury received several ideas for new data elements differentiating the various ‘places’ noted above. Collecting new information or changing information as it is currently collected would likely require regulatory changes, which would go through the normal rulemaking process. Consistent with GAO’s recommendation (GAO-15-752T) to establish policies and processes for a governance structure to maintain the integrity of data standards over time, in FY2016, OMB and Treasury will work to establish a formal, long term governance process and structure for future data standards maintenance. This governance process and structure will be the forum to review recommendations for new data elements to be reported to USAspending.gov and/or for additional data standards to be adopted.

The change described in this paper is a change to agency business processes rather than a change to data collected from awardees and recipients. Therefore, this standardization will not change how awardees and recipients report location data to the Federal Government. 


## Background

The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that primary location of performance under the award (including the city, State, congressional district, and Country) be included when reporting federal award actions.  Accurate identification of the primary location of performance of Federal awards is essential because it provides taxpayers with a better understanding of where Federally-funded work is being accomplished, and where tax dollars are being used.

While the identification of a primary performance location is, in theory, a simple prospect, it is important to determine what type of identification that will be provided, the source of the information, and associated business rules that address identifiable peculiarities.

## Context

The only existing definitions related to identifying a location or an address in the Federal Acquisition Regulations (FAR) or in 2 CFR related to address are those defining what consists as the “United States”.  In both cases, the primary description is that it includes the 50 states and the District of Columbia.  2 CFR 25.350 also specifically includes the Commonwealths of Puerto Rico and Northern Mariana Islands; Guam, American Samoa, and the U.S. Virgin Islands.  It also considers “a territory or possession of the United States” inclusive in the definition.  In most cases in the FAR, the five above named territories and commonwealths are specifically included; as well as “minor outlying islands”, either specifically named or named as this group.   The recommendation of this paper is to standardize the reporting of entity addresses located in the commonwealths and territories and associated states using USPS assigned state codes in the State data element and the International Organization for Standardization (ISO) country code for the United States in the Country data element; rather than use the individual ISO country codes for each.  Entity addresses located in the minor outlying islands would be reported using the assigned ISO country code for U.S. Minor Outlying Islands in the Country data element.

Although not defined in the FAR or 2 CFR specifically, the place of performance has been captured in contracting reporting instructions for many years as the location of the principal plant or place of business where the supply items will be manufactured; where finished products will be taken from inventory; or, for services, the principal location where the service will be performed.  Alternately, for grants, the equivalent would be the address of the awardee or subawardee or the location(s) at which the project or program supported by the award will be carried out.

## Analysis of Current Definitions

For procurement, unless the place of performance is specified by the Federal Government, or awardees are required by specific terms and conditions of the award to specify their performance location(s), prime awardees are not required to identify the primary place of performance, and are free to actually “perform” on the award wherever they choose.  In these cases, government users have historically used the prime awardee’s own location (as registered in their System for Award Management (SAM) record in the physical address data fields). 

For financial assistance awards, the primary place of performance is not always the prime organization’s location nor is it currently always known at time of application.  Federal agencies rely on the applicant organization to provide information identifying where the work will be performed under the grant.  The applicant can supply both the primary site where the work will be performed and, if a portion of the project will be performed at any other site, identify those site locations as well.  The information can be obtained at the time of application submission, or later at the time of award.  The data collection is currently accomplished by completing the SF424 Project Performance Site Location Forms, as part of the narrative, verbally at time of award, or not at all.   

The location of the primary place of performance has traditionally included the city, state, zip code+4, country, and congressional district for locations in the states, territories, and associated states.  For reporting foreign locations, the identification of a country is required; city and postal codes are optional  

To identify country, the contracting and financial assistance communities have historically reported using the Federal Information Processing Standard (FIPS) publication 10-4, “Countries, Dependencies, Areas of Special Sovereignty, and Their Principle Administrative Divisions”.  However, this standard was withdrawn in September 2008 and has been replaced by the use of ISO 3166-1.  The Alpha-3 version is applied, using the U.S. Geopolitical Entities, Names, and Codes (GENC) profile.  The recommendation of this paper is to standardize this practice across the communities.

For identifying cities and counties, the contracting and financial assistance communities also historically used the FIPS standard.  The contracting community has since been using the actual city name that is populated based on United States Postal Service’s zip+4 code association (note, FPDS populates the city and state based on the zip+4); while the financial assistance community is today still required to report using INCITS 38:200 for state and county codes and INCITS 446-2008 for city/place codes.   The procurement community does not report counties.  County information is required for financial assistance awards at the transactional level and in aggregate reporting when the award covers multiple jurisdictions; otherwise, the city is required. This paper discontinues this city/location code practice and require the actual city and county name be reported from both communities.

Many financial assistance awards are issued by the Federal Government to awardees performing services in multiple separate locations on an equal basis; these are often designated as ‘state-wide’, ‘county-wide’, and other types of multiple jurisdictional regions.  The programs for which these financial assistance awards are issued, and the related funding, do not have a specific primary place of performance until the subsequent sub-award(s) are issued by the state or local government.  As such, this paper requires the use of the physical address (city, state, and zip+4) of the state or local government entity to which the federal prime financial assistance award is issued.

This paper recommends that a future activity of the Award Committee for E-Government (ACE) be the examination of the potential to provide address data elements in terms of the Area of Benefit that resulted from the federal award to USAspending in lieu of or in addition to the primary place of performance data identified in this paper.  While more applicable to financial assistance awards in terms of identifying where the public benefited from the grant, this may also have applicability to procurement awards.

## Unique Address Considerations

* Certain places of performance located within the United States geographical area do not have physical addresses specific enough to comply with the data elements discussed herein (example:  performance on Indian reservations, national parks, military bases, or remote government-owned lands that do not have assigned zip+4 codes).  In these cases, it has been custom to use the nearest detailed physical address with a city, state, and zip+4 code (example:  tribal council building used for mail delivery) as the location identified for the place of performance when reporting.  The recommendation of this paper is to continue this practice and document it in reporting instructions.

* It is current practice for places of performance located in remote U.S. regions (e.g., areas in Alaska) or other locales that have not been mapped by the U.S. Post Office for a zip+4 identifier (e.g., National Parks, large military bases) to identify the closest city, state, and zip+4 identifier for the primary place of performance.  The recommendation of this paper is to continue this practice and document it in reporting instructions.

* It is current practice for places of performance not located on land (e.g., at sea, in space) to identify the country whose extended maritime borders or other ownership rights include the region and report it as the primary place of performance.  In areas not included by maritime borders, the country geographically closest should be identified.  In the case of space, the primary location where the performance is being monitored should be identified (example:  Houston, TX for NASA’s monitoring of the space station).  When the resulting country is the U.S., the closest or otherwise most reasonable city, state, and zip+4 code is reported.  The recommendation of this paper is to continue this practice and document it in reporting instructions.

* In the future, the Federal award communities will examine the potential to provide additional location information about awards that improves transparency of award spending. 


## Final Definitions for Transparency Reporting
<table class='table-bordered'>
  <thead>
    <tr>
      <th scope="col">Data Element Name</th>
      <th scope="col">Definition</th>
    </tr>
  </thead>
  <tr>
    <td>Primary Place of Performance Address</td>
    <td>The address where the predominant performance of the award will be accomplished. The address is made up of six components: Address Lines 1 and 2, City, County, State Code, and ZIP+4 or Postal Code. </td>
  </tr>
  <tr>
    <td>Primary Place of Performance Congressional District</td>
    <td>U.S. Congressional district where the predominant performance of the award will be accomplished. This data element will be derived from the Primary Place of Performance Address. </td>
  </tr>
  <tr>
    <td>Primary Place of Performance Country Code</td>
    <td>Country code where the predominant performance of the award will be accomplished..</td>
  </tr>
  <tr>
    <td>Primary Place of Performance Country Name</td>
    <td>Name of the country represented by the country code where the predominant performance of the award will be accomplished.</td>
  </tr>
</table>

## References

Federal Acquisition Regulation 4.606, Reporting Data, section (a) (3).
[https://www.acquisition.gov/content/4606-reporting-data](https://www.acquisition.gov/content/4606-reporting-data)

Procedures, Guidance, and Information (PGI) 204.606, Reporting Data, section (xi), FPDS Entry – Principal Place of Performance Section. [http://www.acq.osd.mil/dpap/dars/pgi/pgi_htm/PGI204_6.htm.](http://www.acq.osd.mil/dpap/dars/pgi/pgi_htm/PGI204_6.htm)

GSA Federal Procurement Data System-Next Generation (FPDS-NG) Data Element Dictionary, Version 1.4.3, May 1, 2015.  Elements 9C-9G, 9K, pages 104-112. [https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf.](https://www.fpds.gov/downloads/Version_1.4.3_specs/FPDSNG_DataDictionary_V1.4.3.pdf)

U.S. Department of the Treasury, Award Submission Portal User Guide (August 2015).  

Federal Procurement Data System – Next Generation Grants Data Dictionary, Version 1.0, January 10, 2013.  Element 8 Principal Place of Performance Information on pages 18-20. [https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf.](<https://www.fpds.gov/downloads/FAADS/Grants_Data_Dictionary_(Draft).pdf>)

