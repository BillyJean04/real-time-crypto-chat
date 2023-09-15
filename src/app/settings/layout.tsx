import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <Sidebar>
            <div>{children}</div>
        </Sidebar>
    );
}
