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
async function addToLocal(data : MyData){
  window.localStorage.setItem("pn",data.productName);
  window.localStorage.setItem("r",data.rating);
  window.localStorage.setItem("pr",data.price);
  window.localStorage.setItem("d",data.discount);
  window.localStorage.setItem("av",data.availability);
}


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
            <button className="border border-blue-700" onClick={()=>{addToLocal(item)}}>View More......</button>
          </div>
          );
        })}
      </div>
    </main>
  );
}
