import { render, screen } from "../../../test-utils";
import ReservationPage from "..";

describe("Reservation Page", () => {
  it("diplays no reservation message", () => {
    render(<ReservationPage />, { reservationContext: [] });
    expect(screen.getByText("There are No Reserved Books."));
  });

  it("renders reserved book lists", () => {
    render(<ReservationPage />);
    expect(screen.queryAllByTestId("reserved-book-card").length).toEqual(4);
  });
});
