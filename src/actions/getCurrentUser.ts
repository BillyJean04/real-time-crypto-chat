import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";

export const getCurrentUser = async () => {
    const user = await currentUser();

    try {
        if (!user) {
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where: {
                address: user.web3Wallets[0].web3Wallet,
            },
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (e) {
        console.log(e);
    }
};
