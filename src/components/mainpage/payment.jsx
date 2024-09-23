import React from 'react'
import "./../../styles/mainpage.css";
import { TfiWrite } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { BiSolidDiscount } from "react-icons/bi";
import { AiFillPrinter } from "react-icons/ai";
import { RiDiscountPercentFill } from "react-icons/ri";
function Payment( { cartItems }) {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const taxRate = 0.1;
  const mmm = subtotal * 0.99;
  const totalTax = subtotal * taxRate;
  const grandTotal = subtotal + totalTax;
  return (
    <div className='pay-main ' >
        <div className='pay-top' >
        <div className='pay-head'>
            <h3>Payment Summary</h3>
            <div className='pay-head1'><AiFillPrinter/>
            <span>Mukesh</span></div>
        </div>
        <div className='amount'>
            <span>Sub total</span>
            <p>SAR {subtotal.toFixed(2)}</p>
        </div>
        <div className='amount'>
        <span>Taxable amount</span>
        <p>SAR {mmm.toFixed(2)}</p>
        </div>
        <div className='amount'>
        <span>Total tax</span>
        <p>SAR {totalTax.toFixed(2)}</p>
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#d7d8da",
            borderRadius: "10px",
            marginBottom:"10px",
            marginTop:"10px",
          }}
        ></div>
        <div className='amount'>
        <span>Grand Total</span>
        <h2>SAR {grandTotal.toFixed(2)}</h2>
        </div>
        </div>
        <div className='pay-bot' >
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#d7d8da",
            borderRadius: "8px",
            marginBottom:"8px",
            
            
          }}
        ></div>
        <div className='bot-add'>
            <TfiWrite/>
            <p> Add notes</p>
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#d7d8da",
            borderRadius: "10px",
            marginBottom:"8px",
            marginTop:"8px",
          }}
        ></div>
      
        <div className='bot-buttons'>
            <div className='offer'><CgProfile/>customer</div>
            <div className='offer'><BiSolidDiscount/>coupon</div>
            <div className='offer'><RiDiscountPercentFill/>discount</div>
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#d7d8da",
            borderRadius: "10px",
            marginBottom:"8px",
            marginTop:"8px",
          }}
        ></div>
        <div className='bot-pay'>
            <button className='pay-print'><AiFillPrinter/>Print bill</button>
            <button className='pay-btn'>Proceed to payment</button>
    </div>
    </div>
    </div>
  )
}

export default Payment