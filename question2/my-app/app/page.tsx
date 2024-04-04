"use client";
import React ,{useEffect , useState} from "react";
import axios from "axios";

export default function Home() {
  
  interface MyData {
    productName : String,
    price : String,
    rating : String,
    discount : String,
    availability : String
  }

  const [data, setData] = useState<MyData[]>([])

  useEffect(() => {
    async function fetch(){
      const response = await axios.get("EXPRESS_URL");
      const filteredData: MyData[] = response.data.map((item: any) => ({
        ProductName: item.ProductName,
        price: item.price,
        rating: item.rating,
        discount:item.discount,
        availability : item.availability
      }));
      setData(filteredData);
    }
    fetch();
  }, []);


  return (
    <main>
      <h1 className="flex justify-center pt-20 mb-8">Main page</h1>
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
            <button className="border border-blue-700">View More......</button>
          </div>
          );
        })}
      </div>
    </main>
  );
}
