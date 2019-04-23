#!/bin/sh

if [ -z "${3}" ]
then
    echo "Usage: $0 <deployment_name> <data_catalog_file> <project_id>"
    exit 1
fi

deployment_name="${1}"
data_catalog="${2}"
project_id="${3}"

gcp_template=$(mktemp)

{
    echo "catalog = \\"
    cat ${data_catalog}
    cat <<EOF


def generate_config(context):
    resources = []

    for dataset in catalog['dataset']:
        for distribution in dataset['distribution']:

            if distribution['format'] == 'blob-storage':
                resources.append(
                    {
                        'name': distribution['title'],
                        'type': 'storage.v1.bucket'
                    }
                )

    return {'resources': resources}
EOF
} > ${gcp_template}

gcloud deployment-manager deployments create ${deployment_name} --template=${gcp_template} --project=${project_id}

