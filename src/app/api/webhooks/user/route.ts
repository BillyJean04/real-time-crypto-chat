import type { IncomingHttpHeaders } from "http";
import type { WebhookRequiredHeaders } from "svix";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/clerk-sdk-node";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

export async function POST(request: Request) {
    const payload = await request.json();
    const headers = request.headers;
    const heads = {
        "svix-id": headers.get("svix-id"),
        "svix-timestamp": headers.get("svix-timestamp"),
        "svix-signature": headers.get("svix-signature"),
    };
    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as WebhookEvent;
    } catch (err) {
        return NextResponse.json({}, { status: 400 });
    }

    const eventType = evt.type;
    if (eventType === "user.created" || eventType === "user.updated") {
        const address = evt.data.web3_wallets[0].web3_wallet;
        const id = evt.data.id;
        const user = await prisma.user.upsert({
            where: { address: address as string },
            create: {
                clerkId: id as string,
                address: address as string,
            },
            update: { address },
        });
        return NextResponse.json(user, { status: 200 });
    }
    if (eventType === "user.deleted") {
        const { id } = evt.data;
        const deletedUser = await prisma.user.delete({
            where: {
                clerkId: id as string,
            },
        });
        return NextResponse.json(deletedUser, { status: 200 });
    }
    return new NextResponse("OK", { status: 200 });
}
