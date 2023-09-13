import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";
import Box from "@mui/material/Box";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import getUsers from "@/actions/getUsers";

export default async function ConversationsLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await currentUser();
    const users = await getUsers();
    if (!user) {
        redirect("/");
    }

    return (
        <Sidebar>
            <Box width="100%" display="flex" flexDirection="row">
                {users ? (
                    <ConversationList users={users} />
                ) : (
                    <Box>Not Found</Box>
                )}
                {children}
            </Box>
        </Sidebar>
    );
}
