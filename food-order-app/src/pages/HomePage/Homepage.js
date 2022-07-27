import React, { useState, useEffect } from "react";
import axios from "axios";
const Homepage = () => {
  const [meals, setMeals] = useState([]);
  
  const getMeals = async () => {
    const data = await axios.get(
      "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
    );
    console.log(data);
    setMeals(data.data);
    return data.data;
  };

  useEffect(() => {
    getMeals();
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
