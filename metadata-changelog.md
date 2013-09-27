---
published: true
layout: default
title: Common Core Metadata Changelog
permalink: /metadata-changelog/
filename: metadata-changelog.md
---
This page lists changes to the common core metadata schema by version. Latest changes at the top. Consult repository history for explanations.

This document is currently a DRAFT.

## Changelog

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

