const Loading = () => {
  return (
    <div className="container mx-auto my-[80px] px-4">

      {/* Heading Skeleton */}
      <div className="mx-auto max-w-[400px] space-y-4 text-center">
        <div className="skeleton mx-auto h-10 w-48"></div>

        <div className="skeleton mx-auto h-4 w-80"></div>
      </div>

      {/* Apps Skeleton */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
          >

            {/* Image + Title */}
            <div className="flex items-center gap-4">

              {/* App Image */}
              <div className="skeleton h-20 w-20 shrink-0 rounded-2xl"></div>

              {/* Title */}
              <div className="min-w-0 flex-1 space-y-2">
                <div className="skeleton h-5 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>

            </div>

            {/* Rating + Reviews */}
            <div className="mt-5 flex gap-4">
              <div className="skeleton h-4 w-16"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>

            {/* Downloads + Size */}
            <div className="mt-3 flex gap-5">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-16"></div>
            </div>

            {/* Description */}
            <div className="mt-4 space-y-2">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
            </div>

            {/* Button */}
            <div className="mt-5">
              <div className="skeleton h-12 w-full rounded-xl"></div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Loading;