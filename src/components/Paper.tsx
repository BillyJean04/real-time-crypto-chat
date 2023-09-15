"use client";
import Paper, { PaperProps } from "@mui/material/Paper";

const PaperComponent = (props: PaperProps) => {
    return <Paper sx={{ borderRadius: "0" }} {...props} />;
};

export default PaperComponent;
