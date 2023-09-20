import Box from "@mui/material/Box";
import Header from "@/app/conversations/[conversationId]/components/Header";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getConversationById from "@/actions/getConversationsById";
import { FullConversationType } from "@/types";
import getMessages from "@/actions/getMessages";
import Form from "@/app/conversations/[conversationId]/components/Form";
import Body from "@/app/conversations/[conversationId]/components/Body";

interface IParams {
    conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
    const conversation = (await getConversationById(
        params.conversationId
    )) as FullConversationType;
    const messages = await getMessages(params.conversationId);

    const user = await getCurrentUser();
    if (!user) {
        return null;
    }
    return (
        <Box display="flex" height="100dvh" flexDirection="column" width="100%">
            {user && <Header currentUser={user} conversation={conversation} />}
            <Box
                flexDirection="column"
                display="flex"
                padding="25px 25px"
                overflow="hidden"
            >
                <Body initialMessages={messages} user={user} />
                <Form />
            </Box>
        </Box>
    );
};

export default ChatId;
