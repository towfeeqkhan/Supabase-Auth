import { Outlet } from "react-router";

function App() {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <h1 className="text-center pt-6 text-3xl">Supabase Auth & Context</h1>
      <Outlet />
    </div>
  );
}

export default App;
