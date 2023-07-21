import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Autocomplete } from "@mui/material";

import { useDebounce } from "../../hooks/useDebounce";
import { useFetchBookLists, useSearchBook } from "./hooks";
import Banner from "./Components/Banner";
import Slider from "./Components/Slider";
import ErrorPage from "../../components/ErrorPage";
import Loader from "../../components/Loader";

interface OptionType {
  option: string;
  value: string;
}

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);

  const { isFetching, data: bookLists, error } = useFetchBookLists();

  const { data: searchResult, isFetching: isSearching } =
    useSearchBook(debouncedValue);
  const navigate = useNavigate();

  const handleRedirect = (id: string) => {
    navigate(`book/${id}`);
  };

  // Since this api doesn't support this, created dummy sub booklists
  const featuredBooks = useMemo(() => {
    if (!bookLists) return [];
    return bookLists.slice(0, 10);
  }, [bookLists]);

  const topRatedBooks = useMemo(() => {
    if (!bookLists) return [];
    return bookLists.slice(10, 20);
  }, [bookLists]);

  const newlyAdddBooks = useMemo(() => {
    if (!bookLists) return [];
    return bookLists.slice(20, 30);
  }, [bookLists]);

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <Box mb={5}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Autocomplete
          fullWidth
          data-testid="search-book-autocomplete"
          id="search-book"
          options={searchResult?.results || []}
          getOptionLabel={(option: OptionType) => option.option}
          loading={isSearching}
          onChange={(e, option: any) => handleRedirect(option.value)}
          renderInput={(params) => (
            <TextField
              placeholder="Search your favorite book..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              {...params}
            />
          )}
        />
      </Box>
      <Box>
        <Banner label="Featured Books" />
        <Box>
          <Slider
            bookLists={featuredBooks}
            key="Featured Books"
            testId="featured-section"
          />
        </Box>
      </Box>
      <Box>
        <Banner label="Top-Rated Books" />
        <Box>
          <Slider
            bookLists={topRatedBooks}
            key="top-rated books"
            testId="top-rated-section"
          />
        </Box>
      </Box>
      <Box>
        <Banner label="Newly Added Books" />
        <Box>
          <Slider
            bookLists={newlyAdddBooks}
            key="newly-added books"
            testId="newly-adde-sction"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
