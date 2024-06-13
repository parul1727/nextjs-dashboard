import "@/app/ui/global.css";
import { inter, roboto_mono } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
