export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[radial-gradient(circle_at_18%_8%,rgba(179,137,75,0.14),transparent_28rem),linear-gradient(180deg,#fbf4ea,#f4eadb_42%,#fffaf2)]">
      {children}
    </main>
  );
}
