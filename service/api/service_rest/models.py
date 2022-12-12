from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"


class Technician(models.Model):
    name = models.CharField(max_length=100)
    id = models.PositiveSmallIntegerField(primary_key=True)

    def __str__(self):
        return f"{self.name}, {self.id}"


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    owner = models.CharField(max_length=100)
    date = models.CharField(max_length=200, null=False)
    time = models.CharField(max_length=200, null=False)
    technician = models.ForeignKey(
        Technician, related_name="appointments", on_delete=models.PROTECT
    )
    reason = models.CharField(max_length=200)
    finished = models.BooleanField(default=False)
    canceled = models.BooleanField(default=False)
    vip = models.BooleanField(default=False)


def get_api_url(self):
    return reverse("list_appointment", kwargs={"pk": self.pk})
