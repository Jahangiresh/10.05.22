import React from "react";

import "./product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ productslist, inputvalue, category, setcount }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]));
  }

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

  return (
    <>
      {productslist &&
        productslist
          .filter((e) => e.name.includes(inputvalue))
          .map((prod) => {
            return (
              <div className="product col-lg-4 col-md-6 col-12">
                <button
                  // onClick={() => addToLocal(prod)}
                  onClick={addToLocal}
                  key={prod.id}
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
                  <img src={prod.image} alt="" />
                </div>
                <div className="product__title">
                  <h3>{prod.name} </h3>
                  <span>{prod.price}</span>
                  <span className="d-none">{prod.id}</span>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Product;
