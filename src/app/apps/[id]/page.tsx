import { TApp } from "@/type/Apps.type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllApps } from "@/lib/apps";
import InstallAppButton from "@/components/InstallAppButton";

interface TAppDetailsProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams(){
 const allApps = await getAllApps()
 return allApps.map((app:TApp)=>{
  console.log(app.id)
  return {id:app.id.toString()}
 })
}

const AppDetails = async ({ params }: TAppDetailsProps) => {
  const { id } = await params;

  const allApps = await getAllApps();

  const app = allApps.find((app: TApp) => app.id === Number(id));

  if (!app) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/apps" className="btn btn-ghost">
          ← Back to Apps
        </Link>
      </div>

      {/* Main Card */}
      <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-10">
        {/* App Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* App Image */}
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl bg-base-200 shadow-md">
            <Image
              src={app.image}
              alt={app.title}
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          {/* App Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold md:text-4xl">{app.title}</h1>

            <p className="mt-2 text-base text-base-content/60">
              {app.companyName}
            </p>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="text-lg text-yellow-400">★</span>

                <span className="font-semibold">{app.ratingAvg}</span>
              </div>

              <div className="text-base-content/60">{app.reviews} reviews</div>

              <div className="text-base-content/60">
                {app.downloads} downloads
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-6">
              {/* <button className="btn btn-primary px-10">Install</button> */}
              <InstallAppButton app={app}></InstallAppButton>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-base-300"></div>

        {/* App Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Rating */}
          <div className="rounded-2xl bg-base-200 p-5 text-center">
            <p className="text-sm text-base-content/60">Rating</p>

            <p className="mt-2 text-2xl font-bold">⭐ {app.ratingAvg}</p>
          </div>

          {/* Reviews */}
          <div className="rounded-2xl bg-base-200 p-5 text-center">
            <p className="text-sm text-base-content/60">Reviews</p>

            <p className="mt-2 text-2xl font-bold">{app.reviews}</p>
          </div>

          {/* Downloads */}
          <div className="rounded-2xl bg-base-200 p-5 text-center">
            <p className="text-sm text-base-content/60">Downloads</p>

            <p className="mt-2 text-2xl font-bold">{app.downloads}</p>
          </div>

          {/* Size */}
          <div className="rounded-2xl bg-base-200 p-5 text-center">
            <p className="text-sm text-base-content/60">Size</p>

            <p className="mt-2 text-2xl font-bold">{app.size} MB</p>
          </div>
        </div>

        {/* About App */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">About this app</h2>

          <p className="mt-4 max-w-4xl text-base leading-7 text-base-content/70">
            {app.description}
          </p>
        </div>

        {/* Ratings & Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Ratings & Reviews</h2>

          <div className="mt-6 max-w-2xl space-y-4">
            {app.ratings.map((rating:{name:string , count:number}) => {
              const totalRatings = app.ratings.reduce(
                (total:number, item:{name:string , count:number}) => total + item.count,
                0,
              );

              const percentage =
                totalRatings > 0 ? (rating.count / totalRatings) * 100 : 0;

              return (
                <div key={rating.name} className="flex items-center gap-4">
                  {/* Rating Name */}
                  <span className="w-14 text-sm font-medium">
                    {rating.name}
                  </span>

                  {/* Progress Bar */}
                  <progress
                    className="progress progress-primary h-3 flex-1"
                    value={percentage}
                    max="100"
                  ></progress>

                  {/* Count */}
                  <span className="w-20 text-right text-sm text-base-content/60">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
