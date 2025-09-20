import React from 'react'
import PriceCards from '../components/PriceCards'
import ProjectionChart from '../components/charts/ProjectionChart'
import RevenueLineChart from '../components/charts/RevenueLineChart'
import RevenueByLocationCard from '../components/charts/RevenueByLocationCard'
import Products from '../components/Products'
import SalesChart from '../components/charts/SalesChart'

function Dashboard() {
  return (
   <div className='flex '>    
    <div className="mx-auto w-full py-5 px-3 space-y-[28px]">
      <div className='grid grid-cols-1 md:grid-cols-2 space-x-[28px]'>
        <div>
          <PriceCards/>
        </div>
        <div >
          <ProjectionChart/>
        </div>
        
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 space-x-[28px]'>
        <div className='col-span-2'>
          <RevenueLineChart/>
        </div>
        <div className='col-span-1'>
          <RevenueByLocationCard/>
        </div>     
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 space-x-[28px] items-center'>
        <div className='col-span-2'>
          <Products/>
        </div>
        <div className='col-span-1'>
          <SalesChart/>
        </div>     
      </div>
    </div>
   
  </div>

  )
}

export default Dashboard
