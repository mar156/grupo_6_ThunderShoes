import React, { Component } from 'react';
import TotalAmountPanel from './components/totalamountpanel/TotalAmountPanel'
import BigPanel from './components/bigpanel/BigPanel'
import Category from './components/Category'
import DetailPanel from './components/DetailPanel'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        metrics: [],
        categories: []
    }
  }

  componentDidMount(){

    let promises = [
      fetch("http://localhost:3000/api/products").then(result => result.json()),
      fetch("http://localhost:3000/api/users").then(result => result.json())
    ];

    Promise.all(promises)
    .then(result => {

      let products = result[0];
      let users = result[1]
      
      let totalBrands = result[0].data.countByBrand.totalBrands; 

      this.setState({
        categories: Object.keys(products.data.countByCategory),
        metrics: [
        {
          title: "Total de productos",
          color: "primary",
          iconClass: "fa-clipboard-list",
          value: products.meta.count
        },
        {
          title: "Total de usuarios",
          color: "success",
          iconClass: "fa-dollar-sign",
          value: users.meta.count
        },
        {
          title: "Total de marcas",
          color: "danger",
          iconClass: "fa-dollar-sign",
          value: totalBrands
        }
        ]
      })

    })

  }

  componentDidUpdate(){}

  render(){ 
    return (
      <div id="wrapper">
      {/* Sidebar */}
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line" />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Actions</div>
        {/* Nav Item - Pages */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span></a>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Alerts */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                  <i className="fas fa-bell fa-fw" />
                  {/* Counter - Alerts */}
                  <span className="badge badge-danger badge-counter">3+</span>
                </a>
              </li>
              {/* Nav Item - Messages */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                  <i className="fas fa-envelope fa-fw" />
                  {/* Counter - Messages */}
                  <span className="badge badge-danger badge-counter">7</span>
                </a>
              </li>
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                  <img className="img-profile rounded-circle" src="images/dummy-avatar.jpg" alt="profile-pic-avatar" width={60} />
                </a>
              </li>
            </ul>
          </nav>
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            {/* Content Row */}
            <div className="row">

              { this.state.metrics ?
              this.state.metrics.map((metric,index) =>
                <TotalAmountPanel 
                title = {metric.title}
                color = {metric.color}
                iconClass = {metric.iconClass}
                value = {metric.value}
                key = { index }
                />
              ) 
              :
                <p> Cargando métricas </p>
              }
  
            </div>
            {/* Content Row */}
            <div className="row">
              {/* Last Product in DB */}
              <BigPanel title={"Último producto cargado"}> 
                  <DetailPanel />
              </BigPanel>
  
              {/* Categories in DB */}
              <BigPanel title={"Categorías"}>
              <div className="row">
                {
                  this.state.categories.length ? this.state.categories.map( (category, i) => 
                    <Category 
                      category= {category}
                      key = {i}
                    />
                  ) : <p> Cargando categorías </p>
                }
              </div>
              </BigPanel>
              
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Dashboard 2020</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </div>
    
    );
  }
}


export default App;
