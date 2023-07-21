import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Rating, Button } from "@mui/material";
import { Author } from "../../types/types";

interface BookCardProps {
  id: string;
  title: string;
  authors: Author[];
  imgUrl: string;
  testId?: string;
  handleCancelReservation?: (
    e: React.MouseEvent<HTMLElement>,
    id: string
  ) => void | undefined;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  authors,
  imgUrl,
  id,
  handleCancelReservation,
  testId,
}) => {
  const navigate = useNavigate();
  const authorNames = useMemo(() => {
    return authors.map((author) => author.name).join(",");
  }, [authors]);

  function handleRedirect() {
    navigate(`/book/${id}`);
  }

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        width: "200px",
        borderRadius: "8px",
        boxShadow: "3px 2px 8px gray",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "6px 4px 16px gray",
        },
        border: "2px solid black",
      }}
      onClick={() => handleRedirect()}
      data-testid={testId}
    >
      <Box
        sx={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          img: {
            overflow: "hidden",
          },
        }}
      >
        <img src={imgUrl} alt={title} />
      </Box>
      <Box mt={2}>
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          By {authorNames}
        </Typography>
        <Rating value={4} />
      </Box>
      {handleCancelReservation && (
        <Button
          variant="contained"
          color="warning"
          onClick={(e) => handleCancelReservation(e, id)}
        >
          Cancel Reservation
        </Button>
      )}
    </Box>
  );
};

export default BookCard;
