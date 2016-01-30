---
layout: default
title: Contract Language Examples
permalink: /contract-language/
filename: contract-language.md
---

[M-13-13 Open Data Policy—Managing Information as an Asset](https://project-open-data.cio.gov/policy-memo/) states that agencies *"must apply open licenses, in consultation with the best practices found in Project Open Data, to information as it is collected or created so that if data are made public there are no restrictions on copying, publishing, distributing, transmitting, adapting, or otherwise using the information for non-commercial or for commercial purposes"* and notes that *"when information is acquired or accessed by an agency through performance of a contract, appropriate existing clauses shall be utilized to meet these objectives while recognizing that contractors may have proprietary interests in such information, and that protection of such information may be necessary to encourage qualified contractors to participate in and apply innovative concepts to government programs."*

This section offers examples of contract language that address open licensing and data rights as inspiration for other agencies.

## Policy Language 

### USAID's [ADS Chapter 579 USAID Development Data](http://pdf.usaid.gov/pdf_docs/pbaab096.pdf):

> Contracting Officers (COs) and Agreement Officers (AOs), including those delegated contract and grant-making authority in ADS 103, Delegations of Authority are responsible for incorporating clauses and provisions into contracts, grants, cooperative agreements (CAs), interagency agreements, and other implementing instruments to instruct implementing partners that they must submit Datasets created or collected with USAID funding to the DDL.

## Contract Language

### [18F Agile BPA RFQ](https://github.com/18F/ads-bpa/blob/18f-pages/assets/ADS%20RFQ%20Revised%20Modification%205.pdf)

> 15.0 DATA RIGHTS AND OWNERSHIP OF DELIVERABLES

> The specific terms and conditions governing data rights and ownership of deliverables shall be
specified in each respective task order under this BPA. The remaining subparagraphs in this
section 15.0 are provided as guidelines for ordering officials to consider incorporating, when
possible and as appropriate, into the ordering official’s task order under this BPA.
It is GSA’s intent that any data or deliverable created as a result of a task order under this BPA
be committed to the public domain.

> Contracting Officers are encouraged to designate in task orders the following items as property
of GSA with the intention of committing the items to the public domain: all data, documents,
graphics and code created under this BPA including but not limited to, plans, reports, schedules,
schemas, metadata, architecture designs, and the like; new open source software created by the
Contractor and forks or branches of current open source software where the Contractor has made
a modification; new tooling, scripting configuration management, infrastructure as code, or any
other final changes or edits to successfully deploy or operate the software.

> If commercial software is required as part of the contractor’s delivery of professional services,
then the ordering official shall include the appropriate FAR or applicable agency supplemental
clause(s).

> The contractor shall use open source technologies wherever possible, in support of the 18F
Source Code Policy. All licenses must be expressly listed in the deliverable. Regardless of license(s) used (e.g., MIT, GPL, Creative Commons 0) the license(s) shall be clearly listed in the
documentation.

> If the contractor needs to use work that does not have an open source license, the contractor is
required to request permission from 18F, in writing, before utilizing that work in any way in
connection with the task order. If approved, all licenses shall be clearly set forth in a conspicuous
place when work is delivered to 18F.

> If an open source license provides implementation guidance, the contractor shall ensure
compliance with that guidance. If implementation guidance is not available, the contractor shall
attach or include the license within the work itself. Examples of this include code comments at
the beginning of a file or contained in a license file within a software repository.

> Contracting Officers may consider requiring the contractor to place a copyright waiver on
materials, documents, deliverables, etc., developed during the performance of a task order. See
Attachment D boilerplate template.

### [Center for Government Excellence - Data Ownership and Usage Terms for Government Contracts](http://labs.centerforgov.org/data-ownership/)

> **Contract Terms**
Note: This document is intended to solely address considerations of data ownership. As such, it does not address - and can not - supersede any party’s responsibilities under applicable federal, state, or local laws which define sensitive data or how it must be protected. Additionally, the sample language below cannot supercede unilateral terms and conditions imposed by service providers, such as cloud-based technology platforms, unless a specific, separate written agreement is created and executed by both parties.

> **Definitions**
Government Data: data which describes the operations of a government; electronic records which the government maintains to do its business; statistical information created or maintained by or on behalf of and an agency that records a measurement, transaction, or determination related to the mission of an agency.  
* What This Is
This explicitly defines "government data" as it is used by the other contract terms.
* Why It Is Here
The term "Government Data" is used frequently in the sections of legal language below. When using any of the below sections in a contract, this definition should be included also.

> **Government Owns the Data** 
> The Vendor hereby assigns without any requirement of further consideration all right, title, or interest the Vendor may have to the Government Data, including any copyrights or other intellectual property rights to the same. The Vendor hereby warrants that the Licensed Product is able to does not maintain, store, or export the Government Data using a database structure, data model, entity relationship diagram or equivalent which is itself a trade secret or which would cause substantial injury to the competitive position of the Vendor if published. Subject to the provisions of [SPECIFY SECTION OR ATTACHMENT], the Agency hereby grants to Vendor a nonexclusive, nontransferable, worldwide: know-how license to internally use the Government Data for the sole purpose of enabling Vendor to develop, test, and support Agency’s use of the Licensed Product; copyright license to internally reproduce, internally display, and internally distribute the Government Data; and copyright license to reproduce, display, distribute, and create derivative works of the Government Data upon the request of the Agency.
* What This Is: This requires the vendor to waive any copyright claim to the data in the database, and likewise requires the vendor to agree that the database structure itself isn’t a trade secret. Instead, the government grants the vendor certain copyright licenses so they can use it as needed to provide the services they have been contracted to do.  
* Why It Is Here: This prevents the vendor from claiming copyright to data which is stored and/or maintained by the vendor on behalf of the government. Sometimes vendors claim that their database stores government data in a format or schema which is itself a trade secret. Those vendors may require agencies to alert them when anyone files a Freedom of Information request for government data from that database. The vendor then interferes (administratively or legally) with the FOI request, taking advantage of the law’s exemptions for trade secrets. The three licenses granted by the agency to the vendor protects the vendor from being sued for making specific, limited uses of the data. Otherwise, it would be copyright infringement for the vendor to store the data in cloud servers, for example.   
* Notes: Any copyright license – including the ones here – is only a good defense for copyright lawsuits; these licenses do not affect the agency’s or the vendor’s responsibilities under privacy laws such as HIPAA, FERPA, and so on. These licenses are describing the actions for which the vendor cannot be sued for copyright infringement. Subsequent portions of this boilerplate lay out a subset of actions which the vendor can take with government data.

>**Guarantee of Disencumbrance**
Vendor warrants that any data provided to Agency under the terms of this agreement is in the public domain or otherwise unencumbered by intellectual property restrictions on its use by Agency. Vendor warrants that Agency’s use of the Licensed Product to create, maintain, and modify the Government Data under the terms of this agreement shall not be restricted by Vendor’s copyright, patent, or intellectual property considerations.
* What This Is: The data provided by the Vendor isn’t someone else’s intellectual property. The Vendor’s intellectual property restrictions don’t stop the Agency from using the software to manipulate its own data, according to this agreement.
* Why It Is Here: Data that comes with the software should be public domain, such as US Census Data, or otherwise free for the Agency to use with the software. The Vendor shouldn’t be selling access to restricted information that the Agency can’t use.

>**No Prior Restrictions**
Vendor represents and warrants that it has the full right and power to assign its rights, titles, and interests in [Reference to the "Government Owns the Data" Section] and otherwise perform its obligations hereunder, and that there are no outstanding Agreements, assignments, or encumbrances inconsistent with the provisions of said licenses or with any other provisions of this Agreement. Vendor represents and warrants that it is not aware of any claims of infringement of intellectual property that have been brought against it by third parties for infringement of such third party’s intellectual property by the Licensed Materials.
* What This Is: This requires the vendor to confirm that has full ownership of related intellectual property, and that it is capable of licensing those rights to the agency. The vendor also confirms that there haven’t been any lawsuits filed over the intellectual property.
* Why It Is Here: This reduces the risk of the government's right to data being affected by agreements and/or disputes between the Vendor and third parties.
Machine-Readable Exports

>**Machine-Readable Exports**
The Licensed Product must be capable of creating a digital, reusable copy of the Government Data, in whole and in parts, as a platform independent and machine-readable file.
Such file formats include, but are not limited to, plain text files such as comma-delimited tables, extensible markup language, and javascript object notation. Government Data which is stored in binary formats, including but not limited to portable document format, JPEG, and portable network graphics files, shall instead be reproducible in the same format in which it was loaded into the Licensed Product. This reusable copy must be made available in a publicly documented and non-proprietary format, with a clearly-defined data structure and a data dictionary for all terms of art contained in the data. For purposes of this section, non-proprietary formats include formats for which royalty-free codecs are available to end-users.
* What This Is: This requires the vendor to provide tools that do not limit data to use with a specific product or make it otherwise inaccessible. They must make the data available in bulk, and in a format which is not proprietary. In the situation where the government provides the vendor with the data in a proprietary format (for example, a PDF file), the vendor need only return the data the way it was given to them. In addition, documentation must be provided by the vendor so that the exported data can be easily understood and consumed by the government.
* Why It Is Here: Some software products save information in proprietary formats which may only be opened by that software product or another third-party product authorized by the maker. (For example, ESRI Personal Geodatabases.)

> **Waiving Right of Action**
Vendor hereby agrees to waive any and all future rights of action against Agency which may arise from the Agency’s authorized use of the Licensed Product to use, reproduce, distribute, or prepare derivative works of the Government Data, including but not limited to copyright, patent, and other intellectual property considerations.
* What This Is: This requires the vendor to agree that it will not sue the government for intellectual property violations as a result of the normal use of government data which the Vendor is handling.
* Why It Is Here: Generally, this shouldn't be an issue, because the Vendor has already waived its copyright claims to any of the government data. But we want to make absolutely clear that the Vendor doesn’t have any intellectual property rights to the data or whatever goes in inside the system.

>**Vendor Indemnifies Agency**
If a third party claims that the Government Data infringes that party’s copyright, patents, or trade secrets, Vendor will defend Agency against that claim at Vendor’s expense and pay all costs, damages, and attorney’s fees that a court finally awards, provided that Agency: notify Vendor in writing of any such claim within ten (10) business days of Agency’s receipt of such claim; and allow Vendor to control, and cooperate with Vendor in, the defense and any related settlement discussions, provided that Agency may participate in the defense at Vendor’s expense.
* What This Is: If the Agency is sued by someone else for violating their intellectual property rights by using the Vendor's products or services, the Vendor will defend the Agency. This means paying attorney’s fees as well as the damages (if the Agency and Vendor lose the lawsuit).
* Why It Is Here: The Vendor has already promised that they have the right to give away the intellectual property rights to the government data and the system that the database uses. If the Vendor is wrong, the Agency could get sued. If that happens, the Vendor will be on the hook for the legal defense.

>**When the Government Does Not Own the Data**
The section where Vendor waives its copyright interest shall not apply to any data used by Licensed Product except:
Government Data collected and compiled by or on behalf of a government agency
Derivative works of Government Data which are not themselves derivative works of data provided to Agency by Vendor.
* What This Is: This allows the Vendor keep its copyright interest in non-government data it may have, except when the Agency combines Government Data with the Vendor’s data.
* Why It Is Here: This supports situations where the Vendor’s provides proprietary data that the Agency wishes to purchase (or rent). In these cases, the Vendor keeps its copyright in its data, and the Government keeps its copyright in its data.
*Notes: When the Government combines the two data sets, the Vendor may get a copyright interest in that result.

>**Other Uses of Data**
Vendor shall not make use of the Government Data for any commercial purpose, whether to the benefit of Vendor or a third party, other than those provided in [SPECIFY ATTACHMENT].
* What This Is: This limits the Vendor's use of the Government Data in its systems for commercial benefit; this covers data-mining or selling summary/analytical data. If there are cases where this sale of data is acceptable, they should be explicitly identified through an additional attachment to the contract.
* Why It Is Here: This prohibits the Vendor from profiting from the government’s use of its product, and potentially sharing or exposing that data to third parties without the government's knowledge.



