import { GeistSans } from "geist/font/sans";
import "./globals.sass";

//Components
import Header from "./assets/components/header";

export const metadata = {
  title: "LocaWeb",
  description: "Alugue carros com a melhor locadora do Brasil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
