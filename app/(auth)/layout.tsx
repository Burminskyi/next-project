import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";



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
        <div>Авторизация</div>
        {children}
      </body>
    </html>
  );
}
