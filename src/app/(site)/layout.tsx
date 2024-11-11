import Header from "@/widgets/layout/header";
import Footer from "@/widgets/layout/footer";

export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <Header/>
          <main>{children}</main>
          <Footer/>
      </>
    );
  }
