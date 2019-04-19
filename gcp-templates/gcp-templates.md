---
published: true
permalink: /
layout: hero
filename: gcp-templates.md
title: Project Company Data GCP Deployment Templates
---

## 1. Google Cloud Platform Deployment 

The Google Cloud Platform (GCP) provides the Deployment Manager to deploy resources to the platform. The Project Company Data schema can be used
to deploy some types of dataset distribution formats using the GCP Deployment Manager. This will result in empty dataset distribution storage location,
(e.g. a blob storage) ready to receive the actual data.
 
The deployment is done using a GCP Deployment Manager template (see [Creating a basic template](https://cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template))
for more details. A basic example deploying the storage locations in a catalog:
```bash
$ gcloud deployment-manager deployments create my-bucket-test \ 
    --template https://vwt-digital.github.io/project-company-data.github.io/gcp-templates/deploy_data_catalog.py \
    --properties data_catalog:$(base64 -w0 data_catalog.json)

```
This example creates a GCP deployment named _my_bucket_test_ from the template hosted on the Project Company Data website.
The data_catalog.json file is a local file containing the Project Company Data schema. It is base64 encoded and passes as a 
property to the GCP deployment template.

## 2. Supported storage formats

The format specified by the [format](schema/#distribution-format) member of the dataset. By setting the value of this member
to one of the formats in the below table, the corresponding resource will be created.
The following table also shows the storage formats that are supported by the GCP deploy_data_catalog template. 

{: .table .table-striped}
Format                                           | GCP resource
--------------                                   | --------------                                                                                                                      
blob-storage                                     | Storage bucket
