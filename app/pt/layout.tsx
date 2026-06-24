export default function PortugueseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="pt-BR">{children}</div>;
}
