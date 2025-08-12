import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./home/home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  </StrictMode>
);
