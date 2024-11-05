import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center bg-white">
      {/* Error Div */}
      <div className="bg-white xl:max-w-[80%] mx-auto flex flex-col justify-between items-center mt-12">
        <img className="rounded-2xl" src="/assets/error404.jpg" alt="" />
        <h1 className="text-black text-6xl mt-4 mb-8">Error 404</h1>
        <Link to="/">
          <button className="text-2xl text-white px-6 py-3 rounded-[32px] bg-purpleBg hover:bg-purple-500 transition duration-300">Go Back</button>
        </Link>
      </div>
      {/* Error Div */}
    </div>
  );
};

export default ErrorPage;
