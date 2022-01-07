import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  makeStyles,
  MenuItem,
  Select,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoCurrencyState } from "../context/CurrencyContext";

const darkTheme = createTheme({
  pallete: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    cursor: "pointer",
  },
  select: {
    width: 100,
  },
}));

const Header = () => {
  const { currency, setCurrency } = CryptoCurrencyState();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={useStyles().title}
              variant={"h6"}
            >
              Cryptoverse
            </Typography>
            <Select
              value={""}
              className={useStyles().select}
              variant="outlined"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
