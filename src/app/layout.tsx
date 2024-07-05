import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/header'

export const metadata: Metadata = {
  title: "Aluguel de Carros",
  description: "site para alugar carros e visualizar favoritos",
};    

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}
