import sys
import json
from deploy_data_catalog import generate_config


class Context:
    def __init__(self):
        self.properties = {}
        self.env = {
            'project': 'my-gcp-project',
            'project_number': 1000
        }

context = Context()
context.properties['data_catalog'] = sys.argv[1]
print(json.dumps(generate_config(context)))
