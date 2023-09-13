import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";

const getUsers = async () => {
    const user = await currentUser();
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                NOT: {
                    address: user?.web3Wallets[0].web3Wallet,
                },
            },
        });
        return users;
    } catch (e) {
        console.log(e);
    }
};
export default getUsers;
