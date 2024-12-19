import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata = {
  title: "AI Grill Restaurant",
  description: "AI Grill Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-dvh grid-rows-[auto_1fr_auto] gap-6">
          <header className="header-clip h-16 bg-gradient-to-tr from-orange-700 to-orange-600">
            <Header />
          </header>
          <section className="container mx-auto">{children}</section>
          <footer className="footer-clip relative min-h-60 bg-gradient-to-tr from-orange-700 to-orange-600">
            <Footer />
            <div className="fire -z-10"></div>
          </footer>
        </main>
      </body>
    </html>
  );
}
