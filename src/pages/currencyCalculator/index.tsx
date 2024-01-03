import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { useTranslate } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import { List } from "@refinedev/mui";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const CurrencyCalculator: React.FC = () => {
  const t = useTranslate();

  const currencies = ["Galactic Credits", "Wupiupi", "Peggats"];
  const initialExchangeRates = {
    "Galactic Credits": 1.0,
    Wupiupi: 1.5,
    Peggats: 2.0,
  };
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCurrency, setSelectedCurrency] = useState("Galactic Credits");
  const [exchangeRates, setExchangeRates] =
    useState<Record<string, number>>(initialExchangeRates);

  const handleSelectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };

  // Float multiplication in JS produces wrong result [duplicate] That's just how it works. In short, the number is stored in scientific notation using binary base.
  // Therefore not all numbers can be accurately represented, and due to the choice of the base, tenths cannot be accurately represented.
  const handleBuy = () => {
    setExchangeRates((prevRates) => ({
      ...prevRates,
      [selectedCurrency]: prevRates[selectedCurrency] * 1.1,
    }));
  };

  const handleSell = () => {
    setExchangeRates((prevRates) => ({
      ...prevRates,
      [selectedCurrency]: prevRates[selectedCurrency] * 0.9,
    }));
  };

  useEffect(() => {
    // Simulate dynamic changes in exchange rates over time (e.g., due to supply and demand)
    const intervalId = setInterval(() => {
      setExchangeRates((prevRates) => ({
        "Galactic Credits":
          prevRates["Galactic Credits"] * (Math.random() * 0.2 + 0.9),
        Wupiupi: prevRates["Wupiupi"] * (Math.random() * 0.2 + 0.9),
        Peggats: prevRates["Peggats"] * (Math.random() * 0.2 + 0.9),
      }));
    }, 1000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  // if (isLoading) return <SmallSpinner dimensions={"30px"} />;

  return (
    <List
      wrapperProps={{
        sx: {
          maxWidth: "410px",
          minHeight: "460px",
          position: "relative",
        },
      }}
      title={<Typography variant="h5">Galactic Trade Calculator</Typography>}
    >
      <InputLabel
        id="currency-calculator-select-label"
        sx={{
          margin: "10px 0 0 0",
        }}
      >
        Select Currency:
      </InputLabel>
      <Select
        sx={{
          height: "40px",
          padding: "5px 5px",
          width: "100%",
        }}
        labelId="currency-calculator-select-label"
        id="currency-calculator-select"
        value={selectedCurrency}
        label="Select Currency:"
        onChange={(e) => handleSelectCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
      <Box sx={{ margin: "50px 0 0 0" }}>
        <Typography sx={{ margin: "0 0 15px 0" }} variant="h6">
          Exchange rates
        </Typography>
        {Object.entries(exchangeRates).map(([currency, rate]) => (
          <Box key={rate} sx={{ margin: "0 0 5px 0" }}>
            <Typography sx={{ color: "#67be23" }}>
              <span style={{ fontWeight: "bold", color: "#fff" }}>
                {currency} :{" "}
              </span>
              {rate}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box component="div" sx={{ textAlign: "center", margin: "65px 0 0 0" }}>
        <Button
          variant="outlined"
          onClick={handleBuy}
          sx={{ marginRight: "25px" }}
        >
          Buy Currency
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "gray", borderColor: "gray" }}
          onClick={handleSell}
        >
          Sell Currency
        </Button>
      </Box>
    </List>
  );
};
