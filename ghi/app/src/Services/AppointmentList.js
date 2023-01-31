import React from "react";
import { Link } from 'react-router-dom';
import "./Service.css"


class AppointmentList extends React.Component {
    constructor() {
        super();
        this.state = { appointments: [] };
    }


    async finishedAppointment(id) {
        const appointmentUrl = `http://localhost:8080/api/appointment/${id}/`;

        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify({ finished: true }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
            const finished = await response.json();
            this.componentDidMount();
        }
    }
    async cancelAppointment(id) {
        const appointmentUrl = `http://localhost:8080/api/appointment/${id}/`;

        const fetchConfig = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
            const deleted = await response.json();
            this.componentDidMount()
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/api/appointment/");
        if (response.ok) {
            const data = await response.json();
            const filterAppointments = data.appointments.filter(appointment => appointment.finished === false);
            this.setState({ appointments: filterAppointments });
        }
        else {
            console.error(response)
        }
    }


    render() {
        let appointmentHistory;
        if (this.state.appointments.length === 0) {
            appointmentHistory = <p>No appointments were found</p>
        } else {
            appointmentHistory =
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Reason</th>
                            <th>Technician</th>
                            <th style={{textAlign: "right"}}>Cancel</th>
                            <th style={{textAlign: "right"}}>Finished</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.owner}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.technician.name} / Technician ID: {appointment.technician.id} </td>
                                    {<td>
                                        <button className="btn btn-outline-danger" onClick={() => this.cancelAppointment(appointment.id)}>❌</button>
                                    </td>}
                                    {<td>
                                        <button className="btn btn-outline-success" style={{color: "green"}} onClick={() => this.finishedAppointment(appointment.id)}>✔</button>
                                    </td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        }
        return (
            <div className='container pt-5'>
                <h1 className="page-title">Service Appointments</h1>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
                    <Link to="/appointment/new" className="btn btn-success btn-lg px-4 gap-3" style={{backgroundColor: "black", borderColor: "white"}}>Schedule new appointment</Link>

                </div>
                {appointmentHistory}
            </div>
        )
    }
}


export default AppointmentList;
