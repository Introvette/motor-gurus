import React from 'react'
import "./inventorylists.css";


class ListAutos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      automobiles: [],
    }
    this.getAutomobiles = this.getAutomobiles.bind(this)
  }


  async getAutomobiles() {
    const URL = 'http://localhost:8100/api/automobiles/'
    try {
      const Response = await fetch(URL)
      if (Response.ok) {
        const Data = await Response.json()
        this.setState({
          automobiles: Data.autos,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  async componentDidMount() {
    this.getAutomobiles()
  }


  render () {
    return (
      <div>
       <h2>Automobiles</h2>
      <table className="styled-table">
      <thead>
        <tr>
          <th style={{backgroundColor: "white"}}>VIN</th>
          <th style={{backgroundColor: "white"}}>Color </th>
          <th style={{backgroundColor: "white"}}>Year</th>
          <th style={{backgroundColor: "white"}}>Model</th>
          <th style={{backgroundColor: "white"}}>Manufacturer</th>
          <th style={{backgroundColor: "white"}}>Image</th>
        </tr>
      </thead>
      <tbody>
       {this.state.automobiles.map(auto => {
        return (
          <tr key={auto.id}>
            <td>{auto.vin}</td>
            <td>{auto.color}</td>
            <td>{auto.year}</td>
            <td>{auto.model.name}</td>
            <td>{auto.model.manufacturer.name}</td>
            <td>{auto.model.picture_url}</td>
          </tr>
        )
       })}
      </tbody>
    </table>
    </div>
    )
  }
}
export default ListAutos;
