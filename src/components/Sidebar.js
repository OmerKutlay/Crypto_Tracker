import {Link} from "react-router-dom";
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="logo">
            <h2>LOGO</h2>
        </div>
        <Link to="/">Dashboard</Link>
        <Link to="/exchanges">Exchanges</Link>
      </aside>
    )
  }
}
