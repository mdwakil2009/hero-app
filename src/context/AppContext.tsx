"use client"
import { TApp } from '@/type/Apps.type';
import React, {  createContext, ReactNode, SetStateAction, useState } from 'react';
type TappContext ={
 installedApps:TApp[]
 setInstalledApps:React.Dispatch<React.SetStateAction<TApp[]>>
}


 export const AppContext = createContext<TappContext>({
     installedApps:[],
     setInstalledApps:()=>{}
})

const AppProvider= ({children}:{children:ReactNode}) => {
     const [installedApps , setInstalledApps] = useState<TApp[]>([])

     const sharedData ={
          installedApps,
          setInstalledApps
     }
     return (
          <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
     );
};

export default AppProvider;