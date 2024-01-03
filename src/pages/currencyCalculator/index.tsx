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
// import InboxIcon from "@mui/material/InboxIcon";

import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOnIcon";

export const CurrencyCalculator: React.FC = () => {
  const t = useTranslate();

  const currencies = ["Galactic Credits", "Wupiupi", "Peggats"];
  const initialExchangeRates = {
    "Galactic Credits": 1.0,
    Wupiupi: 1.5,
    Peggats: 2.0,
  };

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
    }, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <List
      title={<Typography variant="h5">Galactic Trade Calculator</Typography>}
    >
      <InputLabel id="currency-calculator-select-label">
        Select Currency:
      </InputLabel>
      <Select
        sx={{ height: "40px", padding: "5px 5px" }}
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

      {/* <div>
        <label>Select Currency:</label>
        <select
          value={selectedCurrency}
          onChange={(e) => handleSelectCurrency(e.target.value)}
        >
         
        </select>
      </div> */}
      {/* <div>
        <h2>Exchange Rates</h2>
        <ul>
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
        </ul>
      </div> */}

      <ul>
        {Object.entries(exchangeRates).map(([currency, rate]) => (
          <ListItem key={currency} disablePadding>
            <ListItemIcon>
              {/* <MonetizationOnIcon /> */}
            </ListItemIcon>
            <ListItemText>
              {currency}: {rate}
            </ListItemText>
          </ListItem>
        ))}
      </ul>

      <Box component="div" sx={{ padding: "25px 0" }}>
        <Button
          variant="outlined"
          onClick={handleBuy}
          sx={{ marginRight: "10px" }}
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
    // <Grid container columns={24} spacing={2}>
    //   <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
    //     <Card sx={{ height: "230px", position: "relative" }}>
    //       <DashboardPeople />
    //     </Card>
    //   </Grid>
    // </Grid>
  );
};
