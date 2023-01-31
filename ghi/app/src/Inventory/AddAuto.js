import React from 'react';
import "./FormInventory.css";

class NewAutomobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableModels: [],
            allModels: [],
            manufacturers: [],
            color: "",
            year: "",
            vin: "",
            picture: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.allModels;
        delete data.manufacturer;
        delete data.manufacturers;
        delete data.availableModels;

        const url = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const cleared = {
                color: "",
                manufacturer: "",
                model_id: "",
                vin: "",
                year: "",
                picture:""
            }
            this.setState(cleared);
        } else {
            console.error("invalid request")
        }
    }



    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value.toUpperCase()});
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year: value});
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value});
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({model_id: value});
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value});
        const filteredModels = this.state.allModels.filter(model => {
            return model.manufacturer.id == value
        })
        this.setState({availableModels: filteredModels})
    }
    handlePictureChange(event) {
        const value = event.target.value;
        this.setState({picture: value});
    }

    async componentDidMount() {

        const modelUrl = "http://localhost:8100/api/models/";
        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";

        const modelResponse = await fetch(modelUrl);
        const manufacturerResponse = await fetch(manufacturerUrl);

        if (modelResponse.ok && manufacturerResponse.ok) {
            const models = await modelResponse.json();
            const manufacturers = await manufacturerResponse.json();
            this.setState({
                allModels: models.models,
                manufacturers: manufacturers.manufacturers,
            });
        } else {
            console.error("invalid request")
        }
    }

    render() {
        return (
            <body>
            <div className='form-container2'>
                <div className="offset-3 col-6">
                    <div className="p-3 mt-3">
                     <h1>Add an automobile to inventory</h1>
                        <form onSubmit={this.handleSubmit} id="newAutomobileForm">
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control" required type="text"
                                    onChange={this.handleColorChange} id="color"
                                    name="color" value={this.state.color}
                                    placeholder="color"
                                />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control" required type="number"
                                    max="2023" min="1905" onChange={this.handleYearChange}
                                    id="year" name="year" value={this.state.year}
                                />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control" required type="text"
                                    onChange={this.handlePictureChange} id="picture"
                                    name="picture" value={this.state.picture}
                                    placeholder="picture"
                                />
                                <label htmlFor="picture">Image</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control" required type="text"
                                    maxLength={17} minLength={17} id="vin" name="vin"
                                    onChange={this.handleVinChange} placeholder="vin"
                                    value={this.state.vin}
                                />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    className="form-select2" required id="manufacturer"
                                    name="manufacturer" value={this.state.manufacturer}
                                    placeholder="manufacturer" onChange={this.handleManufacturerChange}
                                >
                                    <option value="">Choose a manufacturer</option>
                                    {this.state.manufacturers.map(manufacturer => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>
                                                {manufacturer.name}
                                            </option>
                                        )
                                    })}
                                </select>

                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    className="form-select2" required id="model_id"
                                    name="model_id" value={this.state.model_id}
                                    placeholder="model_id" onChange={this.handleModelChange}
                                >
                                    <option value="">Choose a model</option>
                                    {this.state.availableModels
                                    .map(model => {
                                        return (
                                            <option key={model.id} value={model.id}>
                                                {model.name}
                                            </option>
                                        )
                                    })}
                                </select>

                            </div>
                            <button className="btn btn-primary" style={{backgroundColor: "black", borderColor: "white"}}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}

export default NewAutomobile;
