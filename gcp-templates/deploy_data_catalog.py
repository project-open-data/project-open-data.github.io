import base64
import json


def find_topic(dataset):
    for distribution in dataset['distribution']:
        if distribution['format'] == 'topic':
            return distribution['title']
    return None


resource_default_policy_bindings = {
    'blob-storage': {
        'public': [
            {
                'role': 'roles/storage.legacyBucketOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectReader',
                'members': [
                    'projectViewer:{project_id}',
                    'allUsers'
                ]
            },
            {
                'role': 'roles/storage.legacyBucketReader',
                'members': [
                    'projectViewer:{project_id}',
                    'allUsers'
                ]
            }
        ],
        'internal': [
            {
                'role': 'roles/storage.legacyBucketOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectReader',
                'members': [
                    'projectViewer:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyBucketReader',
                'members': [
                    'projectViewer:{project_id}'
                ]
            }
        ],
        'restricted': [
            {
                'role': 'roles/storage.legacyBucketOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectOwner',
                'members': [
                    'projectEditor:{project_id}',
                    'projectOwner:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyObjectReader',
                'members': [
                    'projectViewer:{project_id}'
                ]
            },
            {
                'role': 'roles/storage.legacyBucketReader',
                'members': [
                    'projectViewer:{project_id}'
                ]
            }
        ],
        'confidential': [
        ]
    },
    'topic': {
        'public': None,
        'internal': None,
        'restricted': None,
        'confidential': None
    },
    'subscription': {
    }
}


def gather_permissions(access_level, resource_format, project_id):
    bindings_per_level = resource_default_policy_bindings.get(resource_format, None)
    bindings = None

    if bindings_per_level:
        bindings = bindings_per_level[access_level]

    if bindings is not None:
        for binding in bindings:
            binding['members'] = [member.format(project_id = project_id) for member in binding['members']]

        return bindings
    else:
        return None


def append_gcp_policy(resource, resource_format, access_level, project_id):
    permissions = gather_permissions(access_level, resource_format, project_id)
    if permissions is not None:
        resource['accessControl'] = {
            'gcpIamPolicy': {
                'bindings': permissions
            }
        }


def generate_config(context):
    catalog = json.loads(base64.b64decode(context.properties['data_catalog']))
    resources = []

    for dataset in catalog['dataset']:
        for distribution in dataset['distribution']:
            resource_to_append = None
            if distribution['format'] == 'blob-storage':
                resource_to_append = {
                        'name': distribution['title'],
                        'type': 'storage.v1.bucket'
                    }
                resource_to_append['properties'] = {}
                if 'deploymentZone' in distribution:
                    resource_to_append['properties'] = {
                        'location': distribution['deploymentZone']
                    }
                if 'accessLevel' in dataset:
                    bindings = gather_permissions(dataset['accessLevel'], distribution['format'], context.env['project'])
                    if bindings:
                        resource_to_append['properties'].update({
                            'iamConfiguration': {
                                #'bindings': bindings,
                                'bucketPolicyOnly': {'enabled': True}
                            }
                        })
                    append_gcp_policy(resource_to_append, distribution['format'], dataset['accessLevel'], context.env['project'])
            if distribution['format'] == 'topic':
                resource_to_append = {
                    'name': distribution['title'],
                    'type': 'pubsub.v1.topic',
                    'properties':
                        {
                            'topic': distribution['title']
                        }
                }
                if 'accessLevel' in dataset:
                    append_gcp_policy(resource_to_append, distribution['format'], dataset['accessLevel'], context.env['project'])
            if distribution['format'] == 'subscription':
                resource_to_append = {
                    'name': distribution['title'],
                    'type': 'pubsub.v1.subscription',
                    'properties':
                        {
                            'topic': '$(ref.'+find_topic(dataset)+'.name)',
                            'subscription': distribution['title']
                        }
                }
                if 'accessLevel' in dataset:
                    append_gcp_policy(resource_to_append, distribution['format'], dataset['accessLevel'], context.env['project'])

            if resource_to_append:
                resources.append(resource_to_append)

    return {'resources': resources}
