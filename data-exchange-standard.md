---
published: true
permalink: /data-exchange-standard/
layout: hero
filename: data-exchange-standard.md
title: The Digital Accountability Transparency Act Schema
---
# The Digital Accountability Transparency Act Schema

## Background

The DATA Act directs the Office of Management and Budget (OMB) and the U.S. Treasury Department (Treasury) to establish government-wide data standards for federal funds and entities receiving such funds. While standard data definitions will help to ensure that information will be consistent and comparable, a standard data exchange, as part of our implementation to make financial management data more accessible and reusable and provide the necessary linkages between financial events. By making federal spending data accessible, searchable, reusable and more reliable, the public can understand how government spending impacts their communities. The standard data exchange will also reduce the need for massive system changes across federal agencies to collect information and allow agencies to focus on managing data.

Accordingly, Treasury will issue data exchange guidelines that leverage industry standards to structure financial and non-financial data with metadata, or supplemental information that describes, explains, locates, or otherwise makes it easier to retrieve and understand the data.

Treasury will require agencies, to the extent practicable, to submit data for posting on USAspending.gov (or successor site) via a standard data exchange called the “Digital Accountability Transparency Act Schema” (DATA Act Schema).

The standard data exchange, or DATA Act Schema, has two components: a complete set of data for DATA Act reporting purposes and a standard format, or “language” for exchanging data. The DATA Act Schema includes the required DATA Act data elements and related metadata, including relationship and validation rules. The DATA Act Schema will provide a comprehensive view of the data definition standards and their relationships to one another.  Based on feedback from the 0.5 release, the DATA Act Schema 0.6 release incorporates a minimal viable product approach.  This approach starts with basic functionality and then matures into more functionality - incrementally over time.  With each monthly release, more functionality will be integrated into the schemas.  This approach has two immediate benefits: (1) crystallizes the focus for substantive feedback to be based on the data relationships, rules, and flows; and, (2) incrementally introduces additional functionality to the framework to bring the structure into alignment with XBRL (eXtensible Reporting Language), a freely available and global standard for describing and exchanging business information.  XBRL provides an industry-proven, standards-based manner to communicate and exchange business information between systems.

Treasury has created a draft subset of the DATA Act Schema based upon a subset of U.S. Standard General Ledger (USSGL), which is expressed in XBRL. The draft schema can be found here. Additional components of the DATA Act Schema will be created in the future to capture other data elements (see Figure 1). For data transmission within the federal government and to external stakeholders, Treasury may leverage a combination of additional formats (e.g. JSON, Protocol Buffer, CSV, etc.) derived from the DATA Act schemas standard representation. This will allow matching of the optimal format given data volume, performance, and data presentation needs.

The DATA Act Schema will be revised periodically and is expected to evolve over time to capture unique requirements for more complex or specialized areas and to reflect changes due to law or regulation.

The DATA Act Schema includes both the technical representation and the <a href="{{ site.baseurl }}/dictionary/" title="DATA Act Data Dictionary">“human readable” data dictionary</a>.

**Important:** The draft schema does not constitute official USSGL guidance and should not be used as official guidance by federal agencies or the public. For official guidance, see [http://tfm.fiscal.treasury.gov/v1/supplements/ussgl.html](http://tfm.fiscal.treasury.gov/v1/supplements/ussgl.html "official USSGL guidance").

## Current Draft Version (v0.6)

<a href="{{ site.baseurl }}/dictionary/" title="DATA Act Data Dictionary">Data Dictionary</a>

<a href="{{ site.baseurl }}/assets/docs/DATA_Act_Schema_v0.6.zip" title="DATA Act schema instance (.zip)">Schema instance (XML version)</a>

To provide feedback on any of the above, please see our [related issue](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/101).
