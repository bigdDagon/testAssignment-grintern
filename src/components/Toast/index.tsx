import React from "react";

import { Snackbar, Alert } from "@mui/material";

interface ToastProps {
  isOpen: boolean | undefined;
  handleClose: () => void;
  label: string;
  severity: "success" | "error" | "warning" | "info";
}

const Toast: React.FC<ToastProps> = ({
  isOpen,
  handleClose,
  label,
  severity,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <Alert severity={severity} onClose={handleClose}>
        {label}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
