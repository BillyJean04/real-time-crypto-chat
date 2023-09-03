import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";
import Box from "@mui/material/Box";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export default async function ConversationsLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await currentUser();

    if (!user) {
        redirect("/");
    }

    return (
        <Sidebar>
            <Box>
                <ConversationList />
                <div>{children}</div>
            </Box>
        </Sidebar>
    );
}
