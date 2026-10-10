import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import  store  from "./app/store.ts";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
