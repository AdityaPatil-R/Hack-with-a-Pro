'use client'
import React, { useState } from "react";

function RandomDiningHallsPage() {
  // List of UCLA dining halls
  const diningHalls = [
    { name: "Rieber", orders: 3, foods: ["Pizza", "Burger", "Salad", "Pasta"] },
    { name: "Bruin Plate", orders: 5, foods: ["Sandwich", "Soup", "Salmon", "Vegan Bowl"] },
    { name: "De Neve", orders: 2, foods: ["Sushi", "Bibimbap", "Tacos", "Chicken Tenders"] },
  ];

  // List of UCLA residence halls for delivery destinations
  const deliveryDestinations = [
    "Centennial Hall",
    "De Neve Plaza",
    "De Neve - Gardenia",
    "De Neve - Holly",
    "Dykstra Hall",
    "Hedrick Hall",
    "Hedrick Summit",
    "Hitch Suites",
    "Olympic Hall",
    "Rieber Hall",
    "Rieber Terrace",
    "Rieber Vista",
    "Saxon Suites",
    "Sproul Hall",
    "Sproul Cove",
    "Sproul Landing",
    "Sunset Village"
  ];

  // Function to generate a random number of people
  const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  // State to store selected dining hall and orders
  const [selectedDiningHall, setSelectedDiningHall] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Function to handle button click
  const handleButtonClick = (hallName, numOrders) => {
    if (selectedDiningHall === hallName) {
      setSelectedDiningHall(null);
      setSelectedOrders([]);
    } else {
      setSelectedDiningHall(hallName);
      setSelectedOrders(new Array(numOrders).fill("").map(() => ({
        food: diningHalls.find((hall) => hall.name === hallName).foods[Math.floor(Math.random() * 4)],
        destination: deliveryDestinations[Math.floor(Math.random() * deliveryDestinations.length)],
      })));
    }
  };

  // Function to handle order button click
  const handleOrderClick = (food, destination) => {
    alert(`Order: ${food} to ${destination}`);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Random UCLA Dining Halls</title>
        <style>
          {`
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #1a202c;
              margin: 0;
              padding: 0;
            }

            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 20px;
            }

            .title {
              font-size: 50px;
              font-weight: bold;
              color: #ffffff;
              margin-bottom: 20px;
            }

            .btn {
              width: 200px;
              height: 100px;
              margin: 10px;
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #2d3748;
              color: #ffffff;
              position: relative;
            }

            .order-btn {
              width: 100%;
              margin-top: 10px;
              padding: 8px;
              font-size: 14px;
              text-align: left;
              background-color: #4299e1;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }

            .bg-shape1,
            .bg-shape2 {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }

            .bg-shape1 {
              left: -150px;
              height: 300px;
              width: 480px;
              background: radial-gradient(circle, #ffffff, transparent);
              border-radius: 50%;
              z-index: -1;
              filter: blur(10px);
            }

            .bg-shape2 {
              right: -100px;
              height: 180px;
              width: 240px;
              background: conic-gradient(from 180deg at 50% 50%, #87ceeb, #0141ff);
              filter: blur(10px);
              z-index: -1;
            }

            .order-details {
              margin-top: 20px;
              text-align: center;
              color: #ffffff;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1 className="title">Orders for delivery</h1>
          {diningHalls.map((hall, index) => (
            <button
              key={index}
              className={`btn ${selectedDiningHall === hall.name ? "selected" : ""}`}
              onClick={() => handleButtonClick(hall.name, hall.orders)}
            >
              {hall.name} ({hall.orders})
            </button>
          ))}
          <div className="order-details">
            {selectedDiningHall && (
              <>
                <p>Orders from {selectedDiningHall}:</p>
                {selectedOrders.map((order, index) => (
                  <button
                    key={index}
                    className="order-btn"
                    onClick={() => handleOrderClick(order.food, order.destination)}
                  >
                    {`Order: ${order.food} to ${order.destination}`}
                  </button>
                ))}
              </>
            )}
          </div>
          <div className="bg-shape1"></div>
          <div className="bg-shape2"></div>
        </div>
      </body>
    </html>
  );
}

export default RandomDiningHallsPage;
