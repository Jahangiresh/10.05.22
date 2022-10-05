import React from "react";
import "./singleproduct.scss";
const SingleProduct = () => {
  return (
    <div className="singleproduct">
      <div className="singleproduct__container container">
        <div className="singleproduct__container__row row">
          <div className="singleproduct__container__row__left col-12 col-lg-6 ">
            <img
              src="https://assets.website-files.com/5d89d502cbc3146c074657da/5d89d510cbe90f18704652e7_5d88989b08e53e28f8fd70df_tube-cream6-p-500.png"
              alt="prod.jpg"
            />
          </div>
          <div className="singleproduct__container__row__right col-12 col-lg-6">
            <span>$40 USD</span>
            <h1>Priming moisturizer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.{" "}
            </p>
            <div className="singleproduct__container__row__right__inputs">
              <div className="singleproduct__container__row__right__inputs__cart">
                <input type="number" name="" id="" />{" "}
                <button>Add to cart</button>
              </div>
              <select name="" id="select">
                <option value="skin types">my skin</option>
                <option value="skin types">skin </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
