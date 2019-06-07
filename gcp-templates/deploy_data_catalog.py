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


resource_odrl_policy_bindings = {
    'blob-storage': {
        'read': [
            'roles/storage.legacyBucketReader',
            'roles/storage.legacyObjectReader'
        ],
        'write': [
            'roles/storage.legacyBucketWriter',
            'roles/storage.legacyObjectOwner'
        ],
        'modify': [
            'roles/storage.legacyBucketOwner',
            'roles/storage.legacyObjectOwner'
        ]
    },
    'topic': {
        'read': [
            'roles/pubsub.subscriber'
        ],
        'write': [
            'roles/pubsub.publisher'
        ],
        'modify': [
            'roles/pubsub.editor'
        ]
    },
    'subscription': {
        'read': [
            'roles/pubsub.subscriber'
        ],
        'write': [],
        'modify': []
    }
}


def gather_odrl_policy_roles_to_add(resource_format, action):
    if resource_format in resource_odrl_policy_bindings:
        return resource_odrl_policy_bindings[resource_format].get(action, [])
    else:
        return []


def gather_permissions(access_level, resource_title, resource_format, project_id, odrlPolicy):
    bindings_per_level = resource_default_policy_bindings.get(resource_format, None)
    bindings = None

    if bindings_per_level:
        bindings = bindings_per_level[access_level]

    if odrlPolicy is not None:
        for permission in [p for p in odrlPolicy.get('permission', []) if p.get('target', '') == resource_title]:
            for role_to_add in gather_odrl_policy_roles_to_add(resource_format, permission['action']):
                if not bindings:
                    bindings = []
                binding = next((b for b in bindings if b['role'] == role_to_add), None)
                if not binding:
                    binding = {
                        'role': role_to_add,
                        'members': []
                    }
                    bindings.append(binding)
                if not permission['assignee'] in binding['members']:
                    binding['members'].append(permission['assignee'])

    if bindings is not None:
        for binding in bindings:
            binding['members'] = [member.format(project_id = project_id) for member in binding['members']]

        return bindings
    else:
        return None


def append_gcp_policy(resource, resource_title, resource_format, access_level, project_id, odrlPolicy):
    permissions = gather_permissions(access_level, resource_title, resource_format, project_id, odrlPolicy)
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
                    resource_to_append['properties'].update({
                        'location': distribution['deploymentZone']
                    })
                if 'accessLevel' in dataset:
                    resource_to_append['properties'].update({
                        'iamConfiguration': {
                            'bucketPolicyOnly': {'enabled': True}
                        }
                    })
            if distribution['format'] == 'topic':
                resource_to_append = {
                    'name': distribution['title'],
                    'type': 'pubsub.v1.topic',
                    'properties':
                        {
                            'topic': distribution['title']
                        }
                }
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


            if resource_to_append:
                if 'accessLevel' in dataset:
                    append_gcp_policy(resource_to_append, distribution['title'], distribution['format'], dataset['accessLevel'], 
                                      context.env['project'], dataset.get('odrlPolicy'))
                resources.append(resource_to_append)

    return {'resources': resources}
