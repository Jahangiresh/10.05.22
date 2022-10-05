import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//i18

// import { useTranslation, initReactI18next } from "react-i18next";

// import i18n from "i18next";
// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         "We take": "Welcome to React and react-i18next",
//       },
//     },
//     az: {
//       translation: {
//         "We take": "reacta xosh gelmisen",
//       },
//     },
//   },
//   lng: document.querySelector("html").lang,
//   fallbackLng: "en",
// });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t("We take")}</h2>;
// }

//i18 end

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
