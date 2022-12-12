from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)
    color = models.CharField(max_length=50)
    year = models.IntegerField()

    def __str__(self):
        return self.vin

class Salesperson(models.Model):
    sales_person = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.sales_person

class Customer(models.Model):
    customer = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)

    def __str__(self):
        return self.customer

class Autosale(models.Model):
    price = models.FloatField()
    automobile = models.OneToOneField(
        AutomobileVO,
        related_name="autosales",
        on_delete=models.PROTECT
    )
    sales_person = models.ForeignKey(
        Salesperson,
        related_name="autosales",
        on_delete=models.PROTECT
    )
    customer = models.ForeignKey(
        Customer,
        related_name="autosales",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return (
            self.sales_person.sales_person
        )
