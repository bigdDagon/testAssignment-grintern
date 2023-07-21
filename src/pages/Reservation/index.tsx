import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useReservation } from "../../context/reservationContext";
import Toast from "../../components/Toast";
import BookCard from "../../components/Card";
import { Book } from "../../types/types";

const ReservationPage = () => {
  const { reservedList, setReservedList } = useReservation();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleCancelReservation(
    e: React.MouseEvent<HTMLElement>,
    bookId: string
  ) {
    e.stopPropagation();
    setReservedList((prev) => prev.filter((book: Book) => book.id !== bookId));
    setIsOpenSnackbar(true);
  }
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </Button>
      <Typography variant="h4" textAlign={"center"}>
        Reserved Books
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-around",
          mt: 3,
        }}
      >
        {reservedList.length === 0 ? (
          <Typography variant="h4" color="secondary">
            There are No Reserved Books.
          </Typography>
        ) : (
          reservedList.map((book: Book) => (
            <BookCard
              key={book.id}
              imgUrl={book.formats["image/jpeg"]}
              id={book.id}
              authors={book.authors}
              title={book.title}
              handleCancelReservation={handleCancelReservation}
              testId="reserved-book-card"
            />
          ))
        )}
        <Toast
          isOpen={isOpenSnackbar}
          handleClose={() => setIsOpenSnackbar(false)}
          label="Reservation cancelled Successfully"
          severity="info"
        />
      </Box>
    </>
  );
};

export default ReservationPage;
