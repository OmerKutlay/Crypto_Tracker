import { useEffect,useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exchanges from "./pages/Exchanges";
import Sidebar from "./components/Sidebar";
import "./Style/styles.scss";
import selectedCurrencyContext from "./store/selectedCurrencyContext";
import currencyListContext from "./store/currrencyListContext";

function App() {
  const selectedCurrencyCTX = useContext(selectedCurrencyContext);
  const currencyListCTX = useContext(currencyListContext);

  useEffect(() => {
    currencyListCTX.getExchangesetCurrencyList();
    currencyListCTX.getExchanges();
    selecetedCurrencyCTX.getHistory("bitcoin");
  }, []);




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
