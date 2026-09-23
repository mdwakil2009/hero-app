"use client"
import AppCard from '@/components/shared/AppCard';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/type/Apps.type';
import React, { useContext } from 'react';

const InstallationPage = () => {
     const {installedApps} = useContext(AppContext)
     return (
                <div className='bg-gray-200'>    
          <div className='container mx-auto my-[80] '>
               <div className="space-y-4 max-w-[400px] mx-auto text-center ">
        <h2 className="font-semibold text-4xl">Installed Apps</h2>

        <p>Explore All existing Installed Trending Apps on the Market developed by us</p>
      </div>

      {/* Apps */}
      {installedApps.length>0 ?(
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  F      {installedApps.map((app: TApp, ind: number) => {
          return <AppCard key={ind} app={app}></AppCard>;
        })}
      </div>
      ):(
          <p className='text-center text-gray-600 font-bold text-4xl py-20'>No installed app found </p>

     )}
          </div>
          </div>
     );
};

export default InstallationPage;