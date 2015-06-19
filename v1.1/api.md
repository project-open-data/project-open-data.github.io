---
published: true
layout: default
title: Documenting APIs
permalink: /v1.1/api/
filename: api.md
---

Agencies should list private, internal, and public-facing web APIs as part of their Enterprise Data Inventory and Public Data Listing data.json files. The original v1.0 schema accommodated the listing of APIs with a separate `webServices` field, but with the [v1.1 schema](/v1.1/schema/), APIs should now be listed as a separate distribution within a dataset. Since an API provides indirect access to a dataset and the primary URL that a user needs in order to access the API is the API documentation, all web APIs should be referenced using the primary API documentation URL as an `accessURL` with the `format` specified as "API". The `downloadURL` and `mediaType` fields should be left empty for a distribution that describes an API, but if the raw data download that powers the API is also available (as it should be) then that should be specified using the `downloadURL` and `mediaType` of another distribution entry on the same dataset.

Machine Readable API Documentation
--------------------------------------------------

For APIs that also have machine readable documentation (like [Swagger](https://github.com/swagger-api/swagger-spec#readme), [RAML](http://raml.org/), [API Blueprint](https://apiblueprint.org/), [HAL](http://stateless.co/hal_specification.html), [Hydra](http://www.w3.org/ns/hydra/spec/latest/core/), etc) it can be specified with `describedBy` and `describedByType`. The URL for the machine readable documentation should be specified by `describedBy` and `describedByType` should be a media type that identifies the format of the machine readable documentation.

Media Types for Machine Readable API Documentation
--------------------------------------------------

These media types should be used for the `describedByType` field along with the URL to the machine readable documentation itself using the `describedBy` field. This should not be confused with the `format` field which should be "API" for an API and `mediaType` which should be blank for an API.

* The media type for Swagger has been [proposed](https://github.com/wordnik/swagger-spec/issues/110) as `application/swagger+json`
* The media type for RAML has been [defined](http://raml.org/spec.html#overview) as `application/raml+yaml`
* The media type for API Blueprint has been [defined](https://github.com/apiaryio/api-blueprint-ast#media-types) as `application/vnd.apiblueprint.ast` in abstract syntax tree form, plus others depending on the serialization
* The media type for HAL has been [defined](http://stateless.co/hal_specification.html) as `application/hal+json` and `application/hal+xml` for the JSON and XML variants.
* The media type for Hydra has been [proposed](http://www.w3.org/ns/hydra/spec/latest/core/#h3_adding-affordances-to-representations) as `application/ld+json` with `rel="http://www.w3.org/ns/hydra/core#apiDocumentation"` included in the `Link` HTTP header.

Reference Standardized API Specifications
--------------------------------------------------
Some APIs may implement a common standard such as WMS, WFS, or Open311. If this is an established standard, use the canonical URI for the standard as the value for the `conformsTo` field in the same distribution object where the API is listed.

Example of an API listing in a data.json file
--------------------------------------------------
~~~~
"distribution": [
    {
        "accessURL": "http://www.agency.gov/api/vegetables/",
        "description": "A fully queryable REST API with JSON and XML output",
        "describedBy": "http://www.agency.gov/api/vegetables/swagger.json",
        "describedByType": "application/swagger+json",
        "format": "API",
        "title": "Vegetables REST API"
    }
]
~~~~
