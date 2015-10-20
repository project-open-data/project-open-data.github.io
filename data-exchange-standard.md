---
published: true
permalink: /data-exchange-standard/
layout: hero
filename: data-exchange-standard.md
title: The Digital Accountability Transparency Act Schema
---
# The Data Exchange Standard

As part of the implementation of the DATA Act, this page contains information on the standard data exchange, called the “Digital Accountability Transparency Act Schema” (DATA Act Schema). The data exchange standard leverages industry standards to structure financial and non-financial data with metadata, or supplemental information that describes, explains, locates, or otherwise makes it easier to retrieve and understand the data.
The Department of the Treasury, along with agency partners, is working to release incremental versions of the standard that regularly incorporate feedback from agencies, the public, and other stakeholders. Please note that the data standard is under active development. Specific implementations of this schema may be in XBRL, XML, JSON, and other formats. The information on this page is a work in progress and does not represent final or official guidance at this point in time.

## Current Draft Version (v0.6)

Now that OMB and Treasury have released the [complete list of standardized data elements](https://max.gov/maxportal/assets/public/offm/DataStandardsFinal.htm "standardized DATA Act elements"), the federal community has worked to revise v0.5 of the DATA Act Schema to incorporate the standardized elements. DATA Act Schema v0.6:

* Includes the complete set of financial and award data elements required by the DATA Act and FFATA;
* Provides a simplified approach to understanding the data elements and their relationships based on feedback received; and
* Better aligns the schema with standard business rules for improved interoperability and simplicity.

The v0.6 release includes these artifacts:

### 1) Data Dictionary v0.6

A human-readable listing of the data elements with definitions and other metadata (_e.g._, string length).  
<a href="{{ site.baseurl }}/dictionary/" title="DATA Act Data Dictionary">Data Dictionary</a>

### 2) DATA Act Data Standards v0.6 Schemas (zipped)

A single downloadable file that contains the XML Schema files. The Data Dictionary and the XML Schema content are in alignment.  
<a href="{{ site.baseurl }}/assets/docs/DATA_Act_Schema_v0.6.zip" title="DATA Act Schema (.zip)">Data Schema</a>

### 3) DATA Act Data Standards v0.6 Schemas (Normative)

The individual XML Schema files are posted for your assurance that the schemas have been unaltered for this release. The Data Dictionary is informative and could be modified during a release.

<a href="{{ site.baseurl }}/schema/appropriations/appropriations.xsd" title="appropriations">appropriations</a>

<a href="{{ site.baseurl }}/schema/award/award.xsd" title="award">award</a>

<a href="{{ site.baseurl }}/schema/award-financial/award-financial.xsd" title="award financial">award-financial</a>

<a href="{{ site.baseurl }}/schema/awardee/awardee.xsd" title="awardee">awardee</a>

<a href="{{ site.baseurl }}/schema/general/general.xsd" title="general">general</a>

<a href="{{ site.baseurl }}/schema/program-object/program-object.xsd" title="program-object">program-object</a>

<a href="{{ site.baseurl }}/schema/subaward/subaward.xsd" title="subaward">subaward</a>

To provide feedback on any of the above, please see our [related issue](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/101).
