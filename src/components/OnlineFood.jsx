import React from "react";
import { useState, useEffect } from "react";
import data from "../assets/topRestaurent.json"
import Cards from './Cards'

const OnlineFood = () => {
    
  const [foody, setFoody] = useState([])

    const food = async () =>{
      const response = await fetch('../assets/topRestaurent.json')
      const data = await response.json()
      setFoody(data)
    }

    useEffect(() => {
      food();
    }, [])

  return (
    <div>
      <div className="max-w-[1130px] mx-auto">
        <div className="text-2xl font-bold m-5">
          Restaurants with online food delivery in Nagpur
        </div>

        <div className="grid grid-cols-4">
        {
          data.map((d, i) =>{
            return(
              <div>
                <Cards {...d} key={i}/>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};

export default OnlineFood;
