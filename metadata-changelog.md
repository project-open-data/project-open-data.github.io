---
published: true
layout: default
title: Common Core Metadata Changelog
permalink: /metadata-changelog/
filename: metadata-changelog.md
---
This page lists changes to the common core metadata schema by version. Latest changes at the top. Consult [repository history](https://github.com/project-open-data/project-open-data.github.io/issues?q=is%3Aopen) for explanations.

## Changelog

### Version 1.1 FINAL - ???????

Updates to version 1.0 common core metadata:
  
* Renames "accessLevelComment" field to "rights" to better alight with DCAT  
* Renames "mbox" field to "hasEmail" and moves to within "contactPoint" to better align with vCard  
* Aligns "accrualPeriodicity" field to ISO 8601  
* Aligns "contactPoint" field to vCard  
  
* Changes "accessURL" field to represent indirect access and to exist only within "distribution"  
* Changes "format" field to a human readable description and to exist only within "distribution"  
* Changes "distribution" field to become required-if-applicable and to always contain the "accessURL" or "downloadURL" fields  
* Changes "primaryITInvestmentUII" to the correct capitalization  
* Changes "publisher" field to allow for multiple levels of organizations  
  
* Removes "webService" field  
  
* Adds required "catalog" field to wrap the entire data.json file  
* Adds "conformsTo" field, required at the catalog level and optional at the individual record level    
* Adds optional "describedBy" field  
* Adds optional "description" field for use within "distribution"  
* Adds required-if-applicable "downloadURL" field  
* Adds required "fn" field as part of "contactPoint"  
* Adds optional "isPartOf" field  
* Adds required-if-applicable "mediaType" field  
* Adds optional "title" field for use within "distribution"  


### Version 1.0 FINAL - 9/20/2013

Updates to original draft metadata:

* Renames "person" field to "contactPoint" to better align with DCAT
* Aligns "modified", "temporal", and "issued" fields to ISO 8601 of least resolution
* Aligns "format" field to MIME types
* Aligns "accrualPeriodicity" field to DCCDAccrualPeriodicity
* Aligns "language" field to RFC 5646
 
* Changes "keywords" and "language" fields to arrays
* Changes "temporal" field to use solidus for date ranges

* Removes "granularity" field
* Removes "size" field
* Removes "feed" field

* Adds required-if-applicable "accessLevelComment" field
* Adds required "bureauCode" field
* Adds required-if-applicable "programOffice" field 

