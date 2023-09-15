import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          {" "}
          <button onClick={() => setOpen(!open)} className="navBtn">
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
          <div className="logo">
            <Link href="/">
              <TitleLogo title="داس لند" caption="" className="logomin" />
            </Link>
          </div>{" "}
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              {" "}
              خانه{" "}
            </Link>
            {/* <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Agency
            </Link> */}
            {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </Link> */}
            {/* <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link> */}
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              {" "}
              محصولات{" "}
            </Link>
            <Link
              href="/blogs"
              className={activeLink == "/blogs" ? "activeLink" : "none"}
            >
              {" "}
              وبلاگ{" "}
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              {" "}
              ارتباط با ما{" "}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
