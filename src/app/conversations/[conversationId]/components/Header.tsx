"use client";
import { FC } from "react";
import Box from "@mui/material/Box";
import { User } from "@prisma/client";
import { separateAddress } from "@/lib/utils";
import { useOtherUser } from "@/hooks/useOtherUser";
import { FullConversationType } from "@/types";
import Avatar from "@/components/ui/Avatar";

interface HeaderProps {
    currentUser: User;
    conversation: FullConversationType;
}

const Header: FC<HeaderProps> = ({ currentUser, conversation }) => {
    const otherUser = useOtherUser(conversation, currentUser);

    return (
        <Box
            width="100%"
            paddingBottom="10px"
            borderBottom="2px solid #1d132f"
            padding="25px 25px"
            display="flex"
            justifyContent="space-between"
        >
            <Box display="flex" alignItems="center" gap="10px">
                <Avatar user={otherUser} />{" "}
                {otherUser.name || separateAddress(otherUser.address)}
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
                <Avatar user={currentUser} />
                {currentUser.name || separateAddress(currentUser.address)}
            </Box>
        </Box>
    );
};

export default Header;
