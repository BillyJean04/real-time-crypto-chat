"use client";
import { FC } from "react";
import Box from "@mui/material/Box";

interface HeaderProps {
    address: string;
}

const Header: FC<HeaderProps> = ({ address }) => {
    return (
        <Box width="100%" display="flex" justifyContent="end">
            {address}
        </Box>
    );
};

export default Header;
