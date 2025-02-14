import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.tsx'
import TicketProvider from "./context/ticketContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <TicketProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TicketProvider>
);

