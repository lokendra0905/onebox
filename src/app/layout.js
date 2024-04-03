import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReachInbox",
  description: "Cold Email Outreach, Simplified!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
