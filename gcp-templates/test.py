import sys
from deploy_data_catalog import generate_config


class Context:
    def __init__(self):
        self.properties = {}

context = Context()
context.properties['data_catalog'] = sys.argv[1]
print(generate_config(context))
