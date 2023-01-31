import React from "react";
import "./FormInventory.css";

class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            this.setState({
                name: "",
            });
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    render() {
        return (
            <body>
                <div className="form-container4">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="p-4 mt-4">
                        <h1>Create a manufacturer</h1>
                        <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange} placeholder="Name" value={this.state.name} required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <button className="btn btn-primary" style={{backgroundColor: "black", borderColor: "white"}}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </body>
        );
    }

}

export default ManufacturerForm;
