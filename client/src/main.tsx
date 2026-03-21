import { hydrateRoot, createRoot } from "react-dom/client";
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

// If pre-rendered HTML exists, defer hydration until browser is idle
// so React doesn't block first paint. The pre-rendered HTML is already
// fully visible; hydration just adds interactivity.
if (root.children.length > 0) {
  const hydrate = () => hydrateRoot(root, app);
  if ("requestIdleCallback" in window) {
    requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
} else {
  createRoot(root).render(app);
}
