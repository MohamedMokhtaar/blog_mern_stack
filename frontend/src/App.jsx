import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-2">
    <Header />
      <Outlet />
    </div>
  );
}

export default App;