import React from 'react'
import Cards from './cards/Cards';
import ProjectionsVsActualsChart from './ProjectionsVsActualsChart';
import RevenueChart from './RevenueChart';
import RevenueByLocation from './RevenueByLocation';
import TotalSales from './TotalSales';
import TopSellingProducts from './TopSellingProducts';
import OrderTable from './OrderTable';

const Graphs = () => {
  return (
    <div style = {{margin: "28px"}}>
      <div style = {{padding: "4px 8px", margin: "16px 0"}}>
        <p style = {{ fontSize: "14px", fontWeight: "600", lineHeight: "20px" }}>eCommerce</p>
      </div>
      <div style = {{display: "flex", flexDirection: "row", gap:"28px"}}>
        <Cards/>
        <ProjectionsVsActualsChart />
      </div>
      <div style = {{display: "flex", flexDirection: "row", gap:"28px"}}>
        <RevenueChart />
        <RevenueByLocation />
      </div>
      <div style = {{display: "flex", flexDirection: "row", gap:"28px"}}>
        <TopSellingProducts />
        <TotalSales />
      </div>
    </div>
  )
}

export default Graphs;
