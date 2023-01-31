import React, { useState } from 'react';
import "./FormSales.css";

function CreateCustomer() {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');



    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            customer: customer,
            address: address,
            phone: phone
        }

        const customerUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customerUrl, fetchConfig);

        if (response.ok) {
            const customer = await response.json();

            setCustomer('');
            setAddress('');
            setPhone('');
        }
    }

    return (
<body>
        <h1 className='title'>Add a Customer</h1>
        <div className="form-container1">
        <div className='row'>
            <div className='offset-3 col-6'>
            <div className='p-4 mt-4'>
                    <form onSubmit={handleSubmit} id='-create-hats'>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='customer' placeholder='Customer' value={customer} onChange={e => setCustomer(e.target.value)} />
                            <label htmlFor='customer'>Customer</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='address' placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
                            <label htmlFor='address'>Address</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type='text' className='form-control' id='address' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                            <label htmlFor='phone'>Phone</label>
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

export default CreateCustomer;
