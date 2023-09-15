"use client";

import { FC } from "react";
import Box from "@mui/material/Box";
import { User } from "@prisma/client";
import UserBox from "@/app/users/components/UserBox";
import Typography from "@mui/material/Typography";

interface UserListProps {
    users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            borderRight="2px solid #1d132f"
            height="100dvh"
            padding="25px 0"
            gap="15px"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="0 10px"
            >
                <Typography variant="h5" fontWeight="bold">
                    Users
                </Typography>
            </Box>
            <Box>
                {users.map((user) => (
                    <UserBox key={user.id} user={user} />
                ))}
            </Box>
        </Box>
    );
};

export default UserList;
