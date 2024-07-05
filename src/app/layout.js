import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.sass";

//Components
import Header from "./assets/components/header";
import Footer from "./assets/components/footer";

export const metadata = {
  title: "LocaWeb",
  description: "Alugue carros com a melhor locadora do Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${GeistSans.className} ${GeistMono.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
