// import React from 'react';

// class CreateCustomer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         customer: '',
//         address: '',
//         phone: '',
//     };
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleAddressChange = this.handleAddressChange.bind(this);
//     this.handlePhoneChange = this.handlePhoneChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = {...this.state};
//     console.log(data);
//     const customerUrl = 'http://localhost:8090/api/customers/';
//     const fetchConfig = {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//     },
//     };
//     const customerResponse = await fetch(customerUrl, fetchConfig);
//       if (customerResponse.ok) {
//         this.setState({
//           customer: '',
//           address: '',
//           phone: '',
//         });
//       }
//   }

//   handleNameChange(event) {
//     const value = event.target.value;
//     this.setState({customer: value})
//   }

//   handleAddressChange(event) {
//     const value = event.target.value;
//     this.setState({address: value})
//   }

//   handlePhoneChange(event) {
//     const value = event.target.value;
//     this.setState({phone: value})
//   }


//   render () {
//     return (
//       <>
//       <div className="row">
//       <div className="offset-3 col-6">
//       <div className="shadow p-4 mt-4">
//         <h1>Create a new customer</h1>
//           <form onSubmit={this.handleSubmit} id="create-customer-form">
//             <div className="form-floating mb-3">
//               <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="customer" id="customer" className="form-control" value={this.state.customer}/>
//               <label htmlFor="customer">Name</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={this.state.address} />
//                 <label htmlFor="address">Address</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input onChange={this.handlePhoneChange} placeholder="Phone Number" required type="text" name="phone" id="phone" className="form-control" value={this.state.phone} />
//                 <label htmlFor="phone">Phone Number</label>
//             </div>
//             <button className="btn btn-primary">Create</button>
//           </form>
//       </div>
//       </div>
//       </div>
//       </>
//         );
//     }
// }

// export default CreateCustomer;

import React, { useState } from 'react';

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
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Add a Customer</h1>
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
                        <button type='submit' className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CreateCustomer;
