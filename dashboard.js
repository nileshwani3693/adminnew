import React from 'react'
import Sidebar from './sidebar'
import "./dashboard-styling.css"
import Link from "react-router-dom"

 const Dashboard = () => {
    return (
        <>
        <div>
            <Sidebar/>
        </div>
        <div>
            <h1 className='dashbordtitle'>
                Dashboard
            </h1>
        </div>
        <div className='dashboardsummery'>
        <div className='dashboardsummerydiv'>
            <p className='dashboardsummerydivp'>
                Total Amount
            </p >
            <p className='dashboardsummerydivp'>
                50
            </p>

            <div>
                <p>
                    Product
                </p>
                <p>50</p>
                <p>Order</p>
                <p>4</p>
                <p>User</p>
                <p>3</p>
            </div>

        </div>
        </div>
    

        </>
    )
}

export default Dashboard