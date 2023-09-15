"use client";

import { User } from "@prisma/client";
import { FC } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import AccountCircle from "@mui/icons-material/AccountCircle";

interface AvatarProps {
    user: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
    return (
        <Box display="flex">
            {user?.image ? (
                <Image
                    style={{ borderRadius: "9999px" }}
                    src={user.image}
                    width={35}
                    height={35}
                    alt="Avatar"
                />
            ) : (
                <AccountCircle fontSize="large" />
            )}
        </Box>
    );
};

export default Avatar;
