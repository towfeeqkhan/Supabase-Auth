import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router";

function Dashboard() {
  const { session, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOutUser();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-12 ml-3">
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="mt-3">Welcome, {session?.user?.email}</h2>
      <div className="mt-6">
        <button className="border p-3" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
