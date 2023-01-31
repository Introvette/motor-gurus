import React from 'react'
import "./sales.css"


class ListSales extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autosales: [],
    }
    this.getSale = this.getSale.bind(this)
  }


  async getSale() {
    const saleURL = 'http://localhost:8090/api/autosales/'
    try {
      const Respnse = await fetch(saleURL)
      if (Respnse.ok) {
        const Data = await Respnse.json()
        this.setState({
            autosales: Data.autosales,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  async componentDidMount() {
    this.getSale()
  }

  render () {
    return (
      <table className="styled-table">
      <thead >
        <tr>
          <th style={{backgroundColor: "white"}}>Sale Person</th>
          <th style={{backgroundColor: "white"}}>Employee Number</th>
          <th style={{backgroundColor: "white"}}>Customer</th>
          <th style={{backgroundColor: "white"}}>Price</th>
          <th style={{backgroundColor: "white"}}>VIN</th>
        </tr>
      </thead>
      <tbody>
       {this.state.autosales.map(sale => {
        return (
          <tr key={sale.id}>
            <td>{sale.sales_person.sales_person}</td>
            <td>{sale.sales_person.employee_number}</td>
            <td>{sale.customer.customer}</td>
            <td>{"$" + sale.price}</td>
            <td>{sale.automobile.vin}</td>
          </tr>
        )
       })}
      </tbody>
    </table>
    )
  }
}
export default ListSales
