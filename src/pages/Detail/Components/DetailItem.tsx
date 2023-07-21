import { Box, Typography } from "@mui/material";

interface DetailItemProps<T extends any> {
  label: string;
  details: T;
}

const DetailItem = <T extends any>({ label, details }: DetailItemProps<T>) => {
  return (
    <Box mt={2} sx={{ display: "flex" }} data-testid={label}>
      <Typography>{label}:</Typography>
      <Box ml={2}>
        {Array.isArray(details) &&
          label === "Author" &&
          details.map((item) => (
            <Typography key={item.name}>
              {`${item.name} (${item.birth_year} ~ ${item.death_year})`}
            </Typography>
          ))}
        {Array.isArray(details) &&
          label === "Subject" &&
          details.map((item) => <Typography key={item}>{item}</Typography>)}
        {typeof details === "string" && <Typography>{details}</Typography>}
      </Box>
    </Box>
  );
};

export default DetailItem;
