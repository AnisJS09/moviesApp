import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CSSReset, extendTheme, ThemeProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesPage } from "./routes/movies";
import { MyListPage } from "./routes/my-list";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/my-list" element={<MyListPage />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
