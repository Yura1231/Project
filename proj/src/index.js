import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Імпортуємо компонент App, який є кореневим компонентом додатка
import { Provider } from "react-redux"; // Імпортуємо Provider для підключення Redux до додатка
import CssBaseline from "@mui/material/CssBaseline"; // Імпортуємо компонент CssBaseline для стандартизації стилів
import { BrowserRouter } from "react-router-dom"; // Імпортуємо BrowserRouter для маршрутизації додатка
import "./index.scss"; // Імпортуємо глобальні стилі
import { ThemeProvider } from "@mui/material"; // Імпортуємо ThemeProvider для теми Material UI
import { theme } from "./theme"; // Імпортуємо кастомну тему Material UI
import store from "./redux/store"; // Імпортуємо Redux store для управління станом

// Створюємо root елемент React додатка
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендеримо додаток
root.render(
  <>
    {/* CssBaseline забезпечує нормалізацію стилів браузера */}
    <CssBaseline />
    {/* ThemeProvider надає кастомну тему Material UI для всіх компонентів */}
    <ThemeProvider theme={theme}>
      {/* BrowserRouter обгортає додаток для маршрутизації */}
      <BrowserRouter>
        {/* Provider надає Redux store для доступу до стану додатка */}
        <Provider store={store}>
          <App /> {/* Кореневий компонент додатка */}
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);