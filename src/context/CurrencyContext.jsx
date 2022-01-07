import React from "react";
import { createContext, useState, useContext } from "react";

const cryptoContext = createContext();

const CurrencyContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  console.log(currency);

  React.useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <cryptoContext.Provider value={{ currency, setCurrency }}>
      {children}
    </cryptoContext.Provider>
  );
};

export const CryptoCurrencyState = () => {
  console.log("hey");
  return useContext(cryptoContext);
};

export default CurrencyContext;
