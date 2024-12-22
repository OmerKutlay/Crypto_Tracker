import React, { useState, useContext } from "react";
import selectedCurrencyContext, { INTERVALS } from "../store/selectedCurrencyContext";
import currencyListContext from "../store/currrencyListContext";

const OPTION_HOUR_MINUT = {
  hour: "2-digit",
  minute: "2-digit",
};

const OPTION_MONTH_DAY = {
  day: "numeric",
  month: "long",
};

const OPTION_MONTH_YEAR = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Dashboard = () => {
  const ctx = useContext(selectedCurrencyContext); // Context'i alıyoruz
  const currencies = useContext(currencyListContext).currencyList; // Diğer context
  const [searchPhrase, setSearch] = useState(""); // Arama için state
  const [suggestions, setSuggestions] = useState([]); // Öneriler için state

  const onSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);

    let matched = currencies.filter((currency) =>
      currency.name.toLowerCase().includes(value.toLowerCase())
    );

    if (matched.length > 5 && value !== "") {
      matched = matched.slice(0, 5);
    } else if (value === "") {
      matched = [];
    }

    setSuggestions(matched);
  };

  const selectedSearchedCurrency = (currencyId) => {
    ctx.getHistory(currencyId); // Seçilen para birimini almak için context'teki fonksiyonu çağırıyoruz
    setSearch("");
    setSuggestions([]);
  };

  return (
    <main className="main">
      <section>
        <div className="search-box">
          <input
            type="text"
            placeholder="search..."
            value={searchPhrase}
            onChange={onSearchChange}
          />
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((currency) => (
                <li
                  key={currency.id}
                  onClick={() => selectedSearchedCurrency(currency.id)}
                >
                  {currency.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        <div className="intervals">
          {Object.keys(INTERVALS).map((interval) => (
            <button
              className={`interval-btn ${
                interval === ctx.interval ? "active" : ""
              }`}
              onClick={() => {
                ctx.getHistory(ctx.selected_id, interval);
              }}
              key={interval}
            >
              {interval}
            </button>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Dashboard;
