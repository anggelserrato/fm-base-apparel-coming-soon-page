import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComingSoonPage />
  </StrictMode>,
);
