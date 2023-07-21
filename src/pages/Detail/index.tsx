import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Fab, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useReservation } from "../../context/reservationContext";
import { useFetchBook } from "./hooks";
import { DUMMY_SUMMARY } from "./constant";
import Toast from "../../components/Toast";
import Loader from "../../components/Loader";
import DetailItem from "./Components/DetailItem";
import { Author } from "../../types/types";
import ErrorPage from "../../components/ErrorPage";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { reservedList, setReservedList } = useReservation();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>();

  const { data: bookDetail, isFetching, isError } = useFetchBook(id);
  const isBookReserved = useMemo(() => {
    if (id) {
      return reservedList.some(
        (reservedBook) => reservedBook.id.toString() === id
      );
    }
  }, [reservedList, id]);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const handleReserve = (id: string | undefined) => {
    if (id) {
      setReservedList((prev) => [...prev, bookDetail[0]]);
      setIsOpenSnackbar(true);
    }
  };

  const { authors, subjects, title, formats } = bookDetail[0];

  return (
    <Box position={"relative"} data-testid="detail-page-wrapper">
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row", "row"],
          alignItems: ["center", "flex-start"],
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
            mb: 3,
            mr: [0, 5, 5],
            height: "300px",
            width: "200px",
          }}
          data-testid="cover-image"
        >
          <img src={formats["image/jpeg"]} alt={title} width="100%" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: ["center", "left", "left"] }}
              data-testid="book-title"
            >
              {title}
            </Typography>
            <Box mt={3}>
              <DetailItem<Author[]>
                label="Author"
                details={authors}
                key="author"
              />
              <DetailItem<string[]>
                label="Subject"
                details={subjects}
                key="subject"
              />
              <DetailItem<string>
                label="Summary"
                details={DUMMY_SUMMARY}
                key="summary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: "5%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {isBookReserved ? (
          <Fab variant="extended" color="secondary" disabled>
            Reserved
          </Fab>
        ) : (
          <Fab
            variant="extended"
            color="secondary"
            onClick={() => handleReserve(id)}
          >
            Reserve
          </Fab>
        )}
      </Box>
      <Toast
        isOpen={isOpenSnackbar}
        handleClose={() => setIsOpenSnackbar(false)}
        label="Reserved Successfully"
        severity="success"
      />
    </Box>
  );
};

export default DetailPage;
