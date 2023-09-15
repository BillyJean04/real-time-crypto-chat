import { User } from "@prisma/client";
import { useMemo } from "react";
import { FullConversationType } from "@/types";

export const useOtherUser = (
    conversation: FullConversationType,
    user: User
) => {
    const otherUser = useMemo(() => {
        const currentAddress = user.address;

        const otherUser = conversation.users.filter(
            (user) => user.address !== currentAddress
        );

        return otherUser[0];
    }, [conversation.users, user.address]);

    return otherUser;
};
