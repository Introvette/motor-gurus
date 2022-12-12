from django.shortcuts import render
from .models import Autosale, AutomobileVO, Customer, Salesperson
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.encoders import (
    SalespersonDetailEncoder,
    SalespersonListEncoder,
    CustomerDetailEncoder,
    CustomerListEncoder,
    AutosaleDetailEncoder,
    AutosaleListEncoder,
)
from django.db import IntegrityError


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all().order_by("employee_number")
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonDetailEncoder,
                safe=False,
            )
        except IntegrityError as e:
            print(e)
            return JsonResponse(
                {"message": "Employee number already exists"},
                status=400,
            )


@require_http_methods(["GET"])
def show_salesperson(request, pk):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder=SalespersonDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers}, encoder=CustomerListEncoder)
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def list_autosales(request):
    if request.method == "GET":
        autosales = Autosale.objects.all()
        return JsonResponse({"autosales": autosales}, encoder=AutosaleListEncoder)
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400,
            )
        try:
            salesperson = content["sales_person"]
            content["sales_person"] = Salesperson.objects.get(id=salesperson)

        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson name"},
                status=400,
            )
        try:
            customer = Customer.objects.get(customer=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer name"})

        autosale = Autosale.objects.create(**content)

        return JsonResponse(
            autosale,
            encoder=AutosaleDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_autosale(request, pk):

    count, _ = Autosale.objects.filter(id=pk).delete()
    return JsonResponse({"deleted": count > 0})
