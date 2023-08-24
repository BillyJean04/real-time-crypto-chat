import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/navbar/Navbar";

async function Sidebar({ children }: { children: ReactNode }) {
    return (
        <Box display="flex">
            <Navbar />
            <Box>{children}</Box>
        </Box>
    );
}

export default Sidebar;
