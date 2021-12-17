import React from 'react'
import Sidebar from './sidebar'
import { Link } from "react-router-dom"

const Admindashboard = () => {
    return (
        <>

            {/* <Link to='/admindashboard/addproduct' className="nav-link active">
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" >Add Product</a>
                        </Link> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/dashboard" >
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Orders</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link to='/admindashboard/allproducts' className="nav-link active"><a class="dropdown-item" href="#">All Products</a></Link></li>
            <li>
            <Link to='/admindashboard/addproduct' className="nav-link active"><a class="dropdown-item" href="#">Add Product</a> </Link></li>
            <li><a class="dropdown-item" href="#">Delete Product</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>


        </>
    )
}

export default Admindashboard

