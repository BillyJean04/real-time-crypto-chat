import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export default async function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await currentUser();
    if (user) redirect("/conversations");

    return <>{children}</>;
}
