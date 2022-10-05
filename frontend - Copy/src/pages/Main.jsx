import React from "react";
import "./main.scss";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import { useState } from "react";
import axios from "axios";
import Features from "../components/Features";
import Imagesbox from "../components/Imagesbox";
import Latestposts from "../components/Latestposts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Main = ({ setcount }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  const apiEndPoint = "http://localhost:3000/products";

  useEffect(() => {
    const getProduct = async () => {
      const resp = await axios.get(apiEndPoint);
      setProducts(resp.data);
    };
    getProduct();
  }, []);

  const cover = useRef();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        cover.current.classList.add("cover__scrolled");
      } else {
        cover.current.classList.remove("cover__scrolled");
      }
    });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //local start
  const addToLocal = (e) => {
    let products = JSON.parse(localStorage.getItem("products"));
    let _id =
      e.target.nextSibling.nextSibling.nextSibling.children[2].innerText;
    let existedProd = products.find((x) => x.id === _id);
    let localProductObj = {
      name: e.target.nextSibling.nextSibling.nextSibling.children[0].innerText,
      image: e.target.nextSibling.nextSibling.children[0].src,
      price: e.target.nextSibling.nextSibling.nextSibling.children[1].innerText,
      id: _id,
      count: 1,
    };
    if (existedProd === undefined) {
      products.push(localProductObj);
    } else {
      e.count++;
    }
    setcount(products.length);

    localStorage.setItem("products", JSON.stringify(products));
  };
  //local end
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="main">
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className="main__container__cover">
                <img
                  ref={cover}
                  className=" cover-img d-none d-lg-block"
                  src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d93222b67afa87ce9d0d449_shibumihero.jpg"
                  alt=""
                />
                <h1>We take care of your skin</h1>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>

        <div className="main__container container">
          <div className="main__container__singleprod01 d-none d-lg-block">
            <div data-aos="fade-right" className="singleprod__title ">
              <h3>we take care of ur skin</h3>
            </div>
            <img
              src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d89d6a2b4e4f708cafb757e_sunny-ng-KVIlNRoGwxk-unsplash.jpg"
              alt="singleprod01.jpeg"
            />
          </div>

          <div data-aos="fade-up" className="main__container__singleprod">
            <div className="singleprod__title">
              <ul className="main__container__skins__ul d-none d-lg-block ">
                <li data-aos="fade-right">
                  <span>Normal Skin</span>
                  <p>Maintain balance and achieve glowing skin </p>
                </li>

                <li data-aos="fade-right">
                  <span>Dry Skin</span>
                  <p>A magic touch to keep your skin smooth and supple</p>
                </li>
                <li data-aos="fade-right">
                  <span>Extra-Dry Skin</span>
                  <p>Extra-dry treatment for your skin.</p>
                </li>
              </ul>
            </div>
            <img
              src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d89d6a2b4e4f7d4a3fb7583_product4.jpg"
              alt="prod img"
            />
          </div>
          <div className="main__container__skins">
            <ul className="main__container__skins__ul d-lg-none ">
              <li data-aos="fade-right">
                <span>Normal Skin</span>
                <p>Maintain balance and achieve glowing skin </p>
              </li>

              <li data-aos="fade-right">
                <span>Dry Skin</span>
                <p>A magic touch to keep your skin smooth and supple</p>
              </li>
              <li data-aos="fade-right">
                <span>Extra-Dry Skin</span>
                <p>Extra-dry treatment for your skin.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="videosection ">
          <div className="main__container__video">
            <video
              autoPlay
              muted
              src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d8b27ade7740e1bf564bb8a_Composizione 1_1-transcode.mp4"
            ></video>
          </div>
          <div className="main__container__video__under ">
            <div className="main__container__video__title text-center ">
              <p>A daily skincare routine for every skin type.</p>
            </div>
          </div>
        </div>
        <div className="container container02">
          <div className="container02__page__title text-center">
            <h2 data-aos="fade-right">A wellness treatment for your skin</h2>
            <span data-aos="fade-right">Shibumi</span>
          </div>

          <div className="container02__products row pt-5">
            <Slider {...settings}>
              {products &&
                products.map((p) => {
                  if (p.isTrending === true) {
                    return (
                      <div className="product col-lg-4 col-md-6 col-12">
                        <button
                          onClick={addToLocal}
                          key={p.id}
                          className="add__cart"
                        >
                          add to card
                        </button>
                        <button
                          onClick={() => {
                            navigate("/singleproduct");
                          }}
                          className="view__product"
                        >
                          view product
                        </button>
                        <div className="product__image">
                          <img src={p.image} alt="" />
                        </div>
                        <div className="product__title">
                          <h3>{p.name} </h3>
                          <span>{p.price}</span>
                          <span className="d-none">{p.id}</span>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </Slider>
          </div>
          <div className="container02__features row ">
            <Features />
          </div>
          <div className="container02__imagebox d-none d-lg-block">
            <Imagesbox />
          </div>
        </div>

        <div className="main__latest">
          <Latestposts />
        </div>
      </div>
    </>
  );
};

export default Main;
