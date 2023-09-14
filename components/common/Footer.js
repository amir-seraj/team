import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="داس لند" caption="" className="logobg" />
              <br />
              <span>سوالی دارید؟ باما در ارتباط باشید.</span>
              <br />
              <br />
              <h3>+9890000000</h3>
              <br />
            </div>
            <ul>
              <h3>داس لند</h3>
              <li>
                <Link href="/">درباره ما</Link>
              </li>
              <li>
                <Link href="/">وبلاگ</Link>
              </li>
              <li>
                <Link href="/">ارتباط با ما</Link>
              </li>
            </ul>

            <ul>
              <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 DaasLand. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>DaasLand</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
