# CarCar

Team:

* Yvette Rosario - Sales
* Celeste Villar - Service

## Design

We are polling automobiles from the inventory to our individual microservices by creating automobile value objects.
In the inventory you can create a manufacturer, to create a model, to then create a vehicle with a unique identifier which is the vin number.

## Sales microservice

The goal for the sales microservice is to track customer, sales represetative, and automobile sales data.
By polling automobiles from the inventory microservice, the application allows you to add a sale to the database with automobiles from the inventory.

For our customer model we collect the customers name, address, and phone number.
For our automobile value object model we are collecting the vin number, color, year, and status (sold or not) of the automobile.
For our sales person model we collect the employee's name and create an employee number that's unique to them.
For our sales model it is made up of the sales person, the customers name, the listing price of the automobile, and the vin number of the specific automobile.


## Services microservice

With the microservice we create a backend create appointments, list appointments, and a get appointments by vin. We also created a technician for the appointments model to use as a foreign key.
