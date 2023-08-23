import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

export async function ConversationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Sidebar>
            <div>{children}</div>
        </Sidebar>
    );
}

export default ConversationsLayout;
