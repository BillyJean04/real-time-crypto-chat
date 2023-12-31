import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversations = () => {
    const params = useParams();

    const conversationId = useMemo(() => {
        if (!params?.conversationId) {
            return "";
        }
        return params.conversationId as string;
    }, [params?.conversationId]);

    return useMemo(
        () => ({
            conversationId,
        }),
        [conversationId]
    );
};

export default useConversations;
