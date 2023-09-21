"use client";
import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { FullMessageType } from "@/types";
import MessageBox from "@/app/conversations/[conversationId]/components/MessageBox";
import { User } from "@prisma/client";
import useConversations from "@/hooks/useConversations";
import { pusherClient } from "@/lib/pusher";

interface BodyProps {
    initialMessages: FullMessageType[];
    user: User;
}

const Body: FC<BodyProps> = ({ initialMessages, user }) => {
    const [messages, setMessages] = useState(initialMessages);
    const { conversationId } = useConversations();

    // useEffect(() => {
    //     fetch(`/api/conversations/${conversationId}/seen`);
    // }, [conversationId]);

    useEffect(() => {
        pusherClient.subscribe(conversationId);

        const messageHandler = (message: FullMessageType) => {
            setMessages((prev) => {
                if (prev.find((value) => value.id === message.id)) {
                    return prev;
                }
                return [...prev, message];
            });
        };

        // const updateMessageHandler = (newMassage: FullMessageType) => {
        //     setMessages((current) =>
        //         current.map((currentMessage) => {
        //             if (currentMessage.id === newMassage.id) {
        //                 return newMassage;
        //             }
        //             return currentMessage;
        //         })
        //     );
        // };

        pusherClient.bind("messages:new", messageHandler);
        // pusherClient.bind("messages:update", updateMessageHandler);

        return () => {
            pusherClient.unsubscribe(conversationId);
            pusherClient.unbind("messages:new", messageHandler);
            // pusherClient.bind("messages:update", updateMessageHandler);
        };
    }, [conversationId]);

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
                    // isLast={index === messages.length - 1}
                    key={message.id}
                    data={message}
                    currentUser={user}
                />
            ))}
        </Box>
    );
};

export default Body;
