---
published: true
layout: default
title: Metadata Changelog
permalink: /metadata-changelog/
filename: metadata-changelog.md
---
This page lists changes to the Project Open Data metadata schema by version. Latest changes at the top. Consult [repository history](https://github.com/project-open-data/project-open-data.github.io/issues?q=is%3Aopen) for explanations.

## Changelog

### Version 1.1

**Final as of 11/6/2014**

Changes made to establish the [v1.1 Schema](/v1.1/schema)

##### Catalog Required Fields
* Adds required `conformsTo` field to specify the schema version ([#309](https://github.com/project-open-data/project-open-data.github.io/issues/309))
* Adds required `dataset` field as a container for all datasets listed ([#309](https://github.com/project-open-data/project-open-data.github.io/issues/309))
* Adds optional `describedBy` field to specify a canonical or customized JSON schema file ([#309](https://github.com/project-open-data/project-open-data.github.io/issues/309), [#332](https://github.com/project-open-data/project-open-data.github.io/issues/332))
* Adds optional `@context` field to specify a JSON-LD Context ([#338](https://github.com/project-open-data/project-open-data.github.io/issues/388))
* Adds optional `@id` field to specify a JSON-LD Node Identifier ([#338](https://github.com/project-open-data/project-open-data.github.io/issues/388))
* Adds optional `@type` field to specify a JSON-LD data type ([#338](https://github.com/project-open-data/project-open-data.github.io/issues/388))

##### Dataset Required Fields
* Changes `contactPoint` field to an object that contains the name (`fn`) and email address (`hasEmail`) ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358))  
   * Adds `fn` field as part of `contactPoint` replacing earlier use of `contactPoint` ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358))  
   * Renames `mbox` field to `hasEmail` and moves to within `contactPoint` ([#358](https://github.com/project-open-data/project-open-data.github.io/issues/358))   
* Changes `publisher` field to an object that allows multiple levels of organizations ([#296](https://github.com/project-open-data/project-open-data.github.io/issues/296)) 
	* Adds `name` as part of `publisher` replacing earlier use of `publisher` ([#296](https://github.com/project-open-data/project-open-data.github.io/issues/296)) 
	* Adds optional `subOrganizationOf` field as part of `publisher` to include parent organization hierarchy ([#296](https://github.com/project-open-data/project-open-data.github.io/issues/296)) 
* Adds optional `@type` field to specify a JSON-LD data type ([#338](https://github.com/project-open-data/project-open-data.github.io/issues/388))
* Recommends that `identifier` uses a URL, but does not require it. ([#69](https://github.com/project-open-data/project-open-data.github.io/issues/69))

##### Dataset Required-if-Applicable Fields  
* Removes `webService` field. APIs can be described within a `distribution` using `accessURL` and `format` ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291)) 
* Renames `accessLevelComment` field to `rights` ([#353](https://github.com/project-open-data/project-open-data.github.io/issues/353))
* Changes `license` field to be a URL ([196](https://github.com/project-open-data/project-open-data.github.io/issues/196))
* Changes `distribution` field to become required-if-applicable and to always contain the `accessURL` or `downloadURL` fields ([#217](https://github.com/project-open-data/project-open-data.github.io/issues/217))

##### Dataset Distribution Fields
* Adds required-if-applicable `downloadURL` field to replace earlier use of `accessURL` and to exist as a field within `distribution` ([#335](https://github.com/project-open-data/project-open-data.github.io/issues/335)) 
* Adds required-if-applicable `mediaType` field to replace earlier use of `format` and to exist as a field within `distribution` ([#272](https://github.com/project-open-data/project-open-data.github.io/issues/272)) 
* Changes `accessURL` field to represent indirect access and to exist only as an optional field within `distribution` ([#217](https://github.com/project-open-data/project-open-data.github.io/issues/217), [#335](https://github.com/project-open-data/project-open-data.github.io/issues/335))
* Changes `format` field to a human readable description and to exist only as an optional field within `distribution` ([#272](https://github.com/project-open-data/project-open-data.github.io/issues/272), [#293](https://github.com/project-open-data/project-open-data.github.io/issues/293)) 
* Adds optional `description` field for use within `distribution` ([#248](https://github.com/project-open-data/project-open-data.github.io/issues/248)) 
* Adds optional `title` field for use within `distribution` ([#248](https://github.com/project-open-data/project-open-data.github.io/issues/248)) 
* Adds optional `describedBy` field to specify a distribution specific data dictionary ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291), [#332](https://github.com/project-open-data/project-open-data.github.io/issues/332))
* Adds optional `describedByType` field to specify the format of the data dictionary referenced with `describedBy` ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291), [#332](https://github.com/project-open-data/project-open-data.github.io/issues/332))
* Adds optional `conformsTo` field to specify a standard the distribution conforms to ([#362](https://github.com/project-open-data/project-open-data.github.io/issues/362))
* Adds optional `@type` field to specify a JSON-LD data type ([#338](https://github.com/project-open-data/project-open-data.github.io/issues/388))

##### Expanded Fields
* Changes `accrualPeriodicity` field to use ISO 8601 date syntax ([#292](https://github.com/project-open-data/project-open-data.github.io/issues/292)) 
* Renames `PrimaryITInvestmentUII` field to `primaryITInvestmentUII` to use capitalization consistent with the rest of the schema ([#284](https://github.com/project-open-data/project-open-data.github.io/issues/284)) 
* Renames `dataDictionary` field to `describedBy` ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291), [#332](https://github.com/project-open-data/project-open-data.github.io/issues/332))
* Adds optional `describedByType` field ([#291](https://github.com/project-open-data/project-open-data.github.io/issues/291), [#332](https://github.com/project-open-data/project-open-data.github.io/issues/332))
* Adds optional `conformsTo` field to specify a standard the dataset conforms to ([#362](https://github.com/project-open-data/project-open-data.github.io/issues/362))
* Adds optional `isPartOf` field to group datasets as a collection  ([#258](https://github.com/project-open-data/project-open-data.github.io/issues/258)) 


### Version 1.0 FINAL - 9/20/2013

Changes made to establish the [v1.0 Schema](/schema)

##### “Common Core” Required Fields
* Aligns `modified` field to ISO 8601 of least resolution
* Adds required `bureauCode` field
* Adds required `programOffice` field 
* Renames `person` field to `contactPoint` to better align with DCAT
* Changes the `keywords` field to an array

##### “Common Core” Required-if-Applicable Fields
* Adds required-if-applicable `accessLevelComment` field
* Aligns `format` field to MIME types
* Aligns `temporal` field to ISO 8601 of least resolution
* Changes `temporal` field to use solidus for date ranges

##### Expanded Fields
* Aligns `accrualPeriodicity` field to DCCDAccrualPeriodicity
* Aligns `issued` field to ISO 8601 of least resolution
* Aligns `language` field to RFC 5646
* Changes the `language` field to an array
* Removes `granularity` field
* Removes `size` field
* Removes `feed` field





