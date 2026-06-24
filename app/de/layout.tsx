export default function GermanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="de">{children}</div>;
}
