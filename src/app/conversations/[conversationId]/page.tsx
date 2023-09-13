import Box from "@mui/material/Box";
import Header from "@/app/conversations/[conversationId]/components/Header";
import { currentUser } from "@clerk/nextjs";

const ChatId = async () => {
    const user = await currentUser();
    return (
        <Box display="flex" width="100%">
            {user && <Header address={user.web3Wallets[0].web3Wallet} />}
        </Box>
    );
};

export default ChatId;
