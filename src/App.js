import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exchanges from "./pages/Exchanges";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/exchanges" element={<Exchanges></Exchanges>} />
      </Routes>
      <h3>Crypto</h3>
    </div>
  );
}

export default App;
