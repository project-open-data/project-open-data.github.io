---
published: true
permalink: /data-exchange-standard/
layout: hero
filename: data-exchange-standard.md
title: The Digital Accountability Transparency Act Schema
---
# The Data Exchange Standard

As part of the implementation of the DATA Act, this page contains information on the standard data exchange, called the “Digital Accountability Transparency Act Schema” (DATA Act Schema). The data exchange standard leverages industry standards to structure financial and non-financial data with metadata, or supplemental information that describes, explains, locates, or otherwise makes it easier to retrieve and understand the data. Lisa was here


## Current Draft Version (v0.7)

DATA Act Schema Version 0.7 builds off of version 0.6, which incorporated the [newly standardized data elements](https://max.gov/maxportal/assets/public/offm/DataStandardsFinal.htm) and included the complete set of financial and award data elements required by the DATA Act and FFATA.  Version 0.7 provides a comprehensive normative model, or DATA Act Information Model Schema (DAIMS), to represent all spending and related information anticipated, required, or available to support the additional federal spending transparency information required by the DATA Act.  Version 0.7 does not include agency submission specifications regarding the file format, content scope, file organization, etc., but rather focuses on including additional semantic and contextual metadata, attributes, and missing elements. Specifically, version 0.7:

* Incorporates additional financial data elements and attributes that will support more accurate and detailed financial and budgetary accounting information.  The schema leverages policy and guidance from the [US Standard General Ledger (USSGL)](https://www.fiscal.treasury.gov/fsreports/ref/ussgl/ussgl_home.htm) in implementing the financial data elements required by the DATA Act.
* Incorporates recent policy decisions as well as feedback received from federal agency stakeholders.
* Includes schema diagrams that depict the structural relationships and hierarchies of the data fields.



The v0.7 release includes the following artifacts:

### 1) DATA Act Data Standards v0.7 Schemas Diagrams

The diagrams depict the structural relationships and hierarchies of the data fields.
<br />
<a href="{{ site.baseurl }}/assets/docs/DAIMS_Diagram-PackageA_v0.7.pdf" title="DAIMS Appropriation Account Information Package Diagram
">DAIMS Appropriation Account Information Package Diagram
</a>

<a href="{{ site.baseurl }}/assets/docs/DAIMS_Diagram-PackageB_v0.7.pdf" title="DAIMS Treasury Account, Program Activity & Object Class Package Diagram
">DAIMS Treasury Account, Program Activity & Object Class Package Diagram
</a>

<a href="{{ site.baseurl }}/assets/docs/DAIMS_Diagram-PackageC_v0.7.pdf" title="DAIMS Award Financial Information Package Diagram
">DAIMS Award Financial Information Package Diagram
</a>

<a href="{{ site.baseurl }}/assets/docs/DAIMS_Diagram-PackageD_v0.7.pdf" title="DAIMS Award Actions Information Package Diagram
">DAIMS Award Actions Information Package Diagram
</a>

<a href="{{ site.baseurl }}/assets/docs/DAIMS_Diagram-PackageE_v0.7.pdf" title="DAIMS Award Recipient Information Package Diagram
">DAIMS Award Recipient Information Package Diagram
</a>




### 2) Data Dictionary v0.7

A human-readable listing of the data elements with definitions and other metadata (e.g., data type).  
<a href="{{ site.baseurl }}/dictionary/" title="DATA Act Data Dictionary">Data Dictionary</a>

### 3) DATA Act Data Standards v0.7 Schemas (zipped)

A single downloadable file that contains the XBRL Schema files. The Data Dictionary and the XBRL Schema content are in alignment.<br />
<a href="{{ site.baseurl }}/schema/daims/DATA_Act_Schema_v0.7.zip" title="DATA Act Schema v0.7">DATA Act Information Model Schema v0.7</a>

### 4) DATA Act Data Standards v0.7 Schemas (Normative)

The individual XML Schema files are posted for your assurance that the schemas have been unaltered for the v0.7 release.

<a href="{{ site.baseurl }}/schema/daims/treas-20151231.xsd" title="DAIMS XBRL XSD">DAIMS XBRL XSD</a>

<a href="{{ site.baseurl }}/schema/daims/treas-20151231_lab.xml" title="DAIMS XBRL Labels">DAIMS XBRL Labels</a>

<a href="{{ site.baseurl }}/schema/daims/treas-20151231_pre.xml" title="DAIMS XBRL Presentation Hierarchy">DAIMS XBRL Presentation Hierarchy</a>

<a href="{{ site.baseurl }}/schema/daims/treas-20151231_def.xml" title="DAIMS XBRL Definition Hierarchy">DAIMS XBRL Definition Hierarchy</a>

<a href="{{ site.baseurl }}/schema/daims/treasury-fiscal-service-2015-12-31.xsd
" title="DAIMS XBRL Types">DAIMS XBRL Types</a>




To provide feedback on any of the above, please see our [related issue](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/126).
