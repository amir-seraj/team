import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div dir="rtl">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
