import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";

async function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <Navbar />
            <Box>{children}</Box>
        </Box>
    );
}

export default Sidebar;
