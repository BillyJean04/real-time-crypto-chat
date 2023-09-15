"use client";
import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Group from "@mui/icons-material/Group";
import { User } from "@prisma/client";
import ConversationBox from "@/app/conversations/components/ConversationBox";
import { useParams } from "next/navigation";
import { FullConversationType } from "@/types";

interface ConversationListProps {
    user: User;
    initialItems: FullConversationType[];
}

const ConversationList: FC<ConversationListProps> = ({
    user,
    initialItems,
}) => {
    const [items, setItems] = useState(initialItems);
    const params = useParams();

    return (
        <Box
            display="flex"
            flexDirection="column"
            padding="25px 0"
            borderRight="2px solid #1d132f"
            height="100dvh"
            gap="15px"
            width="450px"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="0 10px"
            >
                <Typography variant="h5" fontWeight="bold">
                    Chats
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "#ef6f6c",
                        padding: "5px",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                >
                    <Group fontSize="small" sx={{ display: "flex" }} />
                </Box>
            </Box>
            <Box>
                {items.map((conversation) => (
                    <ConversationBox
                        user={user}
                        key={conversation.id}
                        conversation={conversation}
                        selected={params.conversationId === conversation.id}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ConversationList;
