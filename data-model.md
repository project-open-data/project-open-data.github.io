---
published: true
permalink: /data-model/
layout: article
filename: data-model.md
title: Data Model
page: data-model
redirect_from: "/data-exchange-standard/"
---

#DATA Act Information Model Schema v1.0

_Updated April 29, 2016_ -- A core requirement of the DATA Act is the development of government-wide data standards to ensure the reporting of reliable, consistent federal spending data for public use. Last year, OMB and Treasury finalized the 57 data definition standards and Treasury used the data definition standards to develop the initial draft of the DATA Act data exchange standard or Schema in May 2015. Treasury is using the agile development methodology to create the Schema and collected public input and feedback from federal agencies. Treasury issued four draft versions of the DATA Act Information Model Schema (DAIMS) v1.0 that was finalized today. The DAIMS v1.0 was revised over the past year based on hundreds of comments provided by the public and federal agencies. 

The DAIMS v1.0 gives an overall view of the hundreds of distinct data elements used to tell the story of how federal dollars are spent. It includes artifacts that provide technical guidance for federal agencies about what data to report to Treasury including the authoritative sources of the data elements and the submission format. The DAIMS also provides clarity on how the public can better understand the inherent complexity of the data.

##### DAIMS includes:
 - **Information Flow** – provides an overview of the reporting timeframes and sources of the data included in the DAIMS across the federal enterprise. 
 - **Reporting Submission Specification (RSS)** – includes a listing of the data elements with specific instructions for federal agencies to submit content in the appropriate format. The RSS is a human-readable version of the data standard. 
 - **Interface Definition Document (IDD)** – contains a listing of the elements, with supporting metadata to understand what data will be pulled from government-wide systems for procurement and from agency financial assistance systems. The IDD is a human-readable version of the data standard for the award related content.
 - **DAIMS Diagrams** – visual representations of how the data elements from the RSS and IDD fit together in context.  
 - **Online Data Dictionary** – a comprehensive list of data elements with definitions and minimal metadata, like definition and data category.
 - **XBRL Schema Files** – machine-readable version of the data standard that includes accounting-related and award-related content.

## Data Information Flow

The data information model provides an overview of the sources of the data included in the DAIMS and how the data will be submitted to the DATA Act Broker. Treasury will maintain the current cadence for reporting federal awards on a daily and bi-weekly basis and add the quarterly reporting in May 2017. This model shows how the data flows from the agency financial and awards systems to reach the public website.  

<img width="800" src="{{ site.baseurl }}/assets/img/informationflow.png" title="information flow diagram" /> 

## Reporting Submission Specification (RSS)

The RSS provides detail on what data needs to be submitted from an agency’s financial system.  The RSS contains prescriptive guidance to report appropriations account, object class, program activity, and award financial data.  The award financial data contains instructions to link the data between the financial systems and the award systems using the award identification number.  The RSS  includes information about optional/required data, field length,  and other metadata to ensure data quality.  The RSS documents contain the specific instructions a federal agency will need to submit data. 

The RSS includes three files that the agencies will submit to Treasury’s Broker:

- File A – Appropriations Account Detail 
- File B – Object Class and Program Activity Detail
- File C – Award Financial Detail 

Federal agencies can view [more information about the RSS on MAX](https://community.max.gov/download/attachments/903971114/DataSubmission_page.pdf?api=v2){:target="_blank"}.

## Interface Definition Document (IDD)

The Interface Definition Document (IDD) provides an overview of the award specific data elements and explains how the data will be reported or collected. Some data elements will be pulled from government-wide intermediary systems for procurement data, recipient attributes and sub award information.  The IDD also includes data elements submitted by agency systems for financial assistance awards. 

The IDD is based on the Data Model (DAIMS) v1.0 and features the elements related to:

- File D1 – Award and Awardee Attributes (Procurement)
- File D2 – Award and Awardee Attributes (Financial Assistance)
- File E – Additional Awardee Attributes
- File F – Sub-award Attributes

Federal agencies can view more information about the IDD on MAX. [Link is to current file on MAX.gov, link to updated IDD file when available]

## DAIMS Diagrams

The diagrams are visual representations of how the different data elements are related. They show the groupings of elements and attributes.

<div class="list-group" style="width:50%;">
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageA_v0.7.pdf" target="_blank" class="list-group-item">File A – Appropriations Account Detail [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageB_v0.7.pdf" target="_blank" class="list-group-item">File B – Object Class and Program Activity Detail [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageC_v0.7.pdf" target="_blank" class="list-group-item">File C – Award and Financial Detail [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageD_v0.7.pdf" target="_blank" class="list-group-item">File D1 – Award and Awardee Attributes (Procurement) [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageE_v0.7.pdf" target="_blank" class="list-group-item">File D2 – Award and Awardee Attributes (Financial Assistance) [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageE_v0.7.pdf" target="_blank" class="list-group-item">File E – Additional Awardee Attributes [add GitHub link when available]</a>
  <a href="http://fedspendingtransparency.github.io/assets/docs/DAIMS_Diagram-PackageE_v0.7.pdf" target="_blank" class="list-group-item">File F – Sub-award Attributes [add GitHub link when available]</a>
</div>

## Online Data Dictionary
The [Data Dictionary]({{ site.baseurl }}/dictionary/){:target="_blank"} is a list of the data elements with definitions and details of associated metadata.

## XBRL Schema Files

A data standard contains both a human-readable version of the standard and a machine-readable version of a standard. The XBRL Schema files are the machine-readable version of the DATA Act standard.

[All Files (zipped)]() [add GitHub link when available]

## Data Definition Standards

The FFATA and DATA Act outline the required information for federal spending transparency reporting. These requirements were translated into core data definition standards that were standardized with feedback from the federal community and external stakeholders. The finalized definitions and background information for these elements are available on the [Data Elements Page]({{ site.baseurl }}/data-elements/){:target="_blank"}.
