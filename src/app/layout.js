import AuthProvider from "../../providers/AuthProvider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
