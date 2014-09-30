---
published: true
layout: default
title: Common Core Metadata Changelog
permalink: /metadata-changelog/
filename: metadata-changelog.md
---
This page lists changes to the common core metadata schema by version. Latest changes at the top. Consult [repository history](https://github.com/project-open-data/project-open-data.github.io/issues?q=is%3Aopen) for explanations.

## Changelog

### Version 1.1 (Draft as of Sept 30 2014)

Updates to version 1.0 common core metadata:
  
* Adds required `dataset` field to wrap all datasets listed within an overarching "catalog" object that wraps the entire data.json file ([#309](https://github.com/project-open-data/project-open-data.github.io/issues/309))
* Adds `conformsTo` field, required at the catalog level to specify the schema and optional at the dataset and distribution level ([#309](https://github.com/project-open-data/project-open-data.github.io/issues/309), [#362](https://github.com/project-open-data/project-open-data.github.io/issues/362))
* Adds optional `describedBy` field at the catalog, dataset, and distribution level ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291), [#309](https://github.com/project-open-data/project-open-data.github.io/issues/309))
* Renames `accessLevelComment` field to `rights` ([#353](https://github.com/project-open-data/project-open-data.github.io/issues/353))
* Changes `contactPoint` field to an object that contains the name (`fn`) and email address (`hasEmail`) ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358)) 
* Renames `mbox` field to `hasEmail` and moves to within `contactPoint` ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358))  
* Adds `fn` field as part of `contactPoint` replacing earlier use of `contactPoint` ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358)) 
* Changes `accrualPeriodicity` field to use ISO 8601 date syntax ([#292](https://github.com/project-open-data/project-open-data.github.io/issues/292)) 
* Changes `primaryITInvestmentUII` to use capitalization consistent with the rest of the schema ([#284](https://github.com/project-open-data/project-open-data.github.io/issues/284)) 
* Changes `publisher` field to an object that allows multiple levels of organizations ([#296](https://github.com/project-open-data/project-open-data.github.io/issues/296)) 
* Changes `distribution` field to become required-if-applicable and to always contain the `accessURL` or `downloadURL` fields ([#217](https://github.com/project-open-data/project-open-data.github.io/issues/217))
* Changes `accessURL` field to represent indirect access and to exist only within `distribution` ([#217](https://github.com/project-open-data/project-open-data.github.io/issues/217), [#335](https://github.com/project-open-data/project-open-data.github.io/issues/335))
* Changes `format` field to a human readable description and to exist only within `distribution` ([#272](https://github.com/project-open-data/project-open-data.github.io/issues/272), [#293](https://github.com/project-open-data/project-open-data.github.io/issues/293)) 
* Adds required-if-applicable `mediaType` field to replace earlier use of `format` ([#272](https://github.com/project-open-data/project-open-data.github.io/issues/272)) 
* Adds required-if-applicable `downloadURL` field to replace earlier use of `accessURL` ([#335](https://github.com/project-open-data/project-open-data.github.io/issues/335)) 
* Adds optional `description` field for use within `distribution` ([#248](https://github.com/project-open-data/project-open-data.github.io/issues/248)) 
* Adds optional `title` field for use within `distribution` ([#248](https://github.com/project-open-data/project-open-data.github.io/issues/248)) 
* Adds optional `isPartOf` field to group datasets as a collection ([#258](https://github.com/project-open-data/project-open-data.github.io/issues/258)) 
* Removes `webService` field. APIs can be described within a `distribution` using `accessURL` and `format` ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291)) 


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

