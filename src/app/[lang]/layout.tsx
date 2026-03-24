export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return children;
}
