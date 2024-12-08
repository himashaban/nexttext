import Header from "./components/navbar/page";
import "./globals.css";
import Sidebar from "./components/sidebar/page";
import Footer from "./components/footer/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
