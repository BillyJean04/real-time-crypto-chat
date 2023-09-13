"use client";
import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Group from "@mui/icons-material/Group";
import { User } from "@prisma/client";
import ConversationBox from "@/app/conversations/components/ConversationBox";
import { useParams } from "next/navigation";

interface ConversationListProps {
    users: User[];
}

const ConversationList: FC<ConversationListProps> = ({ users }) => {
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
                {users.map((user) => (
                    <ConversationBox
                        key={user.id}
                        user={user}
                        selected={params.conversationId === user.id}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ConversationList;
