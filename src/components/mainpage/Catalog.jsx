import React, { useState, useRef, useEffect } from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RxCross1 } from "react-icons/rx";
import '../../styles/catalog.css';
import pizza from '../../assets/pizza.avif'
import french from '../../assets/french.jpeg'
import grape from '../../assets/grape.jpeg'
import water from '../../assets/watermelon.jpeg'
import sandwich from '../../assets/sandwich.jpg'
import mango from '../../assets/mango.jpeg'
import burger from '../../assets/burger.jpeg'
import mexican from '../../assets/mexican.webp'
import panpiz from '../../assets/Pan-Pizza.jpg'
import { TfiInfoAlt } from "react-icons/tfi";
import { AiFillPrinter } from "react-icons/ai";
const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Favourite', icon: '⭐' }, 
  { id: 3, name: 'Burger' },
  { id: 4, name: 'Sandwich' },
  { id: 5, name: 'Juice' },
  { id: 6, name: 'Pizza' },
  { id: 7, name: 'Dessert' },
  { id: 8, name: 'Drink' },
  { id: 9, name: 'Snack' },
  { id: 10, name: 'Breakfast' },
  { id: 11, name: 'Lunch' },
];

const items = [
  { id: 1, name: "Chicken BBQ Pizza", category: "Pizza", image: pizza, varient: 2, description: "Chicken BBQ pizza with Mexican flavored toppings", p1: 800, p2: 500, p3: 300 },
  { id: 2, name: "French Fries Combo", category: "Snack", image: french, varient: 0, description: "Crispy French fries with a tasty dip combo", p1: 600, p2: 400, p3: 200 },
  { id: 3, name: "Pan Pizza", category: "Pizza", image: panpiz, varient: 1, description: "Delicious deep-dish pan pizza with a cheesy crust", p1: 850, p2: 550, p3: 350 },
  { id: 4, name: "Mushroom Sandwich", category: "Sandwich", image: sandwich, varient: 0, description: "Grilled mushroom sandwich with fresh veggies", p1: 700, p2: 450, p3: 300 },
  { id: 5, name: "Watermelon Juice", category: "Juice", image: water, varient: 2, description: "Refreshing watermelon juice with a hint of lime", p1: 500, p2: 350, p3: 250 },
  { id: 6, name: "Plain Nachos", category: "Dessert", image: mexican, varient: 1, description: "Crunchy plain nachos with a choice of dips", p1: 600, p2: 400, p3: 250 },
  { id: 7, name: "Veggie Burger", category: "Burger", image: burger, varient: 3, description: "Veggie burger with lettuce, tomato, and a special sauce", p1: 750, p2: 500, p3: 300 },
  { id: 8, name: "Grape Juice", category: "Drink", image: grape, varient: 2, description: "Freshly squeezed grape juice with no added sugar", p1: 550, p2: 400, p3: 200 },
  { id: 9, name: "Mango Juice", category: "Dessert", image: mango, varient: 2, description: "Sweet and pulpy mango juice, perfect for summer", p1: 650, p2: 450, p3: 300 },
  { id: 10, name: "Veggie Burger", category: "Burger", image: burger, varient: 2, description: "Healthy veggie burger with organic ingredients", p1: 700, p2: 500, p3: 350 },
  { id: 11, name: "Cold Drink", category: "Drink", image: water, varient: 2, description: "Chilled soft drink to refresh and rejuvenate", p1: 550, p2: 350, p3: 200 }
];

function Catalog({ setSelectedItem ,onProceedToPayment}) {
  const [category, setCategory] = useState('All');
  const scrollContainer = useRef(null); 
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleCategory = (name) => {
    setCategory(name);
  };

  useEffect(() => {
    if (scrollContainer.current) {
      setScrollWidth(scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth);
    }
  }, []);

  const handleScroll = (e) => {
    const scrollPos = e.target.scrollLeft;
    setScrollLeft(scrollPos);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item); 
  };

  return (
    <div className='catalog-main'>
      <div className='catalog-top'>
        <h3>Catalog</h3>
        <div className='close'>
          <MoreVertIcon />
          <RxCross1 />
        </div>
      </div>
      <div 
        className='catalog-display' 
        ref={scrollContainer} 
        onScroll={handleScroll}
      >
        {categories.map((item) => (
          <button 
            key={item.id} 
            className={`category-button ${category === item.name ? 'active' : ''}`} 
            onClick={() => handleCategory(item.name)}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.name}
          </button>
        ))}
      </div>
      
      <div className='custom-scrollbar-container'>
        <div className='custom-scrollbar-track'>
          <div 
            className='custom-scrollbar-thumb'
            style={{ 
              left: `${(scrollLeft / scrollWidth) * 60}px` 
            }}
          ></div>
        </div>
      </div>

      <div className='catalog-container'>
        {items
          .filter(item => category === 'All' || item.category === category)
          .map((item) => (
            <div 
              key={item.id} 
              className="catalog-item" 
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt={item.name} />
              <TfiInfoAlt className="info" />
              
              <div className='img-cont'>
              <h4>{item.name}</h4>
              {item.varient > 0 && ( 
          <p>{`${item.varient} Variants`}</p>
        )}</div>
            </div>
        ))}
      </div>
    
      <div className='bot-pays'>
            <button className='pay-print'><AiFillPrinter/>Print bill</button>
            <button className='pay-btn' onClick={onProceedToPayment}>Proceed to payment</button>
    </div>
    </div>
  );
}

export default Catalog;
