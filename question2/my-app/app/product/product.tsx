"use client";
import React ,{useEffect , useState} from "react";
import axios from "axios";

export default function Home() {
  
  interface MyData {
    productName : string,
    price : string,
    rating : string,
    discount : string,
    availability : string
  }

  const [data, setData] = useState<MyData[]>([])
    return(
        <div className = "flex justify-center pt-20 mb-8">
            <h1>Product Page</h1>
      <div className="text-center">
        <h3 className="mb-4">Users</h3>
        {data.map((item, index) => {
          return (
            <div key={index} className="mb-4">
            <p>productName: {item.productName}</p>
            <p>price: {item.price}</p>
            <p>rating: {item.rating}</p>
            <p>discount: {item.discount}</p>
            <p>availability: {item.availability}</p>
          </div>
          );
        })}
      </div>
        </div>
    );
}