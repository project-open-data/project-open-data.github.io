---
layout: default
title: Redaction Guidance
permalink: /redactions/
filename: redactions.md
---

The full Enterprise Data Inventories managed by each agency and submitted to OMB should not contain any redactions. However, if an agency were to make as much of their EDI available within their Public Data Listing as possible, they may need to redact some information based on guidance from their FOIA office. This page is intended to provide direction on how redactions should be implemented in the Public Data Listing JSON file, but guidance on exactly what information needs to be redacted should come from the FOIA office at each agency. However, it is helpful to keep in mind that redactions should be kept to the absolute minimum and according to the [2009 Department of Justice FOIA memorandum](http://www.justice.gov/sites/default/files/ag/legacy/2009/06/24/foia-memo-march2009.pdf), "in the face of doubt, openness prevails." When redactions are implemented, this also means that if only one word in a sentence needs to be redacted, then only that word should be redacted, not the entire sentence, and not the whole field in the JSON file.

## FOIA Exemption Reasons

In order to identify the FOIA exemption used for the redaction, the redaction should use the following syntax to reference the exemption type:

{: .table .table-striped}
Redaction text       | Brief FOIA exemption description
-------              | -------
[[REDACTED-EX B3]]   | Specifically exempted from disclosure by statute (other than FOIA), provided that such statute (A) requires that the matters be withheld from the public in such a manner as to leave no discretion on the issue, or (B) establishes particular criteria for withholding or refers to particular types of matters to be withheld.
[[REDACTED-EX B4]]   | Trade secrets and commercial or financial information obtained from a person and privileged or confidential.
[[REDACTED-EX B5]]   | Inter-agency or intra-agency memorandums or letters which would not be available by law to a party other than an agency in litigation with the agency.
[[REDACTED-EX B6]]   | Personnel and medical files and similar files the disclosure of which would constitute a clearly unwarranted invasion of personal privacy.


## Use the "rights" Field for More Information
Agencies are required to use the `rights` field to provide the reasoning for an `accessLevel` of “non-public” or “restricted public.” If any information has been redacted, it's helpful to also provide the full text description from the FOIA Exemption Reasons table here to complement the explanation for the non-public `accessLevel`.


## Redaction JSON Syntax Example

Redactions should use the syntax provided in the exemption reasons table and they should always be presented as a string even if they are redacting a field that is not normally a string. The JSON Schema validation has been updated to accept redactions like this for fields that would otherwise not allow free text. 

~~~json
{
    "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
    "@id": "http://www.agency.gov/data.json",
    "@type": "dcat:Catalog",    
    "conformsTo": "https://project-open-data.cio.gov/v1.1/schema", 
    "describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json",
    "dataset": [
        {
            "@type": "dcat:Dataset",
            "accessLevel": "non-public", 
            "accrualPeriodicity": "R/P1Y", 
            "bureauCode": [
                "018:10"
            ],
            "conformsTo": "http://www.agency.gov/widget-taxonomy/",
            "contactPoint": {
                "@type": "vcard:Contact",
                "fn": "Jane Doe", 
                "hasEmail": "mailto:jane.doe@agency.gov"
            }, 
            "describedBy": "http://www.agency.gov/datasets/widgets-dictionary.html", 
            "dataQuality": true, 
            "description": "This dataset provides national statistics on the production of widgets for [[REDACTED-EX B4]]", 
            "distribution": [
                {
                    "@type": "dcat:Distribution",
                    "description": "[[REDACTED-EX B4]] widgets data as a CSV file", 
                    "downloadURL": "[[REDACTED-EX B4]]", 
                    "format": "CSV", 
                    "mediaType": "text/csv", 
                    "title": "[[REDACTED-EX B4]]-widgets.csv"
                }
            ], 
            "identifier": "https://metadata.agency.gov/10.7927/H4PZ56R2", 
            "issued": "2011-11-22", 
            "keyword": [
                "widget", 
                "manufacturing", 
                "factory"
            ], 
            "landingPage": "http://agency.gov/widgets/data", 
            "language": [
                "en-US"
            ], 
            "license": null, 
            "modified": "2011-11-19T12:00:00Z", 
            "primaryITInvestmentUII": "021-006227212", 
            "programCode": [
                "018:001"
            ], 
            "publisher": {
                "@type": "org:Organization",
                "name": "Widget Services", 
                "subOrganizationOf": {
                    "@type": "org:Organization",
                    "name": "Office of Widget Statistics"                    
                }
            }, 
            "references": [
                "https://agency.gov/docs/widgets-1.html", 
                "https://agency.gov/docs/widgets-2.html"
            ], 
            "rights": "This dataset cannot be made public because it includes trade secrets and commercial or financial information obtained from a person and is privileged or confidential.", 
            "spatial": "United States", 
            "systemOfRecords": "http://www.agency.gov/widgets/sorn/", 
            "temporal": "2009-09-01T12:00:00Z/2010-05-31T12:00:00Z", 
            "theme": [
                "manufacturing"
            ], 
            "title": "U.S. Widget Statistics for [[REDACTED-EX B4]]"
        }
    ]
}
~~~
