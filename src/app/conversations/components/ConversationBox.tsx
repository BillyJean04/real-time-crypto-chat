"use client";
import { FC, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { separateAddress } from "@/lib/utils";
import { User } from "@prisma/client";

interface ConversationBoxProps {
    user: User;
    selected: boolean;
}

const ConversationBox: FC<ConversationBoxProps> = ({ user, selected }) => {
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${user.id}`);
    }, [router, user]);
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
                {user?.image || <AccountCircle fontSize="large" />}
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography fontWeight="bold" fontSize="0.9rem">
                            {separateAddress(user.address)}
                        </Typography>
                        <Typography
                            fontSize="0.75rem"
                            sx={[
                                { color: "grey.500" },
                                selected && {
                                    color: "text.primary",
                                },
                            ]}
                        >
                            Hey! How are you?
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
                            1 min
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ConversationBox;
