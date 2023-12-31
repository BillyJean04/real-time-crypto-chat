import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {
    ChatBubble,
    Group,
    Notifications,
    Settings,
} from "@mui/icons-material";
import useConversations from "@/hooks/useConversations";

export const useRoutes = () => {
    const pathname = usePathname();
    const conversationId = useConversations();
    const routes = useMemo(
        () => [
            {
                label: "Chat",
                href: "/conversations",
                icon: ChatBubble,
                active: pathname === "/conversations" || !!conversationId,
            },
            {
                label: "Users",
                href: "/users",
                icon: Group,
                active: pathname === "/users",
            },
            {
                label: "Settings",
                href: "/settings",
                icon: Settings,
                active: pathname === "/settings",
            },
            {
                label: "Notifications",
                href: "/notifications",
                icon: Notifications,
                active: pathname === "/notifications",
            },
        ],
        [conversationId, pathname]
    );
    return routes;
};
