import { Navigate } from "react-router";
import { useAuth } from "../context/useAuth";

function PrivateRoute({ children }) {
  const { session, loading } = useAuth();

  // wait until Supabase confirms session
  if (loading) {
    return <p>Loading...</p>;
  }

  return session ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
