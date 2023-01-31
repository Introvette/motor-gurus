import { useState, useEffect } from 'react';
import "./inventorylists.css";


function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([])
    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/')
        const data = await response.json()
        setManufacturers(data.manufacturers)
    }
    useEffect(() => {
        getData();
    }, []
    )

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{backgroundColor: "white"}}>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ManufacturerList;
