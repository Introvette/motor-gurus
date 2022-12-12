from sales_rest.models import AutomobileVO, Salesperson, Customer, Autosale
from common.json import ModelEncoder

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "color", "year", "id"]

class AutomobileVOListEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "id"]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["id", "sales_person", "employee_number"]

class SalespersonDetailEncoder(ModelEncoder):
    model = Salesperson
    properties = ["id", "sales_person", "employee_number"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "customer", "address", "phone"]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "customer", "address", "phone"]

class AutosaleListEncoder(ModelEncoder):
    model = Autosale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer"
        ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
    }

class AutosaleDetailEncoder(ModelEncoder):
    model = Autosale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer"
        ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
    }
