import React, { Component } from "react";
import "./Customers.css";

class Customers extends Component {
  state = {
    customers: []
  };
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers => this.setState({ customers }));
  }
  render() {
    return (
      <div>
        <h1>React + Express = ReactExpress</h1>
        <h2>
          <a href="/api/customers">Fake Data from ExpressAPI</a>
        </h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              <div>
                <img
                  src={customer.avatar}
                  alt={customer.firstName}
                  className="avatar"
                />
              </div>
              <div>
                {customer.firstName} {customer.lastName}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
