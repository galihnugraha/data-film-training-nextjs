import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@assets/styles/globals.css";
import Container from "@components/organisms/Container";

const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Home | Berijalan B9',
    template: '%s | Berijalan B9'
  },
  description: "Next JS wep application Batch 9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
