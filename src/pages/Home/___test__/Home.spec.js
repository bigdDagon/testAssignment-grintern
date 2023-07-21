import Home from "..";
import { mockBookLists } from "../../../test-utils/fixtures";
import { useFetchBookLists, useSearchBook } from "../hooks";
import { render, screen } from "../../../test-utils";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));

jest.mock("swiper", () => ({
  Navigation: (props) => null,
  Pagination: (props) => null,
}));

const mockedUseFetchBookLists = useFetchBookLists;
const mockedUseSearchBook = useSearchBook;
jest.mock("../hooks");

describe("Home Page", () => {
  it("displays loader", async () => {
    mockedUseFetchBookLists.mockImplementation(() => ({
      data: [],
      isFetching: true,
    }));
    mockedUseSearchBook.mockImplementation(() => ({
      data: [],
      isFetching: false,
    }));
    render(<Home />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeVisible();
  });
  describe("Homme Page", () => {
    it("renders home page", async () => {
      mockedUseFetchBookLists.mockImplementation(() => ({
        data: mockBookLists.results,
        isFetching: false,
      }));
      mockedUseSearchBook.mockImplementation(() => ({
        data: mockBookLists.results,
        isFetching: false,
      }));
      render(<Home />);
      expect(screen.getByTestId("search-book-autocomplete")).toBeVisible();
      expect(screen.getByText("Featured Books")).toBeVisible();
      expect(screen.getByText("Top-Rated Books")).toBeVisible();
      expect(screen.getByText("Newly Added Books")).toBeVisible();
    });
    it("renders featured sections correctly", async () => {
      mockedUseFetchBookLists.mockImplementation(() => ({
        data: mockBookLists.results,
        isFetching: false,
      }));
      mockedUseSearchBook.mockImplementation(() => ({
        data: mockBookLists.results,
        isFetching: false,
      }));
      render(<Home />);

      //There are total 3 sliders for featured books.
      expect(screen.queryAllByTestId("swiper-testid").length).toEqual(3);
      expect(screen.queryAllByTestId("swiper-slide-testid").length).toBe(30);

      //check if individual section contains correct amount of slides
      expect(screen.queryAllByTestId("featured-section").length).toEqual(10);
      expect(screen.queryAllByTestId("top-rated-section").length).toEqual(10);
      expect(screen.queryAllByTestId("newly-adde-sction").length).toEqual(10);
    });
  });
});
