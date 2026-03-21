import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Pre-rendered HTML is already visible to the user.
// Defer React bootstrap to idle time so it doesn't compete with first paint.
const bootstrap = () => createRoot(root).render(app);
if ("requestIdleCallback" in window) {
  requestIdleCallback(bootstrap);
} else {
  setTimeout(bootstrap, 50);
}
