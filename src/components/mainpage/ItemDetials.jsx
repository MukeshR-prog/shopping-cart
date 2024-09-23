import React, { useState } from "react";
import "../../styles/globe.css";
import { TfiInfoAlt } from "react-icons/tfi";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6"; 
const CatalogItemDetails = ({ item, onAddToCart,onReturnToCatalog }) => {
  const [selectedVariant, setSelectedVariant] = useState("p1");
  const [quantity, setQuantity] = useState(1);
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === "increase") {
        return prevQuantity + 1;
      } else if (type === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };
  const handleAddToOrder = () => {
    const totalPrice = item[selectedVariant] * quantity;
    onAddToCart({
      name: item.name,
      variant: selectedVariant,
      quantity,
      price: totalPrice,
    });
    onReturnToCatalog(); 
  };
  const totalPrice = item[selectedVariant] * quantity;

  return (
    <div className="item-details">
      <div className="items-top1">
        <div className="item-cont-row1">
          <h4>Variants & Add-ons</h4>
          <IoChevronForwardCircleOutline className="back-icon" />
        </div>

        <div className="item-cont-row2">
          <div className="number-badge">{item.varient}</div>
          <TfiInfoAlt className="info1" />
          <img src={item.image} alt={item.name} />
          <h4>{item.description}</h4>
        </div>

        <div className="item-cont-row3">
          <button className="varient-btn">{`Variants (${item.varient})`}</button>
          <button className="Add-on-btn">Add-ons</button>
        </div>

        <div className="item-options"  style={{height:'55%'}}>
          <h4>Quantity</h4>
          <div className="quantity-row">
            <div className="quan-row-radio">
              <input
                type="radio"
                className="custom-radio"
                checked={selectedVariant === "p1"}
                onChange={() => handleVariantChange("p1")}
              />
              <div>{item.name} (Large)</div>
            </div>
            <div
              style={{
                color: selectedVariant === "p1" ? "blue" : "black",
              }}
            >
              SAR {item.p1}.00{" "}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#d7d8da",
              borderRadius: "10px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          ></div>
          <div className="quantity-row"> 
            <div className="quan-row-radio">
              <input
                type="radio"
                className="custom-radio"
                checked={selectedVariant === "p2"}
                onChange={() => handleVariantChange("p2")}
              />
              <div>{item.name} (Medium)</div>
            </div>
            <div
              style={{
                color: selectedVariant === "p2" ? "blue" : "black",
              }}
            >
              SAR {item.p2}.00{" "}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#d7d8da",
              borderRadius: "10px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          ></div>
          <div className="quantity-row">
            <div className="quan-row-radio">
              <input
                className="custom-radio"
                type="radio"
                checked={selectedVariant === "p3"}
                onChange={() => handleVariantChange("p3")}
              />
              <div>{item.name} (Small)</div>
            </div>
            <div
              style={{
                color: selectedVariant === "p3" ? "blue" : "black",
              }}
            >
              {" "}
              SAR {item.p3}.00{" "}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#d7d8da",
              borderRadius: "10px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          ></div>
        </div>
      </div>


      <div className="item-bot1">
      
        <div style={{ borderTop:'1px solid gray'}}>
        <div className="item-quantity">
          
          <h4>Item Total</h4>
          <p>{totalPrice.toFixed(2)} SAR</p>
      
      </div>
      <div className="item-bot2" >
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange("decrease")}>
            <FaMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("increase")}>
            <FaPlus />
            </button>
          </div>

          <div>
          <button className="add-to-order-btn" onClick={handleAddToOrder}>Add to order</button>
          </div>
      </div>
        </div>
        
      </div>
    </div>
  );
};

export default CatalogItemDetails;
