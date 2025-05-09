import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-32">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#ec7063] ">
              404
            </h1>
            <p className="mb-8 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to='/'
              className="inline-flex text-white bg-[#f7a582] hover:bg-[#ec7063] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;