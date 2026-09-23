"use client";

import { AppContext } from "@/context/AppContext";
import { TApp } from "@/type/Apps.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({app}:{app:TApp}) => {
  const {installedApps, setInstalledApps} = useContext(AppContext)
  console.log('data ',installedApps , setInstalledApps )
  const handelInstall = () => {
    console.log("Install Button triggerd", app);
    setInstalledApps([...installedApps,app]) 
    toast.success(`${app.title} installed successfully`)
  };
  return (
    <div>
      <button className="btn btn-primary px-10" onClick={() => handelInstall()}>
        Install
      </button>
    </div>
  );
};

export default InstallAppButton;
