import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";
import Box from "@mui/material/Box";

export default async function ConversationsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Sidebar>
            <Box>
                <ConversationList />
                <div>{children}</div>
            </Box>
        </Sidebar>
    );
}
