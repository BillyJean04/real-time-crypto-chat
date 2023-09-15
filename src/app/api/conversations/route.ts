import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request: Request) {
    try {
        const user = await getCurrentUser();
        const body = await request.json();
        const { userId } = body;
        if (!user?.id) {
            return new NextResponse("Unauthorized", { status: 400 });
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [user.id, userId],
                        },
                    },
                    {
                        userIds: {
                            equals: [userId, user.id],
                        },
                    },
                ],
            },
        });

        const singleConversation = existingConversations[0];

        if (singleConversation) {
            return NextResponse.json(singleConversation);
        }

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: user.id,
                        },
                        {
                            id: userId,
                        },
                    ],
                },
            },
            include: {
                users: true,
            },
        });
        return NextResponse.json(newConversation);
    } catch (e) {
        console.log(e);
    }
}
