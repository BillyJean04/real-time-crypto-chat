import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";
import Box from "@mui/material/Box";
import { redirect } from "next/navigation";
import getUsers from "@/actions/getUsers";
import { getConversations } from "@/actions/getConversations";
import { getCurrentUser } from "@/actions/getCurrentUser";

export default async function ConversationsLayout({
    children,
}: {
    children: ReactNode;
}) {
    const conversations = await getConversations();

    const user = await getCurrentUser();
    const users = await getUsers();
    if (!user) {
        redirect("/");
    }

    return (
        <Sidebar>
            <Box width="100%" display="flex" flexDirection="row">
                {users ? (
                    <ConversationList
                        user={user}
                        initialItems={conversations}
                    />
                ) : (
                    <Box>Not Found</Box>
                )}
                {children}
            </Box>
        </Sidebar>
    );
}
