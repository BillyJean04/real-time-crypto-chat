"use client";

import { useAuthGuard } from "@/hooks/useAuthGuard";

const ConversationsPage = () => {
    useAuthGuard();
    return <></>;
};

export default ConversationsPage;
