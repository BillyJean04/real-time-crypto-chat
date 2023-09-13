import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EmptyState: FC = () => {
    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="center"
        >
            <Typography>Select a chat or start a new conversation</Typography>
        </Box>
    );
};

export default EmptyState;
