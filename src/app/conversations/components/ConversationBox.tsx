"use client";
import { FC, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { separateAddress } from "@/lib/utils";
import { User } from "@prisma/client";
import Avatar from "@/components/ui/Avatar";
import { useOtherUser } from "@/hooks/useOtherUser";
import { FullConversationType } from "@/types";
import { format } from "date-fns";

interface ConversationBoxProps {
    user: User;
    conversation: FullConversationType;
    selected: boolean;
}

const ConversationBox: FC<ConversationBoxProps> = ({
    user,
    conversation,
    selected,
}) => {
    const router = useRouter();
    const otherUser = useOtherUser(conversation, user);
    const handleClick = useCallback(() => {
        router.push(`/conversations/${conversation.id}`);
    }, [router, conversation]);

    const lastMessage = useMemo(() => {
        const messages = conversation.messages || [];

        return messages[messages.length - 1];
    }, [conversation.messages]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return "Sent an image";
        }

        if (lastMessage?.body) {
            return lastMessage?.body;
        }

        return "Started a conversation";
    }, [lastMessage]);

    return (
        <Box
            onClick={handleClick}
            display="flex"
            padding="10px 10px"
            sx={[
                { cursor: "pointer" },
                selected && {
                    borderLeft: "3px solid #ffff",
                    backgroundColor: "secondary.main",
                },
            ]}
        >
            <Box width="100%" display="flex" alignItems="center" gap="10px">
                <Avatar user={otherUser} />
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography fontWeight="bold" fontSize="0.9rem">
                            {otherUser?.name ||
                                separateAddress(otherUser.address)}
                        </Typography>
                        <Typography
                            fontSize="0.75rem"
                            sx={[
                                {
                                    width: "200px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                },
                                { color: "grey.500" },
                                selected && {
                                    color: "text.primary",
                                },
                            ]}
                        >
                            {lastMessageText}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            fontSize="0.7rem"
                            sx={[
                                { color: "grey.500" },
                                selected && {
                                    color: "text.primary",
                                },
                            ]}
                        >
                            {lastMessage &&
                                format(new Date(lastMessage.createdAt), "p")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ConversationBox;
