import React, { useState } from 'react';
import Appbar from "../appBar/Appbar";
import "./../../styles/mainpage.css";
import { CiSearch } from "react-icons/ci";
import { PiBookOpenText } from "react-icons/pi";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TableChartIcon from "@mui/icons-material/TableChart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Payment from "./payment";
import Catalog from "./Catalog";
import ItemDetails from './ItemDetials';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6"; 
import cart from '../../assets/cart.png';
export default function Mainpage() {
  const [Catalogs, setCatalog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [cartItems, setCartItems] = useState([]); 
  const [isPayment, setIsPayment] = useState(false);
  const openCatalog = () => {
    setCatalog(!Catalogs);
    setSelectedItem(null); 
  };
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevCartItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  };

  const handleProceedToPayment = () => {
    setCatalog(false);
    setIsPayment(true);
  };

  const handleIncrement = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleDelete = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <Appbar />
        </div>
        <div className="content">
          <div className="side1">
            <div className="row1">
              <div className="search-container">
                <span className="icon-search">
                  <CiSearch />
                </span>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                />
              </div>
              <div className={`icon-button ${Catalogs ? 'clicked' : ''}`} onClick={openCatalog}>
                <PiBookOpenText className="bookmark" />
              </div>
              
            </div>
            <div className="row2">
              <div className="row2-1">
                <h2>Cart summary</h2>
                <p>
                  Order ID: <strong>000001</strong>
                </p>
              </div>
              <div className="row2-2">
                <button className="icon-button">
                  <i><PersonOutlineIcon /></i>
                </button>
                <button className="icon-button">
                  <i><TableChartIcon /></i>
                </button>
                <button className="icon-button">
                  <i><MoreVertIcon /></i>
                </button>
              </div>
            </div>
            <div className="cart-summary">
              {cartItems.length === 0 ? (
                
                <div className='empty-cart'>
                    <img src={cart} style={{width:'100px'}}></img>
                    <h5> {` Cart is empty`}</h5>
                    <p> Scan barcode or add items from catalog</p>

                  </div>
              ) : (
                <div className="cart-table-wrapper">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th className='t1'>Item</th>
                      <th className='t3'>Qty</th>
                      <th className='t2'>Amount (SAR)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className='t1'>{item.name}</td>
                        <td className='t4'>
                          <div className="quantity-controls">
                            <button onClick={() => handleDecrement(index)}><FaMinus/></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrement(index)}><FaPlus/></button>
                          </div>
                        </td>
                        <td className='t21'>{(item.quantity * item.price).toFixed(2)}</td>
                        <td>
                          <button onClick={() => handleDelete(index)} className="delete-button">
                            <RiDeleteBin6Line />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              )}
            </div>
          </div>

          <div className="side2">
           
            {!selectedItem ? (
              Catalogs ? (
                <Catalog setSelectedItem={setSelectedItem} onProceedToPayment={handleProceedToPayment}/>
              ) : (
                <Payment cartItems={cartItems} />
              )
            ) : (
              <ItemDetails item={selectedItem} 
              onAddToCart={handleAddToCart}
              onReturnToCatalog={() => setSelectedItem(null)} 
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}