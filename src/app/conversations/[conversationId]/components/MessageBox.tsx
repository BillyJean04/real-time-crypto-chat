"use client";
import { FC } from "react";
import { FullMessageType } from "@/types";
import { User } from "@prisma/client";
import Box from "@mui/material/Box";
import Avatar from "@/components/ui/Avatar";
import { separateAddress } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";

interface MessageBox {
    data: FullMessageType;
    currentUser: User;
    // isLast?: boolean;
}

const MessageBox: FC<MessageBox> = ({
    data,
    currentUser,
    // , isLast
}) => {
    const isOwn = currentUser?.address === data?.sender?.address;

    // const seenList = (data.seen || [])
    //     .filter((user) => user.address !== data.sender.address)
    //     .map((user) => user.address)
    //     .join(", ");

    return (
        <Box
            display="flex"
            sx={[
                isOwn && {
                    justifyContent: "flex-end",
                },
            ]}
        >
            <Box
                display="flex"
                alignItems="center"
                gap="5px"
                sx={[
                    isOwn && {
                        flexDirection: "row-reverse",
                    },
                ]}
            >
                <Box height="100%" display="flex" alignItems="start">
                    <Avatar user={data.sender} />
                </Box>

                <Box display="flex" flexDirection="column" gap="3px">
                    {data.image ? (
                        <Box
                            width="288px"
                            height="288px"
                            position="relative"
                            borderRadius="5px"
                            overflow="hidden"
                            sx={[
                                isOwn
                                    ? {
                                          borderRadius: "15px 15px 0 15px",
                                      }
                                    : {
                                          borderRadius: "15px 15px 15px 0",
                                      },
                            ]}
                        >
                            <Image fill src={data.image} alt="Image" />
                        </Box>
                    ) : (
                        <Box
                            sx={[
                                {
                                    padding: "10px 20px",
                                },
                                isOwn
                                    ? {
                                          backgroundColor: "secondary.main",
                                          borderRadius: "15px 15px 0 15px",
                                      }
                                    : {
                                          backgroundColor: "#333043",
                                          borderRadius: "15px 15px 15px 0",
                                      },
                            ]}
                        >
                            {data.body}
                        </Box>
                    )}
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-end"
                        gap="5px"
                        color="gray"
                        fontWeight="300"
                        fontSize="0.85rem"
                    >
                        <Box>
                            {data.sender?.name
                                ? data.sender.name
                                : separateAddress(data.sender.address)}
                        </Box>
                        <Box>{format(new Date(data.createdAt), "p")}</Box>
                        {/*{isLast && isOwn && seenList.length > 0 && (*/}
                        {/*    <Box>{`Seen by ${seenList}`}</Box>*/}
                        {/*)}*/}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MessageBox;
