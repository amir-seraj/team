import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ارتباط با ما" /> <br />
            <br />
            <Title title="از همین الان شروع کن" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+98900000000</h3>
                  <span>پاسخگویی:۱۲-۱۹</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>اصفهان</h3>
                  <span>همین نزدیکی ها</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>DaasLand@info.com</h3>
                  <span>پاسخگویی همیشگی!</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="ارتباط با ما" />
              <p className="desc-p">هرگونه سوالی دارید با ما درمیان بزارید؟</p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>نام</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>ایمیل</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>بودجه شما</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>بازه زمانی</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>راجع به پروژه بنویس</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">ثبت</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
