import { useEffect,useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exchanges from "./pages/Exchanges";
import Sidebar from "./components/Sidebar";
import "./Style/styles.scss";
import selectedCurrencyContext from "./store/selectedCurrencyContext";
import currencyListContext from "./store/currencyListContext";

function App() {
  const selectedCurrencyCTX = useContext(selectedCurrencyContext);
  const currencyListCTX = useContext(currencyListContext);

  useEffect(() => {
    currencyListCTX.getCurrencyList();
    currencyListCTX.getExchanges();
    selectedCurrencyCTX.getHistory("bitcoin");
  }, []);


  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/exchanges" element={<Exchanges></Exchanges>} />
      </Routes>
    </div>
  );
}

export default App;
