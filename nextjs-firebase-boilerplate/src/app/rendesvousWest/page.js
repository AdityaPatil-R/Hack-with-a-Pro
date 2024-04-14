'use client'

import { useState } from 'react';
// import addData from '@/firebase/firestore/addData';
// import { addSeller } from '../../firebase/firestore/addData.js';

//  import { addSeller } from "../../firebase/firestore/addData.js";

export default function RendevousWest() {
  const [building, setBuilding] = useState('');
  const [style, setStyle] = useState('');
  const [chips, setChips] = useState('');

  const username = "ABCDEF";

  document.body.style.backgroundImage = "/images/rendesvous.jpg"

  // State to track each group of checkboxes
  const [beansAndRice, setBeansAndRice] = useState([]);
  const [toppings1, setToppings1] = useState([]);
  const [toppings2, setToppings2] = useState([]);

  const [message, setMessage] = useState('');

  const updateCheckboxSelection = (value, selectedItems, setSelectedItems, maxSelection) => {
    const currentIndex = selectedItems.indexOf(value);
    const newChecked = [...selectedItems];

    if (currentIndex === -1 && selectedItems.length < maxSelection) {
      newChecked.push(value);
    } else if (currentIndex !== -1) {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedItems(newChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!building || !style) {
      setMessage('Please complete the required fields.');
      return;
    }
    setMessage('');

    const orderDetails = {
      building,
      style,
      chips,
      beansAndRice,
      toppings1,
      toppings2
    };

    console.log(orderDetails);
    // Here you would usually send the orderDetails to your server
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', 
   fontFamily: 'Arial, sans-serif',
      width: '100%', 
      height: '100vh', 
      backgroundImage: 'url(/images/rendesvous.jpg)', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px', }}>
      
      <form onSubmit={handleSubmit}>
        {/* Building Select */}
        <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'rgba(112, 128, 144, 0.7)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center', // Center text
      }}>
        <h1>Rendevous West Options</h1>
          <label htmlFor="Building">Building:</label>
          <select value={building} onChange={(e) => setBuilding(e.target.value)}>
          <option value="">--Please choose an option--</option>
  <option value="Centenial">Centenial</option>
  <option value="De Neve - Acacia">De Neve - Acacia</option>
  <option value="De Neve - Birch">De Neve - Birch</option>
  <option value="De Neve - Cedar">De Neve - Cedar</option>
  <option value="De Neve - Dogwood">De Neve - Dogwood</option>
  <option value="De Neve - Evergreen">De Neve - Evergreen</option>
  <option value="De Neve - Fir">De Neve - Fir</option>
  <option value="De Neve - Gardenia">De Neve - Gardenia</option>
  <option value="De Neve - Holly">De Neve - Holly</option>
  <option value="Dykstra">Dykstra</option>
  <option value="Hendrick Hall">Hendrick Hall</option>
  <option value="Hedrick Summit">Hedrick Summit</option>
  <option value="Hitch Suites">Hitch Suites</option>
  <option value="Olympic">Olympic</option>
  <option value="Rieber Hall">Rieber Hall</option>
  <option value="Rieber Terrace">Rieber Terrace</option>
  <option value="Rieber Vista">Rieber Vista</option>
  <option value="Saxon Suites">Saxon Suites</option>
  <option value="Sproul Hall">Sproul Hall</option>
  <option value="Sproul Cove">Sproul Cove</option>
  <option value="Sproul Landing">Sproul Landing</option>
  <option value="Canyon Point">Canyon Point</option>
  <option value="Delta Terrace">Delta Terrace</option>
  <option value="Courtside">Courtside</option>
          </select>
        </div>

        {/* Style Select */}
        <div>
          <label htmlFor="Style">Style:</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="Burrito">Burrito</option>
            <option value="Bowl">Bowl</option>
            <option value="Tacos">Tacos</option>
          </select>
        </div>

        {/* Chips Select */}
        <div>
          <label htmlFor="Chips">Chips:</label>
          <select value={chips} onChange={(e) => setChips(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Beans and Rice Checkboxes */}
        <div>
          <h2>Select 2 (MAX):</h2>
          {/* Iterate over beans and rice options */}
        </div>

        {/* Toppings1 Checkboxes */}
        <div>
          <h2>Select 4 (MAX):</h2>
          {/* Iterate over toppings1 options */}
        </div>

        {/* Toppings2 Checkboxes */}
        <div>
          <h2>Select 2 (MAX):</h2>
          {/* Iterate over toppings2 options */}
        </div>

        {/* //name, loc, restaurant_name, food_item */}

    
        <button >Purchase</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}
