"use client";
import { FC, useState } from "react";
import Box from "@mui/material/Box";
import { FullMessageType } from "@/types";
import MessageBox from "@/app/conversations/[conversationId]/components/MessageBox";
import { User } from "@prisma/client";

interface BodyProps {
    initialMessages: FullMessageType[];
    user: User;
}

const Body: FC<BodyProps> = ({ initialMessages, user }) => {
    const [messages, setMessages] = useState(initialMessages);

    return (
        <Box
            sx={{
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                    width: ".5em",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "#ffff",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                },
            }}
            display="flex"
            flexDirection="column"
            height="100dvh"
            gap="10px"
            paddingRight="10px"
        >
            {messages.map((message, index) => (
                <MessageBox
                    key={message.id}
                    data={message}
                    currentUser={user}
                />
            ))}
        </Box>
    );
};

export default Body;
