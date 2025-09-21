import React from 'react'
import PriceCards from '../components/charts/PriceCards'
import ProjectionChart from '../components/charts/ProjectionChart'
import RevenueLineChart from '../components/charts/RevenueLineChart'
import RevenueByLocationCard from '../components/charts/RevenueByLocationCard'
import Products from '../components/Products'
import SalesChart from '../components/charts/SalesChart'

function Dashboard() {
  return (
   <div className='flex bg-white dark:bg-[#1C1C1C] p-[28px]'>    
    <div className="mx-auto w-full gap-y-[28px] flex flex-col">

      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[28px] md:gap-y-0 gap-x-[28px]'>
        <div className='mx-auto w-full'>
          <PriceCards/>
        </div>
        <div className='mx-auto w-full'>
          <ProjectionChart/>
        </div> 
      </div>


      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-[28px] md:gap-y-0 md:gap-x-[28px]'>
        <div className='col-span-3'>
          <RevenueLineChart/>
        </div>
        <div  className='col-span-1'>
          <RevenueByLocationCard/>
        </div>     
      </div>

       <div className='grid grid-cols-1 md:grid-cols-4 gap-y-[28px] md:gap-y-0 md:gap-x-[28px]'>
        <div className='col-span-3'>
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
