import AppCard from '@/components/shared/AppCard';
import { getAllApps } from '@/lib/apps';
import { TApp } from '@/type/Apps.type';
import React from 'react';


const AllPage = async() => {
     const data = await getAllApps()
     console.log('data', data)

     
     return (
          <div className='bg-gray-200'>    
          <div className='container mx-auto my-[80] '>
               <div className="space-y-4 max-w-[400px] mx-auto text-center ">
        <h2 className="font-semibold text-4xl">All Apps</h2>

        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* Apps */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((app: TApp, ind: number) => {
          return <AppCard key={ind} app={app}></AppCard>;
        })}
      </div>
          </div>
          </div>
     );
};

export default AllPage;