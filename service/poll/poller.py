import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()


# Import models from hats_rest, here.
from service_rest.models import AutomobileVO

# from service_rest.models import Something


def get_automobile():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    print("====It's Polling!======", content)
    for automobile in content["automobile"]:
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"],
            defaults={
                "vin": automobile["vin"],
                "color": automobile["color"],
                "model": automobile["model"],
            },
        )


def poll():
    while True:
        print("Services poller polling for data")
        try:
            get_automobile()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
