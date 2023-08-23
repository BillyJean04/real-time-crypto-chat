"use client";

import React from "react";
import { useAuthGuard } from "@/hooks/useAuthGuard";

const ConversationsPage = () => {
    useAuthGuard();
    return <></>;
};

export default ConversationsPage;
