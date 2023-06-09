import React from 'react';
import { Link } from 'react-router-dom'
import "./inventorylists.css";

class VehicleModelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            models: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/models/"
        const response = await fetch(url)
        if (response.ok) {
            let data = await response.json();
            this.setState({ models: data.models })
        }
    }


    render() {
        return (
            <div>
                <h1 className="page-title">Vehicle Models</h1>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-right">
                    <Link to="/models/new/" className="btn btn-primary btn-md px-4 gap-3" style={{backgroundColor: "black", borderColor: "white"}}>Add new vehicle model</Link>
                </div>
                <p></p>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Name</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.models.map(model => {
                            return (
                                <tr key={model.id} className="active-row">
                                    <td>{model.manufacturer.name}</td>
                                    <td>{model.name}</td>
                                    <td><img style={{ height: "100px", width: "200px" }} src={model.picture_url} alt="" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VehicleModelList
