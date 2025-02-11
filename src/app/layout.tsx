import "./globals.css";
import { Montserrat, Roboto } from 'next/font/google';
import Sidebar from "./components/navigation/Sidebar";


const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${montserrat.className} ${roboto.className} bg-gray-200`}>
    <div className="grid grid-cols-[300px_1fr] min-h-screen">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  </body>
</html>
  );
}