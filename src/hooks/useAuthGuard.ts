import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMetaMask } from "@/hooks/useMetaMask";

export function useAuthGuard() {
    const router = useRouter();
    const { wallet } = useMetaMask();
    useEffect(() => {
        if (wallet.accounts.length < 1) {
            router.push("/");
        } else {
            router.push("/conversations");
        }
    }, [router, wallet.accounts.length]);
}
