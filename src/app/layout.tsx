import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloProvider } from "@/providers/apollo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recustom",
  description: "Recustom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
