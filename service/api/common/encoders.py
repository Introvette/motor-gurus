from service_rest.models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "owner",
        "date",
        "time",
        "technician",
        "reason",
        "finished",
        "canceled",
        "vip",
        "id",
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }
