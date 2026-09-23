import { TApp } from "@/type/Apps.type";
import { json } from "stream/consumers";
import AppCard from "../shared/AppCard";
import { getAllApps } from "@/lib/apps";



const TrendingApp = async () => {
  const data = await getAllApps();
  console.log("data", data);

  return (
    <div className="container mx-auto my-[80px]">
      {/* Heading */}
      <div className="space-y-4 max-w-[400px] mx-auto text-center">
        <h2 className="font-semibold text-4xl">Trending Apps</h2>

        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* Apps */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 8).map((app: TApp, ind: number) => {
          return <AppCard key={ind} app={app}></AppCard>;
        })}
      </div>
    </div>
  );
};

export default TrendingApp;
