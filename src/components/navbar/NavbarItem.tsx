import React, { FC } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

interface NavbarItemProps {
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({
    icon: Icon,
    href,
    onClick,
    active,
}) => {
    console.log(active);

    return (
        <Box>
            <Link href={href}>
                <Box
                    sx={[
                        {
                            padding: "7px",
                            borderRadius: "10px",

                            "&:hover": {
                                color: "white",
                                backgroundColor: "#ef6f6c",
                            },
                            "&:hover *": {
                                color: "white",
                                backgroundColor: "#ef6f6c",
                            },
                        },
                        !!active && {
                            backgroundColor: "#ef6f6c",
                            "& *": {
                                color: "white",
                            },
                        },
                    ]}
                >
                    <Icon
                        sx={{
                            color: "#a29ea8",
                            display: "flex",
                        }}
                    />
                </Box>
            </Link>
        </Box>
    );
};

export default NavbarItem;
