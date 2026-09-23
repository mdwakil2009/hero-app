
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-6 overflow-hidden">

      <div className="relative w-full max-w-3xl text-center">

        {/* Decorative Background */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-secondary/10 rounded-full blur-3xl" />

        {/* 404 */}
        <div className="relative">

          <h1 className="text-[130px] sm:text-[200px] font-black leading-none tracking-tighter">

            <span className="text-primary">4</span>
            <span className="text-base-content/10">0</span>
            <span className="text-secondary">4</span>

          </h1>

          {/* Center Badge */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="bg-base-100/80 backdrop-blur-md border border-base-content/10 shadow-xl rounded-2xl px-6 py-3">

              <span className="font-semibold">
                Page Not Found
              </span>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="relative mt-4">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Oops! This page doesn t exist.
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-base-content/60 text-lg">
            The page you re looking for may have been moved, deleted,
            or the URL might be incorrect.
          </p>

        </div>

        {/* Buttons */}
        <div className="relative mt-8 flex justify-center">

          <Link
            href="/"
            className="btn btn-primary px-8 rounded-xl"
          >
            🏠 Back to Home
          </Link>

        </div>

        {/* Error Code */}
        <div className="mt-10">

          <p className="text-sm text-base-content/40">
            Error code: 404 • Page not found
          </p>

        </div>

      </div>

    </main>
  );
};

export default NotFound;

