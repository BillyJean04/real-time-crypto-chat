import { getCurrentUser } from "@/actions/getCurrentUser";
import { prisma } from "@/lib/prisma";

const getConversationById = async (conversationId: string) => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.address) {
            return null;
        }

        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId,
            },
            include: {
                users: true,
            },
        });

        return conversation;
    } catch (error: any) {
        console.log(error, "SERVER_ERROR");
        return null;
    }
};

export default getConversationById;
