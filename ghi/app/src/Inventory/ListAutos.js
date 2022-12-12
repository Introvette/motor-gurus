import React from 'react'


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
      <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Color </th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
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
