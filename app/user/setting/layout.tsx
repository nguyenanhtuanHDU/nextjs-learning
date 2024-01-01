import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'User - Setting', // set title của head
}

export default function UserSettingLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}