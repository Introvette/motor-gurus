# MotorGurus

Team:

* Yvette Rosario - Sales
* Celeste Villar - Service

## Design

We are polling automobiles from the inventory to our individual microservices by creating automobile value objects.
In the inventory you can create a manufacturer, to create a model, to then create a vehicle with a unique identifier which is the vin number.

### Tech used:
Framework- Django
Languages- Python, JavaScript, HTML, CSS

### Deliverables:
- Can create and view inventory of automobiles
- Can create and view scheduled, and finished appointments
- Can create and view technician employees
- Can create and view automobile sales

### Try it out!
To interact this application on your local machine, please make sure to follow these steps:

- Clone the repository down to your local machine

- Open your docker app

- Run these commands in order:
    - docker volume create beta-data
    - docker compose build
    - docker compose up

- In your web browser visit http://localhost:3000
- Be sure to stop and delete the containers afterwards :)
