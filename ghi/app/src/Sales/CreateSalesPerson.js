import React, { useState } from 'react';
import "./FormSales.css"

function CreateSalesPerson() {
    const [sales_person, setSalesPerson] = useState('');
    const [employee_number, setEmployeeNumber] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            sales_person: sales_person,
            employee_number: employee_number,

        }

        const salesPersonUrl = "http://localhost:8090/api/salespeople/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesPersonUrl, fetchConfig);

        if (response.ok) {
            const sales_person = await response.json();

            setSalesPerson('');
            setEmployeeNumber('');
        }
    }

    return (
        <body>
            <h1 className='title'>Add a Sales Person</h1>
            <div className="form-container-salesperson">
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='p-4 mt-4'>
                    <form onSubmit={handleSubmit} id='-create-hats'>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='sales_person' placeholder='Sales Person' value={sales_person} onChange={e => setSalesPerson(e.target.value)} />
                            <label htmlFor='sales_person'>Sales Person</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='employee_number' placeholder='Employee Number' value={employee_number} onChange={e => setEmployeeNumber(e.target.value)} />
                            <label htmlFor='employee_number'>Employee Number</label>
                        </div>
                        <button type='submit' className='btn btn-primary' style={{backgroundColor: "black", borderColor: "white"}}>Create</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </body>
    );

}

export default CreateSalesPerson;
