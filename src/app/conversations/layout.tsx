import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function ConversationsLayout({
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
