import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReservationContext } from "../context/reservationContext";
import { theme } from "../theme";
import { defaultReservationProps } from "./fixtures";

const Harness =
  ({ reservationContext }) =>
  ({ children }) => {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <ReservationContext.Provider
          value={{ reservedList: reservationContext }}
        >
          <ThemeProvider theme={theme}>
            <Router location={"/"}>{children}</Router>
          </ThemeProvider>
        </ReservationContext.Provider>
      </QueryClientProvider>
    );
  };

const customRender = (
  ui,
  { reservationContext = defaultReservationProps } = {},
  options
) => {
  const Wrapper = Harness({ reservationContext });
  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from "@testing-library/react";

export { customRender as render };
