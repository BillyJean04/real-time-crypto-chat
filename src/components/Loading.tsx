"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import CircularProgress from "@mui/material/CircularProgress";
import PaperComponent from "@/components/Paper";

const Loading = () => {
    return (
        <Dialog open={true} PaperComponent={PaperComponent}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100px"
                height="100px"
                sx={{ backgroundColor: "black" }}
            >
                <CircularProgress sx={{ color: "secondary.main" }} />
            </Box>
        </Dialog>
    );
};

export default Loading;
