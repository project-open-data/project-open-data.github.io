import base64
import json


def find_topic(dataset):
    for distribution in dataset['distribution']:
        if distribution['format'] == 'topic':
            return distribution['title']
    return None


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
                                'topic': '$(ref.'+find_topic(dataset)+'.name)',
                                'subscription': distribution['title']
                            }
                    }
                )

    return {'resources': resources}
