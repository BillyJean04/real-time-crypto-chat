"use client";

import { FC, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import { User } from "@prisma/client";
import { separateAddress } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import Avatar from "@/components/Avatar";

interface UserBoxProps {
    user: User;
}

const UserBox: FC<UserBoxProps> = ({ user }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = useCallback(() => {
        setIsLoading(true);

        fetch("/api/conversations", {
            method: "POST",
            body: JSON.stringify({
                userId: user.id,
            }),
        })
            .then((data) => data.json())
            .then((conversation) => {
                router.push(`/conversations/${conversation.id}`);
            })
            .finally(() => setIsLoading(false));
    }, [router, user.id]);

    return (
        <>
            {isLoading && <Loading />}
            <Box
                onClick={handleClick}
                display="flex"
                alignItems="center"
                gap="10px"
                padding="10px 10px"
                borderLeft="3px solid transparent"
                sx={{
                    "&:hover": {
                        cursor: "pointer",
                        borderLeft: "3px solid #ffff",
                        backgroundColor: "secondary.main",
                    },
                }}
            >
                <Avatar user={user} />
                {user?.name || separateAddress(user.address)}
            </Box>
        </>
    );
};

export default UserBox;
