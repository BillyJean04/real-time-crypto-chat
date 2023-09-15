import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Box from "@mui/material/Box";
import UserList from "@/app/users/components/UserList";
import getUsers from "@/actions/getUsers";

export default async function UsersLayout({
    children,
}: {
    children: ReactNode;
}) {
    const users = await getUsers();

    return (
        <Sidebar>
            <Box height="100dvh" display="flex" flexDirection="row">
                <Box width="450px">{users && <UserList users={users} />}</Box>
                {children}
            </Box>
        </Sidebar>
    );
}
