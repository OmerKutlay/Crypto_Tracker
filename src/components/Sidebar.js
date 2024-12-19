import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <Link to="/"><i className="fa-solid fa-server"></i>
          Dashboard
        </Link>
        <Link to="/exchanges"><i className="fa-solid fa-chart-line"></i>
        Exchanges
        </Link>
      </aside>
    )
  }
}
