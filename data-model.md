---
published: true
permalink: /data-model/
layout: article
filename: data-model.md
title: Data Model
page: data-model
---

# Data Model (Draft v0.7)

To provide federal agencies the guidance to meet the requirements of the DATA Act and gain its benefits, we have designed a data model that captures the data elements needed, their relationships, and the overall context of how they fit together.

The value of the data model is to provide clarity, guidance, and instruction on the need, submission, and use of the DATA Act elements.  

Interconnecting previously disconnected business domain areas, like financial management and procurement, has impacts to current business processes. One of the most effective ways to minimize the impacts is to design a data model that reflects the various business process subtleties, functional nuances, and complex relationships. To do this, we have compiled a set of artifacts to communicate the data model. These artifacts are referred to as the DATA Act Information Model Schema (DAIMS).

**The DAIMS contains artifacts that:**

* Help federal agencies understand what data to submit, with layout and context information
* Help the public understand what the data means


**The specific DAIMS artifacts include:**

* Reporting Submission Specification (RSS) – contains the specific guidance federal agencies need to submit content and the appropriate format for a submission
* Data Elements Guidance (DEG) – contains a comprehensive listing of the elements with supporting metadata to understand context, relationships, and derivations
* Schema Diagrams – visual representations of how the data elements fit together in context
* Online Data Dictionary – a list of data elements with definitions and minimal metadata, like data type
* XBRL Schema Files – a machine-readable format of the elements that federal agencies submit


The policies that affect the data needed for the DATA Act are continuously evolving. The policy changes, coupled with the feedback we receive from our engagements with federal agencies and stakeholders, have generated several releases of our data model since July 2015.

The revision process is part of our user-centric approach that depends on active participation by federal agencies, Congress, and the public. We will continue to share our latest thinking and actively seek your engagement to improve on our work.

To provide feedback on our data model (DAIMS), please see our related issue on [GitHub](https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/126){:target="_blank"}.


## Reporting Submission Specification (RSS)

An RSS details what needs to be included in a submission and the appropriate format for a submission. It includes information like which data elements are optional/required, how long a field is, and other metadata to understand what a data element means. The RSS documents contain the specific instructions a federal agency will need to submit data.

Going forward, the RSS will continue to evolve as the DATA Act data model is updated and will continue to reflect the specific instructions for federal agencies. Federal agencies can view [more information about the RSS on MAX](https://community.max.gov/download/attachments/903971114/DataSubmission_page.pdf?api=v2){:target="_blank"}. 

## Data Elements Guidance (DEG)

In the course of developing and sharing the elements, we have learned that too much detail can be overwhelming. We are working with stakeholders to determine an appropriate balance of detail to provide in the DEG.

The FFATA and DATA Act outline the required information for federal spending transparency reporting. These requirements were translated into core data elements that were standardized with feedback from the federal community and external stakeholders. The finalized definitions of these elements are available on the [Data Elements page]({{ site.baseurl }}/data-elements).


## Schema diagrams

The schema diagrams are visual representations of how the different data elements are related. They show the groupings of elements and attributes.

<div class="list-group" style="width:50%;">
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageA_v0.7.pdf" target="_blank" class="list-group-item">Package A</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageB_v0.7.pdf" target="_blank" class="list-group-item">Package B</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageC_v0.7.pdf" target="_blank" class="list-group-item">Package C</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageD_v0.7.pdf" target="_blank" class="list-group-item">Package D</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageE_v0.7.pdf" target="_blank" class="list-group-item">Package E</a>
</div>


## Online Data Dictionary

The [Data Dictionary]({{ site.baseurl }}/dictionary/){:target="_blank"} is a list of the data elements with definitions and details of associated metadata. Click the link in the information Model Element – Semantic Label column to access the metadata details.


## XBRL Schema Files

A data standard contains both a human-readable version of the standard and a machine-readable version of a standard. The XBRL Schema files are the machine-readable version of the DATA Act standard.

<div class="list-group">
  <a href="http://fedspendingtransparency.github.io/schema/daims/treas-20151231.xsd" target="_blank" class="list-group-item">XSD</a>
  <a href="http://fedspendingtransparency.github.io/schema/daims/treas-20151231_lab.xml" target="_blank" class="list-group-item">Labels</a>
  <a href="http://fedspendingtransparency.github.io/schema/daims/treas-20151231_pre.xml" target="_blank" class="list-group-item">Presentation Hierarchy</a>
  <a href="http://fedspendingtransparency.github.io/schema/daims/treas-20151231_def.xml" target="_blank" class="list-group-item">Definition Hierarchy</a>
  <a href="http://fedspendingtransparency.github.io/schema/daims/treasury-fiscal-service-2015-12-31.xsd" target="_blank" class="list-group-item">Types</a>
  <a href="http://fedspendingtransparency.github.io/schema/daims/DATA_Act_Schema_v0.7.zip" target="_blank" class="list-group-item">All Files (zipped)</a>
</div>
