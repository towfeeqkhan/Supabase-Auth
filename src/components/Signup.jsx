import { Link } from "react-router";

function Signup() {
  return (
    <div>
      <form className="max-w-md m-auto pt-24 ">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="text-green-600 ml-2">
            Sign in!
          </Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            className="p-3 mt-4 outline outline-gray-600"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-3 mt-4 outline outline-gray-600"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 mt-4 outline outline-gray-600"
            type="password"
            placeholder="Password"
          />
          <button className="mt-4 p-2 bg-green-600 hover:bg-green-700 cursor-pointer">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
