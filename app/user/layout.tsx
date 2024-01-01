export default function UserLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h3>User Page</h3>
            {children}
            {/* children là các phần tử bên trong */}
        </section>
    )
}