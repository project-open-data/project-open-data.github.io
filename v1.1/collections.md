---
published: true
layout: default
title: Data Collections
permalink: /v1.1/collections/
filename: collections.md
---

Agencies should enrich their Enterprise Data Inventory and Public Data Listing data.json files by ensuring all data assets (including databases and web applications) include metadata for the individual datasets contained within. Including metadata for the individual datasets containted within a larger data asset makes that data more discoverable improving searchability, facilitating use, and providing a comprehensive reference for data management and coordination. The original v1.0 schema did not accommodate data collections, but with the [v1.1 schema](/v1.1/schema/), datasets that belong to a larger collection of data should now use the `isPartOf` field to reference the `identifier` of a parent dataset. The parent dataset acts as a container for all the datasets in the collection so it may not have any distributions associated with it, but it can also be used to list distributions that provide consolidated or merged versions of the datasets in the collection for bulk download.  


Project Open Data Standard Metadata Usage Notes for Data Collections
--------------------------------------------------

{: .table .table-striped #identifier}
**Field [#](#identifier){: .permalink}** | **identifier**
----- | -----
**Cardinality** | (1,1)
**Required** | Yes, always
**Accepted Values** | String
**Usage Notes** | This field allows third parties to maintain a consistent record for datasets even if title or URLs are updated. Agencies may integrate an existing system for maintaining unique identifiers. Each identifier **must** be unique across the agency's catalog and remain fixed. It is **highly recommended** that a [URI (preferably an HTTP URL)](http://tools.ietf.org/html/rfc3986#section-1.1.3) be used to provide a globally unique identifier. Identifier URLs should be designed and maintained to persist indefinitely regardless of whether the URL of the resource itself changes.
**Example** |  `{"identifier":"http://dx.doi.org/10.7927/H4PZ56R2"}`

{: .table .table-striped #isPartOf}
**Field [#](#isPartOf){: .permalink}** | **isPartOf**
----- | -----
**Cardinality** | (0,1)
**Required** | No
**Accepted Values** | String
**Usage Notes** | This field allows the grouping of multiple datasets into a "collection".  This field should be employed by the individual datasets that together make up a collection.  The value for this field should match the `identifier` of the parent dataset.  
**Example** |  `{"isPartOf":"http://dx.doi.org/10.7927/H4PZ56R2"}`


Example of a data asset collection in a data.json file
--------------------------------------------------
~~~~
 {
            "@type": "dcat:Dataset",
            "title": "Agency Financial Report, 2013",
            "accessLevel": "public",
            "contactPoint": {
                "@type": "vcard:Contact",
                "fn": "William Joe",
                "hasEmail": "mailto:William.joe@opm.gov"
            },
            "description": "Annual financial reports by the U.S. Office of Personnel Management (OPM). The reports provide OPM's audited financial statements, notes, a management discussion and analysis, and other information.  The reports also help Congress, the President, and the public assess OPM's stewardship over financial resources.",
            "identifier": "OPM-CFO-0007-2013",
            "isPartOf": "OPM-CFO-0007",
            "keyword": [
                "2013",
                "financial reporting",
                "financial statements",
                "management discussion and analysis"
            ],
            "modified": "2013-09-30",
            "publisher": {
                "@type": "org:Organization",
                "name": "U.S. Office of Personnel Management"
            },
            "temporal": "2012-10-01/2013-09-30",
            "distribution": [
                {
                    "@type": "dcat:Distribution",
                    "downloadURL": "http://www.opm.gov/about-us/budget-performance/performance/2013-agency-financial-report.pdf",
                    "mediaType": "application/pdf",
                    "title": "2013-agency-financial-report.pdf"
                }
            ],
            "bureauCode": [
                "027:00"
            ],
            "programCode": [
                "027:000"
            ]
        },
~~~~
