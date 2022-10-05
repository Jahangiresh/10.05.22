import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Menuslider from "../Menuslider";
import "./header.scss";
import { useState, useRef } from "react";
import Cartmodal from "../Cartmodal";
import { Link } from "react-router-dom";

const Header = ({ count, setCount }) => {
  const headerscroll = useRef();
  // let products = JSON.parse(localStorage.getItem("products"));

  const [Slider, setSlider] = useState(false);
  const [Modal, setModal] = useState(false);
  // const [productLength, setProductLength] = useState(
  //   products && products.length
  // );

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        headerscroll.current.classList.add("scrolled");
      } else {
        headerscroll.current.classList.remove("scrolled");
      }
    });
  }, [headerscroll]);
  const cartModalHandler = (e) => {
    setModal((value) => !value);
  };
  const menuSliderHandler = (e) => {
    setSlider((value) => !value);
    Slider
      ? e.target.classList.remove("plusIconActive")
      : e.target.classList.add("plusIconActive");
  };
  return (
    <>
      <Menuslider sliderproops={Slider} />
      <div ref={headerscroll} className="header">
        <div className="header__container container">
          <div className="header__container__row row">
            <div className="header__container__row__logo col-6">
              <div className="header__container__row__logo__image">
                <Link className="logo__link" to="/">
                  {" "}
                  <img
                    src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d89d6a2b4e4f7878dfb7590_logowhite-8.png"
                    alt="logo jpg"
                  />
                  {/* <h1>interpazarlama</h1> */}
                </Link>
              </div>
            </div>
            <div className="header__container__row__right col-6">
              <ul>
                <li className="plus">
                  <AiOutlinePlus
                    className="plusIcon"
                    onClick={menuSliderHandler}
                  />
                </li>
                <li className="cart">
                  <Cartmodal
                    modalproops={Modal}
                    count={count}
                    setcount={setCount}
                  />

                  <span className="cart__count">{count}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
