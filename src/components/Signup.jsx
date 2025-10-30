import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { session, signUpUser } = useAuth();

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("an error occurred", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="max-w-md m-auto pt-24" onSubmit={handleSignUp}>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 mt-4 outline outline-gray-600"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-4 p-2 bg-green-600 hover:bg-green-700 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            Sign up
          </button>
          {error && <p className="text-red-500 pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Signup;
