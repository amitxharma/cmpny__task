import React from "react";
import "./Placeorder.css";
import { HiOutlineHome } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const Placeorder = () => {
  return (
    <div className="Placeorder__parent">
      <div className="home__sales__product">
        <p>
          {" "}
          <HiOutlineHome /> Home /
        </p>
        <div
          style={{
            border: "1px solid lightgray",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <p>
            Sales Order <IoIosArrowDown />
          </p>
        </div>
        <p>
          / <span style={{ fontWeight: "800" }}>Product Catelogue</span>
        </p>
      </div>
      <div className="place__order__btn">
        <button className="order__btn">Place Order</button>
      </div>
    </div>
  );
};

export default Placeorder;
