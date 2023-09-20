import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import Box from "@mui/material/Box";

async function Sidebar({ children }: { children: ReactNode }) {
    return (
        <Box display="flex">
            <Navbar />
            <Box width="100%">{children}</Box>
        </Box>
    );
}

export default Sidebar;
