import "./globals.css";
import Header from "@/app/componentes/header"
import Footer from "@/app/componentes/footer"

export const metadata = {
  title: "Portfólio Thayghethy",
  description: "Página de portfólio de programador",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
