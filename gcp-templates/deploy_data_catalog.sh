#!/bin/sh

if [ -z "${3}" ]
then
    echo "Usage: $0 <deployment_name> <data_catalog_file> <project_id>"
    exit 1
fi

deployment_name="${1}"
data_catalog="${2}"
project_id="${3}"

gcp_template=$(mktemp ${deployment_name}XXXXX.py)

{
    echo "catalog = \\"
    cat ${data_catalog}
    cat <<EOF


def find_topic(dataset):
    for distribution in dataset['distribution']:
        if distribution['format'] == 'topic':
            return distribution['title']
    return None


def generate_config(context):
    resources = []

    for dataset in catalog['dataset']:
        for distribution in dataset['distribution']:

            if distribution['format'] == 'blob-storage':
                blob_def = {
                        'name': distribution['title'],
                        'type': 'storage.v1.bucket'
                    }
                if 'deploymentZone' in distribution:
                    blob_def['properties'] = {
                        'location': distribution['deploymentZone']
                    }
                resources.append(blob_def)
            if distribution['format'] == 'topic':
                resources.append(
                    {
                        'name': distribution['title'],
                        'type': 'pubsub.v1.topic',
                        'properties': 
                            {
                                'topic': distribution['title']
                            }
                    }
                )
            if distribution['format'] == 'subscription':
                resources.append(
                    {
                        'name': distribution['title'],
                        'type': 'pubsub.v1.subscription',
                        'properties': 
                            {
                                'topic': '\$(ref.'+find_topic(dataset)+'.name)',
                                'subscription': distribution['title']
                            }
                    }
                )

    return {'resources': resources}
EOF
} > ${gcp_template}

gcloud deployment-manager deployments create ${deployment_name} --template=${gcp_template} --project=${project_id}

