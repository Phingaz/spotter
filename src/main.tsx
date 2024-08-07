import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TableCtxProvider from "./context/Table.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TableCtxProvider>
      <App />
    </TableCtxProvider>
  </React.StrictMode>
);
