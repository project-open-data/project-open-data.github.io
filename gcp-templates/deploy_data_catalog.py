import base64
import json


def generate_config(context):
    catalog = json.loads(base64.b64decode(context.properties['data_catalog']))
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
