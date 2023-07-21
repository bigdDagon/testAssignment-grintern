import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReservationProvider } from "./context/reservationContext";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import ReservationPage from "./pages/Reservation";
import { theme } from "./theme";
import Layout from "./components/Layout";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReservationProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Box>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="book/:id" element={<DetailPage />} />
                  <Route path="reservation" element={<ReservationPage />} />
                </Routes>
              </Layout>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </ReservationProvider>
    </QueryClientProvider>
  );
}

export default App;
