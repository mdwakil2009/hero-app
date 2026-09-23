import Image from "next/image";
import Link from "next/link";
import { TApp } from "@/type/Apps.type";

import { FaStar, FaRegComment, FaDownload } from "react-icons/fa";
import { MdStorage } from "react-icons/md";

interface AppCardProps {
  app: TApp;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* App Image + Title */}
      <div className="flex items-center gap-4">

        {/* App Icon */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-base-200 shadow-sm">
          <Image
            src={app.image}
            alt={app.title}
            fill
            sizes="80px"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title + Company */}
        <div className="min-w-0">
          <h2 className="line-clamp-2 text-lg font-bold">
            {app.title}
          </h2>

          <p className="mt-1 line-clamp-1 text-sm text-base-content/60">
            {app.companyName}
          </p>
        </div>

      </div>

      {/* Rating + Reviews */}
      <div className="mt-5 flex items-center gap-4">

        {/* Rating */}
        <div className="flex items-center gap-1">
          <FaStar
            size={14}
            className="text-yellow-400"
          />

          <span className="font-semibold">
            {app.ratingAvg}
          </span>
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-1 text-sm text-base-content/50">
          <FaRegComment size={14} />

          <span>
            {app.reviews}
          </span>
        </div>

      </div>

      {/* Downloads + Size */}
      <div className="mt-3 flex items-center gap-5 text-sm text-base-content/60">

        {/* Downloads */}
        <div className="flex items-center gap-1">
          <FaDownload size={14} />

          <span>
            {app.downloads}
          </span>
        </div>

        {/* Size */}
        <div className="flex items-center gap-1">
          <MdStorage size={16} />

          <span>
            {app.size} MB
          </span>
        </div>

      </div>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-base-content/60">
        {app.description}
      </p>

      {/* Button */}
      <div className="mt-5">
        <Link
          href={`/apps/${app.id}`}
          className="btn btn-primary w-full rounded-xl"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default AppCard;