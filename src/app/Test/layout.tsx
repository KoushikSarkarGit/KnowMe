import NavbarDemo from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="dark" >
    <NavbarDemo/>
    <div>inner layout</div>
        {children}
    </div>
    
    </>
  );
}
