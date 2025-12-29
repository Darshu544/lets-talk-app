import ClientMainLayout from "./ClientMainLayout"

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <ClientMainLayout>{children}</ClientMainLayout>
}
