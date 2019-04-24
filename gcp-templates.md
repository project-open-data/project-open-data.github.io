---
layout: default
title: Project Company Data GCP Deployment Templates
permalink: gcp-templates/
filename: glossary.md
---

## 1. Google Cloud Platform Deployment 

The Google Cloud Platform (GCP) provides the Deployment Manager to deploy resources to the platform. The Project Company Data schema can be used
to deploy some types of dataset distribution formats using the GCP Deployment Manager. This will result in empty dataset distribution storage location,
(e.g. a blob storage) ready to receive the actual data.
 
The deployment is done using a GCP Deployment Manager template (see [Creating a basic template](https://cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template))
for more details. The template [deploy_data_catalog.py](gcp-templates/deploy_data_catalog.py) can be used to deploy Project Company Data Schemas.
It will iterate all distributions in the specified catalog, returning a set of resources to be created by GCP Deployment Manager.
A basic example deploying the storage locations in a catalog:
```bash
$ gcloud deployment-manager deployments create my-catalog-deployment \ 
    --template https://vwt-digital.github.io/project-company-data.github.io/gcp-templates/deploy_data_catalog.py \
    --properties data_catalog:$(base64 -w0 data_catalog.json)

```
This example creates a GCP deployment named _my-catalog-deployment_ from the template hosted on the Project Company Data website.
The data_catalog.json file is a local file containing the Project Company Data [catalog](v1.1/schema/catalog.json). It is base64 encoded and then passed as a 
property to the GCP deployment template.

If temp file creation is possible in the deployment, then the [deploy_data_catalog.sh](gcp-templates/deploy_data_catalog.sh) shell script can be used. 
This script requires three parameters: the name of the deployment, the filename of the file containing the catalog and the id of the project to deploy to.
An example deploying a catalog using this shell script:
```bash
$ deploy_data_catalog.sh my-catalog-deployment data_catalog.json my-gcp-project
```
This will create a GCP deployment named _my-catalog-deployment_ deploying the distributions specified in the _data_catalog.json_ file in the GCP project _my-gcp-project_. 

## 2. Supported storage formats

The format specified by the [format](schema/#distribution-format) member of the dataset. By setting the value of this member
to one of the formats in the below table, the corresponding resource will be created.
The following table also shows the storage formats that are supported by the GCP deploy_data_catalog template. 

{: .table .table-striped}
Format                             | GCP resource
--------------                     | --------------                                                                                                                      
blob-storage                       | Storage bucket
topic                              | Pubsub topic
subscription                       | Pubsub subscription            
