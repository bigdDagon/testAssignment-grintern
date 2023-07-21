import { useQuery } from "@tanstack/react-query";

import DetailPage from "..";
import { mockBookDetail } from "../../../test-utils/fixtures";
import { render, screen, fireEvent } from "../../../test-utils";
import { useFetchBook } from "../hooks";

jest.mock("../hooks");

const mockedUseFetchBook = useFetchBook;

describe("Detail Page", () => {
  it("displays loader", () => {
    mockedUseFetchBook.mockImplementation(() => ({
      data: [],
      isFetching: true,
    }));
    render(<DetailPage />);
    expect(screen.getByTestId("loader")).toBeVisible();
  });

  it("displays error message", () => {
    mockedUseFetchBook.mockImplementation(() => ({
      data: [],
      isFetching: false,
      isError: true,
    }));
    render(<DetailPage />);
    expect(screen.getByTestId("error-page")).toBeVisible();
  });

  it("renders Detail Page", async () => {
    mockedUseFetchBook.mockImplementation(() => ({
      data: mockBookDetail,
      isFetching: false,
      isError: false,
    }));

    render(<DetailPage />);

    const detailPage = screen.getByTestId("detail-page-wrapper");
    expect(detailPage).toBeVisible();
    expect(screen.getByRole("button", { name: "Back" })).toBeVisible();

    expect(screen.getByTestId("cover-image")).toBeVisible();
    expect(screen.getByTestId("Author")).toBeVisible();
    expect(screen.getByTestId("Subject")).toBeVisible();
    expect(screen.getByTestId("Summary")).toBeVisible();

    expect(screen.getByTestId("book-title")).toBeVisible();

    const reserveButton = screen.getByRole("button", { name: "Reserve" });

    expect(reserveButton).toBeInTheDocument();

    expect(detailPage).toMatchSnapshot();
  });
});
