"use client";
import React from "react";
import { useRoutes } from "@/hooks/useRoutes";
import { Box } from "@mui/material";
import NavbarItem from "@/components/navbar/NavbarItem";

const Navbar = () => {
    const routes = useRoutes();
    return (
        <Box
            display="flex"
            width="70px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="15px"
            bgcolor="#160d26"
            height="100dvh"
            borderRight="1px solid #1d132f"
        >
            {routes.map((route) => (
                <Box key={route.label}>
                    <NavbarItem
                        href={route.href}
                        icon={route.icon}
                        active={route.active}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default Navbar;
