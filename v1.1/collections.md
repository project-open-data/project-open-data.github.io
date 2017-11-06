---
published: true
layout: default
title: Data Collections
permalink: /v1.1/collections/
filename: collections.md
---

Agencies should enrich their Enterprise Data Inventory and Public Data Listing data.json files by ensuring all data assets (including databases and web applications) include metadata for the individual datasets contained within. Including metadata for the individual datasets containted within a larger data asset makes that data more discoverable improving searchability, facilitating use, and providing a comprehensive reference for data management and coordination. The original v1.0 schema did not accommodate data collections, but with the [v1.1 schema](/v1.1/schema/), datasets that belong to a larger collection of data should now use the `isPartOf` field to reference the `identifier` of a parent dataset. The parent dataset acts as a container for all the datasets in the collection so it may not have any distributions associated with it, but it can also be used to list distributions that provide consolidated or merged versions of the datasets in the collection for bulk download.  

When deciding what datasets should be organized into collections, agencies should consider: user testing results, temporal and spatial patterns (e.g. datasets that are released repeatedly each month should be organized into a collection), existing hierarchies and schemes (including Bureau and Program Code), cross-agency duplication mitigation, and emerging best practices. 

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

Geospatial Metadata Usage Notes for Data Collections
--------------------------------------------------

Currently Data.gov [does not support collections via geospatial harvest sources](https://github.com/GSA/data.gov/issues/708) without registering an individual WAF harvest sources for the collection. For now the only option is manually registering collections via a separate WAF source (or via Project Open Data Metadata). The fix to support collections in geospatial metadata will focus on ISO 19115 via a CSW. Support for collections from CSDGM metadata is more uncertain since no mapping for the field has been defined.

Supportive Tools
--------------------------------------------------

[Inventory.data.gov](https:/inventory.data.gov) is a data management tool managed by the Data.gov PMO to assit agencies with generating, maintaining, and merging Enterprise Data Inventory and Public Data Listing JSON files. The [Inventory.data.gov Guide](http://www.digitalgov.gov/resources/inventory-data-gov-guide/) provides guidance on how to log collections, see the pertitent lanuage below:

> The last two fields are to indicate if this dataset is part of a collection or if you want to designate this dataset as the “parent” of a collection.

 > **Is parent.** Yes or No. If you want to make this dataset the “parent” of a collection, choose yes. Otherwise choose no.

> ![600-x-130-parent-options](https://cloud.githubusercontent.com/assets/1725454/11702210/e6b69194-9ea2-11e5-8507-69c3e63d8ea9.jpg)

> Note that once you make a dataset a “parent” dataset, it cannot be a “child” dataset, or part of another collection of datasets.   After a dataset is selected as parent, this dataset will be available for the subsequent datasets in this organization to choose a parent dataset (for isPartOf)

> If you chose No and made the dataset a non-parent dataset, you would then be able to choose in the next field (Parent dataset) – the datasets that you want to make this dataset as part of a collection, note that this field is optional and can be left empty if you would like the dataset to be  an independent dataset.`
