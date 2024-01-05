import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { useTranslate } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import { List } from "@refinedev/mui";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const CurrencyCalculator: React.FC = () => {
  const t = useTranslate();

  const initialData: Record<string, number> = {
    "Galactic Credits": 1,
    Wupiupi: 1.5,
    Peggats: 2,
  };

  const min = 0;
  const max = 1000;

  const [exchangeRates, setExchangeRates] = useState(initialData);

  const [selectedCurrencyToBuy, setSelectedCurrencyToBuy] = useState("");

  const [selectedCurrencyToSell, setSelectedCurrencyToSell] = useState("");

  const [ammountToBuy, setAmmountToBuy] = useState<number | string>("");

  const [disabled, setDisabled] = useState(true);

  const currencies = ["Galactic Credits", "Wupiupi", "Peggats"];

  useEffect(() => {
    if (
      ammountToBuy &&
      selectedCurrencyToBuy &&
      selectedCurrencyToSell &&
      selectedCurrencyToBuy !== selectedCurrencyToSell
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [ammountToBuy, selectedCurrencyToBuy, selectedCurrencyToSell]);

  const handleSelectCurrencyToBuy = (currency: string) => {
    setSelectedCurrencyToBuy(currency);
  };

  const handleSelectCurrencyToSell = (currency: string) => {
    setSelectedCurrencyToSell(currency);
  };

  const handleChangeAmmountToBuy = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value ? Math.round(parseFloat(e.target.value)) : "";

    if ((value as number) > max) value = max;
    if ((value as number) < min) value = min;
    setAmmountToBuy(value);
  };

  const handleExchange = () => {
    const ammountToSell =
      (ammountToBuy as number) *
      (exchangeRates[selectedCurrencyToBuy] /
        exchangeRates[selectedCurrencyToSell]);
    setExchangeRates((prevRates) => {
      // console.log("prevRates:", prevRates);
      const prevRatesCache = prevRates;

      prevRatesCache[selectedCurrencyToBuy] =
        prevRates[selectedCurrencyToBuy] + (ammountToBuy as number) * 0.01;

      if (
        prevRates[selectedCurrencyToSell] - ammountToSell * 0.01 <
        initialData[selectedCurrencyToSell]
      ) {
        prevRatesCache[selectedCurrencyToSell] =
          initialData[selectedCurrencyToSell];
      } else {
        prevRatesCache[selectedCurrencyToSell] =
          prevRates[selectedCurrencyToSell] - ammountToSell * 0.01;
      }
      return {
        ...prevRatesCache,
      };
    });

    setAmmountToBuy("");
  };

  return (
    <List
      wrapperProps={{
        sx: {
          // maxWidth: "410px",
          minHeight: "460px",
          position: "relative",
        },
      }}
      title={
        <Typography variant="h5">
          Galactic Trade Calculator
          <Box
            sx={{
              right: "15px",
              top: "15px",
              background: "rgba(0,0,0,0.3)",
              padding: "15px",
              marginTop: "35px",
              borderRadius: "7px",
            }}
          >
            <Box sx={{ margin: "0 0 5px 0" }}>
              <Typography sx={{ color: "lightgray", marginBottom: "5px" }}>
                Currencies' exchange rates cannot fall under the initial ones
                determined by the Emperor
              </Typography>
              {Object.entries(exchangeRates).map(([currency, rate]) => (
                <Typography key={currency} sx={{ color: "#67be23" }}>
                  <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                    {currency} :{" "}
                  </span>
                  <span style={{ fontWeight: "bold", color: "lightgray" }}>
                    {rate.toFixed(2)}
                  </span>
                </Typography>
              ))}
              <Typography sx={{ color: "#67be23" }}>
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Exchange rate{" "}
                  <span style={{ color: "lightgray" }}>(buy/sell)</span> :{" "}
                </span>
                <span style={{ fontWeight: "bold", color: "lightgray" }}>
                  {exchangeRates[selectedCurrencyToBuy] /
                  exchangeRates[selectedCurrencyToSell]
                    ? (
                        exchangeRates[selectedCurrencyToBuy] /
                        exchangeRates[selectedCurrencyToSell]
                      ).toFixed(2)
                    : "none"}
                </span>
              </Typography>
            </Box>
          </Box>
        </Typography>
      }
    >
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs={12} md={5} lg={4}>
            <TextField
              sx={{ width: "100%", marginBottom: "25px" }}
              select
              value={selectedCurrencyToBuy}
              label="Select Currency to buy:"
              onChange={(e) => handleSelectCurrencyToBuy(e.target.value)}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <TextField
              label="Ammount to buy (between 0 and 50)"
              sx={{ width: "100%", marginBottom: "25px" }}
              type="number"
              inputProps={{ min, max }}
              value={ammountToBuy}
              onChange={handleChangeAmmountToBuy}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} md={5} lg={4}>
            <TextField
              sx={{
                width: "100%",
              }}
              value={selectedCurrencyToSell}
              select
              label="Select Currency to sell:"
              onChange={(e) => handleSelectCurrencyToSell(e.target.value)}
            >
              {currencies.map((currency, i) => (
                <MenuItem key={i} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid>
            {ammountToBuy && selectedCurrencyToBuy && selectedCurrencyToSell ? (
              selectedCurrencyToBuy !== selectedCurrencyToSell ? (
                <Typography color="lightgray" sx={{ marginTop: "5px" }}>
                  {`It will cost ${(
                    (ammountToBuy as number) *
                    (exchangeRates[selectedCurrencyToBuy] /
                      exchangeRates[selectedCurrencyToSell])
                  ).toFixed(2)} ${selectedCurrencyToSell}
              `}{" "}
                </Typography>
              ) : (
                <Typography color="error" sx={{ marginTop: "5px" }}>
                  {"Please, choose different currencies!"}
                </Typography>
              )
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>

      <Box component="div" sx={{ margin: "35px 0 0 0" }}>
        <Button
          disabled={disabled}
          variant="outlined"
          onClick={handleExchange}
          sx={{ marginRight: "25px" }}
        >
          Exchange
        </Button>
      </Box>
    </List>
  );
};
