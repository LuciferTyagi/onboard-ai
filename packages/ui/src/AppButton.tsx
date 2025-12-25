import React from "react";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

interface AppButtonProps extends ButtonProps {
  label: string;
}

const AppButton: React.FC<AppButtonProps> = ({ label, ...props }) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {label}
    </Button>
  );
};

export default AppButton;