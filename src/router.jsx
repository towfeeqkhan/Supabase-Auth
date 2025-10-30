import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Route>
  )
);
