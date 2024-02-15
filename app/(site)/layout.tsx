import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Footer } from "./components/Footer/Footer.";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyTop",
  description: "Наш лучший ТОП",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={notoSans.className}>
        <Header />
        <div>
          <Sidebar />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
